import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./helper/serviceWorker";
import Prescription from "./components/Prescription";
import "./index.css";

class App extends Component {

	render() {
		return (
			<Prescription />
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
