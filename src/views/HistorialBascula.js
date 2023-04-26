import React from 'react'
import HeaderDiseno from "../components/HeaderDiseno"
import ListaReportes from "../components/ListaReportes"
import Menu from "../components/Menu"


function HistorialBascula() {


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
                <button className='btn-lista' to={`/reporte/${params.id}`} target="_blank">Ver</button>,
            ],
          },
      ],
    );

  return (
    <>
        <HeaderDiseno titulo="Historial - Reporte de Báscula" subtitulo="Consulta el historial de los reportes de báscula generados en esta ventana. Navega por la lista de reportes generados y consulta un reporte en específico"></HeaderDiseno>
        <ListaReportes columns={columns} data={reportes} titulo="Todos los reportes"></ListaReportes>
        <Menu rol="admin" activeTab="scale"></Menu>
    </>
  )
}

export default HistorialBascula