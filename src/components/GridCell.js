import React from 'react';
import { setCellValue } from '../actions/index.js'
import { connect } from 'react-redux'

const GridCell = (props) => {
  return (
    <div
         id={`${props.rowIdx}-${props.colIdx}`}
         rowidx={props.rowIdx}
         colidx={props.colIdx}
         className="grid-cell"
         style={{backgroundColor: props.color}}
         onClick={props.setCellValue.bind(this, props.rowIdx, props.colIdx)}>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCellValue: (x, y) => {
      dispatch(setCellValue(x, y))
    }
  }
}


export default connect(null, mapDispatchToProps)(GridCell)
