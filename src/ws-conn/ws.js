import config from '../config.js'

const GREETING = "Client websocket opened"
const FAREWELL = "Client websocket closed"
const ERROR = "Client websocket errored"

var ws = null

function connect() {
  ws = new WebSocket(config.wsServerEndpoint)
}

function initEventListeners() {
  ws.addEventListener('open', (event) => {
    console.log(GREETING, event.data)
  })

  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data)
    console.log(msg)
  })

  ws.addEventListener('close', (event) => {
    console.log(FAREWELL, event.data)
  })

  ws.addEventListener('error', (event) => {
    console.error(ERROR, event.data)
  })
}

export function sendUpdate(action, x, y, color) {
  ws.send(JSON.stringify({action: action, data: {x: x, y: y, color: color}}))
}

function connectWS(matrix) {
  connect()
  initEventListeners()
}

export default connectWS
