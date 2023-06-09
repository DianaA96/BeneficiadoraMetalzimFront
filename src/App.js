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
import Error404 from './views/Error404';
import ReporteGerencial from './views/ReporteGerencial';
import PdfRenderer from './components/pdfRenderer';

function App() {
  return (
    <>
    <Routes>
      {/*TODO: Proteger rutas*/}
      
      <Route path='/' element={<Login/>} />
      <Route path='/redirect' element={<RedireccionCargo/>} />

      {/*Flujo Laboratorista*/}
      <Route path='/laboratorio' element={<LandingPage strips={0}/>} />
      <Route path='/reporte-laboratorio/:mina/:fecha' element={<ReporteLaboratorio/>} />
      <Route path='/formulario-laboratorio' element={<FormularioLaboratorio/>} />
      <Route path='/historial-analisis' element={<HistorialAnalisis/>} />

      {/*Flujo Admin*/}
      <Route path='/admin' element={<LandingPage strips={1}/> } />
      <Route path='/formulario-gerencial' element={<FormularioGerencial/>} />
      <Route path='/historial-gerencia_adminview' element={<HistorialGerencia rol="admin"/>} />
      <Route path='/usuarios' element={<CRUDUsuarios/>} />
      <Route path='/agregar-usuario' element={<Registro/>} />
      <Route path='/usuario/:idUsuario' element={<EditarUsuario/>} />
      <Route path='/historial-bascula_adminview' element={<HistorialBascula rol="admin"/>} />
      <Route path='/reporte-bascula_adminview/:fecha' element={<ReporteBascula rol="admin"/>} />
     
    
      {/*Flujo Gerente*/}
      <Route path='/gerencia' element={<LandingPage strips={2}/> } />
      <Route path='/historial-bascula_managerview' element={<HistorialBascula rol="gerente"/>} />
      <Route path='/historial-gerencia_managerview' element={<HistorialGerencia rol="gerente"/>} />
      <Route path='/reporte-bascula_managerview/:fecha' element={<ReporteBascula rol="gerente"/>} />
      <Route path='/reporte/:idReporte' element={<ReporteGerencial rol="gerente"/>} />


      {/*Flujo Bascula*/}
      <Route path='/bascula' element={<LandingPage strips={3}/> } />
      <Route path='/reporte-bascula_basculaview/:fecha' element={<ReporteBascula rol="bascula"/>} />
      <Route path='/historial-bascula_basculaview' element={<HistorialBascula rol="bascula"/>} />
      <Route path='/reporte-movimiento-mineral' element={<MovimientoMineral/>} />
      
      {/*PDF Renderer */}
      <Route path="/printView/:idVista" element={<PdfRenderer/>}/>

      {/*Pagina de Error 404*/}
      <Route path='*' element={<Error404/>} />
    </Routes>
    </>
  );
}

export default App;