import React, { Component, createElement } from "react";
import '../index.css'

class Education extends React.Component {
    render() {
        const {
            edInfo,
            edInfo: { schoolName, areaOfStudy, date, id },
            edInfoFilled,
        } = this.props;

    return (
        <div>
            {/* <h3 id='edHeader'>Education</h3> */}
            <p className='edInfoResponse'>
                <span className='edAreaOfStudyResponse'>
                    {areaOfStudy}  
                 </span>
                <span className='edSNameResponse'>
                    {schoolName} 
                </span>
                    || 
                <span className='edDateResponse'>
                    {date}
                </span>
            </p>
            <span className="edInfoResponse" id="newEdInfo">
            
            </span>
        </div>
    )
    }
}

export default Education;