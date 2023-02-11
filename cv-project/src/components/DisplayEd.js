import React from "react";
import App from "../App";

class DisplayEd extends React.Component {
    render () {
        const p = this.props;
        return (
            <div>
                { p.edInfo.map((edInfo) => {
                    return <div key={p.edInfo.id}>
                        <p className='edInfoResponse'>
                            <span className='edAreaOfStudyResponse'>
                                {edInfo.areaOfStudy}  
                            </span>
                            <span className='edSNameResponse'>
                                {edInfo.schoolName} 
                            </span>
                            || 
                            <span className='edDateResponse'>
                                {edInfo.date}
                            
                            </span>
                        </p>
                    </div>    
                }) }
            </div>
        )
    }
}

export default DisplayEd;