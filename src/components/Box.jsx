import React, { Component } from "react";
import "./Box.css";
import { IconButton } from "react-bootstrap";

class Box extends Component {
	constructor(props) {
		super(props);

		//this.showCloseButton = false;
		this.onChange = this.onChange.bind(this);
		// this.onMouseEnter = this.onMouseEnter.bind(this);
		// this.onMouseLeave = this.onMouseLeave.bind(this);
	}

	onChange(event) {
		this.props.handleChange(this.props.box, event.target.value);
	}

	// onMouseEnter(event) {
	//     console.log("in");
	//     this.setState({ showCloseButton : true });
	// }

	// onMouseLeave(event) {
	//     console.log("out");
	//     this.setState({ showCloseButton : false });
	// }

	render() {
		return (
			<div className="box">
				<div
					className="boxHeading"
					//onMouseEnter={this.onMouseEnter}
					//onMouseLeave={this.onMouseLeave}
				>
					<input
						type="text"
						className="textArea"
						value={this.props.box.heading}
						onChange={this.onChange}
					></input>
                    
				</div>
			</div>
		);
	}
}

export default Box;
