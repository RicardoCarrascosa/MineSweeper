import React from 'react'
import { Link } from 'react-router-dom'
import './gamecard.css'
const GameCard = ({ game }) => {
  console.log(game)
  return (
    <Link className='gameCard' to={game.path}>
      <h4>{game.name}</h4>
      <img src={game.image} alt={game.name} />
    </Link>
  )
}

export default GameCard
