import React from 'react'
import "../styles/colors.css"
import "../styles/Menu.css"

import LogoBM from "../assets/Logo/logo.png"
import iconLab from "../assets/IconsLandingPages/labFormIcon.svg"
import iconLogout from "../assets/IconsLandingPages/logoutIcon.svg"
import iconBack from "../assets/IconsLandingPages/BackIcon.svg"


function Menu(props) {
  var tabs = {
    laboratorista: [["Llenar reporte","science"], ["Historial", "history"]],
    admin: [["Reporte Gerencial","summarize"], ["Admin. Usuarios", "group"], ["Reporte Báscula","scale"], ["Créditos", "favorite"]],
    gerente: [["Llenar reporte","science"], ["Historial", "history"]],
    bascula: [["Llenar reporte","science"], ["Historial", "history"]]
  }

  let pestanas1 = tabs[props.rol].slice(0,(tabs[props.rol].length/2))
  let pestanas2 = tabs[props.rol].slice(tabs[props.rol].length/2, tabs[props.rol].length)

  return (
    <>
        <div className='cont-menu'>
        <img src={iconBack} className='icon-menu-fixed'></img>
          <div className='submenu'> 
          {
            pestanas1.map((items, i)=>
              <div className='submenu-item'>
                <span class="material-symbols-outlined icon-menu">{items[1]}</span>
                <p className='titulo-menu blanco'>{items[0]}</p>
              </div>  
            )
          }                                        
          </div>
          <img src={LogoBM} className='logo-menu'></img>
          <div className='submenu'> 
          {
            pestanas2.map((items, i)=>
              <div className='submenu-item'>
                <span class="material-symbols-outlined icon-menu">history</span>
                <p className='titulo-menu blanco'>{items[0]}</p>
              </div>  
            )
          }
          </div>
          <img src={iconLogout} className='icon-menu-fixed'></img>
        </div>
    </>
  )
}

export default Menu