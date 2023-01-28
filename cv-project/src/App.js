import React, { Component } from 'react';
import './App.css';
import General from './components/general';
import Education from './components/education';
import Experience from './components/experience';

class App extends Component {
  constructor() {
    super();

    this.state = {
      genInfo: {
        fname: ['First Name'],
        lname: ['Last Name'],
        email: ['Email'],
        phone: ['Phone Number'],
        description: ['Description'],
      }, 

    }
  }

  onChange = (e) => {
    let genInfo = { ...this.state.genInfo };
    genInfo[e.target.id] = e.target.value;
    this.setState({ genInfo });
  };

  render() {
    const {
      genInfo,
    } = this.state;

    return (
      <div className="App">
          <header> <h1>CV-Project</h1> </header>
            <div className='generalInfoContainer'>
              <h2>General Information</h2>
              <div>
                <form className="genInfo">
                    <div>
                        <label htmlFor="fname" >First Name:</label>
                    <input type='text' title='fname' id='fname' onChange={this.onChange}></input>
                    </div>
                    <div>
                            <label htmlFor="lname">Last Name:</label>
                        <input type='text' title='lname' id='lname' onChange={this.onChange}></input>
                    </div>
                    <div>
                            <label htmlFor="email">Email:</label>
                        <input type='email' title='email'id='email' onChange={this.onChange}></input>
                    </div>
                    <div>
                            <label htmlFor="phoneNum">Phone Number:</label>
                        <input type='tel' title='phoneNum'id='phone' onChange={this.onChange}></input>
                    </div>
                    <div>
                          <label htmlFor='description'>Description</label>
                        <input type='text' title='description' placeholder='Description' id='description' onChange={this.onChange}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
              </div>
            </div>
            <div className='educationContainer'>
              <h2>Education</h2>
              <div>
                {/* <Education/> */}
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
            </div>
            <div className='experienceContainer'>
              <h2>Experience</h2>
              <div>
                {/* <Experience/> */}
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
            </div>
            <h2><u>Your Information</u></h2>
            <div className='yourResponse'> 
                <div className='genInfoResponse'>
                  <h3><u>Your General Information</u></h3>
                  {this.state.genInfo.fname}<br/>
                  {this.state.genInfo.lname}<br/>
                  {this.state.genInfo.email}<br/>
                  {this.state.genInfo.phone}<br/>
                  {this.state.genInfo.description}
                  {/* <General/> */}
                </div>
                <div className='edInfoResponse'>
                  <h3><u>Your Education</u></h3>
                  {/* <Education/> */}
                </div>
                <div className='expInfoResponse'>
                  <h3><u>Your Experience</u></h3>
                  {/* <Experience/> */}
                </div>
            </div>
      </div>
    );
  }
}

export default App;
