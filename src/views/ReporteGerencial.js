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

    const [status, setStatus ] = useState('idle')
    const [error, setError] = useState(null);
    const [balance, setBalance] = useState({});
    const [movmin, setMovmin] = useState(null);


    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:3050/gerente/balance?fecha=2023-05-01&idMina=1`)
          .then((result)=>{
            setStatus('resolved')
            setBalance(result.data)
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
      },[]);

    useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:3050/gerente/reporteBascula?nombreMina='Minesites'&fecha='2023-04-26'`)
          .then((result)=>{
            setStatus('resolved')
            setMovmin(result.data)
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
      },[]);


      useEffect(()=>{
        setStatus('loading')
        axios.get(`http://localhost:3050/gerente/reporteBascula?nombreMina=Minesites`)
          .then((result)=>{
            setStatus('resolved')
            setMovmin(result.data)
          })
          .catch((error)=>{
            setError(error)
            setStatus('error')
          })
      },[]);

      console.log("MovMin", movmin)



    
    let temp = "Hola";


    const date = new Date();
    const options = {  year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleDateString("es-MX", options)
    if (status == 'resolved') 
    {
        let tempCabeza=[]
        let tempZn=[]
        let tempPb=[]
        let tempColas=[]



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

        let sum2 = [];

        //console.log(tempCabeza)

        for ( let k=0 ; k < tempCabeza.length ;k++) {
            sum2.push(tempCabeza[k] + tempZn[k] + tempPb[k] + tempColas[k])
        }

        //console.log("SUMAAAAA -> ", sum2 );
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
                        <TablaReporteGerencial  Valor={valor} Clave={clave} Suma = {sum2}/>
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
                        <CardReporteGerencial style='light' precio='Ag' mineral='123'></CardReporteGerencial>
                    </div>
                    
                    <div className="boxRG">
                        <CardReporteGerencial style='dark' precio='Cu' mineral='234'></CardReporteGerencial>
                    </div>
                    
                    <div className="boxRG">
                        <CardReporteGerencial style='light' precio='Zn' mineral='342'></CardReporteGerencial>
                    </div>
                    
                    <div className="boxRG">
                        <CardReporteGerencial style='dark' precio='Pb' mineral='432'></CardReporteGerencial>
                    </div>
                </div>
            </div>

                <div className="seccion-reporte">
                    <div className="header-seccion-reporte">
                        <div className='secc-1-full'>
                            <h3 className="p1000 titulo-seccion">Precio de los metales (USD)</h3>
                            <div className="sep-seccion-full"></div>
                        </div>
                    </div>
    
                    <div className="cont-preciosmetal">
                        <CardPrecioMetal style='light' precio='40.65' mineral='Oro (Kitco)'></CardPrecioMetal>
                        <CardPrecioMetal style='light' precio='36.1' mineral='Plata (Kitco)'></CardPrecioMetal>
                        
    
                        <div className="subcont-preciosmetal">
                        <CardPrecioMetal style='dark' precio='28.12' mineral='Plomo (LME)'></CardPrecioMetal>
                        <CardPrecioMetal style='dark' precio='18.23' mineral='Zinc (LME)'></CardPrecioMetal>
                        <CardPrecioMetal style='dark' precio='26.65' mineral='Cobre (LME)'></CardPrecioMetal>
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
                                <p className="fontRGValue">320</p>
                                <p className="n700">Concentrado Cobre (Cu)</p>
                                <p className="fontRGValue">320</p>
                                <p className="n800 bold">Total: $0.00</p>
                            </div> 
                        </div>
    
                        <hr className='vertical-sep'/>
                        
                        <div className="liquidacion-item">
                            <div className="movmineral-item">
                                <p className="bold p800 subtitulo-movmineral" style={{marginBottom: "1rem"}}>A la fecha</p>
                                <p className="n700">Concentrado Zinc (Zn)</p>
                                <p className="fontRGValue">320</p>
                                <p className="n700">Concentrado Cobre (Cu)</p>
                                <p className="fontRGValue">320</p>
                                <p className="n800 bold">Total: $0.00</p>
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
                                <h1 className="blanco bold">$28.42</h1>
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
