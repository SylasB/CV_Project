import React, { Component } from 'react';
import './App.css';
// import { uuid } from 'uuidv4';
import uniqid from 'uniqid';
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
        title: ['Title'],
        phone: ['Phone Number'], 
        email: ['Email'],
        location: ['Location'],
        description: ['Description'],
      }, 
      education : [ ], 
      experience : [ ],

      edInfo: {
        schoolName : 'School Name',
        areaOfStudy : 'Area Of Study',
        date : 'Date of Completion',
        id : uniqid(),
      },
      edInfoFilled : [ ],

      expInfo : {
        cName : ['Company Name'],
        pTitle : ['Position Title'],
        mTasks : ['Job Description'],
        sDate : ['Start Date'],
        eDate : ['End Date'],
      },
      expInfoFilled : ['Test'],
    }
  }



  onChange = (e) => {
    let genInfo = { ...this.state.genInfo };
    genInfo[e.target.id] = e.target.value;
    this.setState({ genInfo });
  };

  onChangeEd = (e) => {
    let edInfo = { ...this.state.edInfo };
    edInfo[e.target.id] = e.target.value;
    this.setState({ edInfo });
  };

  //This section of code is an on going battle and has defeted me a few times. 
  //If you are able to fix it please tell me how as you are a better man than I
  onSubmitEd = (e) => {
    e.preventDefault();
    const newEdInfo = [this.state.edInfo.schoolName, this.state.edInfo.areaOfStudy, this.state.edInfo.date ]
    this.setState(prevState => ({
        edInfoFilled: [...prevState.edInfoFilled, ...newEdInfo],
        // edInfo: {
        //   schoolName : 'School Name',
        //   areaOfStudy : 'Area Of Study',
        //   date : 'Date of Completion',
        //   id : uniqid(),
        // }
    })) 
    console.log(this.state.edInfoFilled);
  }

  handleEditemAdd = () => {
    const id = uniqid();
    this.setState((prevState) => ({
      ...prevState,
        education: [
          ...prevState.education, 
            {
              id,
              schoolName : '',
              areaOfStudy : '',
              date : '',
            }
        ]
    }))
  }

  onChangeExp = (e) => {
    let expInfo = { ...this.state.expInfo };
    expInfo[e.target.id] = e.target.value;
    this.setState({ expInfo });
  };

  render() {
    const {
      genInfo,
      edInfo,
      edInfoFilled,
      expInfo,
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
                            <label htmlFor='title'>Title: </label>
                        <input type='text' title='title' id='title' onChange={this.onChange}></input>
                    </div>
                    <div>
                            <label htmlFor="email">Email:</label>
                        <input type='email' title='email'id='email' onChange={this.onChange}></input>
                    </div>
                    <div> 
                            <label htmlFor='location'>Loaction: </label>
                        <input type='text' title='location' id='location' onChange={this.onChange}></input>
                    </div>
                    <div>
                            <label htmlFor="phoneNum">Phone Number:</label>
                        <input type='tel' title='phoneNum'id='phone' onChange={this.onChange}></input>
                    </div>
                    <div>
                          <label htmlFor='description'>Description</label>
                        <input type='text' title='description' placeholder='Description' id='description' onChange={this.onChange}></input>
                    </div>
                </form>
              </div>
            </div>
            <div className='educationContainer'>
              <h2>Education</h2>
              <div>
                <form className="educationInfo" onSubmit={this.onSubmitEd}>
                    <div>
                            <label htmlFor='schoolName'>School Name:</label>
                        <input type='text' title="schoolName" id='schoolName' onChange={this.onChangeEd}></input> 
                    </div>
                    <div>
                            <label htmlFor='areaOfStudy'>Area Of Study:</label>
                        <input type='text' title="areaOfStudy" id='areaOfStudy' onChange={this.onChangeEd}></input> 
                    </div>
                    <div>
                            <label htmlFor='date'>Date of Completion:</label>
                        <input type='date' title="date" id='date' onChange={this.onChangeEd}></input> 
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
                        <input type='text' title="cName" id='cName' onChange={this.onChangeExp}></input> 
                    </div>
                    <div>
                            <label htmlFor="pTitle">Position Title:</label>
                        <input type='text' title="pTitle" id='pTitle' onChange={this.onChangeExp}></input> 
                    </div>
                    <div>
                            <label htmlFor="mTasks">Main Responsibilities:</label>
                        <input type='text' title="mTasks" id="mTasks" onChange={this.onChangeExp}></input> 
                    </div>
                    <div>
                            <label htmlFor="sDate">Start Date:</label>
                        <input type='date' title="sDate" id='sDate' onChange={this.onChangeExp}></input> 
                    </div>
                    <div>
                            <label htmlFor="eDate">End Date:</label>
                        <input type='date' title="eDate" id='eDate' onChange={this.onChangeExp}></input> 
                    </div>
                    <button type="submit">Enter</button>
                </form>
              </div>
            </div>
            <h2><u>Your CV</u></h2>
            <div className='responseContainer'>
              <div className='yourResponse'> 
                <div className='genInfoResponse'>  
                  <General genInfo = {genInfo}/>
                </div>
                  <div className='edInfoResponseContainer'>
                    <h3 id='edHeader'>Education</h3>
                    <Education edInfo = {edInfo} edInfoFilled = {edInfoFilled}/>
                    {/* {this.edInfoFilled} */}
                  </div>
                  <div className='expInfoResponse'>
                    <Experience expInfo = {expInfo}/>
                  </div>
                
              </div>
            </div>  
      </div>
    );
  }
}

export default App;