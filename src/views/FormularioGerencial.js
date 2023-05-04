import React,{useState} from 'react'
import HeaderDiseno from "../components/HeaderDiseno"
import "../styles/colors.css"
import "../styles/button.css"
import "../styles/ListaReportes.css"
import "../styles/ReporteGerencial.css"
import "../styles/formulario.css"
import "../styles/Registro.css"
import Select from 'react-select';
import CardPrecioMetal from '../components/CardPrecioMetal'
import ModalReporteLaboratorio from '../components/ModalReporteLaboratorio'
import Formulario from "../components/Formulario";
import Menu from '../components/Menu'

function FormularioGerencial() {
    const formularioPrimerNivel = ["Hoy", "Acumulado"]
    const formularioSegundoNivel = [["Cabeza", "Concentración plomo" , "Concentración zinc", "Colas"], ["Cabeza", "Concentración plomo" , "Concentración zinc", "Colas"]]
    const inputBase = [["TMS", "↓"],["Ag", "g/ton"], ["Cu", "%"], ["Zn", "%"], ["Pb", "%"], ["Fe", "%"], ["Sb", "%"], ["Cd", "%"]]

    const date = new Date();
    const options = {  year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleDateString("es-MX", options)
    const [selectedOption, setSelectedOption] = useState(null);
    const options1 = [
        { value: 'Minesites', label: 'Minesites' },
        { value: 'Guadalupe', label: 'Guadalupe' },
        { value: 'Balcones', label: 'Balcones' },
    ];

    const [modalVisibility, setModalVisibility] = useState(false)

    function showModal(){
        setModalVisibility(true)
    }
  return (
    <>
        <HeaderDiseno titulo="Formulario para Reporte Gerencial" subtitulo="Llena los campos en cada sección para generar el reporte gerencial."></HeaderDiseno>
        <div className="header-reporte">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options1}
                placeholder="Mina"
                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        fontFamily: 'Inter',
                        borderColor: state.isFocused ? '#EF7B30' : 'transparent',
                        backgroundColor: '#f9caac',
                        borderRadius: "10px",
                        width: "12rem",
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
                <button className='btn-lista' style={{width: "12rem"}}>Ir al historial</button>
        </div>
        
        <div className="cont-tabla">
            <div className="seccion-reporte">
                <div className="header-seccion-reporte">
                    <div className='secc-1'>
                        <h3 className="p1000 titulo-seccion">Movimiento de mineral</h3>
                        <div className="sep-seccion"></div>
                    </div>
                    <div className="btn-detalles-seccion">
                        <span class="material-symbols-outlined">
                        visibility
                        </span>
                        <p className="blanco texto-btn">Reporte de báscula</p>
                    </div>                    
                </div>
                <div className="movmineral">
                    
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Existencia</p>
                        <p className="n700">Dia inicial</p>
                        <input type="text" className='inputGris'/>
                    </div>
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Acarreo hoy</p>
                        <p className="n700">TMH</p>
                        <input type="text" className='inputGris'/>
                    </div>
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Acum. Mensual</p>
                        <p className="n700">TMH</p>
                        <input type="text" className='inputGris'/>
                    </div>
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Total</p>
                        <p className="n700">TMH</p>
                        <input type="text" className='inputGris'/>
                    </div>
                </div>
                <div className="movmineral">
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Molidas</p>
                        <div className="movmineral-2">
                            <div className='movmineral-subitem'>
                                <p className="n700">Hoy (TMS)</p>
                                <input type="text" className='inputGris'/>
                            </div>
                            <div className='movmineral-subitem'>
                                <p className="n700">Acum. (TMS)</p>
                                <input type="text" className='inputGris'/>
                            </div>
                        </div>
                    </div>
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Existencia</p>
                        <p className="n700">Patios (TMH)</p>
                        <input type="text" className='inputGris'/>
                    </div> 
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Humedad</p>
                        <p className="n700">%</p>
                        <input type="text" className='inputGris'/>
                    </div>
                   
                </div>
                
            </div>
            
            
            <div className="seccion-reporte">
                <div className="header-seccion-reporte">
                    <div className='secc-1'>
                        <h3 className="p1000 titulo-seccion">Balance metalúrgico</h3>
                        <div className="sep-seccion"></div>
                    </div>
                    <div className="btn-detalles-seccion" onClick={showModal}>
                        <span class="material-symbols-outlined">
                        visibility
                        </span>
                        <p className="blanco texto-btn">Análisis de laboratorio</p>
                    </div>
                </div>

                <Formulario
                    formularioPrimerNivel={formularioPrimerNivel} 
                    formularioSegundoNivel={formularioSegundoNivel} 
                    inputBase={inputBase}
                    cantidadDeElementosEnFila={8}
                ></Formulario>
                
            </div>
            <div className="seccion-reporte">
                <div className="header-seccion-reporte">
                    <div className='secc-1-full'>
                        <h3 className="p1000 titulo-seccion">Precio de los metales (USD)</h3>
                        <div className="sep-seccion-full"></div>
                    </div>
                </div>

                <div className="cont-preciosmetal">
                    <CardPrecioMetal style='light' precio='23.65' mineral='Oro (Kitco)'></CardPrecioMetal>
                    <CardPrecioMetal style='light' precio='23.65' mineral='Oro (Kitco)'></CardPrecioMetal>
                    

                    <div className="subcont-preciosmetal">
                    <CardPrecioMetal style='dark' precio='23.65' mineral='Oro (Kitco)'></CardPrecioMetal>
                    <CardPrecioMetal style='dark' precio='23.65' mineral='Oro (Kitco)'></CardPrecioMetal>
                    <CardPrecioMetal style='dark' precio='23.65' mineral='Oro (Kitco)'></CardPrecioMetal>
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
                            <p className="bold p800 subtitulo-movmineral" style={{marginBottom: "2rem"}}>Hoy ({fecha})</p>
                            <p className="n700">Concentrado Zinc (Zn)</p>
                            <input type="text" className='inputGris'/>
                            <p className="n700">Concentrado Cobre (Cu)</p>
                            <input type="text" className='inputGris'/>
                        </div> 
                    </div>

                    <hr className='vertical-sep'/>
                    
                    <div className="liquidacion-item">
                        <div className="movmineral-item">
                            <p className="bold p800 subtitulo-movmineral" style={{marginBottom: "1rem"}}>A la fecha</p>
                            <p className="n700">Concentrado Zinc (Zn)</p>
                            <input type="text" className='inputGris'/>
                            <p className="n700">Concentrado Cobre (Cu)</p>
                            <input type="text" className='inputGris'/>
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
        </div>
        <Menu rol={"admin"} activeTab="summarize" landing="/admin"/>
        {modalVisibility ? <ModalReporteLaboratorio setModalVisibility = {setModalVisibility}></ModalReporteLaboratorio>:null}
                                   
    </>
  )
}

export default FormularioGerencial