import React, { Component } from 'react';
import './App.css';
import General from './components/general';
import Education from './components/education';
import Experience from './components/experience';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
          <header> <h1>CV-Project</h1> </header>
            <div className='generalInfoContainer'>
              <h2>General Information</h2>
              <div>
                <General/>
              </div>
            </div>
            <div className='educationContainer'>
              <h2>Education</h2>
              <div>
                <Education/>
              </div>
            </div>
            <div className='experienceContainer'>
              <h2>Experience</h2>
              <div>
                <Experience/>
              </div>
            </div>
      </div>
    );
  }
}

export default App;
