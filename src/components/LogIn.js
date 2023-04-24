import './App.css';
import './styles/login.css';
import log from './assets/IconsLandingPages/login.svg';
import logo from './assets/IconsLandingPages/imagen1.png';


function App() {
  return (
    <div className="App">
    <div class="container">
      <div class="login">
        <form>
          <img src={logo} width="300px" height="100px"/> 
          <input type="text" id="username" name="username" placeholder="Usuario"  required/>
          <input type="password" id="password" name="password" placeholder="Contraseña" required/>
          <p className="textLogInFP">¿Olvidaste tu contraseña? Haz clic aquí para restablecerla.</p>
          <button type="submit" >INGRESAR</button>
        </form>
      </div>
      <img class ="img" src={log}></img>
    </div>
    </div>
  );
}

export default App;
