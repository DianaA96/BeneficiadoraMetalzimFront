import React, { useState, useEffect } from 'react'
import "../styles/formulario.css"
import "../styles/button.css"
import "../styles/colors.css"
import { Animate } from "react-animate-mount";

function Formulario(props) {
    
    const inputs = []
    let aux = []
    
    for (let i = 0; i < (props.formularioPrimerNivel.length); i++) {
        for(let p = 0; p < (props.formularioSegundoNivel[0].length); p++) {
            aux.push(props.inputBase)
        }
        inputs.push(aux)
        aux = []
    }

    let settingStateExpand = [...props.formularioPrimerNivel]
    let settingStateExpand2 = JSON.parse(JSON.stringify(props.formularioSegundoNivel))
    settingStateExpand = settingStateExpand.fill(true, 0, settingStateExpand.length)

    settingStateExpand2.map((pestana, a) => {
        let arr = [...pestana]
        arr = pestana.fill(true, 0, pestana.length)
        settingStateExpand2[a] = arr
    })

    const [arrExpandido, setArrExpandido] = useState(settingStateExpand)
    const [arrExpandido2, setArrExpandido2] = useState(settingStateExpand2)

    function tokenizeIDs(string) {
        return string.replace(/\s/g, '');
    }

    function handleSetExpandido(event) {

        let id = event.nativeEvent.srcElement.id

        if(id.includes(" ")) {
            let words = id.split(" ")
            const func1 = (element) => tokenizeIDs(element) == words[1]
            let idx1 = props.formularioPrimerNivel.findIndex(func1)

            const func2 = (element) => tokenizeIDs(element) == words[0]
            let idx2 = props.formularioSegundoNivel[idx1].findIndex(func2)

            let temp = JSON.parse(JSON.stringify(arrExpandido2))
            temp[idx1][idx2] = !temp[idx1][idx2]

            const funcMap = arrExpandido2.map((c, i) => {
                c.map((d, j) => {
                    if(i == idx1 && j == idx2) {
                    return !d
                }
                })
            })

            setArrExpandido2(temp)
        }

        else {
            const func = (element) => tokenizeIDs(element) == id
            let idx = props.formularioPrimerNivel.findIndex(func)
            let temp = JSON.parse(JSON.stringify(arrExpandido))
            temp[idx] = !temp[idx]
            const funcMap2 = arrExpandido.map((c, i) => {
                if(i == idx) {
                    return !c
                }
                else if(c == true) {
                    return true
                }
            })
            setArrExpandido(funcMap2)
        }
        
    }

    function onKeyDown(event) {
        if(event.code == "ArrowUp") {
            event.preventDefault()
            let nextItem = document.getElementById((parseInt(event.target.id) - props.cantidadDeElementosEnFila).toString())
            if (nextItem != null) {
                nextItem.focus()
            }
        }
        if(event.code == "ArrowDown") {
            event.preventDefault()
            let nextItem = document.getElementById((parseInt(event.target.id) + props.cantidadDeElementosEnFila).toString())
            if (nextItem != null) {
                nextItem.focus()
            }
        }
        if(event.code == "ArrowLeft") {
            event.preventDefault()
            let nextItem = document.getElementById((parseInt(event.target.id) - 1).toString())
            if (nextItem != null) {
                nextItem.focus()
            }
        }
        if(event.code == "ArrowRight") {
            event.preventDefault()
            let nextItem = document.getElementById((parseInt(event.target.id) + 1).toString())
            if (nextItem != null) {
                nextItem.focus()
            }
        }
    }

    useEffect(() => {
        let allinputs = document.getElementsByClassName("inputGris")
        Array.from(allinputs).map((item, a) => {
            item.addEventListener('keydown', onKeyDown);
            item.id = a
        })
        return () => {
        };
    }, [onKeyDown]);
    
    return (
        <div className='formulario'>
            {props.formularioPrimerNivel.map((data1, i) =>
            <>
                <div className="nivel1" id={tokenizeIDs(data1)} onClick={handleSetExpandido}>
                <button className='formularioNivel1' id={tokenizeIDs(data1)}>
                    <div className='pestañaSuperiorForm' id={tokenizeIDs(data1)}>
                        <div id={tokenizeIDs(data1)}><p id={tokenizeIDs(data1)}>{data1}</p></div>
                        <div id={tokenizeIDs(data1)}><span className={`material-symbols-outlined ${arrExpandido[i] == true ? " active":" inactive"} `} id={tokenizeIDs(data1)}>expand_more</span></div>
                    </div>
                    <div className='barraPestañaFormN1' id={tokenizeIDs(data1)}></div>
                </button>
                </div>
                {props.formularioSegundoNivel[i].map((data2, j) => 
                <>
                {/*{arrExpandido[i] == true?(*/}
                <Animate show={arrExpandido[i]}>   
                <div>
                    <div className="nivel2" id={`${tokenizeIDs(data2)} ${tokenizeIDs(data1)}`} onClick={handleSetExpandido}>
                    <button className={`formularioNivel2 ${data2 == "Total" ? "Total" : ""}`} id={`${tokenizeIDs(data2)} ${tokenizeIDs(data1)}`}>
                        <div className='sangriaPestanaa'></div>
                        <div className={`pestañaSuperiorForm ${data2 == "Total" ? "spanTotalGris" : ""}`} id={`${tokenizeIDs(data2)} ${tokenizeIDs(data1)}`}>
                            <div className="sangriaFormulario" id={`${tokenizeIDs(data2)} ${tokenizeIDs(data1)}`}></div>
                            <div className='contenidopestaña' id={`${tokenizeIDs(data2)} ${tokenizeIDs(data1)}`}>
                                <div id={`${tokenizeIDs(data2)} ${data1}`}><p id={`${tokenizeIDs(data2)} ${tokenizeIDs(data1)}`}>{data2}</p></div>
                                <div id={`${tokenizeIDs(data2)} ${data1}`}><span className={`material-symbols-outlined ${arrExpandido2[i][j] == true ? " active":" inactive"}`} id={`${tokenizeIDs(data2)} ${tokenizeIDs(data1)}`}>expand_more</span></div>
                            </div>
                        </div>
                        <div className='barraPestañaFormN2' id={`${data2} ${data1}`}></div>
                    </button>
                    </div>
                    
                <>
                {/*{arrExpandido2[i][j] == true?(*/}
                <Animate show={arrExpandido2[i][j]}> 
                <div>
                    <div className={"inputsFormulario " + arrExpandido[i].toString() + (data2 == "Total" ? " inputsTotal" : "")}>
                    <div className="sangriaInputs"></div>
                    {inputs.map((subdata, k) => 
                        <>
                        {subdata.map((subinput, l) =>
                            <>
                            {subinput.map((input, m) =>
                                k*100 + l*10  + m *1 < subinput.length ? (<div className='input'>
                                <label>
                                    <p className={`elementoInput ${input[0] == "Aca" || input[0] == "Tritu" || input[0].includes("Conc") ? "alinearDer" : input[0] == "rreo" || input[0] == "radas" || input[0].includes("Ton")? "alinearIzq": ""}`}>{input[0]}</p>
                                    <p className={`cantidadInput`}>{input[1]}</p>
                                </label>
                                {props.tipoFormulario == "MovimientoMineral" & (input[0].includes("final") || data2.includes("Total"))? 
                                    <input className={'inputGris' + (props.loading == true ? " loadingInput" : "")} type="number" name={`${input[0]} ${input[1]} ${data1} ${data2}`} placeholder={0.000} readOnly={true} onWheel={ event => event.currentTarget.blur() }></input>
                                :
                                    <input className={'inputGris' + (props.loading == true ? " loadingInput" : "")} type="number" name={`${input[0]} ${input[1]} ${data1} ${data2}`} onChange={props.handleInputChange} placeholder={0.000} onWheel={ event => event.currentTarget.blur() }></input>
                                }
                                </div>)
                            : null)} 
                            </>
                        )} 
                        </>
                    )}
                    </div>
                    </div>
                    </Animate> 
                </>
                </div>
                </Animate> 
            {/*):null}*/}
            </>
            )
            }
            </>
            )} 
            {props.mostrarBotones ? <>
                <div className='stripBotones'>
                    <button className='enviar' disabled={props.loading ? true : false} onClick={props.handleSendForm}>Enviar
                        <span className='separatorButton'/>
                        <span class="material-symbols-outlined">send</span>
                    </button>
                </div>
            </> : null}
        </div>
    )
}

export default Formulario