import config from '../config.js'
const { List } from 'immutable'

function genDefaultMatrix() {
  // nice and ugly
  return List([Array(config.ROWCOUNT).fill(List([Array(config.COLCOUNT).fill(config.defaultTileColor)]))])
}

export default function matrix(state={matrix: genDefaultMatrix()}, action) {
  switch (action.type) {
    case "SET_MATRIX":
      return { matrix: action.payload.matrix }
    case "SET_CELL_VALUES":
      action.payload.matrixUpdates.forEach(update => {

      })
      return { matrix: }
    default:
      return state
  }
}
