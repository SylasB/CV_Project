import React, { Component } from "react";
import '../index.css'
import '../App.css'


class General extends React.Component {
     render() {
         const {
            genInfo,
            genInfo : { fname, lname, title, phone, email, location, description }
         } = this.props;
        return (
            <div>
                <div className='genInfoContainer'>
                      <div className='nameTitle'>
                        <p className='genNameResponse'> 
                          {fname} {lname}
                        </p>
                        <p className='genTitleResponse'>
                          {title}
                        </p>
                      </div>
                      <div className='genContactInfo'>
                        <p>
                          {phone} 
                        </p>
                        <p> 
                          {email}
                        </p>
                        <p>
                          {location}
                        </p>
                      </div>
                    </div>
                    <div className='genDescription'>
                      <p>
                        {description}
                      </p>
                    </div>
            </div>
        );
    }
};

export default General;