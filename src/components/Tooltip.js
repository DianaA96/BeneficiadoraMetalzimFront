import React from 'react'
import "../styles/Tooltip.css"

function Tooltip(props) {
  return (
    <div className='tooltip-fill'>
        <div className={`tooltip-cont ${props.tooltipVisibility ? "show-tooltip" : null}`}>Valores copiados al portapapeles</div>
    </div>
  )
}

export default Tooltip