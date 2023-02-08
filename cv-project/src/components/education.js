import React, { Component, createElement } from "react";
import '../index.css'

class Education extends React.Component {
    render() {
        const {
            edInfo,
            edInfo: { schoolName, areaOfStudy, date, id },
            edInfoFilled,
        } = this.props;

   

   function addEdInfo() {
        const newEdInfo = document.getElementById('newEdInfo')
        const newDiv = document.createElement('div')
        newDiv.innerText = edInfoFilled.slice(-3)
        newEdInfo.appendChild(newDiv);
   };

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
                
                {/* {
                    edInfoFilled.slice(-3)
                } */}
            </span>
        </div>
    )
    }
}

export default Education;