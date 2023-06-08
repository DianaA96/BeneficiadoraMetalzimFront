import React, {useState} from 'react'
import "../styles/CardPrecioMetal.css"
import axios from 'axios'

function CardPrecioMetal(props) {
  const [inputVisibility, setInputVisibility] = useState(false)
  const [newPrecio, setNewPrecio] = useState(props.precio)

  function showTooltip(){
    props.setTooltipVisibility(true)
    setTimeout(() => {
        props.setTooltipVisibility(false)
    }, 3500);
  }

  function showInput(){
    setInputVisibility(true)
  }

  function handleInputChange(e){
    setNewPrecio(e.target.value)
  }

  function handlePrecioMineralChange(){
    
    const objeto = {
        elemento: props.elemento,
        precio: parseFloat(newPrecio)
    }

    axios({
        method: 'post',
        url: `http://localhost:3050/admin/elemento-precio`,
        data: {...objeto},
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then((result)=>{
        props.setPriceUpdated(props.isPriceUpdated + 1)
        showTooltip()
        setInputVisibility(false)
    })
    .catch(error =>{
        console.log(error)
        alert('Algo malo pasó:', error);
        setInputVisibility(false);
    })
}
  return (
    <div className='card-precio'>
        <div className={props.style === 'light' ? 'card-precio-top' : 'card-precio-top-dark'}>
          <div className="header-precio">
            
            {props.precio < props.precioAnterior ? <span class="material-symbols-outlined icono-tendencia-down">trending_down</span>: <span class="material-symbols-outlined icono-tendencia">trending_up</span>}
            
            {inputVisibility ?<input type="number" className="input-preciometal" defaultValue={props.precio} onChange={handleInputChange}/> : <p className="precio-mineral blanco bold">${props.precio}</p>}
            
          </div>
          <p className={props.style === 'light' ? 'nombre-mineral n800' : 'nombre-mineral p300'}>{props.mineral}</p>
        </div>
        <div className='card-precio-bottom'>
          {inputVisibility ? <button className="btn-guardar-precio" onClick={handlePrecioMineralChange}>Guardar</button> : <button className="btn-actualizar-precio" onClick={showInput}>Actualizar</button>}
          
         
        </div>
    </div>
  )
}

export default CardPrecioMetal