import React, { Component } from "react";
import "./Box.css";
import close from "../assets/close.png";
import MyEditor from "./MyEditor";

class Box extends Component {
	constructor(props) {
		super(props);

		//this.showCloseButton = false;
		this.onChange = this.onChange.bind(this);
		this.delete = this.delete.bind(this);
		// this.onMouseEnter = this.onMouseEnter.bind(this);
		// this.onMouseLeave = this.onMouseLeave.bind(this);
	}

	onChange(event) {
		this.props.handleChange(this.props.box, event.target.value);
	}

	delete(event) {
		this.props.handleDelete(this.props.box);
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
						placeholder="Heading"
					></input>
					<button className="closeButton" onClick={this.delete}>
						<img
							src={close}
							className="closeButtonImage"
							alt="close"
						></img>
					</button>
				</div>
				<MyEditor />
			</div>
		);
	}
}

export default Box;
