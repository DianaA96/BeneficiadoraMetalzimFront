import React from 'react'
import "../styles/Headers.css"
import DisenoHead from "../assets/HeaderDisenos/DisenoHead.svg"

function HeaderDiseno() {
    return (
        <header className="containerHeadDesign">
            <div className="containerHeaders">
                <title>Reporte de laboratorio</title>
                <div className="titleHeader">
                    Reporte de laboratorio
                </div>
                <p className="SubtitleleHeader">
                    Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
            </div>
            <img src={DisenoHead}></img>
        </header>
      )
}

export default HeaderDiseno