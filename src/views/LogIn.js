import '../styles/login.css';
import log from '../assets/IconsLandingPages/login.svg';
import logo from '../assets/IconsLandingPages/imagen1.png';


function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="login">
          <form className="formLogin"> 
            <img src={logo} width="300px" height="100px"/> 
            {/*Inputs no se ven bien */}
            <input className='inputLogin' type="text" id="username" name="username" placeholder="Usuario"  required/>
            <input className='inputLogin'  type="password" id="password" name="password" placeholder="Contraseña" required/>
            <p className="textLogInFP">¿Olvidaste tu contraseña? Haz clic aquí para restablecerla.</p>
            <button  className='buttonLogin' type="submit" >INGRESAR</button>
          </form>
        </div>
        <img class ="img" src={log}></img>
      </div>
    </div>
  );
}

export default App;
