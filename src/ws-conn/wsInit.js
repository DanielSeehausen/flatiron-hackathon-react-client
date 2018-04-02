const dispatcher = require('./dispatcher.js')
const config = require('../config.js')

const GREETING = "Client websocket opened"
const FAREWELL = "Client websocket closed"
const ERROR = "Client websocket errored"

const wsConn = wsConn || new WebSocket(config.WSSERVERENDPOINT)

function unpack(data) {
  const msg = JSON.parse(data)
  return [msg.action, msg.payload]
}

function dispatch(data) {
  const [action, payload] = unpack(data)
  // console.log("FROM WSS: ", action, payload);
  dispatcher.default[action](payload)
}

function pack(action, payload) {
  return JSON.stringify({'action': action, 'payload': payload})
}

export function send(action, payload) {
  const msg = pack(action, payload)
  wsConn.send(msg)
}


function initEventListeners() {
  wsConn.addEventListener('open', (e) => {
    setTimeout(() => {
      console.log('go');
      for (let x = 0; x < 1; x++) {
        for (let y = 0; y < 100; y++) {
          if (y%2) continue
          dispatch(pack("setTile", {"x": x, "y": y, "color": '#0dd'}))
        }
      }
    }, 2000)
  })


  wsConn.addEventListener('message', (e) => {dispatch(e.data)})

  wsConn.addEventListener('close', (e) => {console.log(FAREWELL, e.data)})

  wsConn.addEventListener('error', (e) => {console.error(ERROR, e.data)})
}

export default function init() {
  initEventListeners()
}
