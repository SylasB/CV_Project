import React, { Component } from "react";
import '../index.css'

class Experience extends React.Component {
    render() {
        const {
            expInfo,
            expInfo: { cName, pTitle, mTasks, sDate, eDate }
        } = this.props;

    return (
        <div>
           <h3 id='expHeader'>Experience</h3> 
           <p className='expTitleNameDates'>
                <span className='expPTitle'>
                    {pTitle}  
                </span> 
                <span className='expCName'>
                    {cName}
                </span>
                    || 
                <span className='expDates'>
                    {sDate} Until {eDate} 
                </span>
            </p>
            <div className='expDescription'>
                {mTasks} <br/>
            </div>
        </div>
    )
    }
}

export default Experience;