import React from 'react'
import "../styles/colors.css"
import "../styles/Menu.css"

import LogoBM from "../assets/Logo/logo.png"
import iconLab from "../assets/IconsLandingPages/labFormIcon.svg"
import iconLogout from "../assets/IconsLandingPages/logoutIcon.svg"
import iconBack from "../assets/IconsLandingPages/BackIcon.svg"

import { useNavigate, Link } from 'react-router-dom';
import { aria } from 'aria-query'

function Menu(props) {

  const navigate = useNavigate();

  var tabs = {
    laboratorista: [["Llenar reporte","science"], ["Historial", "history"]],
    admin: [["Reporte Gerencial","summarize", "/reporte-gerencial"], ["Admin. Usuarios", "group", '/usuarios'], ["Reporte Báscula","scale", '/reporte-bascula'], ["Créditos", "favorite"]],
    gerente: [["Reporte Gerencial","summarize"], ["Reporte Báscula", "scale"]],
    bascula: [["Llenar reporte","scale"], ["Historial", "history"]]
  }

  let pestanas1 = tabs[props.rol].slice(0,(tabs[props.rol].length/2))
  let pestanas2 = tabs[props.rol].slice(tabs[props.rol].length/2, tabs[props.rol].length)

  return (
    <>
        <div className='cont-menu'>
        <img src={iconBack} className='icon-menu-fixed' onClick={() => navigate(-1) } title='Atrás'></img>
          <div className='submenu'> 
          {
            pestanas1.map((items, i)=>
              <Link to={items[2]} className={props.activeTab===items[1] ? 'submenu-item submenu-item-active' : 'submenu-item'}>
                <span class="material-symbols-outlined icon-menu">{items[1]}</span>
                <p className='titulo-menu blanco'>{items[0]}</p>
              </Link>  
            )
          }                                        
          </div>
          
          <Link to={props.landing}>
            <img src={LogoBM} className='logo-menu'></img>
          </Link>
          
          <div className='submenu'> 
          {
            pestanas2.map((items, i)=>
              <Link to={items[2]} className={props.activeTab===items[1] ? 'submenu-item submenu-item-active' : 'submenu-item'}>
                <span class="material-symbols-outlined icon-menu">{items[1]}</span>
                <p className='titulo-menu blanco'>{items[0]}</p>
              </Link>  
            )
          }
          </div>
          <img src={iconLogout} className='icon-menu-fixed'></img>
        </div>
    </>
  )
}

export default Menu