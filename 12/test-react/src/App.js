import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    sec: 0
  }
  componetDidMount(){
    window.setInterval({
      var sec = this.state.sec;
      sec:this.state.sec+1
    }));
    }, 1000)
  }
  // render 최초실행후 실행되는 함수
  render() {
    return (
      <div className="App" >
        {this.state.sec} 
      </div>
    );
  }
}

export default App;
