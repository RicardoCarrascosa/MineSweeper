import React from 'react'
import './homepage.css'
import { games } from '../../utils/gamesDB'
import GameCard from '../../components/gameCard/gameCard'
export const Homepage = () => {
  return (
    <div className='homePage'>
      {games.map((game, key) => (
        <GameCard key={key} game={game} />
      ))}
    </div>
  )
}
