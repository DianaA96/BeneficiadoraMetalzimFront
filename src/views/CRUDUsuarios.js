import React from 'react'
import HeaderDiseno from "../components/HeaderDiseno"
import ListaReportes from "../components/ListaReportes"
import Menu from "../components/Menu"
import "../styles/CRUDUsuarios.css"
import { Link } from 'react-router-dom'

function CRUDUsuarios() {

  /* Reemplazar el arreglo de objetos por lo que se obtenga del endpoint */
    const usuarios = [
        {id: 2,nombre:"Benito Martínez Ocasio", rol: "Administrador", lastLogin: "10 de abril del 2023, 18:23"},
        {id: 4,nombre:"Tegui Carlos Calderón Rosario", rol: "Laboratorio", lastLogin: "8 de abril del 2023, 10:15"},
        {id: 5,nombre:"Ramón Luis Ayala Rodríguez", rol: "Báscula", lastLogin: "10 de abril del 2023, 14:10"},
    ]

    const columns = React.useMemo(()=>
      [
        { field: 'id', headerName: 'ID',flex:1, maxWidth: 40},
        { field: 'nombre', headerName: 'Nombre',flex:1, minWidth: 80 },
        { field: 'rol', headerName: 'Cargo', flex:1, minWidth: 50},
        { field: 'lastLogin', headerName: 'Último ingreso a plataforma', flex:1, minWidth: 100},
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Acciones',
            flex:1, 
            minWidth: 100,
            getActions: (params) => [
                <Link className='btn-lista link-decoration' to={`/usuario/${params.id}`} target="_blank">Actualizar</Link>,
                <Link className='btn-lista-elim link-decoration' to={`/usuario/${params.id}`} target="_blank">Eliminar</Link>,
            ],
          },
      ],
    );

  return (
    <>
        <HeaderDiseno titulo="Administración de usuarios" subtitulo="Consulta los usuarios registrados en el sistema y gestiona sus permisos."></HeaderDiseno>
        <div className="header-crud-btn">
          <Link to="/agregar-usuario" className="btn-agregar link-decoration">Agregar Usuario</Link>
        </div>
        <ListaReportes columns={columns} data={usuarios} titulo="Todos los usuarios"></ListaReportes>
        <Menu rol="admin" activeTab="group"></Menu>
    </>
  )
}

export default CRUDUsuarios