import React, { Component } from 'react';

class ColorSelector extends Component {

  constructor() {
    super()
  }

  handleOnClick = () => {
    this.props.selectColor()
  }

  render() {
    return (
      <div className='color-selector-box' onClick={this.handleOnClick} >
        <div className='color-selector' style={{backgroundColor: this.props.color}} />
      </div>
    );
  }
}

export default ColorSelector
