import React from 'react';
import send from '../conn/send.js'


const GridCell = (props) => (
  <div
    id={`${props.rowIdx}-${props.colIdx}`}
    rowidx={props.rowIdx}
    colidx={props.colIdx}
    className="grid-cell"
    style={{backgroundColor: props.color}}
    onMouseDown={() => send(props.rowIdx, props.colIdx)}>
  </div>
)

export default GridCell
