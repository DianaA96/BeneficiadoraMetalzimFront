import React, { useState } from "react";
import Formulario from "../components/Formulario";
import "../styles/formularioLaboratorio.css";
import HeaderSencillo from "../components/HeaderSencillo";
import Menu from "../components/Menu";
import Pattern from "../assets/PatternsPages/pattern1.png"
import CalendarDatePicker from "../components/calendarDatePicker";
import ModalConfirmacion from '../components/ModalDinamico';
import ModalError from '../components/ModalDinamico';
import Select from 'react-select';
import moment, { Moment } from "moment";
import { useNavigate } from "react-router-dom";
import 'moment/locale/es';
import axios from "axios";

const formularioPrimerNivel = ["Primer turno", "Segundo turno", "Tercer turno"]
const formularioSegundoNivel = [["Cabeza", "Concentración plomo" , "Concentración zinc", "Cola final"], ["Cabeza", "Concentración plomo" , "Concentración zinc", "Cola final"], ["Cabeza", "Concentración plomo" , "Concentración zinc", "Cola final"]]
const inputBase = [["Ag", "g/ton"], ["Pb", "%"], ["Zn", "%"], ["Cu", "%"], ["Fe", "%"], ["Sb", "%"], ["As", "%"], ["Cd", "%"], ["PbO", "%"], ["ZnO", "%"]]

function FormularioLaboratorio(props) {
    let navigate = useNavigate();
    let usuario = props.idUsuario

    usuario = 2
    
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleDateString("es-MX", options)
    
    const [ mina, setMina ] = useState({ value: '0', label: '' });
    const [ planta, setPlanta ] = useState({ value: '0', label: '' });

    const [ fechaMuestreo, setFechaMuestreo ] = useState(moment().format("YYYY-MM-DD"))
    const [ fechaEnsaye, setFechaEnsaye ] = useState(moment().format("YYYY-MM-DD"))
    const [ idLab, setIdLab ] = useState("")
    const [ loaderVisibility, setLoaderVisibility ] = useState(false)

    const options1 = [
        { value: '1', label: 'Minesites' },
        { value: '2', label: 'Guadalupe' },
        { value: '3', label: 'Balcones' },
    ];

    const options2 = [
        { value: '1', label: 'Uno' },
        { value: '2', label: 'Dos' },
    ];

    const [ formularioParaPost, setFormularioParaPost ] = useState({
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
    })

    const [ modalVisibility, setModalVisibility ] = useState(false)
    const [ modalExitoVisibility, setModalExitoVisibility ] = useState(false)
    const [ modalErrorVisibility, setModalErrorVisibility ] = useState(false)
    const [ modalErrorHaSidoAbierto, setModalErrorHaSidoAbierto ] = useState(false)


    function showModal(){
        if(mina.label != '' && planta.label != '') {
            setModalVisibility(true)
        } 
        else {
            setModalErrorVisibility(true)
            setModalErrorHaSidoAbierto(true)
            if(mina.label == '') {
                document.getElementsByClassName("inputsContenedor")[0].firstChild.nextSibling.firstChild.children[3].focus()
            }
            else if (planta.label == '') {
                document.getElementsByClassName("inputsContenedor")[0].firstChild.nextSibling.firstChild.nextSibling.children[3].focus()
            }
        }
    }

    function handleInputChange(event) {
        let minaCodigo, fechaCodigo;
        fechaCodigo = `${fechaEnsaye.substring(8,10) + fechaEnsaye.substring(5,7) + fechaEnsaye.substring(2,4)}`;
        setIdLab(`RLB${mina.value}${fechaCodigo}`)
        console.log(idLab)

        event.target.defaultValue = null
        if(event.target.name.includes("Primer turno")) {
            if(event.target.name.includes("Cabeza")) {
                if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Cabeza.Ag = 0
                    }
                    else {
                        valoresPrevios.primerT.Cabeza.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("PbO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Cabeza.PbO = 0
                    }
                    else {
                        valoresPrevios.primerT.Cabeza.PbO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("ZnO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Cabeza.ZnO = 0
                    }
                    else {
                        valoresPrevios.primerT.Cabeza.ZnO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Cabeza.Pb = 0
                    }
                    else {
                        valoresPrevios.primerT.Cabeza.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Cabeza.Zn = 0
                    }
                    else {
                        valoresPrevios.primerT.Cabeza.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Cabeza.Cu = 0
                    }
                    else {
                        valoresPrevios.primerT.Cabeza.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Cabeza.Fe = 0
                    }
                    else {
                        valoresPrevios.primerT.Cabeza.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Cabeza.Sb = 0
                    }
                    else {
                        valoresPrevios.primerT.Cabeza.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("As")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Cabeza.As = 0
                    }
                    else {
                        valoresPrevios.primerT.Cabeza.As = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Cabeza.Cd = 0
                    }
                    else {
                        valoresPrevios.primerT.Cabeza.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
            else if(event.target.name.includes("plomo")) {
                if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Pb.Ag = 0
                    }
                    else {
                        valoresPrevios.primerT.Pb.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("PbO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Pb.PbO = 0
                    }
                    else {
                        valoresPrevios.primerT.Pb.PbO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("ZnO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Pb.ZnO = 0
                    }
                    else {
                        valoresPrevios.primerT.Pb.ZnO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Pb.Pb = 0
                    }
                    else {
                        valoresPrevios.primerT.Pb.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Pb.Zn = 0
                    }
                    else {
                        valoresPrevios.primerT.Pb.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Pb.Cu = 0
                    }
                    else {
                        valoresPrevios.primerT.Pb.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Pb.Fe = 0
                    }
                    else {
                        valoresPrevios.primerT.Pb.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Pb.Sb = 0
                    }
                    else {
                        valoresPrevios.primerT.Pb.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("As")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Pb.As = 0
                    }
                    else {
                        valoresPrevios.primerT.Pb.As = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Pb.Cd = 0
                    }
                    else {
                        valoresPrevios.primerT.Pb.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
            else if(event.target.name.includes("zinc")) {
                if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Zn.Ag = 0
                    }
                    else {
                        valoresPrevios.primerT.Zn.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("PbO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Zn.PbO = 0
                    }
                    else {
                        valoresPrevios.primerT.Zn.PbO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("ZnO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Zn.ZnO = 0
                    }
                    else {
                        valoresPrevios.primerT.Zn.ZnO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Zn.Pb = 0
                    }
                    else {
                        valoresPrevios.primerT.Zn.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Zn.Zn = 0
                    }
                    else {
                        valoresPrevios.primerT.Zn.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Zn.Cu = 0
                    }
                    else {
                        valoresPrevios.primerT.Zn.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Zn.Fe = 0
                    }
                    else {
                        valoresPrevios.primerT.Zn.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Zn.Sb = 0
                    }
                    else {
                        valoresPrevios.primerT.Zn.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("As")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Zn.As = 0
                    }
                    else {
                        valoresPrevios.primerT.Zn.As = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Zn.Cd = 0
                    }
                    else {
                        valoresPrevios.primerT.Zn.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
            else if(event.target.name.includes("Cola")) {
                if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Colas.Ag = 0
                    }
                    else {
                        valoresPrevios.primerT.Colas.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("PbO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Colas.PbO = 0
                    }
                    else {
                        valoresPrevios.primerT.Colas.PbO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("ZnO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Colas.ZnO = 0
                    }
                    else {
                        valoresPrevios.primerT.Colas.ZnO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Colas.Pb = 0
                    }
                    else {
                        valoresPrevios.primerT.Colas.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Colas.Zn = 0
                    }
                    else {
                        valoresPrevios.primerT.Colas.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Colas.Cu = 0
                    }
                    else {
                        valoresPrevios.primerT.Colas.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Colas.Fe = 0
                    }
                    else {
                        valoresPrevios.primerT.Colas.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Colas.Sb = 0
                    }
                    else {
                        valoresPrevios.primerT.Colas.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("As")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Colas.As = 0
                    }
                    else {
                        valoresPrevios.primerT.Colas.As = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.primerT.Colas.Cd = 0
                    }
                    else {
                        valoresPrevios.primerT.Colas.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
        }
        else if(event.target.name.includes("Segundo turno")) {
            if(event.target.name.includes("Cabeza")) {
                if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Cabeza.Ag = 0
                    }
                    else {
                        valoresPrevios.segundoT.Cabeza.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("PbO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Cabeza.PbO = 0
                    }
                    else {
                        valoresPrevios.segundoT.Cabeza.PbO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("ZnO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Cabeza.ZnO = 0
                    }
                    else {
                        valoresPrevios.segundoT.Cabeza.ZnO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Cabeza.Pb = 0
                    }
                    else {
                        valoresPrevios.segundoT.Cabeza.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Cabeza.Zn = 0
                    }
                    else {
                        valoresPrevios.segundoT.Cabeza.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Cabeza.Cu = 0
                    }
                    else {
                        valoresPrevios.segundoT.Cabeza.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Cabeza.Fe = 0
                    }
                    else {
                        valoresPrevios.segundoT.Cabeza.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Cabeza.Sb = 0
                    }
                    else {
                        valoresPrevios.segundoT.Cabeza.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("As")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Cabeza.As = 0
                    }
                    else {
                        valoresPrevios.segundoT.Cabeza.As = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Cabeza.Cd = 0
                    }
                    else {
                        valoresPrevios.segundoT.Cabeza.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
            else if(event.target.name.includes("plomo")) {
                if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Pb.Ag = 0
                    }
                    else {
                        valoresPrevios.segundoT.Pb.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("PbO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Pb.PbO = 0
                    }
                    else {
                        valoresPrevios.segundoT.Pb.PbO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("ZnO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Pb.ZnO = 0
                    }
                    else {
                        valoresPrevios.segundoT.Pb.ZnO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Pb.Pb = 0
                    }
                    else {
                        valoresPrevios.segundoT.Pb.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Pb.Zn = 0
                    }
                    else {
                        valoresPrevios.segundoT.Pb.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Pb.Cu = 0
                    }
                    else {
                        valoresPrevios.segundoT.Pb.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Pb.Fe = 0
                    }
                    else {
                        valoresPrevios.segundoT.Pb.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Pb.Sb = 0
                    }
                    else {
                        valoresPrevios.segundoT.Pb.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("As")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Pb.As = 0
                    }
                    else {
                        valoresPrevios.segundoT.Pb.As = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Pb.Cd = 0
                    }
                    else {
                        valoresPrevios.segundoT.Pb.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
            else if(event.target.name.includes("zinc")) {
                if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Zn.Ag = 0
                    }
                    else {
                        valoresPrevios.segundoT.Zn.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("PbO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Zn.PbO = 0
                    }
                    else {
                        valoresPrevios.segundoT.Zn.PbO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("ZnO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Zn.ZnO = 0
                    }
                    else {
                        valoresPrevios.segundoT.Zn.ZnO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Zn.Pb = 0
                    }
                    else {
                        valoresPrevios.segundoT.Zn.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Zn.Zn = 0
                    }
                    else {
                        valoresPrevios.segundoT.Zn.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Zn.Cu = 0
                    }
                    else {
                        valoresPrevios.segundoT.Zn.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Zn.Fe = 0
                    }
                    else {
                        valoresPrevios.segundoT.Zn.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Zn.Sb = 0
                    }
                    else {
                        valoresPrevios.segundoT.Zn.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("As")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Zn.As = 0
                    }
                    else {
                        valoresPrevios.segundoT.Zn.As = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Zn.Cd = 0
                    }
                    else {
                        valoresPrevios.segundoT.Zn.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
            else if(event.target.name.includes("Cola")) {
                if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Colas.Ag = 0
                    }
                    else {
                        valoresPrevios.segundoT.Colas.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("PbO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Colas.PbO = 0
                    }
                    else {
                        valoresPrevios.segundoT.Colas.PbO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("ZnO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Colas.ZnO = 0
                    }
                    else {
                        valoresPrevios.segundoT.Colas.ZnO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Colas.Pb = 0
                    }
                    else {
                        valoresPrevios.segundoT.Colas.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Colas.Zn = 0
                    }
                    else {
                        valoresPrevios.segundoT.Colas.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Colas.Cu = 0
                    }
                    else {
                        valoresPrevios.segundoT.Colas.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Colas.Fe = 0
                    }
                    else {
                        valoresPrevios.segundoT.Colas.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Colas.Sb = 0
                    }
                    else {
                        valoresPrevios.segundoT.Colas.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("As")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Colas.As = 0
                    }
                    else {
                        valoresPrevios.segundoT.Colas.As = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.segundoT.Colas.Cd = 0
                    }
                    else {
                        valoresPrevios.segundoT.Colas.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
        }
        else if(event.target.name.includes("Tercer turno")) {
            if(event.target.name.includes("Cabeza")) {
                if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Cabeza.Ag = 0
                    }
                    else {
                        valoresPrevios.tercerT.Cabeza.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("PbO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Cabeza.PbO = 0
                    }
                    else {
                        valoresPrevios.tercerT.Cabeza.PbO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("ZnO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Cabeza.ZnO = 0
                    }
                    else {
                        valoresPrevios.tercerT.Cabeza.ZnO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Cabeza.Pb = 0
                    }
                    else {
                        valoresPrevios.tercerT.Cabeza.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Cabeza.Zn = 0
                    }
                    else {
                        valoresPrevios.tercerT.Cabeza.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Cabeza.Cu = 0
                    }
                    else {
                        valoresPrevios.tercerT.Cabeza.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Cabeza.Fe = 0
                    }
                    else {
                        valoresPrevios.tercerT.Cabeza.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Cabeza.Sb = 0
                    }
                    else {
                        valoresPrevios.tercerT.Cabeza.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("As")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Cabeza.As = 0
                    }
                    else {
                        valoresPrevios.tercerT.Cabeza.As = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Cabeza.Cd = 0
                    }
                    else {
                        valoresPrevios.tercerT.Cabeza.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
            else if(event.target.name.includes("plomo")) {
                if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Pb.Ag = 0
                    }
                    else {
                        valoresPrevios.tercerT.Pb.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("PbO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Pb.PbO = 0
                    }
                    else {
                        valoresPrevios.tercerT.Pb.PbO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("ZnO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Pb.ZnO = 0
                    }
                    else {
                        valoresPrevios.tercerT.Pb.ZnO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Pb.Pb = 0
                    }
                    else {
                        valoresPrevios.tercerT.Pb.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Pb.Zn = 0
                    }
                    else {
                        valoresPrevios.tercerT.Pb.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Pb.Cu = 0
                    }
                    else {
                        valoresPrevios.tercerT.Pb.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Pb.Fe = 0
                    }
                    else {
                        valoresPrevios.tercerT.Pb.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Pb.Sb = 0
                    }
                    else {
                        valoresPrevios.tercerT.Pb.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("As")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Pb.As = 0
                    }
                    else {
                        valoresPrevios.tercerT.Pb.As = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Pb.Cd = 0
                    }
                    else {
                        valoresPrevios.tercerT.Pb.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
            else if(event.target.name.includes("zinc")) {
                if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Zn.Ag = 0
                    }
                    else {
                        valoresPrevios.tercerT.Zn.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("PbO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Zn.PbO = 0
                    }
                    else {
                        valoresPrevios.tercerT.Zn.PbO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("ZnO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Zn.ZnO = 0
                    }
                    else {
                        valoresPrevios.tercerT.Zn.ZnO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Zn.Pb = 0
                    }
                    else {
                        valoresPrevios.tercerT.Zn.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Zn.Zn = 0
                    }
                    else {
                        valoresPrevios.tercerT.Zn.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Zn.Cu = 0
                    }
                    else {
                        valoresPrevios.tercerT.Zn.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Zn.Fe = 0
                    }
                    else {
                        valoresPrevios.tercerT.Zn.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Zn.Sb = 0
                    }
                    else {
                        valoresPrevios.tercerT.Zn.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("As")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Zn.As = 0
                    }
                    else {
                        valoresPrevios.tercerT.Zn.As = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Zn.Cd = 0
                    }
                    else {
                        valoresPrevios.tercerT.Zn.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
            else if(event.target.name.includes("Cola")) {
                if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Colas.Ag = 0
                    }
                    else {
                        valoresPrevios.tercerT.Colas.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("PbO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Colas.PbO = 0
                    }
                    else {
                        valoresPrevios.tercerT.Colas.PbO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("ZnO")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Colas.ZnO = 0
                    }
                    else {
                        valoresPrevios.tercerT.Colas.ZnO = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Colas.Pb = 0
                    }
                    else {
                        valoresPrevios.tercerT.Colas.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Colas.Zn = 0
                    }
                    else {
                        valoresPrevios.tercerT.Colas.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Colas.Cu = 0
                    }
                    else {
                        valoresPrevios.tercerT.Colas.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Colas.Fe = 0
                    }
                    else {
                        valoresPrevios.tercerT.Colas.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Colas.Sb = 0
                    }
                    else {
                        valoresPrevios.tercerT.Colas.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("As")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Colas.As = 0
                    }
                    else {
                        valoresPrevios.tercerT.Colas.As = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.tercerT.Colas.Cd = 0
                    }
                    else {
                        valoresPrevios.tercerT.Colas.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
        }
    }

    function handleSendForm() {
        setLoaderVisibility(true)
        let destruct = JSON.parse(JSON.stringify(formularioParaPost))
        let objeto = {
            "idUsuario": usuario,
            "idMina": parseInt(mina.value),
            "idPlanta": parseInt(planta.value),
            "idLab": idLab,
            "fechaMuestreo": fechaMuestreo,
            "fechaEnsaye": fechaEnsaye,
            ...destruct
        }
        console.log(objeto)
        axios({
            method: 'post',
            url: `http://localhost:3050/lab/labReport`,
            data: {...objeto},
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((result)=>{
            setModalVisibility(false);
            setModalExitoVisibility(true);
        })
        .catch(error =>{
            alert('Algo malo pasó:', error);
        })
    }

    return(
        <>
            <div className="pageFormularioLab">
                <div className="formYHeaderFormLab">
                        <HeaderSencillo
                        titulo="Formulario de laboratorio"
                        subtitulo="Registra los resultados obtenidos durante el análisis de laboratorio por turno. Selecciona la mina, la planta y las fechas, luego ingresa los valores obtenidos. Usa las flechas para desplazarte a las casillas continuas."
                        isDate={true}
                        />
                    <div className="divFormulario">
                        <div className="inputsContenedor">
                            <p>MINERAL</p>
                            <div className="setOfInputs">
                                <Select
                                    onChange={setMina}
                                    options={options1}
                                    placeholder="Mina "
                                    required={true}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: state.isFocused ? '#EF7B30' : mina.label == '' && modalErrorHaSidoAbierto == true ? 'red' :'transparent',
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
                                    required={true}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: state.isFocused ? '#EF7B30' : planta.label == '' && modalErrorHaSidoAbierto == true ? 'red' :'transparent',
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
                        <div className="formularioContenedor1">
                            <Formulario 
                            formularioPrimerNivel={formularioPrimerNivel} 
                            formularioSegundoNivel={formularioSegundoNivel} 
                            inputBase={inputBase}
                            cantidadDeElementosEnFila={10}
                            handleInputChange={handleInputChange}
                            handleSendForm={showModal}
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
            <Menu rol="laboratorista" activeTab="science" landing="/laboratorio"></Menu>
            {modalVisibility ? <ModalConfirmacion submitFunction={handleSendForm} loaderVisibility={loaderVisibility} setModalVisibility = {setModalVisibility} tipo="confirmacion" titulo="Confirma los datos" mensaje={"¿Estás seguro que deseas continuar? Asegúrate de que todos los datos introducidos sean correctos."}></ModalConfirmacion>:null}
            {modalExitoVisibility ? <ModalConfirmacion submitFunction={()=>navigate(`/reporte-laboratorio/${mina.label}/${fechaEnsaye}`)} setModalVisibility = {setModalExitoVisibility} tipo="exito" titulo="Registro correcto" mensaje="Los datos han sido enviados correctamente."></ModalConfirmacion>:null}
            {modalErrorVisibility ? <ModalError submitFunction={()=>setModalErrorVisibility(false)} setModalVisibility = {setModalErrorVisibility} tipo="error" titulo="¡Cuidado!" mensaje={`Hay campos obligatorios sin completar. Asegúrate de rellenarlos antes de proceder: ${mina.label == '' ? planta.label == '' ? "Mina y planta" : "Mina" : "Planta" }`}></ModalError>:null}
        </>
    )
}

export default FormularioLaboratorio
