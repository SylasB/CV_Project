import React from "react";
import App from "../App";

class DisplayExp extends React.Component {
    render () {
        const p = this.props;
        return (
            <div>
                <h3 id='expHeader'>Experience</h3> 
                { p.expInfo.map((expInfo) => {
                    return <div key={p.expInfo.id}>
                       <p className='expTitleNameDates'>
                            <span className='expPTitle'>
                                {expInfo.pTitle}  
                            </span> 
                            <span className='expCName'>
                                {expInfo.cName}
                            </span>
                                || 
                            <span className='expDates'>
                                {expInfo.sDate} Until {expInfo.eDate} 
                            </span>
                        </p>
                        <div className='expDescription'>
                            {expInfo.mTasks} <br/>
                        </div>
                    </div>    
                }) }
            </div>
        )
    }
}

export default DisplayExp;