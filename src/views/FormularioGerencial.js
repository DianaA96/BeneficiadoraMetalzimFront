import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
import ModalDinamico from '../components/ModalDinamico'
import Formulario from "../components/Formulario";
import Menu from '../components/Menu'
import CalendarDatePicker from '../components/calendarDatePicker'
import axios from 'axios'
import Tooltip from '../components/Tooltip'

const formularioPrimerNivel = ["Concentrados"]
const formularioSegundoNivel = [["Cabeza", "Concentración plomo" , "Concentración zinc", "Colas"], ["Cabeza", "Concentración plomo" , "Concentración zinc", "Colas"]]
const inputBase = [["TMS", "↓"],["Ag", "g/ton"], ["Cu", "%"], ["Zn", "%"], ["Pb", "%"], ["Fe", "%"], ["Sb", "%"], ["Cd", "%"]]

function FormularioGerencial(props) {
    const [ fechaReporte, setFechaReporte ] = useState("")
    const [status, setStatus] = useState({})
    const [error, setError] = useState({})
    const [ idRep, setIdRep ] = useState("")
    const [tooltipVisibility, setTooltipVisibility] = useState(false)
    const [isPriceUpdated, setPriceUpdated] = useState(0)
    const [ modalConfirmacionVisibility, setModalConfirmacionVisibility ] = useState(false)
    const [ modalExitoVisibility, setModalExitoVisibility ] = useState(false)
    const [ modalErrorVisibility, setModalErrorVisibility ] = useState(false)
    const [ loaderVisibility, setLoaderVisibility ] = useState(false)
    const [concentradosAcum, setConcentradosAcum] = useState(0)

    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        concentradoZnHoy: 0,
        concentradoPbHoy: 0,
        humedad:  0,
        tms:  0
    });

    const [generalData, setGeneralData] = useState({
        inicial2: {
            inicial2: 0
          },
        acarreoALaFecha: {
            acarreoALaFecha: 0,
            molidasALaFecha: 0
          },
        trituradas: {
            acarreo: 0,
            trituradas: 0
          }
      });

      const [preciosElementos, setPreciosElementos] = useState({
        Ag: {
            valorActual: 0,
            valorAnterior: 0
          },
          Pb: {
            valorActual: 0,
            valorAnterior: 0
          },
          Zn: {
            valorActual: 0,
            valorAnterior: 0
          },
          Cu: {
            valorActual: 0,
            valorAnterior: 0
          },
          Sb: {
            valorActual: 0,
            valorAnterior: 0
          },
          As: {
            valorActual: 0,
            valorAnterior:0
          },
          Au: {
            valorActual: 0,
            valorAnterior: 0
          },
      });
      const [ liquidacionTotalHoy, setLiquidacionTotalHoy ] = useState(formValues.concentradoZnHoy + formValues.concentradoPbHoy)
      const [ liquidacionTotalAcum, setLiquidacionTotalAcum ] = useState(0)

    function handleFormChange(e){
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        if (e.target.name === "concentradoZnHoy") {
            setLiquidacionTotalHoy(parseFloat(formValues.concentradoCuHoy) + parseFloat(e.target.value))
        }
        else if (e.target.name === "concentradoPbHoy") {
            setLiquidacionTotalHoy(parseFloat(formValues.concentradoZnHoy) + parseFloat(e.target.value))
        }
    }
   
    const [ formularioParaPost, setFormularioParaPost ] = useState(
        {
            "Concentrados":{
            "Cabeza": {
                "tms": 0,
                "Ag": 0,
                "Cu": 0,
                "Zn": 0,
                "Pb": 0,
                "Fe": 0,
                "Sb": 0,
                "Cd": 0
            },
            "Pb": {
                "tms": 0,
                "Ag": 0,
                "Cu": 0,
                "Zn": 0,
                "Pb": 0,
                "Fe": 0,
                "Sb": 0,
                "Cd": 0
            },
            "Zn": {
                "tms": 0,
                "Ag": 0,
                "Cu": 0,
                "Zn": 0,
                "Pb": 0,
                "Fe": 0,
                "Sb": 0,
                "Cd": 0
            },
            "Colas": {
                "tms": 0,
                "Ag": 0,
                "Cu": 0,
                "Zn": 0,
                "Pb": 0,
                "Fe": 0,
                "Sb": 0,
                "Cd": 0
            }
        }
    }
    )

    const date = new Date();
    const options = {  year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = date.toLocaleDateString("es-MX", options)
    const [selectedOption, setSelectedOption] = useState('');
    const options1 = [
        { value: '1', label: 'Minesites' },
        { value: '2', label: 'Guadalupe' },
        { value: '3', label: 'Balcones' },
    ];

    const [modalTablaVisibility, setModalTablaVisibility] = useState(false)
    const [modalVisibility, setModalVisibility] = useState(false)

    

    function showModalTabla(){
        setModalTablaVisibility(true)
    }

    function handleInputChange(event) {
        let minaCodigo, fechaCodigo;
        fechaCodigo = `${fechaReporte.substring(8,10) + fechaReporte.substring(5,7) + fechaReporte.substring(2,4)}`;
        setIdRep(`RGE${selectedOption.value}${fechaCodigo}`)

        event.target.defaultValue = 0
        let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
        let tmsColas = valoresPrevios.Concentrados.Cabeza.tms - valoresPrevios.Concentrados.Pb.tms -  valoresPrevios.Concentrados.Zn.tms
        document.getElementById(32).value = tmsColas
        valoresPrevios.Concentrados.Colas.tms = tmsColas

        if(event.target.name.includes("Concentrados")) {
            if(event.target.name.includes("Cabeza")) {
                if(event.target.name.includes("TMS")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Cabeza.tms = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Cabeza.tms = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }

                else if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Cabeza.Ag = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Cabeza.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
               
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Cabeza.Pb = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Cabeza.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Cabeza.Zn = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Cabeza.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Cabeza.Cu = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Cabeza.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Cabeza.Fe = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Cabeza.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Cabeza.Sb = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Cabeza.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Cabeza.Cd = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Cabeza.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
            else if(event.target.name.includes("plomo")) {
                if(event.target.name.includes("TMS")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Pb.tms = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Pb.tms = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }

                else if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Pb.Ag = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Pb.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
               
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Pb.Pb = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Pb.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Pb.Zn = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Pb.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Pb.Cu = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Pb.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Pb.Fe = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Pb.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Pb.Sb = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Pb.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Pb.Cd = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Pb.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
            else if(event.target.name.includes("zinc")) {
                if(event.target.name.includes("TMS")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Zn.tms = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Zn.tms = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }

                else if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Zn.Ag = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Zn.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Zn.Pb = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Zn.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Zn.Zn = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Zn.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Zn.Cu = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Zn.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Zn.Fe = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Zn.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Zn.Sb = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Zn.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Zn.Cd = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Zn.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
            else if(event.target.name.includes("Cola")) {
                if(event.target.name.includes("TMS")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Colas.tms = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Colas.tms = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }

                else if(event.target.name.includes("Ag")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Colas.Ag = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Colas.Ag = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
               
                else if(event.target.name.includes("Pb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Colas.Pb = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Colas.Pb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)
                }
                else if(event.target.name.includes("Zn")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Colas.Zn = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Colas.Zn = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Cu")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Colas.Cu = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Colas.Cu = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Fe")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Colas.Fe = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Colas.Fe = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
                else if(event.target.name.includes("Sb")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Colas.Sb = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Colas.Sb = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
               
                else if(event.target.name.includes("Cd")) {
                    let valoresPrevios = JSON.parse(JSON.stringify(formularioParaPost))
                    if(event.target.value == "" ) {
                        valoresPrevios.Concentrados.Colas.Cd = 0
                    }
                    else {
                        valoresPrevios.Concentrados.Colas.Cd = event.target.valueAsNumber
                    }
                    setFormularioParaPost(valoresPrevios)                
                }
            }
        }  
    }

    function handleSendForm() {
        //setLoaderVisibility(true)
        let destruct = JSON.parse(JSON.stringify(formularioParaPost))
        let objeto = {
            "idMina": parseInt(selectedOption.value),
            "idRep":    idRep,
            "humedad":  parseFloat(formValues.humedad),
            "fecha": fechaReporte,
            "Concentrados": formularioParaPost.Concentrados,
            "precioConZn": parseFloat(formValues.concentradoZnHoy),
            "precioConCu": parseFloat(formValues.concentradoPbHoy)
        }
        console.log(objeto)
        axios({
            method: 'post',
            url: `https://metalzim-webapp.azurewebsites.net/admin/createReport`,
            data: objeto,
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((result)=>{
            setModalConfirmacionVisibility(false);
            setModalExitoVisibility(true);
        })
        .catch(error =>{
            console.log(error)
            alert('Algo malo pasó:', error);
            setModalErrorVisibility(true)
        })
    }

    function showModal(){
        setModalConfirmacionVisibility(true)
    }
    useEffect(() => {
        console.log(selectedOption, fechaReporte)
        axios.get(`https://metalzim-webapp.azurewebsites.net/gerente/reporteBascula?nombreMina=${selectedOption.label}&fecha=${fechaReporte}`)
        .then((result)=>{
            document.getElementById(8).disabled = true
            document.getElementById(32).disabled = true
            document.getElementById(8).value = result.data.trituradas.trituradas;
            formularioParaPost.Concentrados.Cabeza.tms = parseInt(result.data.trituradas.trituradas);
            setGeneralData(result.data)
            setStatus('resolved')
            axios.get(`https://metalzim-webapp.azurewebsites.net/admin/Elementos/Actuales`)
            .then((result)=>{
                setPreciosElementos(result.data)
                setStatus('resolved')
                axios.get(`https://metalzim-webapp.azurewebsites.net/admin/acumulados/${fechaReporte}`)
            .then((result)=>{
                setConcentradosAcum(result.data)
                setLiquidacionTotalAcum(parseFloat(result.data.AcumuladoZn) + parseFloat(result.data.AcumuladoPb))
                setStatus('resolved')
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
        })
        .catch((error)=>{
          setError(error)
          setStatus('error')
        })

        
    }, [selectedOption, fechaReporte, isPriceUpdated]);
  return (
    <>
        <HeaderDiseno titulo="Formulario para Reporte Gerencial" isDate={true} subtitulo="Llena los campos en cada sección para generar el reporte gerencial."></HeaderDiseno>
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
                        borderRadius: "8px",
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

                <div className="cont-calendar">
                    <CalendarDatePicker idCalendario={"Fecha"} tipoDeCalendario={"Fecha: "} setFecha={setFechaReporte}/>
                </div>
                
                <Link to='/historial-gerencia_adminview'>
                    <button className='btn-lista' style={{width: "12rem", fontSize: "1rem"}}>Ir al historial</button>
                </Link>
        </div>
        
        <div className="cont-tabla">
            <div className="seccion-reporte">
                <div className="header-seccion-reporte">
                    <div className='secc-1'>
                        <h3 className="p1000 titulo-seccion">Movimiento de mineral</h3>
                        <div className="sep-seccion"></div>
                    </div>
                    <Link to={`/reporte-bascula_adminview/${fechaReporte}`} className="btn-detalles-seccion link-decoration">
                        <span class="material-symbols-outlined">
                        visibility
                        </span>
                        <p className="blanco texto-btn">Reporte de báscula</p>
                    </Link>                    
                </div>
                <div className="movmineral">
                    
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Existencia</p>
                        <p className="n700">Dia inicial</p>
                        <input type="text" className='inputGris' disabled value={generalData.inicial2.inicial2 + 0}/>
                    </div>
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Acarreo hoy</p>
                        <p className="n700">TMH</p>
                        <input type="text" className='inputGris' id={3000} disabled value={generalData.trituradas.acarreo + 0}/>
                    </div>
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Acum. Mensual</p>
                        <p className="n700">TMH</p>
                        <input type="text" className='inputGris' disabled value={generalData.acarreoALaFecha.acarreoALaFecha + 0}/>
                    </div>
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Total</p>
                        <p className="n700">TMH</p>
                        <input type="text" className='inputGris' value={generalData.inicial2.inicial2 + generalData.trituradas.acarreo }/>
                    </div>
                </div>
                <div className="movmineral">
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Molidas</p>
                        <div className="movmineral-2">
                            <div className='movmineral-subitem'>
                                <p className="n700">Hoy (TMS)</p>
                                <input type="text" className='inputGris' disabled value={generalData.trituradas.trituradas + 0}/>
                            </div>
                            <div className='movmineral-subitem'>
                                <p className="n700">Acum. (TMS)</p>
                                <input type="text" className='inputGris' disabled value={generalData.acarreoALaFecha.molidasALaFecha + 0}/>
                            </div>
                        </div>
                    </div>
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Existencia</p>
                        <p className="n700">Patios (TMH)</p>
                        <input type="text" className='inputGris' value={(generalData.inicial2.inicial2 + generalData.trituradas.acarreo) - generalData.trituradas.trituradas}/>
                    </div> 
                    <div className="movmineral-item">
                        <p className="bold p800 subtitulo-movmineral">Humedad</p>
                        <p className="n700">%</p>
                        <input type="text" className='inputGris' name='humedad' onChange={handleFormChange}/>
                    </div>
                   
                </div>
                
            </div>
            
            
            <div className="seccion-reporte">
                <div className="header-seccion-reporte">
                    <div className='secc-1'>
                        <h3 className="p1000 titulo-seccion">Balance metalúrgico</h3>
                        <div className="sep-seccion"></div>
                    </div>
                    <div className="btn-detalles-seccion" onClick={showModalTabla}>
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
                    mostrarBotones={false}
                    handleInputChange={handleInputChange}
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
                    <CardPrecioMetal style='light' setTooltipVisibility = {setTooltipVisibility} precio={preciosElementos.Au.valorActual} precioAnterior={preciosElementos.Au.valorAnterior} mineral='Oro (Kitco)' elemento="Au" setPriceUpdated={setPriceUpdated} isPriceUpdated={isPriceUpdated}></CardPrecioMetal>
                    <CardPrecioMetal style='light' setTooltipVisibility = {setTooltipVisibility} precio={preciosElementos.Ag.valorActual} precioAnterior={preciosElementos.Ag.valorAnterior}mineral='Plata (Kitco)'elemento="Ag" setPriceUpdated={setPriceUpdated} isPriceUpdated={isPriceUpdated}></CardPrecioMetal>
                    

                    <div className="subcont-preciosmetal">
                    <CardPrecioMetal style='dark' setTooltipVisibility = {setTooltipVisibility} precio={preciosElementos.Pb.valorActual}  precioAnterior={preciosElementos.Pb.valorAnterior} mineral='Plomo (LME)' elemento="Pb" setPriceUpdated={setPriceUpdated} isPriceUpdated={isPriceUpdated}></CardPrecioMetal>
                    <CardPrecioMetal style='dark' setTooltipVisibility = {setTooltipVisibility} precio={preciosElementos.Zn.valorActual}  precioAnterior={preciosElementos.Zn.valorAnterior} mineral='Zinc (LME)' elemento="Zn" setPriceUpdated={setPriceUpdated} isPriceUpdated={isPriceUpdated}></CardPrecioMetal>
                    <CardPrecioMetal style='dark' setTooltipVisibility = {setTooltipVisibility} precio={preciosElementos.Cu.valorActual}  precioAnterior={preciosElementos.Cu.valorAnterior} mineral='Cobre (LME)' elemento="Cu" setPriceUpdated={setPriceUpdated} isPriceUpdated={isPriceUpdated}></CardPrecioMetal>
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
                            <p className="bold p800 subtitulo-movmineral" style={{marginBottom: "2rem"}}>Concentrados ({fecha})</p>
                            <p className="n700">Concentrado Zinc (Zn)</p>
                            <input type="text" className='inputGris' name='concentradoZnHoy' onChange={handleFormChange}/>
                            <p className="n700">Concentrado Plomo (Pb)</p>
                            <input type="text" className='inputGris' name='concentradoPbHoy' onChange={handleFormChange}/>
                            <p className="n800 bold">{`Total: $${liquidacionTotalHoy.toFixed(3)}` } </p>
                        </div> 
                    </div>

                    <hr className='vertical-sep'/>
                    
                    <div className="liquidacion-item">
                        <div className="movmineral-item">
                            <p className="bold p800 subtitulo-movmineral" style={{marginBottom: "1rem"}}>A la fecha</p>
                            <p className="n700">Concentrado Zinc (Zn)</p>
                            <input type="text" className='inputGris' value={concentradosAcum.AcumuladoZn} disabled/>
                            <p className="n700">Concentrado Plomo (Pb)</p>
                            <input type="text" className='inputGris' value={concentradosAcum.AcumuladoPb} disabled/>
                            <p className="n800 bold">{`Total: $${liquidacionTotalAcum.toFixed(3)}` }</p>
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
                            <h1 className="blanco bold">{(parseFloat(liquidacionTotalHoy) / parseFloat(generalData.trituradas.trituradas)).toFixed(3)}</h1>
                            <p className="n800 bold">Hoy</p>
                        </div>
                        <div className="item-valormineral">
                            <h1 className="blanco bold">{(parseFloat(liquidacionTotalAcum) / parseFloat(generalData.acarreoALaFecha.molidasALaFecha)).toFixed(3)}</h1>
                            <p className="n800 bold">A la fecha</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='stripBotones' style={{width:"100%"}}>
                
                <button className='enviar' onClick={showModal}>Enviar
                    <span className='separatorButton'/>
                    <span class="material-symbols-outlined">send</span>
                </button>
            </div>
            
        </div>
        <footer style={{height:'10rem'}}></footer>
        <Menu rol={"admin"} activeTab="summarize" landing="/admin"/>
        <Tooltip tooltipVisibility={tooltipVisibility} mensaje="Precio actualizado."></Tooltip>
        {modalTablaVisibility ? <ModalReporteLaboratorio setModalVisibility = {setModalTablaVisibility} mina={selectedOption} fecha={fechaReporte}></ModalReporteLaboratorio>:null}
        
        {modalConfirmacionVisibility ? <ModalDinamico submitFunction={handleSendForm} loaderVisibility={loaderVisibility} setModalVisibility = {setModalConfirmacionVisibility} tipo="confirmacion" titulo="Confirma los datos" mensaje={"¿Estás seguro que deseas continuar? Asegúrate de que todos los datos introducidos sean correctos."}></ModalDinamico>:null}
        {modalExitoVisibility ? <ModalDinamico submitFunction={()=>navigate(`/reporte/${idRep}`)} setModalVisibility = {setModalExitoVisibility} tipo="exito" titulo="Registro correcto" mensaje="Los datos han sido enviados correctamente."></ModalDinamico>:null}
        {modalErrorVisibility ? <ModalDinamico submitFunction={()=>setModalErrorVisibility(false)} setModalVisibility = {setModalErrorVisibility} tipo="error" titulo="¡Cuidado!" mensaje={error.message}></ModalDinamico>:null}
    </>
  )
}

export default FormularioGerencial