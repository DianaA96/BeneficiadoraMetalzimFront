import React,{useState, useEffect} from 'react'
import HeaderDiseno from "../components/HeaderDiseno"
import ListaReportes from "../components/ListaReportes"
import Menu from "../components/Menu"
import GraficasLine from "../components/GraficasLine"
import "../styles/Graficas.css"
import axios from 'axios'
import { textAlign } from '@mui/system'
import { Link } from 'react-router-dom'

function HistorialAnalisis() {
  const [analisisData, setAnalisisData] = useState([])
  const [status, setStatus] = useState({})
  const [error, setError] = useState({})

  useEffect(()=>{
    setStatus('loading')
    axios.get(`http://localhost:3050/lab/labList?filter=1&order=ASC`)
      .then((result)=>{
        setStatus('resolved')
        setAnalisisData(result.data)
      })
      .catch((error)=>{
        alert(error)
        setError(error)
        setStatus('error')
      })
    }, []);

    const reportes = [
        {id:"RE01", fechaMuestreo: "20/04/2023", fechaEnsaye: "20/04/2023"},
        {id:"RE02", fechaMuestreo: "21/04/2023", fechaEnsaye: "20/04/2023"},
        {id:"RE03", fechaMuestreo: "27/04/2023", fechaEnsaye: "20/04/2023"}

    ]

    const columns = React.useMemo(()=>
      [
        { field: 'id', headerName: 'ID',flex:1, minWidth: 80 },
        { field: 'fechaMuestreo', headerName: 'Fecha Muestreo', flex:1, minWidth: 20},
        { field: 'fechaEnsaye', headerName: 'Fecha Ensaye', flex:1, minWidth: 100},
        { field: 'nombreMina', headerName: 'Mina', flex:1, minWidth: 100},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Acciones',
            flex:1, 
            minWidth: 100,
            getActions: (params) => [
                <Link className='btn-lista link-decoration' to={`/reporte-laboratorio/${params.row.nombreMina}/${params.row.fechaEnsaye}`} target="_blank">Ver</Link>,
            ],
          },
      ],
    );
  return (
    <><body >
      <HeaderDiseno
      titulo="Historial de análisis"
      subtitulo="Consulta el historial de los análisis de laboratorio realizados en esta ventana. Navega por la lista de reportes generados y consulta un reporte en específico"
      isDate={false}
      />
      <ListaReportes columns={columns} data={analisisData} titulo="Todos los reportes"></ListaReportes>

      <div style={{display:"flex", justifyContent:"center", flexDirection:"column",  width:"100%", marginBottom:"5rem"}}>

        <div className='division' style={{display:"flex", alignSelf:"center", width:"80%"}}>
          <p className='myP'>Gráficas históricas</p>
          <hr className='myhr' style={{color:"#EF7B30", width: "80%"}} />
        </div>
        <GraficasLine titulo={"Concentrados"}></GraficasLine>
      </div>
  
    </body>
    <footer>
      <Menu rol="laboratorista" activeTab="history" landing="/laboratorio"></Menu>
    </footer></>
  )
}

export default HistorialAnalisis