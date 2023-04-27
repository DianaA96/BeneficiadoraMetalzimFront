import React from 'react'
import "../styles/Headers.css"

function HeaderSencillo(props) {
 
    return (
        <header className="containerHeaders">
            <title>{props.titulo}</title>
            <div className="titleHeader">
                {props.titulo}
            </div>
            <p className="SubtitleleHeader">
                {props.subtitulo}
            </p>
        </header>
    )
}

export default HeaderSencillo