import React, { useState, useEffect } from "react";
import Formulario from "../components/Formulario";
import "../styles/formularioLaboratorio.css";
import HeaderSencillo from "../components/HeaderSencillo";
import Menu from "../components/Menu";
import Pattern from "../assets/PatternsPages/pattern1.png"
import CalendarDatePicker from "../components/calendarDatePicker";
import Select from 'react-select';

const formularioPrimerNivel = ["Primer turno", "Segundo turno", "Tercer turno"]
const formularioSegundoNivel = [["Cabeza", "Concentración plomo" , "Concentración zinc", "Cola final"], ["Cabeza", "Concentración plomo" , "Concentración zinc", "Cola final"], ["Cabeza", "Concentración plomo" , "Concentración zinc", "Cola final"]]
const inputBase = [["Ag", "g/ton"], ["Pb", "%"], ["Zn", "%"], ["Cu", "%"], ["Fe", "%"], ["Sb", "%"], ["As", "%"], ["Cd", "%"], ["PbO", "%"], ["ZnO", "%"]]

function FormularioLaboratorio(props) {
    
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

    const [ heightSize, setHeightSize ] = useState(0)

    useEffect(() => {
        setHeightSize(window.innerWidth)
        return () => {
        };
    }, []);

    function handleInputChange(event) {
        //console.log(event.target.valueAsNumber)
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
                    formularioParaPost.primerT.cPlomo.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.primerT.cPlomo.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.primerT.cPlomo.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.primerT.cPlomo.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.primerT.cPlomo.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.primerT.cPlomo.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.primerT.cPlomo.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.primerT.cPlomo.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.primerT.cPlomo.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.primerT.cPlomo.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("zinc")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.primerT.cZinc.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.primerT.cZinc.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.primerT.cZinc.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.primerT.cZinc.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.primerT.cZinc.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.primerT.cZinc.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.primerT.cZinc.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.primerT.cZinc.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.primerT.cZinc.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.primerT.cZinc.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("Cola")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.primerT.Cola.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.primerT.Cola.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.primerT.Cola.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.primerT.Cola.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.primerT.Cola.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.primerT.Cola.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.primerT.Cola.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.primerT.Cola.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.primerT.Cola.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.primerT.Cola.Cd = event.target.valueAsNumber
                }
            }
        }
        else if(event.target.name.includes("Segundo turno")) {
            if(event.target.name.includes("Cabeza")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.segT.Cabeza.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.segT.Cabeza.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.segT.Cabeza.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.segT.Cabeza.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.segT.Cabeza.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.segT.Cabeza.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.segT.Cabeza.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.segT.Cabeza.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.segT.Cabeza.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.segT.Cabeza.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("plomo")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.segT.cPlomo.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.segT.cPlomo.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.segT.cPlomo.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.segT.cPlomo.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.segT.cPlomo.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.segT.cPlomo.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.segT.cPlomo.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.segT.cPlomo.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.segT.cPlomo.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.segT.cPlomo.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("zinc")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.segT.cZinc.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.segT.cZinc.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.segT.cZinc.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.segT.cZinc.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.segT.cZinc.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.segT.cZinc.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.segT.cZinc.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.segT.cZinc.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.segT.cZinc.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.segT.cZinc.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("Cola")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.segT.Cola.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.segT.Cola.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.segT.Cola.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.segT.Cola.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.segT.Cola.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.segT.Cola.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.segT.Cola.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.segT.Cola.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.segT.Cola.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.segT.Cola.Cd = event.target.valueAsNumber
                }
            }
        }
        else if(event.target.name.includes("Tercer turno")) {
            if(event.target.name.includes("Cabeza")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.terT.Cabeza.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.terT.Cabeza.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.terT.Cabeza.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.terT.Cabeza.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.terT.Cabeza.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.terT.Cabeza.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.terT.Cabeza.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.terT.Cabeza.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.terT.Cabeza.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.terT.Cabeza.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("plomo")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.terT.cPlomo.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.terT.cPlomo.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.terT.cPlomo.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.terT.cPlomo.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.terT.cPlomo.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.terT.cPlomo.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.terT.cPlomo.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.terT.cPlomo.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.terT.cPlomo.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.terT.cPlomo.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("zinc")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.terT.cZinc.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.terT.cZinc.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.terT.cZinc.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.terT.cZinc.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.terT.cZinc.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.terT.cZinc.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.terT.cZinc.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.terT.cZinc.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.terT.cZinc.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.terT.cZinc.Cd = event.target.valueAsNumber
                }
            }
            else if(event.target.name.includes("Cola")) {
                if(event.target.name.includes("Ag")) {
                    formularioParaPost.terT.Cola.Ag = event.target.valueAsNumber
                }
                else if(event.target.name.includes("PbO")) {
                    formularioParaPost.terT.Cola.PbO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("ZnO")) {
                    formularioParaPost.terT.Cola.ZnO = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Pb")) {
                    formularioParaPost.terT.Cola.Pb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Zn")) {
                    formularioParaPost.terT.Cola.Zn = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cu")) {
                    formularioParaPost.terT.Cola.Cu = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Fe")) {
                    formularioParaPost.terT.Cola.Fe = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Sb")) {
                    formularioParaPost.terT.Cola.Sb = event.target.valueAsNumber
                }
                else if(event.target.name.includes("As")) {
                    formularioParaPost.terT.Cola.As = event.target.valueAsNumber
                }
                else if(event.target.name.includes("Cd")) {
                    formularioParaPost.terT.Cola.Cd = event.target.valueAsNumber
                }
            }
        }
    }

    let formularioParaPost = {
        "idUsuario": props.idUsuario,
        "idMina": mina.value,
        "idPlanta": planta.value,
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
        "cPlomo": {
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
        "cZinc": {
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
        "Cola": {
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
        "segT":{
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
        "cPlomo": {
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
        "cZinc": {
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
        "Cola": {
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
        "terT":{
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
        "cPlomo": {
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
        "cZinc": {
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
        "Cola": {
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

    function handleSendForm() {
        console.log(formularioParaPost)
    }

    return(
        <>
            <div className="pageFormularioLab">
                <div className="formYHeaderFormLab">
                    <div className="headerFormLaboratorio">
                        <HeaderSencillo
                        titulo="Formulario de laboratorio"
                        subtitulo="Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
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
                            handleSendForm={handleSendForm}/>
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
