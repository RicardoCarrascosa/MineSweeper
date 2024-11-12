import React from 'react'
import './homepage.css'
import { games } from '../../utils/gamesDB'
import HomeCard from '../../components/HomeCard/HomeCard'
export const Homepage = () => {
  return (
    <div className='homePage'>
      {games.map((game, key) => (
        <HomeCard key={key} game={game} />
      ))}
    </div>
  )
}
