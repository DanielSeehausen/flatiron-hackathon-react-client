import '../App.css';
import React, { Component } from 'react';
import connectWS from '../ws-conn/ws.js'
import Matrix from './Matrix'
import ColorSelectorMenu from './ColorSelectorMenu'

class App extends Component {


  render() {
    connectWS()
    return (
      <div className="App">
        <Matrix />
        <ColorSelectorMenu />
      </div>
    );
  }
}

export default App;
