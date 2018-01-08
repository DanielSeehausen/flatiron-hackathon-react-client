import {setMatrix} from '../actions/index.js'
import store from '../index.js'

function setTile(update) {
  const {x, y, color} = update
  document.getElementById(`${x}-${y}`).style.backgroundColor = color
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
