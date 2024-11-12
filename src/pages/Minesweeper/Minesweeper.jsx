import React from 'react'
import './minesweeper.css'
import Board from '../../components/minesweeper/Board/Board'

export const Minesweeper = () => {
  return (
    <div className='minesweeper'>
      <h2>🚩💣 MineSweeper 💣🚩</h2>
      <Board />
    </div>
  )
}
