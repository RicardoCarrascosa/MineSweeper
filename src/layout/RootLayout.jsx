import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './rootLayout.css'
import useNavButtonFind from '../hooks/useNavButtonFind'

import { games } from '../utils/gamesDB'
const pages = [{ name: 'Home', path: '/' }, ...games]

export const RootLayout = () => {
  const location = useLocation()
  console.log(pages)
  const { next, previus, isHome } = useNavButtonFind(location, pages)
  return (
    <div className='gamePool'>
      <div className='nav'>
        <Link className={isHome ? 'isHome' : ''} to={previus.path}>
          {previus.name}
        </Link>
        <h1>Game Pool</h1>
        <Link className={isHome ? 'isHome' : ''} to={next.path}>
          {next.name}
        </Link>
      </div>
      <Outlet />
    </div>
  )
}
