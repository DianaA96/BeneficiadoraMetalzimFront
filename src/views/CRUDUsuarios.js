import React, {useState, useEffect} from 'react'
import HeaderDiseno from "../components/HeaderDiseno"
import ListaReportes from "../components/ListaReportes"
import Menu from "../components/Menu"
import "../styles/CRUDUsuarios.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import ModalConfirmacion from '../components/ModalDinamico'
import { useNavigate } from "react-router-dom";



function CRUDUsuarios() {

const [status, setStatus ] = useState('idle')
const [error, setError] = useState(null);
const [userList, setUserList] = useState(null);

const [modalVisibility, setModalVisibility] = useState(false)
const [ modalErrorVisibility, setModalErrorVisibility ] = useState(false)
let navigate = useNavigate();

let user = [];
var check=0;


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
  },[check]);

  function handleDelete (id){
    setStatus('loading')

    axios.delete(`http://localhost:3050/admin/borrar/${id}`,)
    .then((result)=>{
        setStatus('resolved')
        setModalVisibility(true)      
        alert("Usuario: " + result.data.nombre + " deshabilitado")
        
      })
      .catch((error)=>{
        setError(error)
        setStatus('error')
        setModalErrorVisibility(true)
      })
  }

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
                <button className='btn-lista-elim link-decoration' onClick={() => handleDelete(params.id)} target="_blank">Eliminar</button>,
            ],
          },
      ],
    );

    if(status === 'idle' || status === 'loading'){
      return (
        <div>Loading</div>//Cambiar por icono de loading
      )
  }
  
  
  if(status === 'error'){
      return (
        <div>Error</div> //Cambiar por alerta de error
      )
  }
  
    if (status == 'resolved') 
    {
      var temp;
      for (var i = 0; i < userList.length ;i++ ) {
        if(userList[i].idRol === 1) {
          temp = "Laboratorista"
        } else if (userList[i].idRol == 4) {
          temp = "Operario Bascula"
        } else  if (userList[i].idRol == 2)
        temp="Gerente"
         else 
          temp="Administrador"
        console.log(userList[i].idRol)
        user [i] =  {
          id: userList[i].idUsuario,
          nombre: userList[i].nombre +" "+userList[i].apellidoP+" "+ userList[i].apellidoM,
          rol: temp,
          lastLogin: userList[i].ultimaConexion,
        }
      }

      console.log(userList)

      return (
        <>
            <HeaderDiseno
            titulo="Administración de usuarios"
            subtitulo="Consulta los usuarios registrados en el sistema y gestiona sus permisos."
            isDate={true}
            />
            <div className="header-crud-btn">
              <Link to="/agregar-usuario" className="btn-agregar link-decoration">Agregar Usuario</Link>
            </div>
            <ListaReportes columns={columns} data={user} titulo="Todos los usuarios"></ListaReportes>
            <Menu rol="admin" activeTab="group" landing='/admin'></Menu>
            {modalVisibility ? <ModalConfirmacion setModalVisibility = {setModalVisibility} submitFunction={()=>navigate(`/usuarios`)} tipo="exito" titulo="Exito" mensaje="El usuario ha sido generado de manera exitosa"></ModalConfirmacion>:null}
            {modalErrorVisibility ? <ModalConfirmacion submitFunction={()=>setModalErrorVisibility(false)} setModalVisibility = {setModalErrorVisibility} tipo="error" titulo="Error!" mensaje={`El usuario no ha podido ser eliminado`}></ModalConfirmacion>:null} 
        </>
      )
    }

}

export default CRUDUsuarios