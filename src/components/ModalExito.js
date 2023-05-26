import React, { useState } from "react";
import { Link } from 'react-router-dom'


const ModalExito = (props) => {

    var titulo = "Reporte de Laboratorio"
    var subtitulo = "Horem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."


    function hideModal(){
        props.setModalVisibility(false)
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="top">
                    <button className="buttonClose" onClick={hideModal}>
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className="content">
                    <div className="descripcion">
                        <h1>El usuario ha sido editado con exito</h1>
                        <h3 className="n500">Bien</h3>
                        <Link to="/agregar-usuario" className="btn-agregar link-decoration">Guardar</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalExito