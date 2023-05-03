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

function FormularioLaboratorio() {
    
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleDateString("es-MX", options)
    
    const [selectedOption, setSelectedOption] = useState(null);
    

    const options1 = [
        { value: 'Minesites', label: 'Minesites' },
        { value: 'Guadalupe', label: 'Guadalupe' },
        { value: 'Balcones', label: 'Balcones' },
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

    return(
        <>
            <div className="pageFormularioLab">
                <div className="formYHeaderFormLab">
                    <div className="headerFormLaboratorio">
                        <HeaderSencillo titulo="Formulario de laboratorio" subtitulo="Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."/>
                        <div className="fechaFormLab">
                            <div className="fechaFormularioLab">
                                <span className="material-symbols-outlined iconFecha">calendar_today</span>
                                <div className="divFechaEspacio"></div>
                                <p>{fecha}</p>
                            </div>
                            <div className="lineaFechaFL"></div>
                        </div>
                    </div>
                    <div className="divFormulario">
                        <div className="inputsContenedor">
                            <p>MINERAL</p>
                            <div className="setOfInputs">
                                <Select
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options1}
                                    placeholder="Mina"
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: state.isFocused ? '#EF7B30' : 'transparent',
                                            backgroundColor: '#f9caac',
                                            borderRadius: "10px",
                                            width: "130px",
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
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options2}
                                    placeholder="Planta"
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: state.isFocused ? '#EF7B30' : 'transparent',
                                            backgroundColor: '#f9caac',
                                            borderRadius: "10px",
                                            width: "100px",
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
                                <CalendarDatePicker idCalendario={"Muestreo"} tipoDeCalendario={"Muestreo: "}/>
                                <CalendarDatePicker idCalendario={"Ensaye"} tipoDeCalendario={"Ensaye: "}/>
                            </div>
                        </div>
                        <div className="formularioContenedor">
                            <Formulario 
                            formularioPrimerNivel={formularioPrimerNivel} 
                            formularioSegundoNivel={formularioSegundoNivel} 
                            inputBase={inputBase}/>
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
