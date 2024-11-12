import React from 'react'
import './cell.css'
const Cell = ({ props, size, updateFlag, revealCell }) => {
  return (
    <div
      onClick={() => revealCell(props.x, props.y)}
      onContextMenu={(e) => updateFlag(e, props.x, props.y)}
      className={`cell ${props.isVisible ? `isVisible ${props.value && `val${props.value}`}` : ''} ${props.isFlag && 'isFlag'} size${size}`}
    >
      <p>
        {props.isVisible
          ? props.value == 'X'
            ? '💣'
            : props.value != 0
              ? props.value
              : ''
          : props.isFlag
            ? '🚩'
            : ''}
      </p>
    </div>
  )
}

export default Cell
