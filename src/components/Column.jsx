import React, { Component } from 'react';
import Box from './Box';

class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            box_headings : ['1st box', '2nd box'],
        };
    }

    render() {
        return (
            <div> 
                { 
                    this.state.box_headings.map((heading) => (
                        <Box key={heading} heading={heading}/>
                    ))
                }
            </div>
        );
    }
}

export default Column;