import '../App.css';
import React, { Component } from 'react';
import Matrix from './Matrix'
import Draggable from 'react-draggable';
import { BlockPicker } from 'react-color';
// import ColorSelectorMenu from './ColorSelectorMenu'
import { setSelectedColor } from '../actions/index.js'
import { connect } from 'react-redux'
import config from '../config.js'
import initWS from '../ws-conn/wsInit.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      draggingDisabled: true,
      ws: null
    }
    initWS()
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
              color={this.props.selectedColor}
              onChangeComplete={(color) => this.props.setSelectedColor(color.hex)}
              triangle='hide'
            />
          </div>
        </Draggable>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedColor: (color) => {
      dispatch(setSelectedColor(color))
    }
  }
}

const mapStateToProps = ({ selectedColor }) => ({ selectedColor })

export default connect(mapStateToProps, mapDispatchToProps)(App)
