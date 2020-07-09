import React, { Component } from "react";
import "draft-js/dist/Draft.css";
import Column from "./Column";
import InformationHeader from "./InformationHeader";
import "./Prescription.css";

class Prescription extends Component {
	constructor(props) {
		super(props);

		this.serialOfBoxes = 0;
		this.state = {
			boxes: [
				[
					{ id: ++this.serialOfBoxes, heading: "Cheif Complaints" },
					{ id: ++this.serialOfBoxes, heading: "Examination Findings" },
					{ id: ++this.serialOfBoxes, heading: "Investigation" },
					{ id: ++this.serialOfBoxes, heading: "Provisional Diagnosis" },
					{ id: ++this.serialOfBoxes, heading: "Advice" },
				],
				[{ id: ++this.serialOfBoxes, heading: "Rx" }],
			],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.addBox = this.addBox.bind(this);
	}

	handleChange(column, box, string) {
		const boxes = [...this.state.boxes];
		const ci = boxes.indexOf(column);
		const ri = boxes[ci].indexOf(box);
		boxes[ci][ri].heading = string;
		this.setState({ boxes });
	}

	handleDelete(column, box) {
		let boxes = [...this.state.boxes];
		const ci = boxes.indexOf(column);
		column = column.filter((b) => b.id !== box.id); // could just pass the box id
		boxes[ci] = column;
		this.setState({ boxes });
	}

	addBox(column) {
        let boxes = [...this.state.boxes];
        const ci = boxes.indexOf(column);
        boxes[ci].push({ id: ++this.serialOfBoxes, heading: ''});
        this.setState({ boxes });
    }

	render() {
		return (
			<div className="page">
				<InformationHeader />
				<div className="columnContainer">
					<div className="column">
						<Column
							boxes={this.state.boxes[0]}
							handleChange={this.handleChange}
                            handleDelete={this.handleDelete}
                            addBox={this.addBox}
						/>
					</div>
					<div className="column">
						<Column
							boxes={this.state.boxes[1]}
							handleChange={this.handleChange}
                            handleDelete={this.handleDelete}
                            addBox={this.addBox}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Prescription;
