import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';

import logo from '../logo.svg';
import '../styles/Registro.css';
import HS from '../components/HeaderSencillo'
import Menu from '../components/Menu'
import axios from 'axios'
import ModalExito from '../components/ModalExito';




function EditarUsuario() {
  const params = useParams();

  const [status, setStatus ] = useState('idle')
  const [error, setError] = useState(null);
  const [formValues, setFormValues] = useState(null);

  const [modalVisibility, setModalVisibility] = useState(false)



  useEffect(()=>{
    setStatus('loading')
    axios.get(`http://localhost:3050/admin/getEdit/${params.idUsuario}`)
      .then((result)=>{
        setStatus('resolved')
        setFormValues(result.data[0])
        showModal()
      })
      .catch((error)=>{
        setError(error)
        setStatus('error')
      })
  },[])

  function showModal(){
    setModalVisibility(true)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'patch',
      url: `http://localhost:3050/admin/editar/${params.idUsuario}`,
      data: formValues,
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then((result)=>{
        alert('Usuario actualizado correctamente');
        console.log("HEEEEEEEEEEEEY -->", formValues, params.idUsuario)

    })
    .catch(error =>{
        alert('No se pudo actualizar el usuario:', error);
    })

  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }
  
  const handleChangeSelect = (event) => {
    const { name, value } = event.target;
    if(value == "Gerente"){
      setFormValues({ ...formValues, [name]: 2 });
    }
    else if (value == "Laboratorista"){
      setFormValues({ ...formValues, [name]: 1 });
    }
    else if (value == "Operario Bascula") {
      setFormValues({ ...formValues, [name]: 4 });
    }
  }

  if(status === 'idle' || status === 'loading'){
      <div>Loading</div>//Cambiar por icono de loading
  }
  
  
  if(status === 'error'){
      return (
        <div>Error</div> //Cambiar por alerta de error
      )
  }



  const checkId = (id) => {
    console.log(id);
    if(id === 2) {
      return "Gerente"
    } else if (id == 1) {
      return "Laboratorista"
    } else if (id == 4) {
      return "Operario Bascula"
    }
    else if (id == 3)
      return "Administrador"
  } 
  
  if (status == 'resolved') 
  {

    return (
      <div>
        <HS
        titulo={"Edita al usuario" }
        subtitulo={"Llena los campos que quieres editar y guarda los cambios."}
        isDate={true}
        />
        <div style={{display:"flex", justifyContent: "center"}} >
          <div class="divBox">
            <form className='formRegistro' onSubmit={handleSubmit}>
              <c>
                <div class="textInput">
                    <div for="nombres">Nombres(s)</div>
                    <input  type="text" className="inputRegistro" onChange={handleChange} id="nombre" placeholder='Nombre(s)' value={formValues.nombre} name="nombre" required/>

                    <div for="nombres">Apellido Materno</div>
                    <input type="text"  className="inputRegistro" onChange={handleChange} id="apellidoM" placeholder='Apellido Materno' value={formValues.apellidoM} name="apellidoM" required/>
                      
                    <div for="nombres">Telefono</div>
                    <input type="tel"   className="inputRegistro" onChange={handleChange} id="telfono"  placeholder='Telefono'value={formValues.telfono} name="telfono" required/>
                </div>
              </c>
              <div>
                <div class="textInput">
                    <div for="nombres">Apellido Paterno</div>
                      <input type="text"  className="inputRegistro"  onChange={handleChange} id="apellidoP"  placeholder='Apellido Paterno'  value={formValues.apellidoP}  name="apellidoP" required/>

                      <div for="nombres">Correo </div>
                      <input type="email"  className="inputRegistro" onChange={handleChange} id="email"  placeholder='email' value={formValues.email} name="email" required/>
                        
                      <div for="Rol">Rol</div>
                      
                      <select className='selectRegistro' name="idRol"  onChange={handleChangeSelect} style={{margin:"20px"}}  value={checkId(formValues.idRol)} id="idRol" required>
                        <option value="">Selecciona una opcion</option>
                        <option value="Laboratorista">Laboratorista</option>
                        <option value="Operario Bascula">Operario Báscula</option>
                        <option value="Gerente">Gerente</option>
                      </select>

                      <div for="nombres">Password</div>
                      <input type="text"  className="inputRegistro" onChange={handleChange} id="password"  placeholder='New Password'  name="password"/>
                        
                </div>
              </div>

              <button className='buttonRegistro' style={{marginTop:"1rem", marginLeft:"80%"}} type="submit">Guardar</button>
            </form>
          </div>
        </div>
        <Menu rol="admin" activeTab="group" landing='/admin'></Menu>
        {modalVisibility ? <ModalExito setModalVisibility = {setModalVisibility}></ModalExito>:null}
      </div>
      
    );
  }
}

export default EditarUsuario;