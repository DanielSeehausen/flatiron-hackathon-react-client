import React, { Component } from 'react';
import GridRow from './GridRow'
import config from '../config.js'

class Matrix extends Component {

  genRow = (colCount) => (Array(colCount).fill(config.defaultTileColor))

  state = {
    matrix: Array(config.rowCount).fill(this.genRow(config.colCount))
  }

  makeRows = () => this.state.matrix.map((row, rowIdx) => <GridRow key={rowIdx} rowIdx={rowIdx} colVals={row}/>)

  render() {
    return (
      <div id="matrix">
        {this.makeRows()}
      </div>
    );
  }
}

export default Matrix;
