import React, { Component } from "react";

import './App.css';
import MusicBuilder from './container/MusicBuilder/MusicBuilder'

class App extends Component {



  render(){
      return (
        <div className="App">
          
          <MusicBuilder />
        </div>
      );
  }
  
}

export default App;
