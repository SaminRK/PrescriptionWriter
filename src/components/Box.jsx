import React, { Component } from 'react';
import "./Box.css";

class Box extends Component {
    render() {
        return (
            <div className="box"> 
                <input type="text" className="boxHeading" value={this.props.heading}></input>
            </div>
        );
    }
}

export default Box;