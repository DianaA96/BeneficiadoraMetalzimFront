import React, { useState } from 'react'

import logo from '../logo.svg';
import '../styles/Registro.css';
import HS from '../components/HeaderSencillo'
import MenuS from '../components/Menu'
import axios from 'axios'



function Registro() {

  const [formValues, setFormValues] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    telfono: "",
    email: "",
    password: "kinkinasty",
    idRol:"",
  });


  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: 'http://localhost:3050/admin/create',
      data: formValues,
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then((result)=>{
        alert('Operador registrado correctamente');

    })
    .catch(error =>{
        alert('No se pudo registrar el operador:', error);
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
      setFormValues({ ...formValues, [name]: 1 });

    }
    else if (value == "Laboratorista"){
      setFormValues({ ...formValues, [name]: 2 });

    }
    else {
      setFormValues({ ...formValues, [name]: 3 });
    }
    //setFormValues({ ...formValues, [name]: value });
  }




  return (
    <div>
      <HS  titulo={"Agregar un nuevo usuario"} subtitulo={""}/>
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
                  <input type="tel"   className="inputRegistro" onChange={handleChange} id="telfono"  placeholder='Telefono' name="telfono" required/>
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
            </div>

            <button className='buttonRegistro' style={{marginTop:"1rem", marginLeft:"80%"}} type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro;