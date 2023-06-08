import HeaderDiseno from "../components/HeaderDiseno";
import Menu from "../components/Menu";
import "../styles/colors.css"
import "../styles/button.css"
import "../styles/ListaReportes.css"
import "../styles/ReporteGerencial.css"
import "../styles/formulario.css"
import "../styles/Registro.css"
import "../styles/reporteGerencialView.css"
import CardPrecioMetal from '../components/CardPrecioMetalRG'
import CardReporteGerencial from '../components/CardReporteGerencial'


import TablaReporteGerencial from "../components/TablaReporteGerencial";
import React, {useState, useEffect} from 'react'
import axios from 'axios'


function ReporteGerencial() {

    const [status1, setStatus1 ] = useState('idle')
    const [status2, setStatus2 ] = useState('idle')
    const [status3, setStatus3 ] = useState('idle')

    const [error, setError] = useState("idle");
    const [balance, setBalance] = useState({});

    const [movmin, setMovmin] = useState({});
    const [liquidacion, setLiquidacion] = useState({});



    useEffect(()=>{
        setStatus1('loading')
        axios.get(`http://localhost:3050/gerente/balance?fecha=2023-05-01&idMina=1`)
          .then((result)=>{
            setStatus1('resolved')
            setBalance(result.data)
          })
          .catch((error)=>{
            setError(error)
            setStatus1('error')
          })
      },[]);

    useEffect(()=>{
        setStatus2('loading')
        axios.get(`http://localhost:3050/gerente/reporteBascula?nombreMina='Minesites'&fecha='2023-04-26'`)
          .then((result)=>{
            setStatus2('resolved')
            setMovmin(result.data)
          })
          .catch((error)=>{
            setError(error)
            setStatus2('error')
          })
      },[]);


      useEffect(()=>{
        setStatus3('loading')
        axios.get(`http://localhost:3050/gerente/liquidacion?fecha=2023-04-29&idMina=1`)
          .then((result)=>{
            setStatus3('resolved')
            setLiquidacion(result.data)
          })
          .catch((error)=>{
            setError(error)
            setStatus3('error')
          })
      },[]);


    
    let temp = "Hola";


    const date = new Date();
    const options = {  year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleDateString("es-MX", options)

    if (status1 == 'resolved' && status2 == 'resolved' && status3 == 'resolved') 
    {

        //Arreglos donde se calculará el CONTENIDO en Toneladas
        //Recordamos que la formula es Elemento*TMS/100 *1000 en caso de que sea Ag
        let tempCabeza=[]
        let tempZn=[]
        let tempPb=[]
        let tempColas=[]


        //Recorremos el arreglo realizando la verificación y realizando la operación pertinente.
        for(let i in balance){
            if (i == "Cabeza") {
                for(let j in balance[i]) {
                    if (j !="tms" && j !="Fe" && j != "Sb" && j != "As") {
                        if (j=="Ag")
                            tempCabeza.push(((balance[i][j]*balance[i]["tms"])/1000))
                        else
                            tempCabeza.push(((balance[i][j]*balance[i]["tms"])/100))
                    }
                }
            }
            if (i == "Zn") {
                for(let j in balance[i]) {
                    if (j !="tms" && j !="Fe" && j != "Sb" && j != "As") {
                        if (j=="Ag")
                            tempZn.push(((balance[i][j]*balance[i]["tms"])/1000))
                        else
                            tempZn.push(((balance[i][j]*balance[i]["tms"])/100))                    }
                }
            }
            if (i == "Pb") {
                for(let j in balance[i]) {
                    if(j !="tms" && j !="Fe" && j != "Sb" && j != "As") {
                        if (j=="Ag")
                            tempPb.push(((balance[i][j]*balance[i]["tms"])/1000))
                        else
                            tempPb.push(((balance[i][j]*balance[i]["tms"])/100))                    }
                }
            }
            if (i == "Colas") {
                for(let j in balance[i]) {
                    if (j !="tms" && j !="Fe" && j != "Sb" && j != "As") {
                        if (j=="Ag")
                            tempColas.push(((balance[i][j]*balance[i]["tms"])/1000))
                        else
                            tempColas.push(((balance[i][j]*balance[i]["tms"])/100))                    }
                }
            }
        }

        let TotalConcentrados = [];

        //console.log(tempCabeza)

        //Con este ciclo creamos un arreglo de los totales de cada concentrada siguiendo el siguiente orden [Ag, Pb, Zn, Cu]
        for ( let k=0 ; k < tempCabeza.length ;k++) {
            TotalConcentrados.push(tempZn[k] + tempPb[k] + tempColas[k])
        }

        //Ahora con un ciclo realizamos el calculo del total de recuperación
        let TotalRecuperacion = [];
        for (let k=0 ; k < tempZn.length  ;k++) {
            TotalRecuperacion.push( ((tempColas[k] *100)/TotalConcentrados[k]) + ((tempZn[k] *100)/TotalConcentrados[k]) +((tempPb[k] *100)/TotalConcentrados[k]))
        }


        //console.log("SUMAAAAA -> ", TotalRecuperacion );
        const entries = Object.entries(balance);
        
        return(
            <>
                <HeaderDiseno
                titulo={"Reporte gerencial"}
                subtitulo={"Del dia especifico"}
                isDate={true}
                />
    
                <div className="cont-tabla">
                    <div className="seccion-reporte">
                        <div className="header-seccion-reporte">
                            <div className='secc-1'>
                                <h3 className="p1000 titulo-seccion">Movimiento de mineral</h3>
                                <div className="sep-seccion"></div>
                            </div>                   
                        </div>
                        <div className="movmineral">
                            
                            <div className="movmineral-item">
                                <p className="bold p800 subtitulo-movmineral">Existencia</p>
                                <p className="n700">Dia inicial</p>
                                <p className="fontRGValue">320</p>
                            </div>
                            <div className="movmineral-item">
                                <p className="bold p800 subtitulo-movmineral">Acarreo hoy</p>
                                <p className="n700">TMH</p>
                                <p className="fontRGValue">10</p>
                            </div>
                            <div className="movmineral-item">
                                <p className="bold p800 subtitulo-movmineral">Acum. Mensual</p>
                                <p className="n700">TMH</p>
                                <p className="fontRGValue">10</p>
                            </div>
                            <div className="movmineral-item">
                                <p className="bold p800 subtitulo-movmineral">Total</p>
                                <p className="n700">TMH</p>
                                <p className="fontRGValue">10</p>
                            </div>
                        </div>
                        <div className="movmineral">
                            <div className="movmineral-item">
                                <p className="bold p800 subtitulo-movmineral">Molidas</p>
                                <div className="movmineral-2">
                                    <div className='movmineral-subitem'>
                                        <p className="n700">Hoy (TMS)</p>
                                        <p className="fontRGValue">10</p>
                                    </div>
                                    <div className='movmineral-subitem'>
                                        <p className="n700">Acum. (TMS)</p>
                                        <p className="fontRGValue">10</p>
                                    </div>
                                </div>
                            </div>
                            <div className="movmineral-item">
                                <p className="bold p800 subtitulo-movmineral">Existencia</p>
                                <p className="n700">Patios (TMH)</p>
                                <p className="fontRGValue">10</p>
                            </div> 
                            <div className="movmineral-item">
                                <p className="bold p800 subtitulo-movmineral">Humedad</p>
                                <p className="n700">%</p>
                                <p className="fontRGValue">10</p>
                            </div>
                        </div>           
                    </div>
                </div>  


            <div className="cont-tabla">

            {
                entries.map(([clave, valor]) => {
                    console.log(`Clave: ${clave}`);
                    console.log(`Valor:`, valor);
                    return(
                        <TablaReporteGerencial  Valor={valor} Clave={clave} totalConcentrados = {TotalConcentrados} tmsCabeza={balance.Cabeza["tms"]}/>
                    )
                })
            }

            <div className="seccion-reporte">
                <div className="header-seccion-reporte">
                    <div className='secc-1-full'>
                        <h3 className="p1000 titulo-seccion">TOTALES DE CONTENIDO</h3>
                        <div className="sep-seccion-full"></div>
                    </div>
                </div>

                <div className="card-containerRG">
                <div className="boxRG">
                        <CardReporteGerencial style='light' precio='Ag' mineral={TotalConcentrados[0].toFixed(2)}></CardReporteGerencial>
                    </div>
                    
                    <div className="boxRG">
                        <CardReporteGerencial style='dark' precio='Cu' mineral={TotalConcentrados[1].toFixed(2)}></CardReporteGerencial>
                    </div>
                    
                    <div className="boxRG">
                        <CardReporteGerencial style='light' precio='Zn' mineral={TotalConcentrados[2].toFixed(2)}></CardReporteGerencial>
                    </div>
                    
                    <div className="boxRG">
                        <CardReporteGerencial style='dark' precio='Pb' mineral={TotalConcentrados[3].toFixed(2)}></CardReporteGerencial>
                    </div>
                </div>
            </div>
                <div className="seccion-reporte">
                    <div className="header-seccion-reporte">
                        <div className='secc-1-full'>
                            <h3 className="p1000 titulo-seccion">Liquidación Estimada</h3>
                            <div className="sep-seccion-full"></div>
                        </div>
                    </div>
    
                    <div className="liquidacion-cont">
    
                        <div className="liquidacion-item">
                            <div className="movmineral-item">
                                <p className="bold p800 subtitulo-movmineral" style={{marginBottom: "2rem"}}> Hoy ({fecha})</p>
                                <p className="n700">Concentrado Zinc (Zn)</p>
                                <p className="fontRGValue">{liquidacion[0].zn.toFixed(2)}</p>
                                <p className="n700">Concentrado Cobre (Cu)</p>
                                <p className="fontRGValue">{liquidacion[0].cu.toFixed(2)}</p>
                                <p className="n800 bold">Total: ${liquidacion[0].totalHoy.toFixed(2)}</p>
                            </div> 
                        </div>
    
                        <hr className='vertical-sep'/>
                        
                        <div className="liquidacion-item">
                            <div className="movmineral-item">
                                <p className="bold p800 subtitulo-movmineral" style={{marginBottom: "1rem"}}>A la fecha</p>
                                <p className="n700">Concentrado Zinc (Zn)</p>
                                <p className="fontRGValue">{liquidacion[0].acumuladoCu.toFixed(2)}</p>
                                <p className="n700">Concentrado Cobre (Cu)</p>
                                <p className="fontRGValue">{liquidacion[0].acumuladoZn.toFixed(2)}</p>
                                <p className="n800 bold">Total: ${liquidacion[0].totalAcumulado.toFixed(2)}</p>
                            </div> 
                        </div>
    
                    </div>
    
                    <div className="seccion-reporte">
                        <div className="header-seccion-reporte">
                            <div className='secc-1-center'>
                                <div className="sep-seccion"></div>
                                <h3 className="p1000 titulo-seccion">Valor del mineral (USD)</h3>
                                <div className="sep-seccion"></div>
                            </div>
                        </div>
                        <div className="cont-valormineral">
                            <div className="item-valormineral">
                                <h1 className="blanco bold">${liquidacion[0].valorHoy.toFixed(2)}</h1>
                                <p className="n800 bold">Hoy</p>
                            </div>
                            <div className="item-valormineral">
                                <h1 className="blanco bold">$43.42</h1>
                                <p className="n800 bold">A la fecha</p>
                            </div>
                        </div>
    
                    </div>
                </div>
    
                <div className='stripBotones' style={{width:"100%"}}>
                    <button className='guardarProgreso'>Imprimir
                        <span className='separatorButton'/>
                        <span class="material-symbols-outlined">sync_saved_locally</span>
                    </button>
                </div>
    
    
    
    
            </div>
    
        
            <Menu rol="gerente" activeTab="summarize" landing="/gerencia"></Menu> : null
            </>
        );
    }

};
export default ReporteGerencial;
