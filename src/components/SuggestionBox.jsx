import React, { Component } from 'react';
import SuggestionListProvider from '../helper/SuggestionListProvider';

class SuggestionBox extends Component {
    render() {
        return ( 
            <div>
                <hr></hr>
                {this.props.word}
                <hr></hr>
                <ul>
                    {this.props.suggestions.map(word => <li key={word}>{word}</li>)}
                </ul>
                <hr></hr>
            </div>
         );
    }
}
 
export default SuggestionBox;