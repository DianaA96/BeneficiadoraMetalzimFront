import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes, 
  useNavigate
  } from 'react-router-dom';  
import ReporteGerencial from './views/ReporteGerencial';
import CRUDUsuarios from './views/CRUDUsuarios';
import HistorialAnalisis from './views/HistorialAnalisis';
import HistorialBascula from './views/HistorialBascula'
import HistorialGerencia from './views/HistorialGerencia';
import LandingPage from './views/LandingPage'
import ReporteBascula from './views/ReporteBascula'
import ReporteLaboratorio from './views/ReporteLaboratorio'
import Login from "./components/LogIn"
import Registro from "./components/Registro"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      
      {/*Flujo Admin*/}
      <Route path='/reporte-gerencial' element={<ReporteGerencial/>} />
      <Route path='/usuarios' element={<CRUDUsuarios/>} />
      <Route path='/agregar-usuario' element={<Registro/>} />
      {/*Agregar ruta de editar usuario*/}
      {/*<Route path='/editar-usuario' element={} /> */}

      <Route path='/reporte-laboratorio' element={<ReporteLaboratorio/>} />
      <Route path='/reporte-bascula' element={<ReporteBascula/>} />
      <Route path='/historial-bascula' element={<HistorialBascula/>} />
      <Route path='/historial-gerencia' element={<HistorialGerencia/>} />
      <Route path='/historial-analisis' element={<HistorialAnalisis/>} />
      <Route path='/laboratorio' element={<LandingPage/>} />
    </Routes>
    </>
  );
}

export default App;