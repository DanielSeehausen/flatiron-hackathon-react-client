import config from '../config.js'
import { send } from '../ws-conn/wsInit.js'

function genDefaultMatrix() {
  const matrix = Array(config.ROWCOUNT)
  for (let rowIdx = 0; rowIdx < config.ROWCOUNT; rowIdx++)
    matrix[rowIdx] = Array(config.COLCOUNT).fill(config.DEFAULTCOLOR)
  return matrix
}

function assignCellColor(x, y, color) {
  document.getElementById(`${x}-${y}`).style.backgroundColor
}

const DEFAULTSTATE = {
  selectedColor: config.DEFAULTCOLOR,
  matrix: genDefaultMatrix()
}

export default function matrix(state=DEFAULTSTATE, action) {
  switch (action.type) {
    case "SET_MATRIX":
      return { matrix: action.payload, selectedColor: state.selectedColor }
    case "SET_CELL_VALUE":
      const p = action.payload
      document.getElementById(`${p.x}-${p.y}`).style.backgroundColor = p.color
      return state
    case "SET_CELL_VALUES":
      action.payload.forEach(({x, y, color}) => { assignCellColor(x, y, color) })
      return state
    case "SET_SELECTED_COLOR":
      return {matrix: state.matrix, selectedColor: action.payload}
    default:
      return state
  }
}
