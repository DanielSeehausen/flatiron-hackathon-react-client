import { sendUpdate } from '../ws-conn/ws.js'

export function setMatrix() {
  return (dispatch) => {
    dispatch({action: "SET_MATRIX"})
  }
}


export function setCellValues(values) {
  return {type: "SET_CELL_VALUES", payload: values}
}

export function setCellValue(x, y, color) {
  // sendUpdate('changeTile', x, y, color)
  return {type: "SET_CELL_VALUE", payload: {x, y, color}}
}

export function setSelectedColor(color) {
  return {type: "SET_SELECTED_COLOR", payload: color}
}
