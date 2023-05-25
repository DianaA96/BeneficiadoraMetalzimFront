import React, { useState } from "react";


const ModalDinamico = (props) => {

    function hideModal(){
        props.setModalVisibility(false)
    }

    return (
        <div className="modal-overlay">
            <div className="modal-warn">
                <div className="modal-header">
                    <div className="modal-header1">
                        {props.tipo === 'confirmacion' ?  <span class="material-symbols-outlined icon-modal" style={{color: "#dcbd79"}}> warning</span> : null}
                        {props.tipo === 'error' ?  <span class="material-symbols-outlined icon-modal" style={{color: "#AE4F4F"}}> error</span> : null}
                        {props.tipo === 'exito' ?  <span class="material-symbols-outlined icon-modal" style={{color: "#0EBA53"}}> task_alt</span> : null}

                        <div className="modal-title">
                            <h3>{props.titulo}</h3>
                        </div>
                    </div>
                    
                    <button className="buttonClose" onClick={hideModal}>
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                {props.tipo === 'confirmacion' ? <div className="modal-sep" style={{backgroundColor:"#dcbd79"}}></div>:null}
                {props.tipo === 'error' ? <div className="modal-sep" style={{backgroundColor:"#AE4F4F"}}></div>:null}
                {props.tipo === 'exito' ? <div className="modal-sep" style={{backgroundColor:"#0EBA53"}}></div>:null}

                <div className="modal-content">
                    <p className="modal-mensaje">
                        {props.mensaje}
                    </p>
                    <div className="modal-btns">
                        <button className="btn-modal-cancelar">Cancelar</button>
                        <button className="btn-modal-exito">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default ModalDinamico