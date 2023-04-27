import React, {useState, useEffect} from 'react';

import "../styles/colors.css"
import "../styles/button.css"
import "../styles/ListaReportes.css"

import { DataGrid, esES, GridActionsCellItem } from '@mui/x-data-grid';

function ListaReportes(props) {

    

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

   

    return (
        <>
            <div className="cont-tabla">
              <div className="header-tabla">
                <h4 className="negro">{props.titulo}</h4>
                {/*<div className="filtros-tabla">
                    <input type="text" className="busc-tabla" placeholder='Buscar por ID'/>
                </div>*/}
              </div>

              <DataGrid
                autoHeight
                rows={props.data}
                columns={props.columns}
                sx={datagridStyles}
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
              />
            </div>
        </>
    
  )
}

export default ListaReportes