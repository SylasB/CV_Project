import React, { Component } from "react";
import '../index.css'

class Experience extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <form className="experienceInfo">
                    <div>
                            <label htmlFor="cName">Company Name:</label>
                        <input type='text' title="cName"></input> 
                    </div>
                    <div>
                            <label htmlFor="pTitle">Position Title:</label>
                        <input type='text' title="pTitle"></input> 
                    </div>
                    <div>
                            <label htmlFor="mTasks">Main Responsibilities:</label>
                        <input type='text' title="mTasks" id="mTasksInput"></input> 
                    </div>
                    <div>
                            <label htmlFor="sDate">Start Date:</label>
                        <input type='date' title="sDate"></input> 
                    </div>
                    <div>
                            <label htmlFor="eDate">End Date:</label>
                        <input type='date' title="eDate"></input> 
                    </div>
                    <button type="submit">Enter</button>
                </form>
            </div>
        );
    }
}

export default Experience;