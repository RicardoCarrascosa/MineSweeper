import { useReducer } from 'react'
import './board.css'
import React from 'react'
import Cell from '../cell/Cell'
import { boardReducer, init } from '../../utils/boardReducer'

const Board = () => {
  const [state, dispatch] = useReducer(boardReducer, init)
  const changeLevel = (event) => {
    dispatch({ type: 'CHANGE_LEVEL', payload: event.target.value })
  }
  //On right click Cell
  const updateFlag = (e, x, y) => {
    e.preventDefault()
    dispatch({ type: 'SET_FLAG', payload: { x, y } })
  }

  // Reveal cell
  const revealCell = (x, y) => {
    dispatch({ type: 'CLICK_CELL', payload: { x, y } })
  }
  // RestartGame
  const restartGame = (x, y) => {
    dispatch({ type: 'RESTART' })
  }

  return (
    <div className='board'>
      <div className='menu'>
        <h2>{state.flags}</h2>
        <select onChange={changeLevel}>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </select>
        <button onClick={restartGame}>Restart Game</button>
      </div>
      <div className='playBoard'>
        {state.grid.map((singleR, index1) => (
          <div style={{ display: 'flex' }} key={index1}>
            {singleR.map((cellInfo, index2) => (
              <Cell
                props={cellInfo}
                size={state.size}
                updateFlag={updateFlag}
                revealCell={revealCell}
                key={index2}
              />
            ))}
          </div>
        ))}
      </div>
      {state.isGameOver && (
        <div className='message-box gameOver'>🎆You exploded🎆 Game Over!</div>
      )}
      {state.youWin && (
        <div className='message-box youWin'>All mines disabeled, You WIN</div>
      )}
    </div>
  )
}

export default Board
