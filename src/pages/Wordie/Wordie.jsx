import React from 'react'
import './wordie.css'
import WordiePanel from '../../components/wordie/WordiePanel/WordiePanel'
import { CellWordie } from '../../components/wordie/CellWordie/CellWordie'
export const Wordie = () => {
  const title = [
    { leter: 'W', isPos: false, isIn: false },
    { leter: 'O', isPos: true, isIn: false },
    { leter: 'R', isPos: false, isIn: true },
    { leter: 'D', isPos: true, isIn: false },
    { leter: 'L', isPos: false, isIn: false },
    { leter: 'E', isPos: false, isIn: true }
  ]

  return (
    <div className='wordie'>
      <div className='rowWordie'>
        {title.map((letterInfo, letIndex) => (
          <CellWordie key={letIndex} letterInfo={letterInfo} />
        ))}
      </div>
      <WordiePanel />
    </div>
  )
}
