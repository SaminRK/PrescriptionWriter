import React, { Component } from 'react';
import Box from './Box';

class Column extends Component {
    constructor(props) {
        super(props);
        this.serialOfChildBoxes = 0;
        this.state = {
            boxes: [
                { id: ++this.serialOfChildBoxes, heading: '1st box'},
                { id: ++this.serialOfChildBoxes, heading: '2nd box'}
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (box, string) => {
        const boxes = [...this.state.boxes];
        const index = boxes.indexOf(box);
        boxes[index].heading = string;
        this.setState(boxes);
    }

    render() {
        return (
            <div> 
                { 
                    this.state.boxes.map((box, index) => (
                        <Box key={box.id} box={box} handleChange={this.handleChange}/>
                    ))
                }
            </div>
        );
    }
}

export default Column;