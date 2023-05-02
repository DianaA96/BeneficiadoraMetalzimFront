import React, {useState, useEffect} from 'react'
import HeaderDiseno from "../components/HeaderDiseno"
import ListaReportes from "../components/ListaReportes"
import Menu from "../components/Menu"
import "../styles/CRUDUsuarios.css"
import { Link } from 'react-router-dom'
import axios from 'axios'



function CRUDUsuarios() {

const [status, setStatus ] = useState('idle')
const [error, setError] = useState(null);;
const [userList, setUserList] = useState(null);
  /* Reemplazar el arreglo de objetos por lo que se obtenga del endpoint */
    const usuarios = [
        {id: 2,nombre:"Benito Martínez Ocasio", rol: "Administrador", lastLogin: "10 de abril del 2023, 18:23"},
        {id: 4,nombre:"Carlos Calderón Rosario", rol: "Laboratorio", lastLogin: "8 de abril del 2023, 10:15"},
        {id: 5,nombre:"Ramón Luis Ayala Rodríguez", rol: "Báscula", lastLogin: "10 de abril del 2023, 14:10"},
    ]

let user = [];
let i =0; 



  useEffect(()=>{
    setStatus('loading')
    axios.get(`http://localhost:3050/admin/List`)
      .then((result)=>{
        setStatus('resolved')
        setUserList(result.data)
      })
      .catch((error)=>{
        setError(error)
        setStatus('error')
      })
  },[])

let user = [];
let i =0; 

  useEffect(()=>{
    setStatus('loading')
    axios.get(`http://localhost:3050/admin/List`)
      .then((result)=>{
        setStatus('resolved')
        setUserList(result.data)
      })
      .catch((error)=>{
        setError(error)
        setStatus('error')
      })
  },[])

  //const usuarios = user;
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

  if(status === 'idle' || status === 'loading'){
      return <Menu rol="admin" activeTab="group"></Menu>
  }
  
  
  if(status === 'error'){
      return (
        <Menu rol="admin" activeTab="group"></Menu>
      )
  }
  
    if (status == 'resolved') 
    {
      var temp;
      for (i ; i < userList.length ;i++ ) {
        if(userList[i].idRol === 1) {
          temp = "Labratorista"
        } else if (userList[i].idRol == 2) {
          temp = "Operario Bacula"
        } else 
        temp="Gerente"

        user [i] =  {
          id: userList[i].idUsuario,
          nombre: userList[i].nombre +" "+userList[i].apellidoP+" "+ userList[i].apellidoM,
          rol: temp,
          lastLogin: userList[i].ultimaConexion,
        }
      }

      console.log(user)

      return (
        <>
            <HeaderDiseno titulo="Administración de usuarios" subtitulo="Consulta los usuarios registrados en el sistema y gestiona sus permisos."></HeaderDiseno>
            <div className="header-crud-btn">
              <Link to="/agregar-usuario" className="btn-agregar link-decoration">Agregar Usuario</Link>
            </div>
            <ListaReportes columns={columns} data={user} titulo="Todos los usuarios"></ListaReportes>
            <Menu rol="admin" activeTab="group"></Menu>
        </>
      )
    }

}

export default CRUDUsuarios