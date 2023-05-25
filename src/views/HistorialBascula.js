import React from 'react'
import HeaderDiseno from "../components/HeaderDiseno"
import ListaReportes from "../components/ListaReportes"
import Menu from "../components/Menu"
import GraficasArea from "../components/GraficasArea"
import GraficasLine from "../components/GraficasLine"
import { Link } from 'react-router-dom'

function HistorialBascula({rol}) {

    const reportes = [
        {id:"RE01", fecha: "26/04/2023", existenciaInicial: 412, acarreo: 562, trituradas: 343, patios: 623},
        {id:"RE02", fecha: "27/04/2023", existenciaInicial: 412, acarreo: 562, trituradas: 343, patios: 623},
        {id:"RE03", fecha: "28/04/2023", existenciaInicial: 412, acarreo: 562, trituradas: 343, patios: 623},
        {id:"RE04", fecha: "29/04/2023", existenciaInicial: 412, acarreo: 562, trituradas: 343, patios: 623},
        {id:"RE05", fecha: "12/04/2023", existenciaInicial: 412, acarreo: 562, trituradas: 343, patios: 623},
        {id:"RE06", fecha: "15/04/2023", existenciaInicial: 412, acarreo: 562, trituradas: 343, patios: 623},
        {id:"RE07", fecha: "21/04/2023", existenciaInicial: 412, acarreo: 562, trituradas: 343, patios: 623},
    ]

    const columns = React.useMemo(()=>
      [
        { field: 'id', headerName: 'ID',flex:1, maxWidth: 80 },
        { field: 'fecha', headerName: 'Fecha', flex:1, maxWidth: 120},
        { field: 'existenciaInicial', headerName: 'Existencia Inicial', flex:1, minWidth: 100},
        { field: 'acarreo', headerName: 'Acarreo', flex:1, minWidth: 100},
        { field: 'trituradas', headerName: 'Trituradas', flex:1, minWidth: 100},
        { field: 'patios', headerName: 'Patios', flex:1, minWidth: 100},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Acciones',
            flex:1, 
            minWidth: 100,
            getActions: (params) => [
                <Link className='btn-lista link-decoration' to={`/reporte-bascula_adminview`} target="_blank">Ver</Link>,
            ],
          },
      ],
    );

  return (
    <><body>
      <HeaderDiseno
      titulo="Historial - Reporte de Báscula"
      subtitulo="Consulta el historial de los reportes de báscula generados en esta ventana. Navega por la lista de reportes generados y consulta un reporte en específico"
      isDate={false}
      />
      <ListaReportes columns={columns} data={reportes} titulo="Todos los reportes"></ListaReportes>

      <div style={{display:"flex", justifyContent:"center", flexDirection:"column",  width:"100%", marginBottom:"5rem"}}>

        <div className='division' style={{display:"flex", alignSelf:"center", width:"80%"}}>
          <p className='myP'>Gráficas históricas</p>
          <hr className='myhr' style={{color:"#EF7B30", width: "80%"}} />
        </div>
      
        <div style={{ display: "flex", justifyContent:"center", flexDirection:"row", width:"100%"}}>
          <GraficasArea titulo={"Acarreo"} class="contGraficasPie"></GraficasArea>
          <GraficasArea titulo={"Trituradas"} class="contGraficasPie"></GraficasArea>
        </div >
          <GraficasLine titulo={"Concentrados"}></GraficasLine>
      </div>

    </body>
    <footer>
      {
          /**Menu Admin */
         rol == "admin" ? <Menu rol="admin" activeTab="scale" landing="/admin"></Menu> : null
      }

      {
          /**Menu Gerente */
         rol == "gerente" ? <Menu rol="gerente" activeTab="scale" landing="/gerencia"></Menu> : null
      }
      
      {
          /**Menu Bascula */
          rol == "bascula" ? <Menu rol="bascula" activeTab="history" landing="/bascula"></Menu> : null
      }
     
    </footer></>
  )
}

export default HistorialBascula