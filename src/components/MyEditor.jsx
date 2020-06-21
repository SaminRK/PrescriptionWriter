import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils, getDefaultKeyBinding, Modifier} from 'draft-js';
import 'draft-js/dist/Draft.css';
import SuggestionBox from './SuggestionBox';
import SuggestionListProvider from '../helper/SuggestionListProvider';

class MyEditor extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
      editorState: EditorState.createEmpty(),
      lastWord: 'suggestions',
      suggestions: [],
      suggestionSelected: 0
    };
  	this.onChange = this.onChange.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.myKeyBindingFn = this.myKeyBindingFn.bind(this);
    this.setLastWord = this.setLastWordAndSuggestions.bind(this);
  }

  onChange(editorState) {
    this.setState({ editorState }, this.setLastWordAndSuggestions); // setState is async
  }

  handleKeyCommand(command, editorState) {
    console.log(command);
    if (command === 'suggest-write') {
      const currentState = this.state.editorState.getCurrentContent();
      const selection = this.state.editorState.getSelection();
      const ao = selection.getFocusOffset() - this.state.lastWord.length;
      const removeSelection = selection.merge({
        anchorOffset : ao
      });
			const ncs = Modifier.replaceText(currentState, removeSelection, this.state.suggestions[this.state.suggestionSelected]);
			const es = EditorState.push(this.state.editorState, ncs, 'insert-fragment');
			this.onChange(es);
			return 'handled';
    }
    if (command === 'suggest-up') {
      let newSelect = this.state.suggestionSelected;
      newSelect = (newSelect - 1 + this.state.suggestions.length) % this.state.suggestions.length;
      this.setState({ suggestionSelected : newSelect});
      return 'handled';
    }
    if (command === 'suggest-down') {
      let newSelect = this.state.suggestionSelected;
      newSelect = (newSelect + 1) % this.state.suggestions.length;
      this.setState({ suggestionSelected : newSelect});
      return 'handled';
    }

    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
			this.onChange(newState);
			return 'handled';
    }

    return 'not-handled';
  }

  myKeyBindingFn(e) {
    console.log(e.keyCode);
    if (e.keyCode === 9 /* TAB key */ && this.state.suggestions.length > this.state.suggestionSelected) {
      return 'suggest-write';
    }
    if (e.keyCode === 38 && this.state.suggestions.length > 1) {
      return 'suggest-up';
    }
    if (e.keyCode === 40 && this.state.suggestions.length > 1) {
      return 'suggest-down';
    }
    return getDefaultKeyBinding(e);
  }
  

  setLastWordAndSuggestions() {
    let lastWord = '';

    const selection = this.state.editorState.getSelection();
    if (selection.getAnchorKey() === selection.getFocusKey() &&
        selection.getAnchorOffset() === selection.getFocusOffset()) {
      
      const content = this.state.editorState.getCurrentContent();
      const block = content.getBlockForKey(selection.getAnchorKey());
      const textArray = block.getText().slice(0, selection.getAnchorOffset()).split(/(\s+)/);
      
      if (textArray.length > 0) {
        lastWord = textArray[textArray.length - 1];
      }
    }
    
    if (lastWord !== this.state.lastWord) {
      this.setState({ 
        lastWord,
        suggestions: SuggestionListProvider.provideSuggestion(lastWord),
        suggestionSelected : 0
      });
    }
  }

  render() {
    return (
      <div>
        <Editor 
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          keyBindingFn={this.myKeyBindingFn}
          placeholder="Type here"
        />
        <SuggestionBox 
          word = {this.state.lastWord}
          suggestions = {this.state.suggestions}
          selected = {this.state.suggestionSelected}
        />
      </div>      
    );
  }
}

export default MyEditor;