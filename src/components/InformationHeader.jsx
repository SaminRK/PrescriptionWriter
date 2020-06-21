import React, { Component } from 'react';
import './InformationHeader.css';

class InformationHeader extends Component {
    render() { 
        return (
            <div className='headerContainer'>
                <span className='inputContainer'>
                    Name: &nbsp; &nbsp;
                    <input type='text' className='inputArea'></input>
                </span>
                <br/>
                
                Age: &nbsp; &nbsp;
                <input type='text' className='inputArea'></input>
                &nbsp; &nbsp; &nbsp; &nbsp;
                Sex: &nbsp; &nbsp;
                <input type='text' className='inputArea'></input> <br/>
                Address: &nbsp; &nbsp;
                <input type='text' className='inputArea'></input>

            </div>
        );
    }
}
 
export default InformationHeader;