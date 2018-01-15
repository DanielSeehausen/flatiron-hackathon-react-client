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
         onMouseDown={props.setCellValue.bind(this, props.rowIdx, props.colIdx, props.selectedColor)}>
    </div>
  );
}

const mapStateToProps = ({ selectedColor }) => ({ selectedColor })

const mapDispatchToProps = (dispatch) => {
  return {
    setCellValue: (x, y, color) => {
      dispatch(setCellValue(x, y, color))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(GridCell)
