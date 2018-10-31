import React, { Component } from 'react';
import './App.css';
import Home from './jsx/Home';
import BrowserDetection from 'react-browser-detection'; 

class App extends Component { 

  render() {
    const browserHandler = {
      // chrome: () => <div>Chrome is fantastic!</div>,
      // googlebot: () => <div>Hi GoogleBot!</div>,
      // default: (browser) => <div>Hi {browser}!</div>,
      chrome: () =><Home/>,
      firefox: () => <Home/>,      
      googlebot: () => <div>Hi GoogleBot!</div>,
      default: (browser) => <div>Hi {browser}!</div>,
    };
    return (
      <div className="App"> 
      <BrowserDetection>
        { browserHandler }
      </BrowserDetection>        
      </div>
    );
  }
}

export default App;
