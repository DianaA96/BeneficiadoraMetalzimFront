import React from 'react'
import "../styles/Headers.css"

function HeaderSencillo(props) {

    var myDate = props.isDate;

    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleDateString("es-MX", options)
 
    if (myDate) {
        return (
            <header className="containerHeaders">
                <title>{props.titulo}</title>
                <div className="titleHeader">
                    {props.titulo}
                </div>
                <p className="SubtitleleHeader">
                    {props.subtitulo}
                </p>
                <div className="fechaFormLab">
                    <div className="fechaFormularioLab">
                        <span className="material-symbols-outlined iconFecha">calendar_today</span>
                        <div className="divFechaEspacio"></div>
                            <p>{fecha}</p>
                        </div>
                    <div className="lineaFechaFL"></div>
                </div>
            </header>
        )
    }
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