export function assignCellColor(x, y, color) {
  document.getElementById(`${x}-${y}`).style.backgroundColor = color
}

export function assignCellColors(values) {
  values.forEach( ({x, y, color}) => { assignCellColor(x, y, color) })
}
