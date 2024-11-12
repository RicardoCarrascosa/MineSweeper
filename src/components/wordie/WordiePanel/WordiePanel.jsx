import './WordiePanel.css'
import React, { useRef, useState } from 'react'
import { useWordie } from '../../../hooks/useWordie'
import { randomWord } from '../../../utils/wordie/wordsDB'
import { CellWordie } from '../CellWordie/CellWordie'
const WordiePanel = () => {
  const inputRef = useRef('')
  const wordRef = useRef(randomWord())
  const {
    turn,
    guesses,
    historical,
    isValid,
    isOver,
    message,
    checkInput,
    resetGame
  } = useWordie(wordRef.current)
  const handleTry = () => {
    checkInput(inputRef.current.value, wordRef.current, isValid)
  }
  const handleReset = () => {
    resetGame()
    inputRef.current.value = ''
    wordRef.current = randomWord()
  }
  return (
    <div className='wordieGame'>
      <div className='wordieMenu'>
        <button onClick={handleReset}>Reset Game</button>
      </div>
      <div className='inputBoard'>
        <input ref={inputRef} type='text' />
        <button onClick={handleTry}>Try!</button>
      </div>
      <div className='wordiePanel'>
        {guesses.map((row, index) => (
          <div className='rowWordie' key={index}>
            {row.map((letterInfo, letIndex) => (
              <CellWordie key={letIndex} letterInfo={letterInfo} />
            ))}
          </div>
        ))}
      </div>
      <div
        className={`${message ? 'wordieMessage' : 'noMessage'} ${isValid ? 'youWin' : 'alertMsg'} ${isOver && 'youLoose'}`}
        // ! Falta el you loose
      >
        {message}
      </div>
    </div>
  )
}
export default WordiePanel
