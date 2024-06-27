import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import NavbarPage from '../../components/NavbarPage';
import ListGroup from 'react-bootstrap/ListGroup';
import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import StepButton from '@mui/material/StepButton';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { LocalizationProvider } from '@mui/x-date-pickers';
//import { esES } from '@mui/x-date-pickers/locales';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import FormLabel from '@mui/material/FormLabel';

import 'dayjs/locale/es';
const Tab1Content = () => (
  <div className="row">
    {/* Columna izquierda - Agendamiento */}
    <div className="col-md-6">
      <h4>Agendamiento</h4>

      <div className="form-group">
        <label>Vendedor:</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label>JP:</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label>KAM:</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label>Fecha Reunión:</label>
        <input type="date" className="form-control" />
      </div>

      <div className="form-group">
        <label>Hora Reunión:</label>
        <input type="time" className="form-control" />
      </div>
    </div>

    {/* Columna derecha - Participantes Reunión */}
    <div className="col-md-6">
      <h4>Participantes Reunión</h4>

      <div className="form-group">
        <label>Nombre:</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label>Cargo:</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label>Correo:</label>
        <input type="email" className="form-control" />
      </div>

      <div className="form-group">
        <label>Fono:</label>
        <input type="tel" className="form-control" />
      </div>
    </div>
  </div>
);

const Tab2Content = () => (
  <div className="row">
    {/* Columna izquierda - Campos Tab 2 */}
    <div className="col-md-6">
      <h4>RECOMENDACION</h4>

      <div className="form-group">
        <input type="checkbox" id="saludoInicial" />
        <label htmlFor="saludoInicial">A: Saludo inicial</label>
      </div>

      <div className="form-group">
        <input type="checkbox" id="presentacion" />
        <label htmlFor="presentacion">B: Preséntacion Inicial</label>
      </div>

      <div className="form-group">
        <input type="checkbox" id="rompeHielo" />
        <label htmlFor="rompeHielo">C: Rompe el Hielo</label>
      </div>

      <div className="form-group">
        {/* Modificado el campo "Conoce su empresa" a un campo de texto */}
        <label>D: Conoce su empresa:</label>
        <input type="text" className="form-control" />
      </div>
    </div>

    {/* Columna derecha - Campos adicionales para "Estructura Reunión" */}
    <div className="col-md-6">
      <h4>Estructura Reunión</h4>

      <div className="form-group">
        <label>Número de sucursales:</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label>Tipo de registro de control:</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label>Tipo de software de sueldo:</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label>Levanta dolores:</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label>Tipo de software de sueldos:</label>
        <input type="text" className="form-control" />
      </div>
    </div>
  </div>
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

const Tab3Content = () => {
  const [files, setFiles] = useState([]);
  const [controlAsistencia, setControlAsistencia] = useState({
    dotacionSucursales: '',
    dotacionTerceros: '',
    solicitarCentrosSuc: {
      internet: false,
      necesitaBateria: false,
    },
    accesoriosAdicionales: {
      impresora: false,
      lectorCI: false,
      lectorHID: false,
    },
    desarrollo: '',
    integracionERP: '',
    controlAcceso: {
      cantidadTorniquetes: '',
      cantidadPuertaImantada: '',
      cantidadPuertaChapaEL: '',
      tarjetaAcceso: '',
      servicioAppAcceso: [],
    },
    controlAccesos: {
      cantidadTorniquetes: '',
      cantidadPuertaImantada: '',
      cantidadPuertaChapaEL: '',
      tarjetaAcceso: '',
      servicioAppAcceso: [],
    },
    controlVisitas: {
      estimacionVisitas: '',
      dotacionEmbarcados: '',
      cantidadEquipos: '',
    },
    gestionContratistas: '',
    desarrollos: '',
  });

  const handleGestionContratistasChange = (e) => {
    setControlAsistencia({ ...controlAsistencia, gestionContratistas: e.target.value });
  };

  const handleDesarrollosChange = (e) => {
    setControlAsistencia({ ...controlAsistencia, desarrollos: e.target.value });
  };


  const handleFileChange = (e) => {
    const fileList = e.target.files;
    const filesArray = Array.from(fileList);
    setFiles(filesArray);
  };
  const handleControlVisitasChange = (e) => {
    const { name, value } = e.target;
    setControlAsistencia((prevControl) => ({
      ...prevControl,
      controlVisitas: {
        ...prevControl.controlVisitas,
        [name]: value,
      },
    }));
  };


  const handleDotacionSucursalesChange = (e) => {
    setControlAsistencia((prevControl) => ({
      ...prevControl,
      dotacionSucursales: e.target.value,
    }));
  };

  const handleDotacionTercerosChange = (e) => {
    setControlAsistencia((prevControl) => ({
      ...prevControl,
      dotacionTerceros: e.target.value,
    }));
  };

  const handleSolicitarCentrosSucChange = (e) => {
    const { name, checked } = e.target;
    setControlAsistencia((prevControl) => ({
      ...prevControl,
      solicitarCentrosSuc: {
        ...prevControl.solicitarCentrosSuc,
        [name]: checked,
      },
    }));
  };

  const handleAccesoriosAdicionalesChange = (e) => {
    const { name, checked } = e.target;
    setControlAsistencia((prevControl) => ({
      ...prevControl,
      accesoriosAdicionales: {
        ...prevControl.accesoriosAdicionales,
        [name]: checked,
      },
    }));
  };

  const handleDesarrolloChange = (e) => {
    setControlAsistencia((prevControl) => ({
      ...prevControl,
      desarrollo: e.target.value,
    }));
  };

  const handleIntegracionERPChange = (e) => {
    setControlAsistencia((prevControl) => ({
      ...prevControl,
      integracionERP: e.target.value,
    }));
  };

  const handleControlAccesoChange = (e) => {
    const { name, value } = e.target;
    setControlAsistencia((prevControl) => ({
      ...prevControl,
      controlAcceso: {
        ...prevControl.controlAcceso,
        [name]: value,
      },
    }));
  };

  const handleServicioAppAccesoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setControlAsistencia((prevControl) => ({
        ...prevControl,
        controlAcceso: {
          ...prevControl.controlAcceso,
          servicioAppAcceso: [...prevControl.controlAcceso.servicioAppAcceso, value],
        },
      }));
    } else {
      setControlAsistencia((prevControl) => ({
        ...prevControl,
        controlAcceso: {
          ...prevControl.controlAcceso,
          servicioAppAcceso: prevControl.controlAcceso.servicioAppAcceso.filter(
            (item) => item !== value
          ),
        },
      }));
    }
  };

  return (
  
    <div className="row">
      
      {/* Columna izquierda - Control de Asistencia */}
      <div className="col-md-3">
        {/* Contenido del Control de Asistencia */}
      </div>

      {/* Columna 2 - Desarrollo e Integración ERP */}
      <div className="col-md-3">
        {/* Contenido de Desarrollo e Integración ERP */}
      </div>

      {/* Columna 3 - Control de Acceso */}
      <div className="col-md-3">
        {/* Contenido del Control de Acceso */}
      </div>

      {/* Columna 4 - Control de Visitas y Gestión */}
      <div className="col-md-3">
        {/* Contenido del Control de Visitas y Gestión */}
      </div>


      <div className="col-md-6">
        <h4>Control de Asistencia</h4>
        <div className="form-group">
          <label>Dotación de Sucursales:</label>
          <input
            type="text"
            className="form-control"
            value={controlAsistencia.dotacionSucursales}
            onChange={handleDotacionSucursalesChange}
          />
        </div>
        <div className="form-group">
          <label>Dotación de Terceros:</label>
          <input
            type="text"
            className="form-control"
            value={controlAsistencia.dotacionTerceros}
            onChange={handleDotacionTercerosChange}
          />
        </div>
        <div className="form-group">
          <label>Solicitar Centros/Suc:</label>
          <div>
            <input
              type="checkbox"
              id="internet"
              name="internet"
              checked={controlAsistencia.solicitarCentrosSuc.internet}
              onChange={handleSolicitarCentrosSucChange}
            />
            <label htmlFor="internet">Internet</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="necesitaBateria"
              name="necesitaBateria"
              checked={controlAsistencia.solicitarCentrosSuc.necesitaBateria}
              onChange={handleSolicitarCentrosSucChange}
            />
            <label htmlFor="necesitaBateria">Necesita Batería</label>
          </div>
        </div>
        <div className="form-group">
          <label>Accesorios Adicionales:</label>
          <div>
            <input
              type="checkbox"
              id="impresora"
              name="impresora"
              checked={controlAsistencia.accesoriosAdicionales.impresora}
              onChange={handleAccesoriosAdicionalesChange}
            />
            <label htmlFor="impresora">Impresora</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="lectorCI"
              name="lectorCI"
              checked={controlAsistencia.accesoriosAdicionales.lectorCI}
              onChange={handleAccesoriosAdicionalesChange}
            />
            <label htmlFor="lectorCI">Lector CI</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="lectorHID"
              name="lectorHID"
              checked={controlAsistencia.accesoriosAdicionales.lectorHID}
              onChange={handleAccesoriosAdicionalesChange}
            />
            <label htmlFor="lectorHID">Lector HID</label>
          </div>
        </div>
      </div>

      {/* Columna derecha - Desarrollo e Integración ERP */}
      <div className="col-md-6">
        <h4>Desarrollo</h4>
        <div className="form-group">
          <label>Desarrollo:</label>
          <input
            type="text"
            className="form-control"
            value={controlAsistencia.desarrollo}
            onChange={handleDesarrolloChange}
          />
        </div>
        <h4>Integración ERP</h4>
        <div className="form-group">
          <label>Integración ERP:</label>
          <input
            type="text"
            className="form-control"
            value={controlAsistencia.integracionERP}
            onChange={handleIntegracionERPChange}
          />
        </div>
      </div>
      <div className="col-md-6">
        <h4>Control de Acceso</h4>
        <div className="form-group">
          <label>Cantidad Torniquetes:</label>
          <input
            type="text"
            className="form-control"
            value={controlAsistencia.controlAcceso.cantidadTorniquetes}
            onChange={handleControlAccesoChange}
            name="cantidadTorniquetes"
          />
        </div>
        <div className="form-group">
          <label>Cantidad Puerta Imantada:</label>
          <input
            type="text"
            className="form-control"
            value={controlAsistencia.controlAcceso.cantidadPuertaImantada}
            onChange={handleControlAccesoChange}
            name="cantidadPuertaImantada"
          />
        </div>
        <div className="form-group">
          <label>Cantidad Puerta Chapa EL:</label>
          <input
            type="text"
            className="form-control"
            value={controlAsistencia.controlAcceso.cantidadPuertaChapaEL}
            onChange={handleControlAccesoChange}
            name="cantidadPuertaChapaEL"
          />
        </div>
        <div className="form-group">
          <label>Tarjeta de Acceso:</label>
          <select
            className="form-control"
            value={controlAsistencia.controlAcceso.tarjetaAcceso}
            onChange={handleControlAccesoChange}
            name="tarjetaAcceso"
          >
            <option value="">Seleccione...</option>
            <option value="ID">ID</option>
            <option value="HID">HID</option>
          </select>
        </div>
        <div className="form-group">
          <label>Servicio App Acceso:</label>
          <div>
            <input
              type="checkbox"
              id="AAA"
              name="AAA"
              checked={controlAsistencia.controlAcceso.servicioAppAcceso.includes('AAA')}
              onChange={handleServicioAppAccesoChange}
              value="AAA"
            />
            <label htmlFor="AAA">AAA</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="BBB"
              name="BBB"
              checked={controlAsistencia.controlAcceso.servicioAppAcceso.includes('BBB')}
              onChange={handleServicioAppAccesoChange}
              value="BBB"
            />
            <label htmlFor="BBB">BBB</label>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Control de Visitas</h4>
        <div className="form-group">
          <label>Estimación de Visitas:</label>
          <input
            type="text"
            className="form-control"
            value={controlAsistencia.controlVisitas.estimacionVisitas}
            onChange={handleControlVisitasChange}
            name="estimacionVisitas"
          />
        </div>
        <div className="form-group">
          <label>Dotación de Embarcados:</label>
          <input
            type="text"
            className="form-control"
            value={controlAsistencia.controlVisitas.dotacionEmbarcados}
            onChange={handleControlVisitasChange}
            name="dotacionEmbarcados"
          />
        </div>
        <div className="form-group">
          <label>Cantidad de Equipos:</label>
          <input
            type="text"
            className="form-control"
            value={controlAsistencia.controlVisitas.cantidadEquipos}
            onChange={handleControlVisitasChange}
            name="cantidadEquipos"
          />
        </div>
      </div>
      <div className="col-md-6">
        <h4>Gestion</h4>
        <div className="form-group">
          <label>Gestión de Contratistas:</label>
          <input
            type="text"
            className="form-control"
            value={controlAsistencia.gestionContratistas}
            onChange={handleGestionContratistasChange}
          />
        </div>
        <div className="form-group">
          <label>Desarrollos:</label>
          <input
            type="text"
            className="form-control"
            value={controlAsistencia.desarrollos}
            onChange={handleDesarrollosChange}
          />
        </div>
      </div>
    </div>
  );
};
const Tab4Content = () => (
  <div className="tab-content">
    <h4 className="tab-title">Enviar Cotizaciones</h4>
    <div className="form-group">
      <label>Cotizar:</label>
      <input type="date" className="form-control" />
    </div>
    <div className="form-group">
      <label>E-mail:</label>
      <input type="email" className="form-control" />
    </div>
    <div className="form-group">
      <label>Comentarios:</label>
      <textarea className="form-control" rows="4"></textarea>
    </div>
    <h4 className="tab-title">Enviar Documentos</h4>
    <div className="form-group">
      <h5 className="sub-title">Correo servicios</h5>
      <div className="form-group">
        <label>Fecha:</label>
        <input type="date" className="form-control" />
      </div>
    </div>
    <div className="form-group">
      <h5 className="sub-title">Correo Certificación</h5>
      <div className="form-group">
        <label>Fecha:</label>
        <input type="date" className="form-control" />
      </div>
    </div>
    <div className="form-group">
      <h5 className="sub-title">Correo Fichas Técnicas</h5>
      <div className="form-group">
        <label>Fecha:</label>
        <input type="date" className="form-control" />
      </div>
    </div>
    <div className="form-group">
      <label>Comentarios:</label>
      <textarea className="form-control" rows="4"></textarea>
    </div>
  </div>

);



const Soportereunionform = () => {
   //DatePicker Value
 const [valueDP, setValueDP] = React.useState(null);
 const [newValueHE, setValueHE] = React.useState(null);
    const [value, setValue] = React.useState(0);

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
  
    const isStepOptional = (step) => {
      return step === 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleStep = (step) => () => {
        setActiveStep(step);
      };
//Indicadores Inputs
const [data,setData]=useState([{indicador:"",metas:"",mediosVerif:""}])
const [activar,setActivar]=useState(true) 
let contador=0; 
 
  const handleClick=()=>{
      setData([...data,{indicador:"",metas:"",mediosVerif:""}])
      setActivar(true); 
  }
  const handleChangeInput=(e,i)=>{
      const {name,value}=e.target
      const onchangeVal = [...data]
      onchangeVal[i][name]=value
      setData(onchangeVal)
      for (let i=0;i< data.length  ; i++){
        

        if(data[i].roles !== '' && data[i].cantidad !==''){

        }else{
          contador = contador+1
        }
        if (contador !== 0){
          setActivar(true)
        }else{
          setActivar(false)
        }
        
      }
  }
  const handleDelete=(i)=>{
      const deleteVal = [...data]
      deleteVal.splice(i,1)
      setData(deleteVal)
  }

  ////checks 
  const [checked, setChecked] = React.useState([false, false,false, false,false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked,event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3], checked[4]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked, checked[2], checked[3], checked[4]]);
  };
  const handleChange4 = (event) => {
    setChecked([checked[0], checked[1], event.target.checked, checked[3], checked[4]]);
  };

  const handleChange5 = (event) => {
    setChecked([checked[0], checked[1], checked[2],event.target.checked, checked[4]]);
  };
  const handleChange6 = (event) => {
    setChecked([checked[0],checked[1], checked[2], checked[3], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Control de asistencia"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
     
      <FormControlLabel
        label="Control de acceso"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
       <FormControlLabel
        label="Control de visitas"
        control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
      />
       <FormControlLabel
        label="Gestión de contratistas"
        control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
      />
       <FormControlLabel
        label="Desarrollos"
        control={<Checkbox checked={checked[4]} onChange={handleChange6} />}
      />
    </Box>
  );
///Radios
const [acceso, setAcceso] = React.useState('female');
const [bateria, setBateria] = React.useState('female');
  const handleChangeAcceso = (event) => {
    setValue(event.target.value);
  };
  const handleChangeBateria = (event) => {
    setValue(event.target.value);
  };

  return (
    // <div >
    // <NavbarPage/> 
    // <div class="container">
    // <div className="App text-center">
    //   <h1>REGISTRO REUNION INICIAL</h1>
    //   <Tabs>
    //     <Tab label="Agendamiento">
    //       <Tab1Content />
    //     </Tab>
    //     <Tab label="Recomendacion Estructura de la Reunion">
    //       <Tab2Content />
    //     </Tab>
    //     <Tab label="Servicios">
    //       <Tab3Content />
    //     </Tab>
    //     <Tab label="Compromisos">
    //       <Tab4Content />
    //     </Tab>

    //     {/* <Tab label="Tab 4" content={<div>Content for Tab 4</div>} /> */}
        
    //   </Tabs>
    // </div>
    // </div>
    // </div>
<Box  >
<NavbarPage/> 
<Box  sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 , mb:2}}>
<Typography  sx={{  fontSize:18 , fontWeight:'bold'}} align="center">
REGISTRO REUNION INICIAL
        </Typography>
</Box>

    <Grid container spacing={2} columns={17}   >
    <Grid item xs={3} > 
    < Card  className="text-center" sx={{ boxShadow:8 }}>
      <Typography  sx={{fontSize: 16, fontWeight:'bold',  backgroundColor:'#bfbdbd' }}> Agendamiento</Typography>
             <CardContent>
              <Grid container >
        

                <Grid item xs={4}>
                <Typography  sx={{  fontSize:12 , fontWeight:'bold'}} align="left">
                Vendedor
        </Typography>
        <Typography  sx={{  fontSize:12 , fontWeight:'bold', mt:2}} align="left">
        JP
        </Typography>
        <Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
        KAM
        </Typography>
        <Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
        Fecha reunión
        </Typography>
        <Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
        Hora reunión
        </Typography>
      
                </Grid>
                <Grid item xs={8} >
     
                
          <TextField 
          id="outlined-basic"  
          variant="outlined"
          InputProps={{
           sx:{height: 25, ml:1}
          }}
    fullWidth
    />

<TextField 
          id="outlined-basic"  
          variant="outlined"
          InputProps={{
           sx:{height: 25, ml:1, mt:1}
          }}
    fullWidth
    />
       <TextField 
          id="outlined-basic"  
          variant="outlined"
          InputProps={{
           sx:{height: 25 , ml:1, mt:1}
          }}
    fullWidth
    />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es" fullWidth>  
            <DesktopDatePicker
            name="fecha"
            inputFormat="DD/MM/YYYY" 
            value={valueDP}
            onChange={setValueDP}
            disablePast
            fullWidth
            sx={{
              '& .MuiInputBase-root': {
                height: '30px',
                mt:'5px'
              },
            }}
            renderInput={(params) => {
              return <TextField  fullWidth 
              {...params}
               />;
            }}
            clearable
            />
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth >
            <MobileTimePicker

fullWidth
            name="horaEncuentro"
            sx={{
              '& .MuiInputBase-root': {
                height: '30px',
                mt:'5px'
              },
            }}
            value={newValueHE}
            onChange={setValueHE}
            renderInput={(params) => {
              return <TextField fullWidth {...params} />;
            }}
            />
          </LocalizationProvider>
        
      
                </Grid>
              </Grid>
              <Divider sx={{ mt:4, mb:3 }}>
        <Chip label="Participantes Reunión" />
      </Divider>
              {
          data.map((val,i)=>
          <div>
          <Grid container  spacing={2} sx={{ mt:1 }} justifyContent="center">
            <Grid item xs={4} sm={6}>
              <TextField
                required
                fullWidth
                id="indicador"
                label="Nombre"
                name="indicador" 
                value={val.indicador} onChange={(e)=>handleChangeInput(e,i)}
              />
            </Grid>
            <Grid item xs={4} sm={6}>
              <TextField
                required
                fullWidth
                id="metas"
                label="Cargo"
                name="metas" 
                value={val.metas} onChange={(e)=>handleChangeInput(e,i)}
              />
            </Grid>
           
           
          </Grid>
          <Grid container  spacing={2} sx={{ mt:1 }} justifyContent="center">
            <Grid item xs={4} sm={5}>
              <TextField 
              id="mediosVerif" 
              label="Nombre" 
              fullWidth 
              required 
              name="Correo" 
              value={val.mediosVerif} onChange={(e)=>handleChangeInput(e,i)}
              />
            </Grid>
            <Grid item xs={4} sm={5}>
              <TextField
                required
                fullWidth
                id="metas"
                label="Telefono"
                name="metas" 
                value={val.metas} onChange={(e)=>handleChangeInput(e,i)}
              />
            </Grid>
            <Grid item xs={5} sm={2} sx={{ mt: 1 }}>
              <Tooltip title="Eliminar Indicador">
                <Button variant='contained' 
                color='error' 
                fullWidth 
                sx={{ borderRadius:2 }}
                onClick={()=>handleDelete(i)}
                > 
                  <DeleteIcon /> 
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
          </div>
            )
          }
          <Grid container justifyContent="center">
            <Grid item xs={8} sm={2} sx={{ mt:3 }}>
              <Button variant='contained' disabled={activar} sx={{ bgcolor:'teal', color:'white', borderRadius:2 }} fullWidth onClick={handleClick}> Añadir Más </Button>
            </Grid>
          </Grid>
             </CardContent>
           </Card>
           </Grid>
    <Grid item xs={5} > 
     < Card  className="text-center" sx={{ boxShadow:8 }}>
      <Typography  sx={{fontSize: 16, fontWeight:'bold',  backgroundColor:'#bfbdbd' }}> Recomendación Estructura reunión</Typography>
             <CardContent>
             <Typography  sx={{fontSize: 16, fontWeight:'bold', }} align="left"> Saludo incial</Typography>
             <Typography  sx={{fontSize: 16, fontWeight:'bold',  }} align="left"> Presentate junto a otros participantes de la empresa</Typography>
             <Typography  sx={{fontSize: 16, fontWeight:'bold',  }} align="left"> Rompe el hielo</Typography>
             <Typography  sx={{fontSize: 16, fontWeight:'bold',  }} align="left"> Conoce su empresa</Typography>
              <Grid container >
        

                <Grid item xs={4}>
                <Typography  sx={{  fontSize:12 }} align="left">
               Cual es su actividad
        </Typography>
        <Typography  sx={{  fontSize:12 , mt:2}} align="left">
        Existe Ppto para Control
        </Typography>
        <Typography  sx={{  fontSize:12 ,   mt:2}} align="left">
        Quienes evaluan Ppto
        </Typography>
        <Typography  sx={{  fontSize:12 ,  mt:2}} align="left">
        Tienen Sucuarsales
        </Typography>
        <Typography  sx={{  fontSize:12  , mt:2}} align="left">
        Que registro de Control tienen
        </Typography>
        <Typography  sx={{  fontSize:12  , mt:2}} align="left">
        Que software de sueldos tienen
        </Typography>
                </Grid>
                <Grid item xs={8} >
     
                
          <TextField 
          id="outlined-basic"  
          variant="outlined"
          InputProps={{
           sx:{height: 25, ml:1}
          }}
    fullWidth
    />

<TextField 
          id="outlined-basic"  
          variant="outlined"
          InputProps={{
           sx:{height: 25, ml:1, mt:1}
          }}
    fullWidth
    />
       <TextField 
          id="outlined-basic"  
          variant="outlined"
          InputProps={{
           sx:{height: 25 , ml:1, mt:1}
          }}
    fullWidth
    />
     <TextField 
          id="outlined-basic"  
          variant="outlined"
          InputProps={{
           sx:{height: 25, ml:1, mt:1}
          }}
    fullWidth
    />
    <TextField 
          id="outlined-basic"  
          variant="outlined"
          InputProps={{
           sx:{height: 25, ml:1, mt:1}
          }}
    fullWidth
    />
    <TextField 
          id="outlined-basic"  
          variant="outlined"
          InputProps={{
           sx:{height: 25, ml:1, mt:1}
          }}
    fullWidth
    />
        
      
                </Grid>
              </Grid>

          <Typography  sx={{  fontSize:16  ,fontWeight:'bold', mt:2}} align="left">
     Levanta Dolores
        </Typography>
        <TextField sx={{  mt:2}}
          id="outlined-multiline-static"
          label="Comentarios"
          multiline
          rows={5}
          placeholder="comentarios"
          fullWidth
        />
   <Typography  sx={{  fontSize:16  ,fontWeight:'bold', mt:2}} align="left">
   Como se imagina la solución a sus dolores
        </Typography>
        <TextField sx={{  mt:2}}
          id="outlined-multiline-static"
          label="Comentarios"
          multiline
          rows={5}
          placeholder="comentarios"
          fullWidth
        />
       
             </CardContent>
           </Card>
           </Grid>
    <Grid item xs={5} >
    < Card  className="text-center" sx={{ boxShadow:8 }}>
      <Typography  sx={{fontSize: 16, fontWeight:'bold',  backgroundColor:'#bfbdbd' }}> Servicios</Typography>
             <CardContent>
             <Box>
      <FormControlLabel
        label="Seleccionar Todos"
        control={
          <Checkbox
            checked={checked[0] && checked[1]&& checked[2]&& checked[3]&& checked[4]}
            
            onChange={handleChange1}
          />
        }
      />
      {children}
      </Box>
              <Divider sx={{ mt:4, mb:3 }}>
        <Chip label="Servicios seleccionados" />
      </Divider>
      {checked[0]  ?<Box>
        <Box  sx={{ bgcolor: 'text.disabled', color: 'background.paper' , mb:2}}>
<Typography  sx={{  fontSize:18 , fontWeight:'bold'}} align="center">
Control de asistencia
        </Typography>
</Box> 
        <Grid container >
        

        <Grid item xs={4}>
        <Typography  sx={{  fontSize:12 , fontWeight:'bold'}} align="left">
       Tipos Reloj
</Typography>
        <Typography  sx={{  fontSize:12 , fontWeight:'bold', mt:2}} align="left">
        Dotación Sucursales
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold', mt:2}} align="left">
Dotación Terceros
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Soliicitar apertura centros /suc
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Acceso a Internet
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Necesita batería
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Accesorios adicional
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:6}} align="left">
Desarrollo
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Integración ERP
</Typography>

        </Grid>
        <Grid item xs={8} >

        <TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25, ml:1}
  }}
fullWidth
/>
  <TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25, ml:1 ,mt:1}
  }}
fullWidth
/>

<TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25, ml:1, mt:1}
  }}
fullWidth
/>
<TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25 , ml:1, mt:1}
  }}
fullWidth
/>
<Box>
<FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio  size="small"/>} label="Si" />
        <FormControlLabel value="male" control={<Radio  size="small"/>} label="No" />
     
      </RadioGroup>
    </FormControl>
</Box>
<Box>
<FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group1"
      >
        <FormControlLabel value="si" control={<Radio size="small" />} label="Si" />
        <FormControlLabel value="no" control={<Radio  size="small"/>} label="No" />
     
      </RadioGroup>
    </FormControl>
</Box>
<Grid container >
<Grid item xs={4} ><Typography  sx={{  fontSize:12 }} align="center">
Impresora
        </Typography></Grid>
<Grid item xs={4} ><Box>
<FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group1"
      >
        <FormControlLabel value="si" control={<Radio sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 12,
          },
        }}/>} label="Si" />
        <FormControlLabel value="no" control={<Radio  sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 12,
          },
        }}/>} label="No" />
     
      </RadioGroup>
    </FormControl>
  </Box>
  </Grid>
<Grid item xs={4} >3</Grid>
  </Grid> 
  <Grid container >
<Grid item xs={4} >1</Grid>
<Grid item xs={4} >2</Grid>
<Grid item xs={4} >3</Grid>
  </Grid> 
  <Grid container >
<Grid item xs={4} >1</Grid>
<Grid item xs={4} >2</Grid>
<Grid item xs={4} >3</Grid>
  </Grid> 
<TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25 , ml:1, mt:1}
  }}
fullWidth
/>
<TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25 , ml:1, mt:1}
  }}
fullWidth
/>



        </Grid>
      </Grid>
        </Box>: ''}
        {checked[1]  ?<Box  sx={{ mt:2}}> 
          <Box  sx={{ bgcolor: 'text.disabled', color: 'background.paper' , mb:2}}>
<Typography  sx={{  fontSize:18 , fontWeight:'bold'}} align="center">
Control de Acceso
        </Typography>
</Box>
          <Grid container >
        

        <Grid item xs={4}>
        <Typography  sx={{  fontSize:12 , fontWeight:'bold'}} align="left">
        Cantidad Torniquetes
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold', mt:2}} align="left">
Cantidad Puerta Imantada
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Cantidad Puerta Chapa El.
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Tarjeta acceso
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Servucio App acceso
</Typography>

        </Grid>
        <Grid item xs={8} >

        
  <TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25, ml:1}
  }}
fullWidth
/>

<TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25, ml:1, mt:1}
  }}
fullWidth
/>
<TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25 , ml:1, mt:1}
  }}
fullWidth
/>
<TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25 , ml:1, mt:1}
  }}
fullWidth
/>
<TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25 , ml:1, mt:1}
  }}
fullWidth
/>



        </Grid>
      </Grid>


        </Box>: ''}
        {checked[2]  ?<Box sx={{ mt:2}}> 
          <Box  sx={{ bgcolor: 'text.disabled', color: 'background.paper' , mb:2}}>
<Typography  sx={{  fontSize:18 , fontWeight:'bold'}} align="center">
Control de Visitas
        </Typography>
</Box>
          <Grid container >
        

        <Grid item xs={4}>
        <Typography  sx={{  fontSize:12 , fontWeight:'bold'}} align="left">
        Estimación visitas
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold', mt:2}} align="left">
Embarcados
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Dotación Embarcados
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Servicio de comedor
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Cantidad de Equipos
</Typography>

        </Grid>
        <Grid item xs={8} >

        
  <TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25, ml:1}
  }}
fullWidth
/>

<TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25, ml:1, mt:1}
  }}
fullWidth
/>
<TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25 , ml:1, mt:1}
  }}
fullWidth
/>
<TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25 , ml:1, mt:1}
  }}
fullWidth
/>
<TextField 
  id="outlined-basic"  
  variant="outlined"
  InputProps={{
   sx:{height: 25 , ml:1, mt:1}
  }}
fullWidth
/>



        </Grid>
      </Grid>



        </Box>: ''}
        {checked[3]  ? <Box sx={{ mt:2}}> 
          <Box  sx={{ bgcolor: 'text.disabled', color: 'background.paper' , mb:2}}>
<Typography  sx={{  fontSize:18 , fontWeight:'bold'}} align="center">
Gestion de Contraistas
        </Typography>
</Box>
          <TextField sx={{  mt:2}}
          id="outlined-multiline-static"
          label="Gestion de Contraistas"
          multiline
          rows={8}
          placeholder="Gestion de Contraistas"
          fullWidth
        />

        </Box>: ''}
        {checked[4]  ?
        <Box sx={{ mt:2}}> 
          <Box  sx={{ bgcolor: 'text.disabled', color: 'background.paper' , mb:2}}>
<Typography  sx={{  fontSize:18 , fontWeight:'bold'}} align="center">
Desarrollos
        </Typography>
</Box>
          <TextField sx={{  mt:2}}
          id="outlined-multiline-static"
          label="Desarrollos"
          multiline
          rows={8}
          placeholder="Desarrollos"
          fullWidth
        />

        </Box>: ''}
             </CardContent>
           </Card>
   
      
    </Grid>
    <Grid item xs={3} >
    < Card  className="text-center" sx={{ boxShadow:8 }}>
      <Typography  sx={{fontSize: 16, fontWeight:'bold',  backgroundColor:'#bfbdbd' }}> ACCIONES COMPROMISOS</Typography>
             <CardContent>
             <Box  sx={{ bgcolor: 'text.disabled', color: 'background.paper' , mb:2}}>
<Typography  sx={{  fontSize:18 , fontWeight:'bold'}} align="center">
Enviar Cotizaciones
        </Typography>
</Box>
              <Grid container >
        

                <Grid item xs={4}>
                <Typography  sx={{  fontSize:12 , fontWeight:'bold'}} align="left">
                Cotizar
        </Typography>
        <Typography  sx={{  fontSize:12 , fontWeight:'bold', mt:2}} align="left">
        Enviar a
        </Typography>
        <Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
        Comentarios
        </Typography>
                </Grid>
                <Grid item xs={8} >
     
                
          
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es" fullWidth>  
            <DesktopDatePicker
            name="fecha"
            inputFormat="DD/MM/YYYY" 
            value={valueDP}
            onChange={setValueDP}
            disablePast
            fullWidth
            sx={{
              '& .MuiInputBase-root': {
                height: '30px',
                mt:'5px'
              },
            }}
            renderInput={(params) => {
              return <TextField  fullWidth 
              {...params}
               />;
            }}
            clearable
            />
          </LocalizationProvider>


       <TextField 
          id="outlined-basic"  
          variant="outlined"
          InputProps={{
           sx:{height: 25 , ml:1, mt:1}
          }}
    fullWidth
    />
           <TextField sx={{  mt:2}}
          id="outlined-multiline-static"
          label="Comentarios"
          multiline
          rows={3}
          placeholder="comentarios"
          fullWidth
        />
      
                </Grid>
              </Grid>
              <Box  sx={{ bgcolor: 'text.disabled', color: 'background.paper' , mb:2,mt:1}}>
<Typography  sx={{  fontSize:18 , fontWeight:'bold'}} align="center">
Enviar Documentos
        </Typography>
</Box>
<Grid container >
        

        <Grid item xs={4}>
        <Typography  sx={{  fontSize:12 , fontWeight:'bold'}} align="left">
        Correo Servicios
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold', mt:2}} align="left">
Correo Certificación
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Correo Fichas Tecnica
</Typography>
<Typography  sx={{  fontSize:12 , fontWeight:'bold' , mt:2}} align="left">
Comentarios
</Typography>
        </Grid>
        <Grid item xs={8} >

        
  
<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es" fullWidth>  
    <DesktopDatePicker
    name="fecha"
    inputFormat="DD/MM/YYYY" 
    value={valueDP}
    onChange={setValueDP}
    disablePast
    fullWidth
    sx={{
      '& .MuiInputBase-root': {
        height: '30px',
        mt:'5px'
      },
    }}
    renderInput={(params) => {
      return <TextField  fullWidth 
      {...params}
       />;
    }}
    clearable
    />
  </LocalizationProvider>
  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es" fullWidth>  
    <DesktopDatePicker
    name="fecha"
    inputFormat="DD/MM/YYYY" 
    value={valueDP}
    onChange={setValueDP}
    disablePast
    fullWidth
    sx={{
      '& .MuiInputBase-root': {
        height: '30px',
        mt:'5px'
      },
    }}
    renderInput={(params) => {
      return <TextField  fullWidth 
      {...params}
       />;
    }}
    clearable
    />
  </LocalizationProvider>
  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es" fullWidth>  
    <DesktopDatePicker
    name="fecha"
    inputFormat="DD/MM/YYYY" 
    value={valueDP}
    onChange={setValueDP}
    disablePast
    fullWidth
    sx={{
      '& .MuiInputBase-root': {
        height: '30px',
        mt:'5px'
      },
    }}
    renderInput={(params) => {
      return <TextField  fullWidth 
      {...params}
       />;
    }}
    clearable
    />
  </LocalizationProvider>

   <TextField sx={{  mt:2}}
  id="outlined-multiline-static"
  label="Comentarios"
  multiline
  rows={3}
  placeholder="comentarios"
  fullWidth
/>

        </Grid>
      </Grid>
     
             </CardContent>
           </Card>



    </Grid>
    
    </Grid>
<Box align="center">
<Stack direction="row" spacing={2} sx={{  mt:2}}  >
      <Button variant="contained">Guardar</Button>
   
      <Button variant="contained" href="#contained-buttons" color="success">
     Guardar y Cerrar
      </Button>
    </Stack>
</Box>
    
  
   
    </Box>
  
  );
};

export default Soportereunionform;