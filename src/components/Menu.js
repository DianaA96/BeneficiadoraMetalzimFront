import React from 'react'
import "../styles/colors.css"
import "../styles/Menu.css"

import LogoBM from "../assets/Logo/logo.png"
import iconLab from "../assets/IconsLandingPages/labFormIcon.svg"
import iconLogout from "../assets/IconsLandingPages/logoutIcon.svg"
import iconBack from "../assets/IconsLandingPages/BackIcon.svg"

import { useNavigate, Link } from 'react-router-dom';
import { aria } from 'aria-query'
import { useAuth } from '../auth-context'

function Menu(props) {
  const {logout} = useAuth();
  const navigate = useNavigate();

  var tabs = {
    laboratorista: [["Llenar reporte","science", '/formulario-laboratorio'], ["Historial", "history", '/historial-analisis']],
    admin: [["Reporte Gerencial","summarize", "/formulario-gerencial"], ["Admin. Usuarios", "group", '/usuarios'], ["Reporte Báscula","scale", '/historial-bascula_adminview'], ["Créditos", "favorite"]],
    gerente: [["Reporte Gerencial","summarize", "/historial-gerencia_managerview"], ["Reporte Báscula", "scale","/historial-bascula_managerview"]],
    bascula: [["Llenar reporte","scale", "/reporte-movimiento-mineral"], ["Historial", "history", "/historial-bascula_basculaview"]]
  }

  let pestanas1 = tabs[props.rol].slice(0,(tabs[props.rol].length/2))
  let pestanas2 = tabs[props.rol].slice(tabs[props.rol].length/2, tabs[props.rol].length)

  function handleLogout(){
    logout()
    navigate("/")
  }
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
          {/*TODO: Reemplazar por logica logout */}
          <img src={iconLogout} className='icon-menu-fixed' onClick={handleLogout}></img>
          
        </div>
    </>
  )
}

export default Menu