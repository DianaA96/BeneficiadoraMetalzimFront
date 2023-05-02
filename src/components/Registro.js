import logo from '../logo.svg';
import '../styles/Registro.css';
import HS from '../components/HeaderSencillo'
import MenuS from '../components/Menu'


function App() {
  return (
    <div>
      <HS/>
      <div style={{display:"flex", justifyContent: "center"}} >
        <div class="divBox">
          <form className='formRegistro'>
            <c>
              <div class="textInput">
                  <div for="nombres">Nombres(s)</div>
                  <input  type="text" className="inputRegistro" style={{margin:"20px"}} id="nombres" placeholder='Nombre(s)' name="nombres" required/>

                  <div for="nombres">Apellido Materno</div>
                  <input type="text"  className="inputRegistro" id="apMa"style={{margin:"20px"}}  placeholder='Apellido Materno' name="apMa" required/>
                    
                  <div for="nombres">Telefono</div>
                  <input type="tel"   className="inputRegistro" id="telefono" style={{margin:"20px"}}  placeholder='Telefono' name="telefono" required/>
              </div>
            </c>
            <div>
              <div class="textInput">
                  <div for="nombres">Apellido Paterno</div>
                    <input type="text"  className="inputRegistro" style={{margin:"20px"}} id="apPa"  placeholder='Apellido Paterno' name="apPa" required/>

                    <div for="nombres">Correo </div>
                    <input type="email"  className="inputRegistro" style={{margin:"20px"}}id="correo"  placeholder='Correo' name="correo" required/>
                      
                    <div for="Rol">Rol</div>
                    
                    <select className='selectRegistro' name="Rol" style={{margin:"20px"}}id="Rol" required>
                      <option value="Laboratorista">Laboratorista</option>
                      <option value="OpBascula">Operario Báscula</option>
                      <option value="Gerente">Gerente</option>
                    </select>
              </div>
            </div>

            <button className='buttonRegistro' style={{marginTop:"1rem", marginLeft:"80%"}}  type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;