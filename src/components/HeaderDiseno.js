import React from 'react'
import "../styles/Headers.css"
import DisenoHead from "../assets/HeaderDisenos/DisenoHead.svg"

function HeaderDiseno(props) {
   
    return (
        <header className="containerHeadDesign">
            <div className="containerHeaders">
                <title>{props.titulo}</title>
                <div className="titleHeader">
                    {props.titulo}
                </div>
                <p className="SubtitleleHeader">
                    {props.subtitulo}
                </p>
            </div>
            <img src={DisenoHead}></img>
        </header>
      )
}

export default HeaderDiseno