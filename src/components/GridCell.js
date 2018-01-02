import React from 'react';
import { setCellValues } from '../actions/index.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const GridCell = (props) => {

  return (
    <div rowidx={props.rowIdx}
         colidx={props.colIdx}
         className="grid-cell"
         style={{backgroundColor: props.color}}
         onClick={props.setCellValues.bind(this, props.rowIdx, props.colIdx, props.selectedColor)}>
    </div>
  );
}


mapDispatchToProps => (dispatch) => {
  return bindActionCreators({ setCellValues: setCellValues}, dispatch)
}

const mapStateToProps = ({ selectedColor }) => ({ selectedColor })

export default connect(mapStateToProps, mapDispatchToProps)(GridCell)
