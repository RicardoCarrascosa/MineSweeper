export function updateEmpty(board, row, col) {
  const nRow = board.length
  const nCol = board[0].length
  const dx = [-1, 0, 1]
  const dy = [-1, 0, 1]

  dx.forEach((X) => {
    dy.forEach((Y) => {
      const newRow = row + X
      const newCol = col + Y

      if (
        newRow < nRow &&
        newCol < nCol &&
        newRow >= 0 &&
        newCol >= 0 &&
        board[row][col].value == 0 &&
        board[newRow][newCol].value != 'X' &&
        board[newRow][newCol].isVisible == false
      ) {
        board[newRow][newCol].isVisible = true
        board[newRow][newCol].isFlag = false
        updateEmpty(board, newRow, newCol)
      }
    })
  })
  return board
}
