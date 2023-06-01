import React, { useState, useEffect } from "react";
import Formulario from "../components/Formulario";
import "../styles/formularioLaboratorio.css";
import HeaderSencillo from "../components/HeaderSencillo";
import Menu from "../components/Menu";
import Pattern from "../assets/PatternsPages/pattern1.png"
import CalendarDatePicker from "../components/calendarDatePicker";
import Select from 'react-select';
import axios from "axios";

const formularioPrimerNivel = ["Primer turno", "Segundo turno", "Tercer turno"]
const formularioSegundoNivel = [["Cabeza", "Concentración plomo" , "Concentración zinc", "Cola final"], ["Cabeza", "Concentración plomo" , "Concentración zinc", "Cola final"], ["Cabeza", "Concentración plomo" , "Concentración zinc", "Cola final"]]
const inputBase = [["Ag", "g/ton"], ["Pb", "%"], ["Zn", "%"], ["Cu", "%"], ["Fe", "%"], ["Sb", "%"], ["As", "%"], ["Cd", "%"], ["PbO", "%"], ["ZnO", "%"]]

function FormularioLaboratorio(props) {

    let usuario = props.idUsuario

    usuario = 2
    
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleDateString("es-MX", options)
    
    const [ mina, setMina ] = useState({ value: '0', label: '' });
    const [ planta, setPlanta ] = useState({ value: '0', label: '' });

    const [ fechaMuestreo, setFechaMuestreo ] = useState("")
    const [ fechaEnsaye, setFechaEnsaye ] = useState("")
    
    const options1 = [
        { value: '1', label: 'Minesites' },
        { value: '2', label: 'Guadalupe' },
        { value: '3', label: 'Balcones' },
    ];
    const options2 = [
        { value: '1', label: 'Uno' },
        { value: '2', label: 'Dos' },
    ];

    let formularioParaPost = {
        "idUsuario": usuario,
        "idMina": parseInt(mina.value),
        "idPlanta": parseInt(planta.value),
        "fechaMuestreo": fechaMuestreo,
        "fechaEnsaye": fechaEnsaye,
        "primerT":{
            "Cabeza": {
            "Ag": 0,
            "Pb": 0,
            "Zn": 0,
            "Cu": 0,
            "Fe": 0,
            "Sb": 0,
            "As": 0,
            "Cd": 0,
            "PbO": 0,
            "ZnO": 0
        },
        "Pb": {
            "Ag": 0,
            "Pb": 0,
            "Zn": 0,
            "Cu": 0,
            "Fe": 0,
            "Sb": 0,
            "As": 0,
            "Cd": 0,
            "PbO": 0,
            "ZnO": 0
        },
        "Zn": {
            "Ag": 0,
            "Pb": 0,
            "Zn": 0,
            "Cu": 0,
            "Fe": 0,
            "Sb": 0,
            "As": 0,
            "Cd": 0,
            "PbO": 0,
            "ZnO": 0
        },
        "Colas": {
            "Ag": 0,
            "Pb": 0,
            "Zn": 0,
            "Cu": 0,
            "Fe": 0,
            "Sb": 0,
            "As": 0,
            "Cd": 0,
            "PbO": 0,
            "ZnO": 0
        }
        },
        "segundoT":{
            "Cabeza": {
            "Ag": 0,
            "Pb": 0,
            "Zn": 0,
            "Cu": 0,
            "Fe": 0,
            "Sb": 0,
            "As": 0,
            "Cd": 0,
            "PbO": 0,
            "ZnO": 0
        },
        "Pb": {
            "Ag": 0,
            "Pb": 0,
            "Zn": 0,
            "Cu": 0,
            "Fe": 0,
            "Sb": 0,
            "As": 0,
            "Cd": 0,
            "PbO": 0,
            "ZnO": 0
        },
        "Zn": {
            "Ag": 0,
            "Pb": 0,
            "Zn": 0,
            "Cu": 0,
            "Fe": 0,
            "Sb": 0,
            "As": 0,
            "Cd": 0,
            "PbO": 0,
            "ZnO": 0
        },
        "Colas": {
            "Ag": 0,
            "Pb": 0,
            "Zn": 0,
            "Cu": 0,
            "Fe": 0,
            "Sb": 0,
            "As": 0,
            "Cd": 0,
            "PbO": 0,
            "ZnO": 0
        }
        },
        "tercerT":{
            "Cabeza": {
            "Ag": 0,
            "Pb": 0,
            "Zn": 0,
            "Cu": 0,
            "Fe": 0,
            "Sb": 0,
            "As": 0,
            "Cd": 0,
            "PbO": 0,
            "ZnO": 0
        },
        "Pb": {
            "Ag": 0,
            "Pb": 0,
            "Zn": 0,
            "Cu": 0,
            "Fe": 0,
            "Sb": 0,
            "As": 0,
            "Cd": 0,
            "PbO": 0,
            "ZnO": 0
        },
        "Zn": {
            "Ag": 0,
            "Pb": 0,
            "Zn": 0,
            "Cu": 0,
            "Fe": 0,
            "Sb": 0,
            "As": 0,
            "Cd": 0,
            "PbO": 0,
            "ZnO": 0
        },
        "Colas": {
            "Ag": 0,
            "Pb": 0,
            "Zn": 0,
            "Cu": 0,
            "Fe": 0,
            "Sb": 0,
            "As": 0,
            "Cd": 0,
            "PbO": 0,
            "ZnO": 0
        }
        }
    }

    function handleInputChange(event) {
        event.target.defaultValue = null
        console.log(event)
        if(event.target.name.includes("Primer turno")) {
            if(event.target.name.includes("Cabeza")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.primerT.Cabeza.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.primerT.Cabeza.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.primerT.Cabeza.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.primerT.Cabeza.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.primerT.Cabeza.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.primerT.Cabeza.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.primerT.Cabeza.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.primerT.Cabeza.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.primerT.Cabeza.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.primerT.Cabeza.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("plomo")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.primerT.Pb.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.primerT.Pb.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.primerT.Pb.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.primerT.Pb.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.primerT.Pb.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.primerT.Pb.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.primerT.Pb.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.primerT.Pb.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.primerT.Pb.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.primerT.Pb.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("zinc")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.primerT.Zn.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.primerT.Zn.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.primerT.Zn.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.primerT.Zn.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.primerT.Zn.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.primerT.Zn.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.primerT.Zn.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.primerT.Zn.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.primerT.Zn.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.primerT.Zn.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("Cola")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.primerT.Colas.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.primerT.Colas.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.primerT.Colas.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.primerT.Colas.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.primerT.Colas.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.primerT.Colas.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.primerT.Colas.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.primerT.Colas.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.primerT.Colas.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.primerT.Colas.Cd = event.target.valueAsNumber
                }
            }
        }
        else if(event.target.name.includes("Segundo turno")) {
            if(event.target.name.includes("Cabeza")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.segundoT.Cabeza.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.segundoT.Cabeza.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.segundoT.Cabeza.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.segundoT.Cabeza.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.segundoT.Cabeza.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.segundoT.Cabeza.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.segundoT.Cabeza.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.segundoT.Cabeza.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.segundoT.Cabeza.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.segundoT.Cabeza.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("plomo")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.segundoT.Pb.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.segundoT.Pb.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.segundoT.Pb.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.segundoT.Pb.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.segundoT.Pb.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.segundoT.Pb.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.segundoT.Pb.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.segundoT.Pb.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.segundoT.Pb.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.segundoT.Pb.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("zinc")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.segundoT.Zn.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.segundoT.Zn.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.segundoT.Zn.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.segundoT.Zn.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.segundoT.Zn.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.segundoT.Zn.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.segundoT.Zn.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.segundoT.Zn.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.segundoT.Zn.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.segundoT.Zn.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("Cola")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.segundoT.Colas.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.segundoT.Colas.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.segundoT.Colas.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.segundoT.Colas.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.segundoT.Colas.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.segundoT.Colas.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.segundoT.Colas.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.segundoT.Colas.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.segundoT.Colas.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.segundoT.Colas.Cd = event.target.valueAsNumber
                }
            }
        }
        else if(event.target.name.includes("Tercer turno")) {
            if(event.target.name.includes("Cabeza")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.tercerT.Cabeza.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.tercerT.Cabeza.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.tercerT.Cabeza.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.tercerT.Cabeza.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.tercerT.Cabeza.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.tercerT.Cabeza.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.tercerT.Cabeza.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.tercerT.Cabeza.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.tercerT.Cabeza.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.tercerT.Cabeza.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("plomo")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.tercerT.Pb.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.tercerT.Pb.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.tercerT.Pb.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.tercerT.Pb.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.tercerT.Pb.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.tercerT.Pb.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.tercerT.Pb.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.tercerT.Pb.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.tercerT.Pb.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.tercerT.Pb.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("zinc")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.tercerT.Zn.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.tercerT.Zn.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.tercerT.Zn.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.tercerT.Zn.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.tercerT.Zn.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.tercerT.Zn.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.tercerT.Zn.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.tercerT.Zn.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.tercerT.Zn.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.tercerT.Zn.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("Cola")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.tercerT.Colas.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.tercerT.Colas.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.tercerT.Colas.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.tercerT.Colas.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.tercerT.Colas.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.tercerT.Colas.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.tercerT.Colas.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.tercerT.Colas.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.tercerT.Colas.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.tercerT.Colas.Cd = event.target.valueAsNumber
                }
            }
        }
    }

    function handleSendForm() {
        console.log(formularioParaPost)
        axios({
            method: 'post',
            url: `http://localhost:3050/lab/labReport`,
            data: {...formularioParaPost},
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((result)=>{
            alert('¡Información enviada!');
        })
        .catch(error =>{
            alert('Algo malo pasó:', error);
        })
    }

    return(
        <>
            <div className="pageFormularioLab">
                <div className="formYHeaderFormLab">
                    <div className="headerFormLaboratorio">
                        <HeaderSencillo
                        titulo="Formulario de laboratorio"
                        subtitulo="Registra los resultados obtenidos durante el análisis de laboratorio por turno. Selecciona la mina, la planta y las fechas, luego ingresa los valores obtenidos. Usa las flechas para desplazarte a las casillas continuas."
                        isDate={true}
                        />
                    </div>
                    <div className="divFormulario">
                        <div className="inputsContenedor">
                            <p>MINERAL</p>
                            <div className="setOfInputs">
                                <Select
                                    onChange={setMina}
                                    options={options1}
                                    placeholder="Mina"
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: state.isFocused ? '#EF7B30' : 'transparent',
                                            backgroundColor: '#f9caac',
                                            borderRadius: "10px",
                                            width: "130px",
                                            cursor: "pointer",
                                        }),
                                        menu: (baseStyles, state) => ({
                                            ...baseStyles,
                                            backgroundColor: '#f9caac',
                                        }),
                                        option: (baseStyles, state) => ({
                                            ...baseStyles,
                                            backgroundColor: '#f9caac',
                                            "&:hover": {
                                                backgroundColor: "#EF7B30"
                                              }
                                        }),
                                        placeholder: (baseStyles, state) => ({
                                        ...baseStyles,
                                            color: state.isFocused ? '#333333' : '#333333',
                                        }),
                                        dropdownIndicator: (baseStyles, state) => ({
                                            ...baseStyles,
                                            color: state.isFocused ? '#333333' : '#333333',
                                        }),
                                        indicatorSeparator: (baseStyles, state) => ({
                                            ...baseStyles,
                                            backgroundColor: "transparent",
                                        }),
                                    }}
                                    />
                                <Select
                                    onChange={setPlanta}
                                    options={options2}
                                    placeholder="Planta"
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: state.isFocused ? '#EF7B30' : 'transparent',
                                            backgroundColor: '#f9caac',
                                            borderRadius: "10px",
                                            width: "100px",
                                            cursor: "pointer",
                                        }),
                                        menu: (baseStyles, state) => ({
                                            ...baseStyles,
                                            backgroundColor: '#f9caac',
                                        }),
                                        option: (baseStyles, state) => ({
                                            ...baseStyles,
                                            backgroundColor: '#f9caac',
                                            "&:hover": {
                                                backgroundColor: "#EF7B30"
                                              }
                                        }),
                                        placeholder: (baseStyles, state) => ({
                                        ...baseStyles,
                                            color: state.isFocused ? '#333333' : '#333333',
                                        }),
                                        dropdownIndicator: (baseStyles, state) => ({
                                            ...baseStyles,
                                            color: state.isFocused ? '#333333' : '#333333',
                                        }),
                                        indicatorSeparator: (baseStyles, state) => ({
                                            ...baseStyles,
                                            backgroundColor: "transparent",
                                        }),
                                    }}
                                    />
                                <CalendarDatePicker idCalendario={"Muestreo"} tipoDeCalendario={"Muestreo: "} setFecha={setFechaMuestreo}/>
                                <CalendarDatePicker idCalendario={"Ensaye"} tipoDeCalendario={"Ensaye: "} setFecha={setFechaEnsaye}/>
                            </div>
                        </div>
                        <div className="formularioContenedor">
                            <Formulario 
                            formularioPrimerNivel={formularioPrimerNivel} 
                            formularioSegundoNivel={formularioSegundoNivel} 
                            inputBase={inputBase}
                            cantidadDeElementosEnFila={10}
                            handleInputChange={handleInputChange}
                            handleSendForm={handleSendForm}
                            mostrarBotones={true}/>
                        </div>
                    </div>
                    <footer style={{ height: `20vh` }}/>
                </div>
                <div className="bandaDerecha">
                    <div className="imagenPatron" style={{ backgroundImage: `url(${Pattern})` }}>
                    </div>
                </div>
            </div>
            <Menu rol="laboratorista" activeTab="science"></Menu>
        </>
    )
}

export default FormularioLaboratorio
