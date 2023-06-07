import React, {useState} from 'react'
import "../styles/CardPrecioMetal.css"

function CardPrecioMetal(props) {
  const [inputVisibility, setInputVisibility] = useState(false)

  function showInput(){
    setInputVisibility(true)
  }

  function saveChanges(){
    setInputVisibility(false)
  }
  return (
    <div className='card-precio'>
        <div className={props.style === 'light' ? 'card-precio-top' : 'card-precio-top-dark'}>
          <div className="header-precio">
            <span class="material-symbols-outlined icono-tendencia">trending_up</span>
            
            {inputVisibility ?<input type="number" className="input-preciometal" defaultValue={props.precio}/> : <p className="precio-mineral blanco bold">${props.precio}</p>}
            
          </div>
          <p className={props.style === 'light' ? 'nombre-mineral n800' : 'nombre-mineral p300'}>{props.mineral}</p>
        </div>
    </div>
  )
}

export default CardPrecioMetal