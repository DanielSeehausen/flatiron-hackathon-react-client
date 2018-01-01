import React from 'react';
import { sendUpdate } from '../ws-conn/ws.js'

const GridCell = (props) => {

  return (
    <div rowidx={props.rowIdx}
         colidx={props.colIdx}
         className="grid-cell"
         style={{backgroundColor: props.color}}
         onClick={(e) => changeColor(e, props.rowIdx, props.colIdx)}>
    </div>
  );
}


function changeColor(event, x, y) {
  const cell = event.target
  if (event.target.style.backgroundColor !== 'blue') {
    // debugger
    sendUpdate('changeTile', x, y, '#00F')
    event.target.style.backgroundColor = 'blue'
  } else {
    event.target.style.backgroundColor = 'red'
    sendUpdate('changeTile', x, y, '#F00')
  }
}

export default GridCell;
