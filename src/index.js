import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils, getDefaultKeyBinding, Modifier} from 'draft-js';
import 'draft-js/dist/Draft.css';
import * as serviceWorker from './helper/serviceWorker';
import SuggestionBox from './components/SuggestionBox';
import SuggestionListProvider from './helper/SuggestionListProvider';

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
    if (command === 'myeditor-write-suggest' && 
      this.state.suggestions.length > this.state.suggestionSelected) {
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

    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
			this.onChange(newState);
			return 'handled';
    }

    return 'not-handled';
  }

  myKeyBindingFn(e) {
    if (e.keyCode === 9 /* TAB key */ && e.shiftKey) {
      return 'myeditor-write-suggest';
    }
    return getDefaultKeyBinding(e);
  }
  

  setLastWordAndSuggestions() {
    console.log("called");
    const currentState = this.state.editorState.getCurrentContent();
    console.log(currentState);
    const lastBlock = currentState.getLastBlock();
    console.log(lastBlock);
    const lastBlockTextArray = lastBlock
                                  .getText()
                                  .split(/(\s+)/);
    console.log(lastBlockTextArray);
    let lastWord = '';
    if (lastBlockTextArray.length > 0) {
      lastWord = lastBlockTextArray[lastBlockTextArray.length - 1];
    }
    if (lastWord !== this.state.lastWord) {
      this.setState({ lastWord, suggestions: SuggestionListProvider.provideSuggestion(lastWord)});
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
        />
      </div>      
    );
  }
}

ReactDOM.render(<MyEditor />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
