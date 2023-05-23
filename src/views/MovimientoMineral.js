import React, { useState, useEffect } from "react";
import Formulario from "../components/Formulario";
import "../styles/formularioReporteDiario.css";
import HeaderSencillo from "../components/HeaderSencillo";
import Menu from "../components/Menu";
import Pattern from "../assets/PatternsPages/pattern1.png"
import axios from "axios";

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

    let usuario = props.idUsuario

    usuario = 2
    
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleDateString("es-MX", options)

    const [ Hoy, setHoy ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    const [ P1Hoy, setP1Hoy ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    const [ P2Hoy, setP2Hoy ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    const [ EFinal, setEFinal ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0])

    function handleInputChange(event) {
        let rowId = parseInt(parseInt(event.target.id)/8)

        if(event.target.name.includes("Hoy")) {
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
            }
            
            else if(event.target.name.includes("Guadalupe")) {
                let hoyAux = [...Hoy]
                let slice = hoyAux.slice(4,7)
                slice.splice((rowId-4),1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                document.getElementById(57).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(63).value = parsing(document.getElementById(57).value) - (parsing(document.getElementById(59).value) + parsing(document.getElementById(61).value))
            }

            else if(event.target.name.includes("Balcones")) {
                let hoyAux = [...Hoy]
                let slice = hoyAux.slice(8,9)
                slice.splice((rowId-8),1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                console.log(slice)
                document.getElementById(73).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(79).value = parsing(document.getElementById(73).value) - (parsing(document.getElementById(75).value) + parsing(document.getElementById(77).value))
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
            }
            
            else if(event.target.name.includes("Guadalupe")) {
                let p1HoyAux = [...P1Hoy]
                let slice = p1HoyAux.slice(4,7)
                slice.splice((rowId-4),1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                document.getElementById(59).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(63).value = parsing(document.getElementById(57).value) - (parsing(document.getElementById(59).value) + parsing(document.getElementById(61).value))
            }

            else if(event.target.name.includes("Balcones")) {
                let p1HoyAux = [...P1Hoy]
                let slice = p1HoyAux.slice(8,9)
                slice.splice((rowId-8),1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                console.log(slice)
                document.getElementById(75).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(79).value = parsing(document.getElementById(73).value) - (parsing(document.getElementById(75).value) + parsing(document.getElementById(77).value))
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
            }
            
            else if(event.target.name.includes("Guadalupe")) {
                let p2HoyAux = [...P2Hoy]
                let slice = p2HoyAux.slice(4,7)
                slice.splice((rowId-4),1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                document.getElementById(61).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(63).value = parsing(document.getElementById(57).value) - (parsing(document.getElementById(59).value) + parsing(document.getElementById(61).value))
            }

            else if(event.target.name.includes("Balcones")) {
                let p2HoyAux = [...P2Hoy]
                let slice = p2HoyAux.slice(8,9)
                slice.splice((rowId-8),1,(event.target.value == "" ? 0 : parseInt(event.target.value)))
                console.log(slice)
                document.getElementById(77).value = slice.reduce((a, b) => a + b, 0)
                document.getElementById(79).value = parsing(document.getElementById(73).value) - (parsing(document.getElementById(75).value) + parsing(document.getElementById(77).value))
            }
        }
    }

    let formularioParaPost = {
        "datos": 
        [
            {
            "tipo": "acarreo",
            "idMovimiento": 1,
            "idMina": 1,
            "idSubmina": 1,
            "acarreo": 10.5,
            "fecha": "2022-05-05"
            },
            {
            "tipo": "acarreo",
            "idMovimiento": 1,
            "idMina": 2,
            "idSubmina": 2,
            "acarreo": 15.3,
            "fecha": "2022-05-05"
            },
            {
            "tipo": "acarreo",
            "idMovimiento": 1,
            "idMina": 3,
            "idSubmina": 3,
            "acarreo": 20.2,
            "fecha": "2022-05-05"
            },
            {
            "tipo": "trituradas",
            "idMovimiento": 1,
            "idMina": 1,
            "idSubmina": 1,
            "trituradas": 5.5,
            "idPlanta": 1,
            "fecha": "2022-05-05"
            },
            {
            "tipo": "trituradas",
            "idMovimiento": 1,
            "idMina": 2,
            "idSubmina": 2,
            "trituradas": 8.7,
            "idPlanta": 2,
            "fecha": "2022-05-05"
            },
            {
            "tipo": "trituradas",
            "idMovimiento": 1,
            "idMina": 3,
            "idSubmina": 3,
            "trituradas": 13.2,
            "idPlanta": 1,
            "fecha": "2022-05-05"
            }
        ]
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

    useEffect( () => {

    },[])

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
                            handleSendForm={handleSendForm}
                            mostrarBotones={true}
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
            <Menu rol="laboratorista" activeTab="science"></Menu>
        </>
    )
}

export default MovimientoMineral
