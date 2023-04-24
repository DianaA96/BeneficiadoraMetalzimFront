import React, {useState, useEffect} from 'react';

import "../styles/colors.css"
import "../styles/button.css"
import "../styles/ListaReportes.css"

import { DataGrid, esES, GridActionsCellItem } from '@mui/x-data-grid';

function ListaReportes() {

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
                
                <button className='btn-lista' to={`/proyecto/${params.id}`} target="_blank">Ver</button>,
            ],
          },
      ],
    );

    const datagridStyles ={
          fontSize:'0.8rem',
          fontFamily: 'Inter',
          border: 'none',
          color: '#191818',
          fontWeight: 400,
          '& .MuiDataGrid-row:hover': {
            color: '#F3995E',
            fontWeight: 600,
            backgroundColor:'#F5F4F7'
          },
    }

    const reportes = [
        {id:"RE01", fechaMuestreo: "20/04/2023", fechaEnsaye: "20/04/2023"},
        {id:"RE02", fechaMuestreo: "21/04/2023", fechaEnsaye: "20/04/2023"},
        {id:"RE03", fechaMuestreo: "27/04/2023", fechaEnsaye: "20/04/2023"}

    ]

    return (
        <>
            <div className="cont-tabla">
              <div className="header-tabla">
                <h4 className="negro">Todos los reportes</h4>
                <div className="filtros-tabla">
                    <input type="text" className="busc-tabla" placeholder='Buscar por ID'/>
                    <div className="btn-filtro">
                        <p>Filtro</p>
                    </div>
                </div>
              </div>


              <DataGrid
                autoHeight
                rows={reportes}
                columns={columns}
                sx={datagridStyles}
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
              />
            </div>
        </>
    
  )
}

export default ListaReportes