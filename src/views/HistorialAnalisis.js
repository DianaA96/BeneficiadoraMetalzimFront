import React from 'react'
import HeaderDiseno from "../components/HeaderDiseno"
import ListaReportes from "../components/ListaReportes"
import Menu from "../components/Menu"

function HistorialAnalisis() {
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
        <HeaderDiseno titulo="Historial de análisis" subtitulo="Consulta el historial de los análisis de laboratorio realizados en esta ventana. Navega por la lista de reportes generados y consulta un reporte en específico"></HeaderDiseno>
        <ListaReportes columns={columns} data={reportes} titulo="Todos los reportes"></ListaReportes>
        <Menu rol="laboratorista" activeTab="science"></Menu>
    </>
  )
}

export default HistorialAnalisis