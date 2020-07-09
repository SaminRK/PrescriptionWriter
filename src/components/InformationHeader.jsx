import React, { Component } from "react";
import "./InformationHeader.css";

class InformationHeader extends Component {
	render() {
		return (
			<div className="headerContainer">
				Name: &nbsp; &nbsp;
				<input type="text" className="lineInput"></input>
				<br />
				Age: &nbsp; &nbsp;
				<input type="text" className="lineInput"></input>
				&nbsp; &nbsp; &nbsp; &nbsp; Sex: &nbsp; &nbsp;
				<select name="sex" id="sex" className="selector">
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="non-binary">Non-Binary</option>
				</select>
				<br />
				Address: &nbsp; &nbsp;
				<textarea className="textBox"></textarea>
			</div>
		);
	}
}

export default InformationHeader;
