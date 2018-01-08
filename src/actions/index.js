export function setMatrix(matrix) {
  return {type: "SET_MATRIX", payload: matrix}
}

export function setCellValues(values) {
  return {type: "SET_CELL_VALUES", payload: values}
}

export function setCellValue(x, y, color) {
  // sendUpdate('setTile', x, y, color)
  return {type: "SET_CELL_VALUE", payload: {x, y, color}}
}

export function setSelectedColor(color) {
  return {type: "SET_SELECTED_COLOR", payload: color}
}
