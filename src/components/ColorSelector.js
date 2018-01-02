import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setSelectedColor } from '../actions/index.js'

const ColorSelector = ({ color }) => {
  return (
    <div className='color-selector-box' onClick={setSelectedColor.bind(this, color)} >
      <div className='color-selector' style={{backgroundColor: color}} />
    </div>
  )
}

mapDispatchToProps => (dispatch) => {
  return bindActionCreators({ setSelectedColor: setSelectedColor}, dispatch)
}

export default connect(mapDispatchToProps)(ColorSelector)
