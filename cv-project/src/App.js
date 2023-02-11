import React, { Component } from 'react';
import './App.css';
// import { uuid } from 'uuidv4';
import uniqid from 'uniqid';
import General from './components/general';
import Education from './components/education';
import DisplayEd from './components/DisplayEd';
import Experience from './components/experience';
import DisplayExp from './components/DisplayExp';


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

      edInfo: [{
        schoolName : 'School Name',
        areaOfStudy : 'Area Of Study',
        date : 'Date of Completion',
        id : uniqid(),
      }],

      expInfo : [{
        cName : 'Company Name',
        pTitle : 'Position Title',
        mTasks : 'Job Description',
        sDate : 'Start Date',
        eDate : 'End Date',
        id : uniqid(),
      }],
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


  //This is the start of the code that i redid inorder to add new features
  addInputsEd = () => {
    const newInputsEd = {
      id: uniqid(), 
      schoolName : 'School Name',
      areaOfStudy : 'Area Of Study',
      date : 'Date of Completion',
    }
    this.setState({
      edInfo: [...this.state.edInfo, newInputsEd]
    });
  };

  //The onchange functions for the Ed section
  onInputChangeEdSchoolName = (e) => {
    const { id, value } = e.target;

    const newArr = this.state.edInfo.map(item => {
      if (item.id == id) {
        return {
          ...item,
          schoolName: value 
          };
        } else {
          return item;
        }
      });

    this.setState({
      edInfo: newArr
    });
  };
  onInputChangeEdAreaOfStudy = (e) => {
    const { id, value } = e.target;

    const newArr = this.state.edInfo.map(item => {
      if (item.id == id) {
        return {
          ...item,
          areaOfStudy: value 
          };
        } else {
          return item;
        }
      });

    this.setState({
      edInfo: newArr
    });
  };
  onInputChangeEdDate = (e) => {
    const { id, value } = e.target;

    const newArr = this.state.edInfo.map(item => {
      if (item.id == id) {
        return {
          ...item,
          date: value 
          };
        } else {
          return item;
        }
      });

    this.setState({
      edInfo: newArr
    });
  };

  //This function creates the inputs for the Ed section
  createListEd = () => {
    const { edInfo } = this.state;
    return edInfo.map(item => {
      return (
         <div key={item.id} >
            <div>
              <input 
              type='text' 
              id={item.id} 
              value={item.schoolName} 
              placeholder='School Name' 
              onChange={this.onInputChangeEdSchoolName}></input> 
            </div>
            <div>
              <input type='text' id={item.id} value={item.areaOfStudy} placeholder='Area Of Study' onChange={this.onInputChangeEdAreaOfStudy}></input> 
            </div>
            <div>
              <input type='text' id={item.id} value={item.date} onChange={this.onInputChangeEdDate}></input> 
            </div>
          </div>
      )
    })
  };

  //This is the start of the Experience Section of code
  //The first function adds new inputs when called
  addInputsExp = () => {
    const newInputsExp = {
      id: uniqid(), 
      cName : 'Company Name',
      pTitle : 'Position Title',
      mTasks : 'Job Description',
      sDate : 'Start Date',
      eDate : 'End Date',
    }
    this.setState({
      expInfo: [...this.state.expInfo, newInputsExp]
    });
  }

  //This section changes the specific values of the selected inputs for the EXP section
  //This function changes the name of the company
  onInputChangeExpCName = (e) => {
    const { id, value } = e.target;

    const newArr = this.state.expInfo.map(item => {
      if (item.id == id) {
        return {
          ...item,
          cName: value 
          };
        } else {
          return item;
        }
      });

    this.setState({
      expInfo: newArr
    });
  };
  //Changes the name of the position
  onInputChangeExpPTitle = (e) => {
    const { id, value } = e.target;

    const newArr = this.state.expInfo.map(item => {
      if (item.id == id) {
        return {
          ...item,
          pTitle: value 
          };
        } else {
          return item;
        }
      });

    this.setState({
      expInfo: newArr
    });
  };
  //Changes the job description  (mTasks) 
  onInputChangeExpMTasks = (e) => {
    const { id, value } = e.target;

    const newArr = this.state.expInfo.map(item => {
      if (item.id == id) {
        return {
          ...item,
          mTasks: value 
          };
        } else {
          return item;
        }
      });

    this.setState({
      expInfo: newArr
    });
  };
  //Changes the start date
  onInputChangeExpSDate = (e) => {
    const { id, value } = e.target;

    const newArr = this.state.expInfo.map(item => {
      if (item.id == id) {
        return {
          ...item,
          sDate: value 
          };
        } else {
          return item;
        }
      });

    this.setState({
      expInfo: newArr
    });
  };
  //Changes the end date
  onInputChangeExpEDate = (e) => {
    const { id, value } = e.target;

    const newArr = this.state.expInfo.map(item => {
      if (item.id == id) {
        return {
          ...item,
          eDate: value 
          };
        } else {
          return item;
        }
      });

    this.setState({
      expInfo: newArr
    });
  };

  //This section creates all of the inputs for the exp section
  createListExp = () => {
    const { expInfo } = this.state;
    return expInfo.map(item => {
      return (
         <div key={item.id} >
            <div>
              <input 
              type='text' 
              id={item.id} 
              value={item.cName} 
              placeholder='Company Name' 
              onChange={this.onInputChangeExpCName}></input> 
          </div>
          <div>
                <input 
                type='text' 
                id={item.id} 
                value={item.pTitle} 
                placeholder='Position Title' 
                onChange={this.onInputChangeExpPTitle}>
                </input> 
          </div>
          <div>
            <input 
            type='text' 
            id={item.id} 
            value={item.mTasks} 
            placeholder='Main Responsibilities'
            onChange={this.onInputChangeExpMTasks}>
            </input> 
           </div>
           <div>
              <input 
              type='text' 
              id={item.id} 
              value={item.sDate} 
              placeholder='Start Date'
              onChange={this.onInputChangeExpSDate}>
              </input> 
           </div>
           <div>
              <input 
              type='text' 
              id={item.id} 
              value={item.eDate} 
              placeholder='End Date'
              onChange={this.onInputChangeExpEDate}>
              </input> 
           </div>
        </div>
      )
    })
  };




  //-----------------------------------------------------------------------------

  //This section of code is an on going battle and has defeted me a few times. 
  //If you are able to fix it please tell me how as you are a better man than I
  onSubmitEd = (e) => {
    e.preventDefault();
    // const newEdInfo = [this.state.edInfo.schoolName, this.state.edInfo.areaOfStudy, this.state.edInfo.date ]
    // this.setState(prevState => ({
    //     edInfoFilled: [...prevState.edInfoFilled, ...newEdInfo],
    //     // edInfo: {
    //     //   schoolName : 'School Name',
    //     //   areaOfStudy : 'Area Of Study',
    //     //   date : 'Date of Completion',
    //     //   id : uniqid(),
    //     // }
    // })) 
    // console.log(this.state.edInfoFilled);
  }



  handleEdItemAdd = () => {
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

  onSubmitExp = (e) => {
    e.preventDefault();
  }

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
        <div className='cvProjectContainer'>
            <div className='generalInfoContainer'>
              
              
                <form className="genInfo">
                  <h2><u> General Information</u></h2>
                    <div>
                        {/* <label htmlFor="fname" >First Name:</label> */}
                    <input type='text' title='fname' id='fname' placeholder='First Name' onChange={this.onChange}></input>
                    </div>
                    <div>
                            {/* <label htmlFor="lname">Last Name:</label> */}
                        <input type='text' title='lname' id='lname' placeholder='Last Name' onChange={this.onChange}></input>
                    </div>
                    <div>
                            {/* <label htmlFor='title'>Title: </label> */}
                        <input type='text' title='title' id='title' placeholder='Title' onChange={this.onChange}></input>
                    </div>
                    <div>
                            {/* <label htmlFor="email">Email:</label> */}
                        <input type='email' title='email'id='email' placeholder='Email' onChange={this.onChange}></input>
                    </div>
                    <div> 
                            {/* <label htmlFor='location'>Loaction: </label> */}
                        <input type='text' title='location' id='location' placeholder='location' onChange={this.onChange}></input>
                    </div>
                    <div>
                            {/* <label htmlFor="phoneNum">Phone Number:</label> */}
                        <input type='tel' title='phoneNum'id='phone' placeholder='Phone Number' onChange={this.onChange}></input>
                    </div>
                    <div>
                          {/* <label htmlFor='description'>Description</label> */}
                        <input type='text' title='description' placeholder='Description' id='description' onChange={this.onChange}></input>
                    </div>
                </form>
              
            </div>
            <div className='educationInfoContainer'>
              <div className="educationInfo">
                  <h2><u>Education</u></h2>
                    {this.createListEd()}
                    <button type='button' onClick={this.addInputsEd}>Add Education</button>
                </div>
              
            </div>
            <div className='experienceInfoContainer'>
                <div className="experienceInfo">
                   <h2><u>Experience</u></h2>
                   {this.createListExp()}
                   <button type='button' onClick={this.addInputsExp}>Add Experience</button>
                </div>
              
            </div>
          </div>
            <h2 id='yourCVTitle'><u>Your CV</u></h2>
            <div className='responseContainer'>
              <div className='yourResponse'> 
                <div className='genInfoResponse'>  
                  <General genInfo = {genInfo}/>
                </div>
                  <div className='edInfoResponseContainer'>
                    <h3 id='edHeader'>Education</h3>
                    <DisplayEd edInfo={edInfo}/>
                  </div>
                  <div className='expInfoResponse'>
                    <DisplayExp expInfo={expInfo}/>
                  </div>
                
              </div>
            </div>  
      </div>
    );
  }
}

export default App;