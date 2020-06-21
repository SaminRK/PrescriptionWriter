import React, { Component } from 'react';
import './SuggestionBox.css';

class SuggestionBox extends Component {
    render() {
        return ( 
            <div className='suggestionBox'>
                <hr></hr>
                {this.props.word}
                <hr></hr>
                <ul>
                    {this.props.suggestions.map((word, index) => 
                        <li key={word} className={index === this.props.selected ? 'highlight' : null} >{word}</li>)}
                </ul>
                <hr></hr>
            </div>
         );
    }
}

export default SuggestionBox;