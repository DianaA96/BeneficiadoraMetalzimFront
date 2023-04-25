import React from 'react'
import "../styles/Headers.css"

function HeaderSencillo() {
    const titulo = "Reporte de laboratorio"
    const subtitulo = "Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."

    return (
        <header className="containerHeaders">
            <title>{titulo}</title>
            <div className="titleHeader">
                {titulo}
            </div>
            <p className="SubtitleleHeader">
                {subtitulo}
            </p>
        </header>
    )
}

export default HeaderSencillo