import { setMatrix, setCellValue } from '../actions/index.js'
import store from '../index.js'

function setTile(update) {
  // skipping the action because it sends a msg to the websocket
  store.dispatch({type: "SET_CELL_VALUE", payload: update})
}

function setTiles(updates) {
  updates.forEach(update => { setTile(update) })
}

function setBoard(data) {
  store.dispatch(setMatrix(data.board))
}

const dispatcher = {
  'setTile': setTile,
  'setTiles': setTiles,
  'setBoard': setBoard,
}

export default dispatcher
