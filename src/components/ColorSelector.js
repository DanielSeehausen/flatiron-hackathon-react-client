import React from 'react';
import { setSelectedColor } from '../actions/index.js'
import { connect } from 'react-redux'

const ColorSelector = ({ color, setSelectedColor }) => {
  return (
    <div className='color-selector-box' >
      <div className='color-selector' onClick={setSelectedColor.bind(this, color)} style={{backgroundColor: color}} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedColor: (color) => {
      dispatch(setSelectedColor(color))
    }
  }
}
export default connect(null, mapDispatchToProps)(ColorSelector)
