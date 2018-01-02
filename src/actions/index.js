import { sendUpdate } from '../ws-conn/ws.js'

export function setMatrix() {
  return (dispatch) => {
    dispatch({action: "SET_MATRIX"})
  }
}

export function setCellValues(x, y, color) {
  sendUpdate('changeTile', x, y, color)

  return (dispatch) => {
    dispatch({action: "SET_CELL_VALUES", payload: [{x, y, color}]})
  }
}

export function setSelectedColor(color) {
  return (dispatch) => {
    dispatch({action: "SET_SELECTED_COLOR", payload: color})
  }
}
