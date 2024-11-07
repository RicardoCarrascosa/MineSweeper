import createBoard from './createBoard'
import { updateEmpty } from './updateEmpty'
import { checkWin } from './checkWin'
const INIT_BOARD_STATE = {
  size: 6,
  bombs: 5,
  flags: 5,
  grid: createBoard(6, 6, 5),
  isGameOver: false,
  youWin: false
}

const gameOptions = {
  easy: { size: 6, bombs: 5 },
  medium: { size: 8, bombs: 10 },
  hard: { size: 12, bombs: 20 }
}
export const init = INIT_BOARD_STATE

export const boardReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FLAG': {
      const { x, y } = action.payload
      let newGrid = JSON.parse(JSON.stringify(state.grid))
      let newFlags = state.flags
      if (!state.isGameOver) {
        if (state.flags > 0) {
          if (newGrid[x][y].isFlag) {
            newGrid[x][y].isFlag = false
            newFlags = newFlags + 1
          } else {
            newGrid[x][y].isFlag = true
            newFlags = newFlags - 1
          }
        }
      }
      const win = checkWin(newGrid)

      return { ...state, grid: newGrid, flags: newFlags, youWin: win }
    }
    case 'CLICK_CELL': {
      const { x, y } = action.payload
      let newGrid = JSON.parse(JSON.stringify(state.grid))
      if (!state.isGameOver) {
        if (newGrid[x][y].value == 'X') {
          newGrid[x][y].isVisible = true
          return {
            ...state,
            grid: newGrid,
            isGameOver: true
          }
        } else {
          if (newGrid[x][y].value == 0) {
            updateEmpty(newGrid, x, y)
          } else {
            newGrid[x][y].isVisible = true
          }
        }
      }
      const win = checkWin(newGrid)

      return { ...state, grid: newGrid, youWin: win }
    }

    case 'CHANGE_LEVEL': {
      const levelInfo = gameOptions[action.payload]
      return {
        ...state,
        size: levelInfo.size,
        bombs: levelInfo.bombs,
        flags: levelInfo.bombs,
        isGameOver: false,
        youWin: false,
        grid: createBoard(levelInfo.size, levelInfo.size, levelInfo.bombs)
      }
    }

    case 'RESTART': {
      const levelInfo = {
        size: state.size,
        bombs: state.bombs,
        flags: state.bombs
      }
      return {
        ...state,
        flags: state.bombs,
        isGameOver: false,
        youWin: false,
        grid: createBoard(levelInfo.size, levelInfo.size, levelInfo.bombs)
      }
    }
  }
}
