import React, { useState, useEffect } from "react";
import Formulario from "../components/Formulario";
import "../styles/formularioReporteDiario.css";
import HeaderSencillo from "../components/HeaderSencillo";
import Menu from "../components/Menu";
import Pattern from "../assets/PatternsPages/pattern1.png"
import axios from "axios";
import moment from "moment/moment";
import ModalConfirmacion from '../components/ModalDinamico';
import ModalError from '../components/ModalDinamico';
import { useNavigate } from "react-router-dom";

const formularioPrimerNivel = ["Minesites", "Guadalupe", "Balcones"]
const formularioSegundoNivel = [["Nivel 395", "Nivel 350" , "Gallo Verde", "Total"], ["C-21", "Dique" , "Cuerpo antimonio", "Total"], ["Balcones", "Total"]]
const inputBase = [["Existencia inicial", "toneladas"], ["Aca", "Hoy"], ["rreo", "A la fecha"], ["", "P1 hoy"], ["Tritu", "P1 a la fecha"], ["radas", "P2 hoy"], ["", "P2 a la fecha"], ["Existencia final", "Toneladas"]]

const formularioPrimerNivel2 = ["Minas"]
const formularioSegundoNivel2 = [["Minesites", "Guadalupe", "Balcones", "Jales"]]
const inputBase2 = [["Conc. P", "Hoy"], ["b (Ton)", "A la fecha"], ["Conc. C", "Hoy"], ["u (Ton)", "A la fecha"], ["Conc. Z", "Hoy"], ["n (Ton)", "A la fecha"], ["Conc. Au", "Hoy"], ["/Ag (Ton)", "A la fecha"], ]

function parsing(number) {
    if(number == "") {
        return 0
    } else {
        return parseInt(number)
    }
}

function MovimientoMineral(props) {
    let navigate = useNavigate();

    let usuario = props.idUsuario
    
    usuario = 2

    const [ status, setStatus ] = useState('');
    const [ error, setError ] = useState('');
    
    const [ Hoy, setHoy ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    const [ P1Hoy, setP1Hoy ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    const [ P2Hoy, setP2Hoy ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    const [ EFinal, setEFinal ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    const [ formularioParaPostMovimMineral, setFormularioParaPostMovimMineral ] = useState([
        {
          "idUsuario": usuario,
          "idMina": 1,
          "idSubmina": 1,
          "fecha": moment().format('YYYY-MM-DD'),
          "acarreo": 0,
          "trituradasP1": 0,
          "trituradasP2": 0
        },
        {
          "idUsuario": usuario,
          "idMina": 1,
          "idSubmina": 2,
          "fecha": moment().format('YYYY-MM-DD'),
          "acarreo": 0,
          "trituradasP1": 0,
          "trituradasP2": 0
        },
        {
          "idUsuario": usuario,
          "idMina": 1,
          "idSubmina": 3,
          "fecha": moment().format('YYYY-MM-DD'),
          "acarreo": 0,
          "trituradasP1": 0,
          "trituradasP2": 0
        },
        {
          "idUsuario": usuario,
          "idMina": 2,
          "idSubmina": 4,
          "fecha": moment().format('YYYY-MM-DD'),
          "acarreo": 0,
          "trituradasP1": 0,
          "trituradasP2": 0
        },
        {
          "idUsuario": usuario,
          "idMina": 2,
          "idSubmina": 5,
          "fecha": moment().format('YYYY-MM-DD'),
          "acarreo": 0,
          "trituradasP1": 0,
          "trituradasP2": 0
        },
        {
          "idUsuario": usuario,
          "idMina": 2,
          "idSubmina": 6,
          "fecha": moment().format('YYYY-MM-DD'),
          "acarreo": 0,
          "trituradasP1": 0,
          "trituradasP2": 0
        },
        {
          "idUsuario": usuario,
          "idMina": 3,
          "idSubmina": 7,
          "fecha": moment().format('YYYY-MM-DD'),
          "acarreo": 0,
          "trituradasP1": 0,
          "trituradasP2": 0
        }
    ])
    const [ formularioParaPostEmbarque, setFormularioParaPostEmbarque ] = useState([
        {
            "idMina": 1,
            "idConcentrado": 1,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 1,
            "idConcentrado": 2,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 1,
            "idConcentrado": 3,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 1,
            "idConcentrado": 4,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 2,
            "idConcentrado": 1,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 2,
            "idConcentrado": 2,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 2,
            "idConcentrado": 3,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 2,
            "idConcentrado": 4,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 3,
            "idConcentrado": 1,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 3,
            "idConcentrado": 2,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 3,
            "idConcentrado": 3,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 3,
            "idConcentrado": 4,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 4,
            "idConcentrado": 1,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 4,
            "idConcentrado": 2,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 4,
            "idConcentrado": 3,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        },
        {
            "idMina": 4,
            "idConcentrado": 4,
            "idUsuario": usuario,
            "fecha": moment().format('YYYY-MM-DD'),
            "embarque": 0
        }
    ])
    
    useEffect( () => {
        setStatus('loading')
        axios.get(`http://localhost:3050/operador/reporteD`)
        .then((result)=>{
            let arrALaFecha = 
                [result.data[0].acarreo,
                result.data[1].acarreo,
                result.data[2].acarreo,
                [result.data[0].acarreo, result.data[1].acarreo, result.data[2].acarreo].reduce((a, b) => a + b, 0),
                result.data[3].acarreo,
                result.data[4].acarreo,
                result.data[5].acarreo,
                [result.data[3].acarreo, result.data[4].acarreo, result.data[5].acarreo].reduce((a, b) => a + b, 0), 
                result.data[6].acarreo,
                result.data[6].acarreo]
            
            let trituradasP1ALaFecha = 
                [result.data[0].P1,
                result.data[1].P1,
                result.data[2].P1,
                [result.data[0].P1, result.data[1].P1, result.data[2].P1].reduce((a, b) => a + b, 0),
                result.data[3].P1,
                result.data[4].P1,
                result.data[5].P1,
                [result.data[3].P1, result.data[4].P1, result.data[5].P1].reduce((a, b) => a + b, 0),
                result.data[6].P1,
                result.data[6].P1]

            let trituradasP2ALaFecha = 
                [result.data[0].P2,
                result.data[1].P2,
                result.data[2].P2,
                [result.data[0].P2, result.data[1].P2, result.data[2].P2].reduce((a, b) => a + b, 0),
                result.data[3].P2,
                result.data[4].P2,
                result.data[5].P2,
                [result.data[3].P2, result.data[4].P2, result.data[5].P2].reduce((a, b) => a + b, 0),
                result.data[6].P2,
                result.data[6].P2]

            let iniciales = 
                [result.data[0].inicial,
                result.data[1].inicial,
                result.data[2].inicial,
                [result.data[0].inicial, result.data[1].inicial, result.data[2].inicial].reduce((a, b) => a + b, 0),
                result.data[3].inicial,
                result.data[4].inicial,
                result.data[5].inicial,
                [result.data[3].inicial, result.data[4].inicial, result.data[5].inicial].reduce((a, b) => a + b, 0),
                result.data[6].inicial,
                result.data[6].inicial]
                
            setStatus('resolved')

            for(let h = 0; h < 10; h++) {
                document.getElementById((h * 8) + 2).readOnly = true
                document.getElementById((h * 8) + 4).readOnly = true
                document.getElementById((h * 8) + 6).readOnly = true
                document.getElementById((h * 8)).value = iniciales[h]
                document.getElementById((h * 8) + 2).value = arrALaFecha[h]
                document.getElementById((h * 8) + 4).value = trituradasP1ALaFecha[h]
                document.getElementById((h * 8) + 6).value = trituradasP2ALaFecha[h]
            }
            axios.get("http://localhost:3050/operador/aLaFechaEmbarque")
            .then((result) => {
                let embarquesConcentrados = result.data
                for (let idx = 0; idx < 16; idx++) {
                    document.getElementById(81 + (idx*2)).readOnly = true
                    document.getElementById(81 + (idx*2)).value = embarquesConcentrados[idx].embarque
                }
            })
            .catch((error)=>{
                setError(error)
                setStatus('error')
            })
        })
        .catch((error)=>{
            setError(error)
            setStatus('error')
        })
    },[])
    
    function handleInputChange(event) {
        let rowId = parseInt(parseInt(event.target.id)/8)
        
        if(event.target.name.includes("Hoy") && !event.target.name.includes("Minas")) {
            let newHoy = [...Hoy]
            newHoy[rowId] = (event.target.value == "" ? 0 : parseInt(event.target.value))
            setHoy(newHoy)

            let newEFinal = [...EFinal]
            newEFinal[rowId] = (event.target.value == "" ? 0 : parseInt(event.target.value)) - (P1Hoy[rowId] + P2Hoy[rowId])
            setEFinal(newEFinal)

            document.getElementById((((rowId + 1) * 8) - 1)).value = (event.target.value == "" ? 0 : parseInt(event.target.value)) - (P1Hoy[rowId] + P2Hoy[rowId])

            if(event.target.name.includes("Minesites")) {
                let hoyAux = [...Hoy]
                let slice = hoyAux.slice(0,3)
                slice.splice(rowId,1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                document.getElementById(25).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(31).value = parsing(document.getElementById(25).value) - (parsing(document.getElementById(27).value) + parsing(document.getElementById(29).value))
                if(event.target.name.includes("Nivel 395")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[0].acarreo = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
                else if(event.target.name.includes("Nivel 350")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[1].acarreo = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
                else if(event.target.name.includes("Gallo Verde")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[2].acarreo = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
            }
            
            else if(event.target.name.includes("Guadalupe")) {
                let hoyAux = [...Hoy]
                let slice = hoyAux.slice(4,7)
                slice.splice((rowId-4),1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                document.getElementById(57).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(63).value = parsing(document.getElementById(57).value) - (parsing(document.getElementById(59).value) + parsing(document.getElementById(61).value))
                if(event.target.name.includes("C-21")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[3].acarreo = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
                else if(event.target.name.includes("Dique")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[4].acarreo = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
                else if(event.target.name.includes("Cuerpo antimonio")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[5].acarreo = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
            }

            else if(event.target.name.includes("Balcones")) {
                let hoyAux = [...Hoy]
                let slice = hoyAux.slice(8,9)
                slice.splice((rowId-8),1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                console.log(slice)
                document.getElementById(73).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(79).value = parsing(document.getElementById(73).value) - (parsing(document.getElementById(75).value) + parsing(document.getElementById(77).value))
                let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                auxiliarValues[6].acarreo = event.target.value
                setFormularioParaPostMovimMineral(auxiliarValues)
            }
        }

        if(event.target.name.includes("P1 hoy")) {
            let newP1Hoy = [...P1Hoy]
            newP1Hoy[rowId] = (event.target.value == "" ? 0 : parseInt(event.target.value))
            setP1Hoy(newP1Hoy)

            let newEFinal = [...EFinal]
            newEFinal[rowId] = Hoy[rowId] - ((event.target.value == "" ? 0 : parseInt(event.target.value)) + P2Hoy[rowId])
            setEFinal(newEFinal)

            document.getElementById((((rowId + 1) * 8) - 1)).value = Hoy[rowId] - ((event.target.value == "" ? 0 : parseInt(event.target.value)) + P2Hoy[rowId])

            if(event.target.name.includes("Minesites")) {
                let p1HoyAux = [...P1Hoy]
                let slice = p1HoyAux.slice(0,3)
                slice.splice(rowId,1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                document.getElementById(27).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(31).value = parsing(document.getElementById(25).value) - (parsing(document.getElementById(27).value) + parsing(document.getElementById(29).value))
                if(event.target.name.includes("Nivel 395")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[0].trituradasP1 = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
                else if(event.target.name.includes("Nivel 350")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[1].trituradasP1 = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
                else if(event.target.name.includes("Gallo Verde")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[2].trituradasP1 = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
            }
            
            else if(event.target.name.includes("Guadalupe")) {
                let p1HoyAux = [...P1Hoy]
                let slice = p1HoyAux.slice(4,7)
                slice.splice((rowId-4),1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                document.getElementById(59).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(63).value = parsing(document.getElementById(57).value) - (parsing(document.getElementById(59).value) + parsing(document.getElementById(61).value))
                if(event.target.name.includes("C-21")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[3].trituradasP1 = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
                else if(event.target.name.includes("Dique")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[4].trituradasP1 = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
                else if(event.target.name.includes("Cuerpo antimonio")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[5].trituradasP1 = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
            }

            else if(event.target.name.includes("Balcones")) {
                let p1HoyAux = [...P1Hoy]
                let slice = p1HoyAux.slice(8,9)
                slice.splice((rowId-8),1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                console.log(slice)
                document.getElementById(75).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(79).value = parsing(document.getElementById(73).value) - (parsing(document.getElementById(75).value) + parsing(document.getElementById(77).value))
                let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                auxiliarValues[6].trituradasP1 = event.target.value
                setFormularioParaPostMovimMineral(auxiliarValues)
            }
        }
        
        if(event.target.name.includes("P2 hoy")) {
            let newP2Hoy = [...P2Hoy]
            newP2Hoy[rowId] = (event.target.value == "" ? 0 : parseInt(event.target.value))
            setP2Hoy(newP2Hoy)

            let newEFinal = [...EFinal]
            newEFinal[rowId] = Hoy[rowId] - (P1Hoy[rowId] + (event.target.value == "" ? 0 : parseInt(event.target.value)))
            setEFinal(newEFinal)

            document.getElementById((((rowId + 1) * 8) - 1)).value = Hoy[rowId] - (P1Hoy[rowId] + (event.target.value == "" ? 0 : parseInt(event.target.value)))

            if(event.target.name.includes("Minesites")) {
                let p2HoyAux = [...P2Hoy]
                let slice = p2HoyAux.slice(0,3)
                slice.splice(rowId,1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                document.getElementById(29).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(31).value = parsing(document.getElementById(25).value) - (parsing(document.getElementById(27).value) + parsing(document.getElementById(29).value))
                if(event.target.name.includes("Nivel 395")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[0].trituradasP2 = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
                else if(event.target.name.includes("Nivel 350")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[1].trituradasP2 = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
                else if(event.target.name.includes("Gallo Verde")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[2].trituradasP2 = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
            }
            
            else if(event.target.name.includes("Guadalupe")) {
                let p2HoyAux = [...P2Hoy]
                let slice = p2HoyAux.slice(4,7)
                slice.splice((rowId-4),1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                document.getElementById(61).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(63).value = parsing(document.getElementById(57).value) - (parsing(document.getElementById(59).value) + parsing(document.getElementById(61).value))
                if(event.target.name.includes("C-21")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[3].trituradasP2 = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
                else if(event.target.name.includes("Dique")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[4].trituradasP2 = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
                else if(event.target.name.includes("Cuerpo antimonio")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                    auxiliarValues[5].trituradasP2 = event.target.value
                    setFormularioParaPostMovimMineral(auxiliarValues)
                }
            }

            else if(event.target.name.includes("Balcones")) {
                let p2HoyAux = [...P2Hoy]
                let slice = p2HoyAux.slice(8,9)
                slice.splice((rowId-8),1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                console.log(slice)
                document.getElementById(77).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(79).value = parsing(document.getElementById(73).value) - (parsing(document.getElementById(75).value) + parsing(document.getElementById(77).value))
                let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostMovimMineral))
                auxiliarValues[6].trituradasP2 = event.target.value
                setFormularioParaPostMovimMineral(auxiliarValues)
            }
        }

        if(event.target.name.includes("Minas")) {
            if(event.target.name.includes("Minesites")) {
                if(event.target.name.includes("Conc. P")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[0].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
                else if(event.target.name.includes("Conc. C")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[1].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
                else if(event.target.name.includes("Conc. Z")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[2].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
                else if(event.target.name.includes("Conc. Au")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[3].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
            }
            else if(event.target.name.includes("Guadalupe")) {
                if(event.target.name.includes("Conc. P")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[4].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
                else if(event.target.name.includes("Conc. C")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[5].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
                else if(event.target.name.includes("Conc. Z")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[6].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
                else if(event.target.name.includes("Conc. Au")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[7].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
            }
            else if(event.target.name.includes("Balcones")) {
                if(event.target.name.includes("Conc. P")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[8].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
                else if(event.target.name.includes("Conc. C")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[9].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
                else if(event.target.name.includes("Conc. Z")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[10].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
                else if(event.target.name.includes("Conc. Au")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[11].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
            }
            else if(event.target.name.includes("Jales")) {
                if(event.target.name.includes("Conc. P")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[12].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
                else if(event.target.name.includes("Conc. C")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[13].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
                else if(event.target.name.includes("Conc. Z")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[14].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
                else if(event.target.name.includes("Conc. Au")) {
                    let auxiliarValues = JSON.parse(JSON.stringify(formularioParaPostEmbarque))
                    auxiliarValues[15].embarque = event.target.value
                    setFormularioParaPostEmbarque(auxiliarValues)
                }
            }
        }
    }

    const [ modalVisibility, setModalVisibility ] = useState(false)
    const [ modalExitoVisibility, setModalExitoVisibility ] = useState(false)
    const [ modalErrorVisibility, setModalErrorVisibility ] = useState(false)
    const [ loaderVisibility, setLoaderVisibility ] = useState(false)

    function showModal(){
        setModalVisibility(true)
        
    }

    function handleSendForm() {
        setLoaderVisibility(true)
        axios({
            method: 'post',
            url: `http://localhost:3050/operador/insertMovimientoMineral`,
            data: formularioParaPostMovimMineral,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((result)=> {
            axios({
                method: 'post',
                url: `http://localhost:3050/operador/embarque`,
                data: formularioParaPostEmbarque,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((result)=> {
                setModalVisibility(false);
                setModalExitoVisibility(true);
            })
            .catch(error => {
                setModalErrorVisibility(true);
            })
        })
        .catch(error => {
            setModalErrorVisibility(true);
        })
    }

    return(
        <>
            <div className="pageFormularioLab">
                <div className="formYHeaderFormLab">
                    <div className="headerFormLaboratorio">
                        <HeaderSencillo
                        titulo="Movimiento de mineral - Reporte diario"
                        subtitulo="Para rellenar este formato, use las teclas arriba, abajo, izquierda y derecha para señalar los espacios correspondientes. Puede contraer cada área del reporte haciendo clic en la flecha de la derecha."
                        isDate={true}
                        />
                    </div>
                    <div className="divFormulario">
                        <div className="inputsContenedor">
                            <p>MINAS</p>
                        </div>
                        <div className="formularioContenedor">
                            <Formulario 
                            formularioPrimerNivel={formularioPrimerNivel} 
                            formularioSegundoNivel={formularioSegundoNivel} 
                            inputBase={inputBase}
                            cantidadDeElementosEnFila={8}
                            handleInputChange={handleInputChange}
                            handleSendForm={handleSendForm}
                            mostrarBotones={false}
                            loading={status == "error" || status == "loading"}
                            tipoFormulario={"MovimientoMineral"}/>
                        </div>
                        <div className="contenedorMedio">
                            <p>EMBARQUES DE CONCENTRADOS</p>
                        </div>
                        <div className="formularioContenedor2">
                            <Formulario 
                            formularioPrimerNivel={formularioPrimerNivel2} 
                            formularioSegundoNivel={formularioSegundoNivel2} 
                            inputBase={inputBase2}
                            cantidadDeElementosEnFila={8}
                            handleInputChange={handleInputChange}
                            handleSendForm={showModal}
                            mostrarBotones={true}
                            loading={status == "error" || status == "loading"}
                            tipoFormulario={"MovimientoMineral"}/>
                        </div>
                    </div>
                    <footer style={{ height: `20vh` }}/>
                </div>
                <div className="bandaDerecha">
                    <div className="imagenPatron" style={{ backgroundImage: `url(${Pattern})` }}>
                    </div>
                </div>
            </div>
            <Menu rol="bascula" activeTab="scale" landing="/bascula"></Menu>
            {modalVisibility ? <ModalConfirmacion submitFunction={handleSendForm} loaderVisibility={loaderVisibility} setModalVisibility = {setModalVisibility} tipo="confirmacion" titulo="Confirma los datos" mensaje={"¿Estás seguro que deseas continuar? Asegúrate de que todos los datos introducidos sean correctos."}></ModalConfirmacion>:null}
            {modalExitoVisibility ? <ModalConfirmacion submitFunction={()=>navigate(`/reporte-bascula_basculaview/${moment().format("YYYY-MM-DD")}`)} setModalVisibility = {setModalExitoVisibility} tipo="exito" titulo="Registro correcto" mensaje="Los datos han sido enviados correctamente."></ModalConfirmacion>:null}
            {modalErrorVisibility ? <ModalError submitFunction={()=>setModalErrorVisibility(false)} setModalVisibility = {setModalErrorVisibility} tipo="error" titulo="¡Oh, no!" mensaje={`Ocurrió un error al enviar los datos. Intenta de nuevo, si el error persiste contacta al encargado de TI.`}></ModalError>:null}
        </>
    )
}

export default MovimientoMineral
