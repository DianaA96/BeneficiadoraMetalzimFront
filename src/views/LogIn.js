import {useState, useEffect} from 'react'
import '../styles/login.css';
import log from '../assets/IconsLandingPages/login.svg';
import logo from '../assets/IconsLandingPages/imagen1.png';
import { useAuth } from '../auth-context'
import { Link, useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate()
  const [ usuarioAuth, setUsuarioAuth ] = useState({});
  const [isErrorMessageVisible, setErrorMessageVisibility]  = useState(false)
  const [ formState, setFormState ] = useState('pristine');
  const { login, user, error} = useAuth();

  useEffect(()=>{
    if(user.idUsuario){
      navigate('/redirect')
      setErrorMessageVisibility(false)
    }
    else if(error==='error'){
      setErrorMessageVisibility(true)
    }
  },[user, error] )

  function handleChange(event) {
    let datosUsuario = {
        ...usuarioAuth,
        [event.target.name]: event.target.value
    }
    setUsuarioAuth(datosUsuario)
    setFormState('dirty')
  }

 function handleLogin(){
       login(usuarioAuth)
  }

  return (
    <div className="App">
      <div class="container">
        <div class="login">
            <img src={logo} width="300px" height="100px"/> 
            <h1 className="blanco">Inicio de sesión</h1>
            <input className='inputLogin' type="text" id="username" name="email" placeholder="Correo electrónico"  required onChange={handleChange}/>
            <input className='inputLogin'  type="password" id="password" name="password" placeholder="Contraseña" required onChange={handleChange}/>
            {/* <p className="textLogInFP">¿Olvidaste tu contraseña? Haz clic aquí para restablecerla.</p> */}
           
            {isErrorMessageVisible ? <p className="mensaje-error-login" style={{textAlign:'center'}}>{`Correo o contraseña inválidos.`}<br/><p className="mensaje-error-login">{`Por favor revisa los datos para ingresar.`}</p> </p> : null}
            <button  className='buttonLogin' type="submit" onClick={handleLogin}>INGRESAR</button>
        </div>
        <img class ="img" src={log}></img>
      </div>
    </div>
  );
}

export default App;
