import React, {useState} from 'react'
import "../styles/CardPrecioMetal.css"

function CardReporteGerencial(props) {

  return (
    <div className='card-precio'>
        <div className={props.style === 'light' ? 'card-precio-RG' : 'card-precio-RG-dark'}>
          <div className="header-precio">
            <p className="precio-mineral blanco bold">${props.precio}</p>
          </div>
          <p className={props.style === 'light' ? 'nombre-mineral n800' : 'nombre-mineral p300'}>{props.mineral}</p>
        </div>
    </div>
  )
}

export default CardReporteGerencial