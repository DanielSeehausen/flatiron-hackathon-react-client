import '../App.css';
import React, { Component } from 'react';
import connectWS from '../ws-conn/ws.js'
import Matrix from './Matrix'
import Draggable from 'react-draggable';
import { BlockPicker } from 'react-color';
// import ColorSelectorMenu from './ColorSelectorMenu'
import { setSelectedColor } from '../actions/index.js'
import { connect } from 'react-redux'
class App extends Component {

  componentDidMount() {
    connectWS()
  }

  render() {
    return (
      <div className="App">
        <Matrix />
        <Draggable defaultPosition={{x: 50, y: 50}}>
          <div id='block-picker-wrapper'>
            <BlockPicker
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

export default connect(null, mapDispatchToProps)(App)
