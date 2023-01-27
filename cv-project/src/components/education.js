import React, { Component } from "react";
import '../index.css'

class Education extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div >
                <form className="educationInfo">
                    <div>
                            <label htmlFor='schoolName'>School Name:</label>
                        <input type='text' title="schoolName"></input> 
                    </div>
                    <div>
                            <label htmlFor='areaOfStudy'>Area Of Study:</label>
                        <input type='text' title="areaOfStudy"></input> 
                    </div>
                    <div>
                            <label htmlFor='date'>Date of Completion:</label>
                        <input type='date' title="date"></input> 
                    </div>
                    <button type="submit">Enter</button>
                </form>
            </div>
        );
    }
}

export default Education;