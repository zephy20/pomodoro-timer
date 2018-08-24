import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Pomodoro from './Pomodoro';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header title="Pomodoro Clock" />
        <Pomodoro />
        <br/>
        <br/>
        <h5>Made with ❤️ by Kartik</h5>
      </div>
    );
  }
}

export default App;
