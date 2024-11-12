import React from 'react'
import './cellwordie.css'
export const CellWordie = ({ letterInfo }) => {
  return (
    <div
      className={`WCell ${letterInfo.isPos && 'isPos'} ${letterInfo.isIn && 'isIn'}`}
    >
      <p>{letterInfo.leter}</p>
    </div>
  )
}
