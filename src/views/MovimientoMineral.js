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

    const [ status, setStatus ] = useState('')
    const [ error, setError ] = useState('')
    
    let usuario = props.idUsuario
    
    usuario = 2
    
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleDateString("es-MX", options)
    
    const [ Hoy, setHoy ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    const [ P1Hoy, setP1Hoy ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    const [ P2Hoy, setP2Hoy ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    const [ EFinal, setEFinal ] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    
    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:3050/operador/reporteD`)
        .then((result)=>{
            let arrALaFecha = 
                [result.data[0].aLaFecha1_1,
                result.data[1].aLaFecha1_2,
                result.data[2].aLaFecha1_3,
                [result.data[0].aLaFecha1_1, result.data[1].aLaFecha1_2, result.data[2].aLaFecha1_3].reduce((a, b) => a + b, 0),
                result.data[3].aLaFecha2_4,
                result.data[4].aLaFecha2_5,
                result.data[5].aLaFecha2_6,
                [result.data[3].aLaFecha2_4, result.data[4].aLaFecha2_5, result.data[5].aLaFecha2_6].reduce((a, b) => a + b, 0), 
                result.data[6].aLaFecha3_7,
                result.data[6].aLaFecha3_7]

            let trituradasP1ALaFecha = 
                [result.data[7].TaLaFecha111,
                result.data[9].TaLaFecha121,
                result.data[11].TaLaFecha131,
                [result.data[7].TaLaFecha111, result.data[9].TaLaFecha121, result.data[11].TaLaFecha131].reduce((a, b) => a + b, 0),
                result.data[13].TaLaFecha241,
                result.data[15].TaLaFecha251,
                result.data[17].TaLaFecha261,
                [result.data[13].TaLaFecha241, result.data[15].TaLaFecha251, result.data[17].TaLaFecha261].reduce((a, b) => a + b, 0),
                result.data[19].TaLaFecha371,
                result.data[19].TaLaFecha371]

            let trituradasP2ALaFecha = 
                [result.data[8].TaLaFecha112,
                result.data[10].TaLaFecha122,
                result.data[12].TaLaFecha132,
                [result.data[8].TaLaFecha112, result.data[10].TaLaFecha122, result.data[12].TaLaFecha132].reduce((a, b) => a + b, 0),
                result.data[14].TaLaFecha242,
                result.data[16].TaLaFecha252,
                result.data[18].TaLaFecha262,
                [result.data[14].TaLaFecha242, result.data[16].TaLaFecha252, result.data[18].TaLaFecha262].reduce((a, b) => a + b, 0),
                result.data[20].TaLaFecha372,
                result.data[20].TaLaFecha372]

            setStatus('resolved')

            for(let h = 0; h < 10; h++) {
                document.getElementById((h * 8) + 2).readOnly = true
                document.getElementById((h * 8) + 4).readOnly = true
                document.getElementById((h * 8) + 6).readOnly = true
                document.getElementById((h * 8) + 2).value = arrALaFecha[h]
                document.getElementById((h * 8) + 4).value = trituradasP1ALaFecha[h]
                document.getElementById((h * 8) + 6).value = trituradasP2ALaFecha[h]
            }
            axios.get(`http://localhost:3050/operador/existenciaInicial`)
            .then((result)=>{
                let iter = 0
                for(let h = 0; h < 10; h++) {
                    if(h == 3 || h == 7 || h == 9) {
                        document.getElementById((h * 8)).readOnly = true
                        if(h == 3) {
                            document.getElementById((h * 8)).value = [result.data[0].inicial, result.data[1].inicial, result.data[2].inicial].reduce((a, b) => a + b, 0)
                        }
                        if(h == 7) {
                            document.getElementById((h * 8)).value = [result.data[4].inicial, result.data[5].inicial, result.data[6].inicial].reduce((a, b) => a + b, 0)
                        }
                        if(h == 9) {
                            document.getElementById((h * 8)).value = result.data[8].inicial
                        }
                    }

                    else {
                        document.getElementById((h * 8)).readOnly = true
                        document.getElementById((h * 8)).value = result.data[iter].inicial
                        iter += 1
                    }
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
        "datos": [
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
            "idMina": 1,
            "idSubmina": 1,
            "acarreo": 10.5,
            "fecha": "2022-05-05"
            },
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
            "idMina": 1,
            "idSubmina": 1,
            "acarreo": 10.5,
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
            "idMina": 2,
            "idSubmina": 2,
            "trituradas": 8.7,
            "idPlanta": 2,
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
            "idMina": 2,
            "idSubmina": 2,
            "trituradas": 8.7,
            "idPlanta": 2,
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
            "idMina": 2,
            "idSubmina": 2,
            "trituradas": 8.7,
            "idPlanta": 2,
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
            "idMina": 2,
            "idSubmina": 2,
            "trituradas": 8.7,
            "idPlanta": 2,
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
