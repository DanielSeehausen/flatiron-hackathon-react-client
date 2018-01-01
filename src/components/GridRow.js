import React, { Component } from 'react';
import GridCell from './GridCell'

class GridRow extends Component {

  genCols = () => this.props.colVals.map((val, colIdx) => <GridCell key={colIdx} rowIdx={this.props.rowIdx} colIdx={colIdx} color={val}/> )

  render() {
    return (
      <div className='grid-row'>
        {this.genCols()}
      </div>
    );
  }
}

export default GridRow;
