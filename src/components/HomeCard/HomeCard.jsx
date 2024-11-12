import React from 'react'
import './homecard.css'
import { Link } from 'react-router-dom'
const HomeCard = ({ game }) => {
  return (
    <Link className='homeCard' to={game.path}>
      <h4>{game.name}</h4>
      <img src={game.image} alt={game.name} />
    </Link>
  )
}

export default HomeCard
