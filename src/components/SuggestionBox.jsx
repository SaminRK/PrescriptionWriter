import React, { Component } from "react";
import renderHTML from "react-render-html";
import "./SuggestionBox.css";

class SuggestionBox extends Component {
	render() {
		if (this.props.suggestions.length === 0) return null;
		return (
			<div className="suggestionBox">
				{this.props.word}
				<ul>
					{this.props.suggestions.map((word, index) => (
						<li
							key={word}
							className={
								index === this.props.selected
									? "highlight"
									: null
							}
						>
							{renderHTML(word)}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default SuggestionBox;
