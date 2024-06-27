import * as React from 'react';
import './styles/App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login2 from './pages/login/Login2';
import Registrar from './pages/registro/Registrar'
import Home from './pages/home/Home';
import MenuMaestro from './pages/menu_maestro/MenuMaestro';
import Usuarios from './pages/users/usuarios';
import Configuracion from './pages/config/configuracion';
import Categorizaciones from './pages/MenuMaestro/Categorizaciones';
import TipoCliente from './pages/MenuMaestro/TipoCliente';
import Dashboard from './components/Dashboard';
import CmiClientes from './pages/cm_clientes/CmiClientes';
import Monedas from './pages/MenuMaestro/Monedas';
import LevantamientoForm from './pages/levantamiento/Levantamiento';
import TratoCreadoForm from './pages/TratoCreado/TratoCreado';
import Pais from './pages/MenuMaestro/Pais';
import Sector from './pages/MenuMaestro/Sector';
import TipoEmpresa from './pages/MenuMaestro/Tipoempresa';
import Industria from './pages/MenuMaestro/Industria';
import Trato from './pages/MenuMaestro/EstadoTratos';
import Soportereunionform from './pages/soporte_reunion/Soporte_Reunion';
import PosibleCliente from './pages/MenuMaestro/PosibleCliente';
import Marcaje from './pages/MenuMaestro/Marcaje';
import RangoEmpleados from './pages/MenuMaestro/RangoEmpleados';
import ReqCliMini from './pages/MenuMaestro/ReqCliMin';
import PropuestaEnvNegform from './pages/propuestaEnvNeg/PropuestaEnvNeg';
import PropuestaNuevo from './pages/propuestaEnvNeg/propuestaNueva';
import Cartera from './pages/cartera/cartera';
import Equipos from './pages/users/equipos'
import AgregarMiembros from './pages/users/agregarMiembros'
import TipoCoordinacion from './pages/MenuMaestro/TipoCoordinacion'
import ProductoSolucion from './pages/MenuMaestro/ProductoSolucion'
import Modalidad from './pages/MenuMaestro/Modalidad'
import Periocidad from './pages/MenuMaestro/Periodicidad'
import Plantillas from './pages/MenuMaestro/Plantillas'
import Estado from './pages/MenuMaestro/Estado'
import FichaTecnica from './pages/MenuMaestro/FichaTecnica';
import Encuestas from './pages/MenuMaestro/Encuestas';
import TipoEmpresaGeo from './pages/MenuMaestro/TipoEmpresaGeo';
import Anulacion from './pages/MenuMaestro/Anulacion';
import TipoCapacitacion from './pages/MenuMaestro/TipoCapacitacion';
import CostoCapacitacion from './pages/MenuMaestro/CostoCapacitacion';
import EstadoCapacitacion from './pages/MenuMaestro/EstadoCapacitacion';
import TipoSoporte from './pages/MenuMaestro/TipoSoporte';
import Partner from './pages/MenuMaestro/Partner';
import Activacion from './pages/MenuMaestro/Activacion';
import TipoPlanificacion from './pages/MenuMaestro/TipoPlanificacion';
function App() { 
  return (
    <div className="app">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login2 />} />
          <Route exact path='/Registrar' element={< Registrar />}/>
          <Route exact path='/Home' element={< Home />}/>
          <Route exact path='/Cartera' element={< Cartera />}/>
          <Route exact path='/MenuMaestro' element={< MenuMaestro />}/>
          <Route exact path='/Usuarios' element={< Usuarios />}/>
          <Route exact path='/Equipos' element={< Equipos />}/>
          <Route exact path='/AgregarMiembros' element={< AgregarMiembros/>}/>
          <Route exact path='/CMClientes' element={< CmiClientes />}/>
          <Route exact path='/LevantamientoForm' element={< LevantamientoForm />}/>
          <Route exact path='/Soportereunionform' element={< Soportereunionform />}/>
          <Route exact path='/TratoCreadoForm' element={< TratoCreadoForm />}/>
          <Route exact path='/PropuestaEnvNegform' element={< PropuestaEnvNegform />}/>
          <Route exact path='/Propuesta' element={< PropuestaNuevo/>}/>
          <Route exact path='/Configuracion' element={< Configuracion />}/>
          <Route path="/dashboard/:productId" element={<Dashboard />} />
          <Route path="MenuMaestro/Categorizaciones/:prodcutId" element={< Categorizaciones />} />
          <Route path="MenuMaestro/Categorizaciones/TipoCliente" element={< TipoCliente />} />
          <Route path="MenuMaestro/MonedasyUnidades/MonedasCrud" element={< Monedas />} />
          <Route path="MenuMaestro/Territorio/PaisCrud" element={< Pais />} />
          <Route path="MenuMaestro/Categorizaciones/SectorCrud" element={< Sector />} />
          <Route path="MenuMaestro/Categorizaciones/TipoEmpresaCrud" element={< TipoEmpresa />} />
          <Route path="MenuMaestro/Categorizaciones/IndustriaCrud" element={< Industria />} />
          <Route exact path='MenuMaestro/EstadosyProcesos/TratoCrud' element={< Trato />}/>
          <Route exact path='MenuMaestro/Comercial/PosibleClienteCrud' element={< PosibleCliente />}/>
          <Route exact path='MenuMaestro/Comercial/MarcajeCrud' element={< Marcaje />}/>
          <Route exact path='MenuMaestro/Comercial/RangoEmpleadosCrud' element={< RangoEmpleados />}/>
          <Route exact path='MenuMaestro/Comercial/ReqCliMiniCrud' element={< ReqCliMini />}/>
          <Route exact path='MenuMaestro/Comercial/TipoCoordinacion' element={< TipoCoordinacion />}/>
          <Route exact path='MenuMaestro/Comercial/ProductoSolucion' element={< ProductoSolucion />}/>
          <Route exact path='MenuMaestro/Comercial/Modalidad' element={< Modalidad />}/>
          <Route exact path='MenuMaestro/Comercial/Periocidad' element={< Periocidad />}/>
          <Route exact path='MenuMaestro/Comercial/Plantillas' element={< Plantillas />}/>
          <Route exact path='MenuMaestro/Comercial/Estado' element={< Estado />}/>
          <Route exact path='MenuMaestro/Comercial/FichaTecnica' element={< FichaTecnica />}/>
          <Route exact path='MenuMaestro/Comercial/Encuestas' element={< Encuestas />}/>
          <Route exact path='MenuMaestro/Comercial/TipoEmpresaGeo' element={< TipoEmpresaGeo/>}/>
          <Route exact path='MenuMaestro/Comercial/Anulacion' element={< Anulacion/>}/>
          <Route exact path='MenuMaestro/Comercial/TipoCapacitacion' element={< TipoCapacitacion/>}/>
          <Route exact path='MenuMaestro/Comercial/CostoCapacitacion' element={< CostoCapacitacion/>}/>
          <Route exact path='MenuMaestro/Comercial/EstadoCapacitacion' element={< EstadoCapacitacion/>}/>
          <Route exact path='MenuMaestro/Comercial/TipoSoporte' element={< TipoSoporte/>}/>
          <Route exact path='MenuMaestro/Comercial/Partner' element={< Partner/>}/>
          <Route exact path='MenuMaestro/Comercial/Activacion' element={< Activacion/>}/>
          <Route exact path='MenuMaestro/Comercial/TipoPlanificacion' element={< TipoPlanificacion/>}/>
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;