import React, { useState } from 'react'

import logo from '../logo.svg';
import '../styles/Registro.css';
import HS from '../components/HeaderSencillo'
import Menu from '../components/Menu'
import axios from 'axios'
import ModalExito from '../components/ModalDinamico'
import { useNavigate } from "react-router-dom";


function Registro() {

  const [formValues, setFormValues] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    telefono: "",
    email: "",
    password: "",
    idRol:"",
  });
  let navigate = useNavigate();
  const [modalVisibility, setModalVisibility] = useState(false)
  const [ modalErrorVisibility, setModalErrorVisibility ] = useState(false)


  const handleSubmit = (event) => {

    axios({
      method: 'post',
      url: 'http://localhost:3050/admin/create',
      data: formValues,
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then((result)=>{
      setModalVisibility(true)      
    })
    .catch(error =>{
        setModalErrorVisibility(true)
    }) 

   console.log(formValues)

  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }
  
  const handleChangeSelect = (event) => {
    const { name, value } = event.target;
    console.log(value);
    if(value == "Gerente"){
      setFormValues({ ...formValues, [name]: 2 });

    }
    else if (value == "Laboratorista"){
      setFormValues({ ...formValues, [name]: 1 });

    }
    else if(value == "Operario Bascula") {
      setFormValues({ ...formValues, [name]: 4 });
    }
    else {
      setFormValues({ ...formValues, [name]: 3 });

    }
    //setFormValues({ ...formValues, [name]: value });
  }




  return (
    <div>
      <HS
      titulo={"Agregar un nuevo usuario"}
      subtitulo={"Llena los campos con la información del usuario nuevo y guarda los cambios."}
      isDate={true}
      />
      <div style={{display:"flex", justifyContent: "center"}} >
        <div class="divBox">
          <form className='formRegistro' onSubmit={handleSubmit}>
            <c>
              <div class="textInput">
                  <div for="nombres">Nombres(s)</div>
                  <input  type="text" className="inputRegistro" onChange={handleChange} id="nombre" placeholder='Nombre(s)'  name="nombre" required/>

                  <div for="nombres">Apellido Materno</div>
                  <input type="text"  className="inputRegistro" onChange={handleChange} id="apellidoM" placeholder='Apellido Materno' name="apellidoM" required/>
                    
                  <div for="nombres">Telefono</div>
                  <input type="tel"   className="inputRegistro" onChange={handleChange} id="telefono"  placeholder='Telefono' name="telefono" required/>
              </div>
            </c>
            <div>
              <div class="textInput">
                  <div for="nombres">Apellido Paterno</div>
                    <input type="text"  className="inputRegistro"  onChange={handleChange} id="apellidoP"  placeholder='Apellido Paterno'  name="apellidoP" required/>

                    <div for="nombres">Correo </div>
                    <input type="email"  className="inputRegistro" onChange={handleChange} id="email"  placeholder='email' name="email" required/>
                      
                    <div for="Rol">Rol</div>
                    
                    <select className='selectRegistro' name="idRol"  onChange={handleChangeSelect} style={{margin:"20px"}} id="idRol" required>
                      <option value="">Selecciona una opcion</option>
                      <option value="Laboratorista">Laboratorista</option>
                      <option value="Operario Bascula">Operario Báscula</option>
                      <option value="Gerente">Gerente</option>
                    </select>
              </div>
            <div for="nombres" class="textInput" >Password</div>
            <input type="text"  className="inputRegistro" onChange={handleChange} id="password"  placeholder='Password'  name="password"/>
            </div>
            <button className='buttonRegistro' style={{marginTop:"1rem", marginLeft:"80%"}} type="submit">Registrar</button>
          </form>
        </div>
      </div>
      <Menu rol="admin" activeTab="group" landing='/admin'></Menu>
      {modalVisibility ? <ModalExito setModalVisibility = {setModalVisibility} submitFunction={()=>navigate(`/usuarios`)} tipo="exito" titulo="Exito" mensaje="El usuario ha sido generado de manera exitosa"></ModalExito>:null}
      {modalErrorVisibility ? <ModalExito submitFunction={()=>setModalErrorVisibility(false)} setModalVisibility = {setModalErrorVisibility} tipo="error" titulo="Error!" mensaje={`El usuario no ha sido creado`}></ModalExito>:null}
    </div>
  );
}

export default Registro;