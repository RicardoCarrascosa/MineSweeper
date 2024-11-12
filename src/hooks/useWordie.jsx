import { useState } from 'react'

export const useWordie = (word) => {
  const emptyLetter = { letter: '', isIn: false, isPos: false }
  const emptyWord = Array(5).fill(emptyLetter)
  const [turn, setTurn] = useState(0)
  const [guesses, setGuesses] = useState([...Array(6)].fill(emptyWord))
  const [historical, sethistorical] = useState([])
  const [isValid, setValid] = useState(false)
  const [isOver, setOver] = useState(false)
  const [message, setMessage] = useState('')

  const formatInput = (input, word) => {
    let formatedInput = []
    const inputArray = [...input]
    const wordArray = [...word]
    inputArray.map((letter, i) => {
      if (letter == wordArray[i]) {
        formatedInput.push({ leter: letter, isIn: true, isPos: true })
      } else if (word.includes(letter)) {
        formatedInput.push({ leter: letter, isIn: true, isPos: false })
      } else {
        formatedInput.push({ leter: letter, isIn: false, isPos: false })
      }
    })
    return formatedInput
  }
  const checkWin = (input, word) => {
    if (input === word) {
      setValid(true)
      setMessage('You Won!')
    } else {
      setValid(false)
      setMessage('')
    }
  }
  const checkInput = (rawInput, word, isValid) => {
    if (rawInput && !isValid) {
      const input = rawInput.toLowerCase()
      if (input.length != 5) {
        setMessage('Word needs to be 5 Character')
      } else if (historical.includes(input)) {
        setMessage('Alredy tried this word')
      } else if (turn > 5) {
        setOver(true)
        setMessage('You Lost! you used all your turns!')
      } else {
        sethistorical([input, ...historical])
        setGuesses([formatInput(input, word), ...guesses.slice(0, -1)])
        setTurn(turn + 1)
        checkWin(input, word)
      }
    }
  }

  const resetGame = () => {
    setTurn(0)
    setGuesses([...Array(6)].fill(emptyWord))
    sethistorical([])
    setMessage('')
    setOver(false)
    setValid(false)
  }
  return {
    turn,
    guesses,
    historical,
    isValid,
    isOver,
    message,
    checkInput,
    resetGame
  }
}
