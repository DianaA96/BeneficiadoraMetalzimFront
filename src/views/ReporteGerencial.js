import React from 'react'
import HeaderDiseno from "../components/HeaderDiseno"
import "../styles/colors.css"
import "../styles/button.css"
import "../styles/ListaReportes.css"
import "../styles/ReporteGerencial.css"

import "../styles/Registro.css"

function ReporteGerencial() {
  return (
    <>
        <HeaderDiseno
        titulo={"Reporte Gerencial"}
        subtitulo={"Llena los campos en cada sección para generar el reporte gerencial."}
        isDate={true}
        />
        <div className="cont-tabla">
            <div className="seccion-reporte">
                <div className="header-seccion-reporte">
                    <div className='secc-1'>
                        <h3 className="p1000 titulo-seccion">Movimiento de mineral</h3>
                        <div className="sep-seccion"></div>
                    </div>
                    <div className="btn-detalles-seccion">
                        <span class="material-symbols-outlined">
                        visibility
                        </span>
                        <p className="blanco texto-btn">Reporte de báscula</p>
                    </div>                    
                </div>

                <div className="movmineral-item">
                    <p className="bold p800">Existencia</p>
                    <p className="n700">Dia inicial</p>
                    <input type="text" />
                </div>
            </div>
            
            
            <div className="seccion-reporte">
                <div className="header-seccion-reporte">
                    <div className='secc-1'>
                        <h3 className="p1000 titulo-seccion">Balance metalúrgico</h3>
                        <div className="sep-seccion"></div>
                    </div>
                    <div className="btn-detalles-seccion">
                        <span class="material-symbols-outlined">
                        visibility
                        </span>
                        <p className="blanco texto-btn">Análisis de laboratorio</p>
                    </div>
                </div>
                
            </div>
            <div className="seccion-reporte">
                <div className="header-seccion-reporte">
                    <div className='secc-1'>
                        <h3 className="p1000 titulo-seccion">Precio de los metales (USD)</h3>
                        <div className="sep-seccion"></div>
                    </div>
                </div>
                
            </div>
            
        </div>                               
    </>
  )
}

export default ReporteGerencial