import config from '../config.js'
import { List, Map, fromJS } from 'immutable'

function genDefaultMatrix() {
  return fromJS(Array(config.ROWCOUNT).fill(Array(config.COLCOUNT).fill(config.DEFAULTCOLOR)))
}

// Applying a mutation to create a new immutable object results in some overhead,
// which can add up to a minor performance penalty. If you need to apply a series
// of mutations locally before returning, Immutable gives you the ability to create
// a temporary mutable (transient) copy of a collection and apply a batch of
// mutations in a performant manner by using withMutations. In fact, this is
// exactly how Immutable applies complex mutations itself.

const DEFAULTSTATE = {
  selectedColor: config.DEFAULTCOLOR,
  matrix: genDefaultMatrix()
}

export default function matrix(state=DEFAULTSTATE, action) {
  switch (action.type) {
    case "SET_MATRIX":
      return { matrix: fromJS([action.payload.matrix]), selectedColor: state.selectedColor }
    case "SET_CELL_VALUE":
      const p = action.payload
      return { matrix: state.matrix.setIn([p.x, p.y], state.selectedColor), selectedColor: state.selectedColor }
    case "SET_CELL_VALUES":
      const updatedMatrix = state.matrix.withMutations(matrix => {
        action.payload.forEach(update => {
          matrix[update.x][update.y] = update.color
        })
      })
      return { matrix: updatedMatrix, selectedColor: state.selectedColor }
    case "SET_SELECTED_COLOR":
      return {matrix: state.matrix, selectedColor: action.payload}
    default:
      return state
  }
}
