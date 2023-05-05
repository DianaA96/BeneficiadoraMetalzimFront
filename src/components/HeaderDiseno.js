import React from 'react'
import "../styles/Headers.css"
import DisenoHead from "../assets/HeaderDisenos/DisenoHead.svg"

function HeaderDiseno(props) {

    var myDate = props.isDate;

    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleDateString("es-MX", options)

    if (myDate) {
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
                <div className="fechaFormLab">
                    <div className="fechaFormularioLab">
                        <span className="material-symbols-outlined iconFecha">calendar_today</span>
                        <div className="divFechaEspacio"></div>
                            <p>{fecha}</p>
                        </div>
                    <div className="lineaFechaFL"></div>
                </div>
                <img src={DisenoHead}></img>
            </header>
          )
    }
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