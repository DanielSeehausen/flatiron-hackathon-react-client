import config from '../config.js'

function send(x, y, c, id=config.GROUPID) {
  fetch(config.HTTPENDPOINT + `/setTile?x=${x}&y=${y}&c=${c}&id=${id}`, {
    method: 'Post',
    mode: 'no-cors',
  })
  .then(response => response)
  .then(x => { console.log(x) })
}

export default send
