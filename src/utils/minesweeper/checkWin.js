export const checkWin = (grid) => {
  const nRow = grid.length
  const nCol = grid[0].length

  for (let x = 0; x < nRow; x++) {
    for (let y = 0; y < nCol; y++) {
      const cell = grid[x][y]

      if (!cell.isFlag && !cell.isVisible) {
        return false
      }
    }
  }
  return true
}
