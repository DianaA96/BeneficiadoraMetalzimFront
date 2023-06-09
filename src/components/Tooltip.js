import React from 'react'
import "../styles/Tooltip.css"

function Tooltip(props) {
  return (
    <div className='tooltip-fill'>
        <div className={`tooltip-cont ${props.tooltipVisibility ? "show-tooltip" : null}`}>{props.mensaje}</div>
    </div>
  )
}

export default Tooltip