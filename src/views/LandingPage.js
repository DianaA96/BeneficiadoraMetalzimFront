import React from 'react'
import "../styles/landingPage.css"
import Science from "../assets/IconsLandingPages/science.png"
import Group from "../assets/IconsLandingPages/group.png"
import History from "../assets/IconsLandingPages/history.png"
import PaidAwesome from "../assets/IconsLandingPages/paid_awesome_view.png"
import Paid from "../assets/IconsLandingPages/paid.png"
import ScaleView from "../assets/IconsLandingPages/scale_view.png"
import Scale from "../assets/IconsLandingPages/scale.png"
import LogoMini from "../assets/IconsLandingPages/LogoMini.png"

function LandingPage() {
    const rol = "laboratorista"
    const opciones = [
        ["Registro de análisis de muestras", "F4A470", Science, 2],
        ["Análisis de laboratorio", "F7B990", History, 2]
    ]
    return (
        <body className="containerLandingPage">
            <div>
                <img className="miniLogo" src={LogoMini}/>
                <header className="titleLandingPage">Bienvenido, {rol}</header>
            </div>
            {opciones.map((option, i) =>
                <div className={`stripLandingPage strip${i+1}`} style={{width: `${100/option[3]}vw`}}> 
                    <span className="iconContainer">
                        <img className="iconLandingPage" src={option[2]}/>
                    </span>
                    <div className="textAndButtonInStrip">    
                        <p>{option[0]}</p>
                        <button className="buttonLandingPage">Ir<span className="material-symbols-outlined">expand_more</span></button>
                    </div>
                </div>
            )}
        </body>
    )
}

export default LandingPage