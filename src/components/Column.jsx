import React, { Component } from "react";
import Box from "./Box";
import plus from "../assets/plus.png";
import "./Column.css";

class Column extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.addBox = this.addBox.bind(this);
	}

	handleChange(box, string) {
		this.props.handleChange(this.props.boxes, box, string);
	}

	handleDelete(box) {
		this.props.handleDelete(this.props.boxes, box);
    }
    
    addBox() {
        this.props.addBox(this.props.boxes);
    }

	render() {
		return (
			<div>
				{this.props.boxes.map((box, index) => (
					<Box
						key={box.id}
						box={box}
						handleChange={this.handleChange}
						handleDelete={this.handleDelete}
					/>
				))}
				<div className="addBoxButtonContainer">
					<button className="addBoxButton" onClick={this.addBox}>
						<img src={plus} className="addBoxButtonImage"></img>
					</button>
				</div>
			</div>
		);
	}
}

export default Column;
