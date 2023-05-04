import React from 'react'
import GraficasArea from '../components/GraficasArea';
import HeaderDiseno from "../components/HeaderDiseno"
import ListaReportes from "../components/ListaReportes"
import GraficasLine from "../components/GraficasLine"
import Menu from "../components/Menu"

function HistorialGerencia() {

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      

    const reportes = [
        {id:"RE01", fecha: "20/04/2023", concCu: 549, concZn: 345, liquidacionHoy: 203142, valorMineral: 747863.123},
        {id:"RE02", fecha: "21/04/2023", concCu: 549, concZn: 24, liquidacionHoy: 94672, valorMineral: 124841},
        {id:"RE03", fecha: "22/04/2023", concCu: 836, concZn: 235, liquidacionHoy: 957632, valorMineral: 657323.32},
        {id:"RE04", fecha: "23/04/2023", concCu: 549, concZn: 345, liquidacionHoy: 17312, valorMineral: 747863.23},
        {id:"RE05", fecha: "24/04/2023", concCu: 462, concZn: 153, liquidacionHoy: 27382, valorMineral: 956732},
        {id:"RE06", fecha: "25/04/2023", concCu: 153, concZn: 51, liquidacionHoy: 518232, valorMineral: 34273.65},
        {id:"RE07", fecha: "26/04/2023", concCu: 834, concZn: 845, liquidacionHoy: 58623, valorMineral: 9457361.12},

    ]

    const columns = React.useMemo(()=>
      [
        { field: 'id', headerName: 'ID',flex:1, maxWidth: 80 },
        { field: 'fecha', headerName: 'Fecha', flex:1, maxWidth: 120},
        { field: 'concCu', headerName: 'Conc. Cu', flex:1, maxWidth: 80},
        { field: 'concZn', headerName: 'Conc. Zn', flex:1, maxWidth: 80},
        { field: 'liquidacionHoy', headerName: 'Liquidación Total Hoy (USD)',  flex:1, minWidth: 100,  type: 'number', valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),cellClassName: 'font-tabular-nums'},
        { field: 'valorMineral', headerName: 'Valor del mineral Hoy (USD)',flex:1, minWidth: 100, type: 'number', valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),cellClassName: 'font-tabular-nums'},
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
    <><body>
      <HeaderDiseno
      titulo={"Historial - Reporte gerencial"}
      subtitulo={"Consulta el historial de los reportes gerenciales generados en esta ventana. Navega por la lista de reportes generados y consulta un reporte en específico"}
      isDate={false}
      />
      <ListaReportes columns={columns} data={reportes} titulo="Todos los reportes"></ListaReportes>

      <div style={{display:"flex", justifyContent:"center", flexDirection:"column",  width:"100%", marginBottom:"5rem"}}>
        
        <div className='division' style={{display:"flex", alignSelf:"center", width:"80%"}}>
          <p className='myP'>Gráficas históricas</p>
          <hr className='myhr' style={{color:"#EF7B30", width: "80%"}} />
        </div>

        <GraficasLine titulo="Recuperación de minerales" descripcion="en toneladas"></GraficasLine>
        <GraficasLine titulo="Precios de los metales" descripcion="(USD)"></GraficasLine>
        <GraficasArea titulo="Valor del mineral (USD)" class="contGraficas"></GraficasArea>

      </div>
    </body>
    <footer>
      <Menu rol="admin" activeTab="summarize"></Menu>
    </footer></>
  )
}

export default HistorialGerencia