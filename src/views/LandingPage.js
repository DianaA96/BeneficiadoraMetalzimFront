import React from 'react'
import "../styles/landingPage.css"
import "../styles/button.css"
import Science from "../assets/IconsLandingPages/science.png"
import Group from "../assets/IconsLandingPages/group.png"
import History from "../assets/IconsLandingPages/history.png"
import PaidAwesome from "../assets/IconsLandingPages/paid_awesome_view.png"
import Paid from "../assets/IconsLandingPages/paid.png"
import ScaleView from "../assets/IconsLandingPages/scale_view.png"
import Scale from "../assets/IconsLandingPages/scale.png"
import ScaleEdit from "../assets/IconsLandingPages/ScaleEdit.png"
import LogoMini from "../assets/Logo/logo_blur.png"
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from '../auth-context'

// El rol se define pasando por props la variable y cambiando strips por el rol (del 0 al 3)

function LandingPage(props) {
    const {logout} = useAuth();

    function handleLogout(){
        logout()
        navigate("/")
    }
    
    let navigate = useNavigate()
    let strips = props.strips;
    const roles = ["laboratorista", "administrador", "gerente", "operario de báscula"]

    const opciones  = [[
        ["Registro de análisis de muestras", "F4A470", Science, 2,"/formulario-laboratorio"],
        ["Consulta historial de análisis", "F7B990", History, 2,"/historial-analisis"]
    ], [
        ["Reporte gerencial", "EF7B30", Paid, 2, "/formulario-gerencial"],
        ["Administración de usuarios", "F3995E", Group, 2, "/usuarios"],
        ["Reportes de báscula", "F6B68C", Scale, 2, "/historial-bascula_adminview"]
    ], [
        ["Visualizar reporte gerencial", "F4A470", PaidAwesome, 2, "/historial-gerencia_managerview"],
        ["Visualizar reporte de báscula", "F7B990", ScaleView, 2, "/historial-bascula_managerview"]
    ], [
        ["Registro de movimiento de mineral", "F4A470", ScaleEdit, 2, "/reporte-movimiento-mineral"],
        ["Consulta historial de movimiento de báscula", "F7B990", History, 2, "/historial-bascula_basculaview"]
    ]]

        return (
            <body className="containerLandingPage">
                <div>
                    <img className="miniLogo" src={LogoMini}/>
                    <header className="titleLandingPage">Bienvenido, {roles[strips]}
                        {/*TODO: Reemplazar por logica logout */} 
                        <button className='buttonLogOutLP' onClick={handleLogout}><span class="material-symbols-outlined">logout</span></button>
                    </header>
                    
                </div>
                {opciones[strips].map((option, i) =>
                    <div className={`stripLandingPage strip${i+1}`} style={{width: `${100/option[3]}vw`}}> 
                        <div className="iconContainer">
                            <img className={`${option[2] == ScaleEdit ? "dimVar" : "iconLandingPage"}`} src={option[2]}/>
                        </div>
                        <div className="textAndButtonInStrip">    
                            <p>{option[0]}</p>
                            <Link to={option[4]}>
                                <button className={`buttonLandingPage ${strips == 1 && i == 2 ? "buttonLandingPage2": ""}`}><span className='textoEnBotonLP'>Ir</span></button>
                            </Link>
                            
                            <p className='iconButtonLandingPage'><span className="material-symbols-outlined">expand_more</span></p>
                        </div>
                    </div>
                )}
            </body>
        )
}

export default LandingPage