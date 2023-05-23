import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes, 
  useNavigate
  } from 'react-router-dom';  
import FormularioGerencial from './views/FormularioGerencial';
import CRUDUsuarios from './views/CRUDUsuarios';
import HistorialAnalisis from './views/HistorialAnalisis';
import HistorialBascula from './views/HistorialBascula'
import HistorialGerencia from './views/HistorialGerencia';
import LandingPage from './views/LandingPage'
import ReporteBascula from './views/ReporteBascula'
import ReporteLaboratorio from './views/ReporteLaboratorio'
import Login from "./views/LogIn"
import Registro from "./views/Registro"
import EditarUsuario from './views/EditarUsuario';
import FormularioLaboratorio from './views/FormularioLaboratorio';
import RedireccionCargo from './views/RedireccionCargo';
import MovimientoMineral from './views/MovimientoMineral';

function App() {
  return (
    <>
    <Routes>
      {/*TODO: Proteger rutas*/}
      
      <Route path='/' element={<Login/>} />
      <Route path='/redirect' element={<RedireccionCargo/>} />
      {/*Flujo Admin*/}
      <Route path='/formulario-gerencial' element={<FormularioGerencial/>} />
      <Route path='/usuarios' element={<CRUDUsuarios/>} />
      <Route path='/agregar-usuario' element={<Registro/>} />
      <Route path='/usuario/:idUsuario' element={<EditarUsuario/>} />
      <Route path='/reporte-laboratorio' element={<ReporteLaboratorio/>} />
      <Route path='/reporte-bascula' element={<ReporteBascula/>} />
      <Route path='/reporte-movimiento-mineral' element={<MovimientoMineral/>} />
      <Route path='/historial-bascula' element={<HistorialBascula/>} />
      <Route path='/historial-gerencia' element={<HistorialGerencia/>} />
      <Route path='/historial-analisis' element={<HistorialAnalisis/>} />
      <Route path='/formulario-laboratorio' element={<FormularioLaboratorio/>} />
      <Route path='/laboratorio' element={<LandingPage strips={0}/>} />
      <Route path='/admin' element={<LandingPage strips={1}/> } />
      <Route path='/gerente' element={<LandingPage strips={2}/> } />
      <Route path='/bascula' element={<LandingPage strips={3}/> } />
    </Routes>
    </>
  );
}

export default App;