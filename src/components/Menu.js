import React from 'react'
import "../styles/colors.css"
import "../styles/Menu.css"

import LogoBM from "../assets/Logo/logo.png"
import iconLab from "../assets/IconsLandingPages/labFormIcon.svg"
import iconHistory from "../assets/IconsLandingPages/historyIcon.svg"
import iconLogout from "../assets/IconsLandingPages/logoutIcon.svg"
import iconBack from "../assets/IconsLandingPages/BackIcon.svg"


function Menu(props) {

  return (
    <>
        <div className='cont-menu'>
        <img src={iconBack} className='icon-menu'></img>
          <div className='submenu'> 
            <div className='submenu-item'>
              <img src={iconLab} className='icon-menu'></img>
              <p className='titulo-menu blanco'>Reporte Gerencial</p>
            </div>
            
          </div>
          <img src={LogoBM} className='logo-menu'></img>
          <div className='submenu'> 
            <img src={iconHistory} className='icon-menu'></img>
          </div>
          <img src={iconLogout} className='icon-menu'></img>
        </div>
    </>
    


  )
}

export default Menu