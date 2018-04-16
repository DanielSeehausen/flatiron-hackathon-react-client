import React from 'react';
import GridCell from './GridCell'

const GridRow = (props) => {

  render() {
    return (
      <div className='grid-row'>
        {
          props.cellVals.map((val, colIdx) => (
            <GridCell key={colIdx} rowIdx={this.props.rowIdx} colIdx={colIdx} color={val}/>
          )
        }
      </div>
    )
  }
}

export default GridRow
