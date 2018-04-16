import '../App.css';
import React, { Component } from 'react';
import Matrix from './Matrix'
import Draggable from 'react-draggable';
import { BlockPicker } from 'react-color';
import { setSelectedColor } from '../actions/index.js'
import config from '../config.js'


class App extends Component {

  constructor() {
    super()
    this.state = {
      draggingDisabled: true,
      ws: null
    }
  }

  dragHandler = (e) => {
    // really no nice way to do this -- is a known issue. This mouseOver instead of onClick/mouseDown saves us from a required double click
    (e.target.tagName === "INPUT") ? this.setState({draggingDisabled: true}) : this.setState({draggingDisabled: false})
  }

  render() {
    return (
      <div className="App" >
        <Matrix />
        <Draggable disabled={this.state.draggingDisabled} defaultPosition={{x: 50, y: 50}}>
          <div id='block-picker-wrapper' onMouseOver={this.dragHandler}>
            <BlockPicker
              color={config.SELECTEDCOLOR}
              onChangeComplete={ color => {config.selectedColor = color.hex} }
              triangle='hide'
            />
          </div>
        </Draggable>
      </div>
    )
  }
}

export default App
