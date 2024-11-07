// Create Board

export default (nRow = 8, nCol = 8, bombs = 8) => {
  let board = []
  let mineLocation = []

  // Create empty board
  for (let x = 0; x < nRow; x++) {
    let subCol = []
    for (let y = 0; y < nCol; y++) {
      subCol.push({
        value: 0,
        isVisible: false,
        x: x,
        y: y,
        isFlag: false
      })
    }
    board.push(subCol)
  }
  // Add Bombs
  let bombCount = 0
  while (bombCount < bombs) {
    let x = ramdomNum(0, nRow - 1)
    let y = ramdomNum(0, nCol - 1)

    if (board[x][y].value == 0) {
      board[x][y].value = 'X'
      mineLocation.push([x, y])
      bombCount++
    }
  }

  // Populate with neighbours Number
  mineLocation.forEach((pos) => {
    const dx = [-1, 0, 1]
    const dy = [-1, 0, 1]
    dx.forEach((X) => {
      dy.forEach((Y) => {
        const newRow = pos[0] + X
        const newCol = pos[1] + Y
        if (
          newRow >= 0 &&
          newCol >= 0 &&
          newRow < nCol &&
          newCol < nRow &&
          board[newRow][newCol].value != 'X'
        ) {
          board[newRow][newCol].value = board[newRow][newCol].value + 1
        }
      })
    })
  })
  return board
}

const ramdomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}
