import React, { Component } from "react";
import renderHTML from "react-render-html";
import "./SuggestionBox.css";

class SuggestionBox extends Component {
	render() {
		if (this.props.suggestions.length === 0) return null;
		const sel = window.getSelection();
		if (sel.rangeCount === 0) return null;
		const coords = sel.getRangeAt(0).getBoundingClientRect();
		const viewPortElement = document.documentElement;
		const scrollLeft = viewPortElement.scrollLeft;
		const scrollTop = viewPortElement.scrollTop;
		return (
			<div
				className="suggestionBox"
				style={{
					position: "absolute",
					top: coords.top + 27 + scrollTop,
					left: coords.left + scrollLeft,
				}}
			>
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
