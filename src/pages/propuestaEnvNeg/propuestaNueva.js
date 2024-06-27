import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
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
import FormGroup from '@mui/material/FormGroup';
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
import { color } from 'echarts';
import { Table } from 'reactstrap';

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




const PropuestaNuevo = () => {
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
  const [data, setData] = useState([{ indicador: "", metas: "", mediosVerif: "" }])
  const [activar, setActivar] = useState(true)
  let contador = 0;

  const handleClick = () => {
    setData([...data, { indicador: "", metas: "", mediosVerif: "" }])
    setActivar(true);
  }
  const handleChangeInput = (e, i) => {
    const { name, value } = e.target
    const onchangeVal = [...data]
    onchangeVal[i][name] = value
    setData(onchangeVal)
    for (let i = 0; i < data.length; i++) {


      if (data[i].roles !== '' && data[i].cantidad !== '') {

      } else {
        contador = contador + 1
      }
      if (contador !== 0) {
        setActivar(true)
      } else {
        setActivar(false)
      }

    }
  }
  const handleDelete = (i) => {
    const deleteVal = [...data]
    deleteVal.splice(i, 1)
    setData(deleteVal)
  }

  ////checks 
  const [checked, setChecked] = React.useState([false, false, false, false, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
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
    setChecked([checked[0], checked[1], checked[2], event.target.checked, checked[4]]);
  };
  const handleChange6 = (event) => {
    setChecked([checked[0], checked[1], checked[2], checked[3], event.target.checked]);
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
        label="Embarcados 686"
        control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
      />
      <FormControlLabel
        label="Servicio Comedor"
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
      <NavbarPage />
      <Grid container spacing={2} columns={17} sx={{ ml: 0.2 }} >
        <Grid item xs={3} >
          < Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography sx={{ fontSize: 16, fontWeight: 'bold', backgroundColor: '#0d6efd', color: 'white' }}>
              Crear Cotización
            </Typography>
            <CardContent>
              <Grid container >
                <Grid item xs={4}>
                  <Typography sx={{ fontSize: 15 }} align="left">
                    CRM Cliente Cuenta
                  </Typography>
                  <Typography sx={{ fontSize: 15, mt: 2 }} align="left">
                    Fecha Emision
                  </Typography>
                  <Typography sx={{ fontSize: 15, mt: 2 }} align="left">
                    Fecha Vencimiento
                  </Typography>
                </Grid>

                <Grid item xs={8} >
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={1}
                    InputProps={{
                      sx: { height: 25, width: 40 }
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
                          mt: '40px'
                        },
                      }}
                      renderInput={(params) => {
                        return <TextField fullWidth
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
                          mt: '30px'
                        },
                      }}
                      renderInput={(params) => {
                        return <TextField fullWidth
                          {...params}
                        />;
                      }}
                      clearable
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Divider sx={{ mt: 4, mb: 3 }}>
                <Chip label="Datos Facturacion" />
              </Divider>
              <Grid container >
                <Grid item xs={4}>
                  <Typography sx={{ fontSize: 15, }} align="left">
                    Razon Social
                  </Typography>
                  <Typography sx={{ fontSize: 15, mt: 2 }} align="left">
                    Giro
                  </Typography>
                  <Typography sx={{ fontSize: 15, mt: 2 }} align="left">
                    Rut
                  </Typography>
                </Grid>
                <Grid item xs={8} >
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    InputProps={{
                      sx: { height: 25, ml: 1 }
                    }}
                    fullWidth
                  />
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    InputProps={{
                      sx: { height: 25, ml: 1, mt: 1.5 }
                    }}
                    fullWidth
                  />
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    InputProps={{
                      sx: { height: 25, ml: 1, mt: 1.6 }
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Divider sx={{ mt: 4, mb: 3 }}>
                <Chip label="Datos de Formulario" />
              </Divider>
              <Grid container >
                <Grid item xs={4}>
                  <Typography sx={{ fontSize: 13, }} align="left">
                    Territorio(País)
                  </Typography>
                  <Typography sx={{ fontSize: 15, mt: 2 }} align="left">
                    Nombre Cotización
                  </Typography>
                  <Typography sx={{ fontSize: 15, mt: 2 }} align="left">
                    Vendedor
                  </Typography>
                </Grid>
                <Grid item xs={8} >
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={3}
                    InputProps={{
                      sx: { height: 25, ml: 1, width: 40 }
                    }}
                    fullWidth
                  />
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    InputProps={{
                      sx: { height: 25, ml: 1, mt: 3 }
                    }}
                    fullWidth
                  />
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={17}
                    InputProps={{
                      sx: { height: 25, ml: 1, mt: 3, width: 50 }
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>

              <Divider sx={{ mt: 4, mb: 3 }}>
                <Chip label="Términos y Condiciones" />
              </Divider>
              <Grid container >
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 15, }} align="left">
                    Agregar Términos y Condiciones
                  </Typography>
                </Grid>
                <Grid item xs={6} ><Box>
                  <FormControl>
                    <FormControlLabel control={<Checkbox />} />
                  </FormControl>
                </Box>
                </Grid>
              </Grid>

              <Divider sx={{ mt: 4, mb: 3 }}>
                <Chip label="Opciones" />
              </Divider>
              <Grid container >
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 15 }} align="left">
                    Recibir PDF por Correo
                  </Typography>
                  <Typography sx={{ fontSize: 15, mt: 1 }} align="left">
                    Mostrar Tablas de Cobro en PDF
                  </Typography>
                </Grid>
                <Grid item xs={6} ><Box>
                  <FormControl>
                    <FormControlLabel control={<Checkbox />} />
                    <FormControlLabel control={<Checkbox />} />
                  </FormControl>
                </Box>
                </Grid>
                <TextField
                  sx={{ mt: 2 }}
                  id="outlined-multiline-static"
                  label="Comentarios"
                  multiline
                  rows={8}
                  placeholder="comentarios"
                  fullWidth
                />
                <TextField
                  sx={{ mt: 2 }}
                  id="outlined-multiline-static"
                  label="Notas"
                  multiline
                  rows={8}
                  placeholder="Ejecutivo Comercial y Teléfono.
                  La presente Cotización tendrá una vigencia de 30 días
                  contados a partir de la fecha indicada
                  al principio del documento. "
                  fullWidth
                />
                <Typography sx={{ fontSize: 15, mt: 2 }} align="left">
                  Fecha del Valor de UF/USD
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  InputProps={{
                    sx: { height: 25, mt: 1, width: 150 }
                  }}
                  fullWidth
                />
                <Typography sx={{ fontSize: 12, mt: 1 }} align="left">
                  La fecha y valor de la UF vienen incluídos siempre en las Notas, por lo que no es necesario agregarlos manualmente.
                </Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 'bold', mt: 2.5, ml: 5 }} align="left">
                  Cotización Lista
                </Typography>
                <FormControl>
                  <FormControlLabel control={<Checkbox />} sx={{ ml: 2, mt: 1.5 }} />
                </FormControl>
              </Grid>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={5} >
          < Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography sx={{ fontSize: 16, fontWeight: 'bold', backgroundColor: '#0d6efd', color: 'white' }}> Servicios</Typography>
            <CardContent>
              <Box>
                <FormControlLabel
                  label="Seleccionar Todos"
                  control={
                    <Checkbox
                      checked={checked[0] && checked[1] && checked[2] && checked[3] && checked[4]}

                      onChange={handleChange1}
                    />
                  }
                />
                {children}
              </Box>
              <Divider sx={{ mt: 4, mb: 3 }}>
                <Chip label="Servicios seleccionados" sx={{ bgcolor: '#99CD95' }} />
              </Divider>
              {checked[0] ? <Box>
                <Box sx={{ bgcolor: '#0d6efd', color: 'background.paper', mb: 2 }}>
                  <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} align="center">
                    Control de asistencia
                  </Typography>
                </Box>

                <Grid container >
                  <Grid item xs={3}>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold' }} align="left">
                      Control de Asistencia
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold', mt: 2 }} align="left">
                      Dotación Sucursales
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold', mt: 2 }} align="left">
                      Dotación Matríz
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold', mt: 2 }} align="left">
                      Dotación Terceros
                    </Typography>

                    <Typography sx={{ fontSize: 12, fontWeight: 'bold', mt: 2 }} align="left">
                      Acceso a Internet
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold', mt: 2 }} align="left">
                      Necesita batería
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold', mt: 2 }} align="left">
                      Accesorio adicional
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold', mt: 10 }} align="left">
                      Desarrollo
                    </Typography>
                    <Typography sx={{ fontSize: 12, fontWeight: 'bold', mt: 2 }} align="left">
                      Integración ERP
                    </Typography>

                  </Grid>
                  <Grid item xs={8} >

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      placeholder='Tipo Reloj'
                      InputProps={{
                        sx: { height: 25, ml: 1, width: 110 }
                      }}
                      fullWidth
                    />
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      InputProps={{
                        sx: { height: 25, ml: 1, mt: 1 }
                      }}
                      fullWidth
                    />

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      InputProps={{
                        sx: { height: 25, ml: 1, mt: 1 }
                      }}
                      fullWidth
                    />
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      InputProps={{
                        sx: { height: 25, ml: 1, mt: 1 }
                      }}
                      fullWidth
                    />
                    <Box>
                      <Grid item xs={5} ><Box>
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel value="female" control={<Radio size="small" />} label="Si" />
                            <FormControlLabel value="male" control={<Radio size="small" />} label="No" />

                          </RadioGroup>
                        </FormControl>
                      </Box>
                      </Grid>
                    </Box>

                    <Box>
                      <Grid item xs={5} ><Box>
                        <FormControl>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel value="female" control={<Radio size="small" />} label="Si" />
                            <FormControlLabel value="male" control={<Radio size="small" />} label="No" />

                          </RadioGroup>
                        </FormControl>
                      </Box>
                      </Grid>
                    </Box>
                    <Grid container >
                      <Grid item xs={4} ><Typography sx={{ fontSize: 12, mt: 1 }} align="center">
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
                            }} />} label="Si" />
                            <FormControlLabel value="no" control={<Radio sx={{
                              '& .MuiSvgIcon-root': {
                                fontSize: 12,
                              },
                            }} />} label="No" />

                          </RadioGroup>
                        </FormControl>
                      </Box>
                      </Grid>
                    </Grid>

                    <Grid container >
                      <Grid item xs={4} ><Typography sx={{ fontSize: 12, mt: 1 }} align="center">
                        Lector CI
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
                            }} />} label="Si" />
                            <FormControlLabel value="no" control={<Radio sx={{
                              '& .MuiSvgIcon-root': {
                                fontSize: 12,
                              },
                            }} />} label="No" />

                          </RadioGroup>
                        </FormControl>
                      </Box>
                      </Grid>
                    </Grid>

                    <Grid container >
                      <Grid item xs={4} ><Typography sx={{ fontSize: 12, mt: 1 }} align="center">
                        Lector HDI
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
                            }} />} label="Si" />
                            <FormControlLabel value="no" control={<Radio sx={{
                              '& .MuiSvgIcon-root': {
                                fontSize: 12,
                              },
                            }} />} label="No" />

                          </RadioGroup>
                        </FormControl>
                      </Box>
                      </Grid>
                    </Grid>

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      InputProps={{
                        sx: { height: 25, ml: 1, mt: 1 }
                      }}
                      fullWidth
                    />

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      InputProps={{
                        sx: { height: 25, ml: 1, mt: 1 }
                      }}
                      fullWidth
                    />


                  </Grid>
                </Grid>
              </Box> : ''}
              {checked[1] ? <Box sx={{ mt: 2 }}>
                <Box sx={{ bgcolor: '#0d6efd', color: 'background.paper', mb: 2 }}>
                  <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} align="center">
                    Control de Acceso
                  </Typography>
                </Box>
                <Grid container >


                  <Grid item xs={4}>
                    <Typography sx={{ fontSize: 13, fontWeight: 'bold' }} align="left">
                      Cantidad Torniquetes
                    </Typography>
                    <Typography sx={{ fontSize: 13, fontWeight: 'bold', mt: 2 }} align="left">
                      Cantidad Puerta Imantada
                    </Typography>
                    <Typography sx={{ fontSize: 13, fontWeight: 'bold', mt: 2 }} align="left">
                      Cantidad Puerta Chapa El.
                    </Typography>
                    <Typography sx={{ fontSize: 13, fontWeight: 'bold', mt: 2.5 }} align="left">
                      Tarjeta acceso
                    </Typography>
                    <Typography sx={{ fontSize: 13, fontWeight: 'bold', mt: 3 }} align="left">
                      Servicio App acceso
                    </Typography>

                  </Grid>
                  <Grid item xs={7} >

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      placeholder='Ingrese Cantidad'
                      InputProps={{
                        sx: { height: 25, ml: 1, width: 155 }
                      }}
                      fullWidth
                    />

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      placeholder='Ingrese Cantidad'
                      InputProps={{
                        sx: { height: 25, ml: 1, mt: 1, width: 155 }
                      }}
                      fullWidth
                    />
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      placeholder='Ingrese Cantidad'
                      InputProps={{
                        sx: { height: 25, ml: 1, mt: 1, width: 155 }
                      }}
                      fullWidth
                    />
                    <Grid item xs={6} ><Box>
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel value="female" control={<Radio size="small" />} label="ID" sx={{ mt: 1 }} />
                          <FormControlLabel value="male" control={<Radio size="small" />} label="HID" sx={{ mt: 1, ml: -2 }} />

                        </RadioGroup>
                      </FormControl>
                    </Box>
                    </Grid>

                    <Grid item xs={5} ><Box>
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"

                        >
                          <FormControlLabel value="female" control={<Radio size="small" />} label="Si " sx={{ mt: 1 }} />
                          <FormControlLabel value="male" control={<Radio size="small" />} label="No" sx={{ mt: 1 }} />


                        </RadioGroup>
                      </FormControl>
                    </Box>
                    </Grid>
                  </Grid>
                </Grid>

              </Box> : ''}
              {checked[2] ? <Box sx={{ mt: 2 }}>
                <Box sx={{ bgcolor: '#0d6efd', color: 'background.paper', mb: 2 }}>
                  <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} align="center">
                    Control de Visitas
                  </Typography>
                </Box>
                <Grid container >
                  <Grid item xs={4}>
                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} align="left">
                      Estimación visitas
                    </Typography>
                  </Grid>
                  <Grid item xs={7
                  } >

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      placeholder='Ingrese Cantidad'
                      InputProps={{
                        sx: { height: 25, ml: 1, width: 155 }
                      }}
                      fullWidth
                    />
                  </Grid>
                </Grid>

              </Box> : ''}
              {checked[3] ? <Box sx={{ mt: 2 }}>
                <Box sx={{ bgcolor: '#0d6efd', color: 'background.paper', mb: 2 }}>
                  <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} align="center">
                    Embarcados 686
                  </Typography>
                </Box>
                <Grid container >

                  <Grid item xs={4}>
                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} align="left">
                      Dotación Embarcados
                    </Typography>

                  </Grid>
                  <Grid item xs={7
                  } >

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      placeholder='Ingrese Cantidad'
                      InputProps={{
                        sx: { height: 25, ml: 1, width: 155 }
                      }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Box> : ''}
              {checked[4] ? <Box sx={{ mt: 2 }}>
                <Box sx={{ bgcolor: '#0d6efd', color: 'background.paper', mb: 2 }}>
                  <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} align="center">
                    Servicio de comedor
                  </Typography>
                </Box>
                <Grid container >
                  <Grid item xs={4}>
                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} align="left">
                      Cantidad de Equipos
                    </Typography>

                  </Grid>
                  <Grid item xs={7
                  } >

                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      placeholder='Ingrese Cantidad'
                      InputProps={{
                        sx: { height: 25, ml: 1, width: 155 }
                      }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Box> : ''}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4} >
          < Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography sx={{ fontSize: 16, fontWeight: 'bold', backgroundColor: '#0d6efd', color: 'white' }}> Selección de Producto</Typography>
            <CardContent>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Servicio de Asistencia" />
                <FormControlLabel control={<Checkbox />} label="Módulos Adicionales" />
                <FormControlLabel control={<Checkbox />} label="Venta de Equipos(Hardware)" />
                <FormControlLabel control={<Checkbox />} label="Desarrollo(s)" />
                <FormControlLabel control={<Checkbox />} label="Capacitaciones" />
                <FormControlLabel control={<Checkbox />} label="Servicio de Comedor" />
                <FormControlLabel control={<Checkbox />} label="Servicio de Acceso" />
                <FormControlLabel control={<Checkbox />} label="Arriendo de Equipos/Chips" />
                <FormControlLabel control={<Checkbox />} label="Visita Técnica" />
              </FormGroup>
            </CardContent>
          </Card>

          < Card className="text-center" sx={{ boxShadow: 8, mt: 2 }}>
            <Typography sx={{ fontSize: 16, fontWeight: 'bold', backgroundColor: '#0d6efd', color: 'white' }}> Configuración Cobro de Asistencia</Typography>
            <CardContent>

              <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>

                <Grid item xs={3}>
                  <Typography sx={{ fontSize: 13, fontWeight: 'bold' }} align="left">
                    Periodicidad de Servicio

                  </Typography>

                  <Grid item xs={2} sx={{ mt: 1, ml: 1 }} align="left">
                    <Form>
                      <Form.Check
                        type="radio"
                        label="Mensual"
                        name="radioGroup"
                        id="option1"
                      />
                      <Form.Check
                        type="radio"
                        label="Semestral"
                        name="radioGroup"
                        id="option2"
                      />
                      <Form.Check
                        type="radio"
                        label="Anual"
                        name="radioGroup"
                        id="option3"
                      />
                    </Form>
                  </Grid>

                </Grid>

                <Grid item xs={3}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={20}
                    InputProps={{
                      sx: { height: 25, width: 46 }
                    }}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={3}>
                  <Typography sx={{ fontSize: 13, fontWeight: 'bold' }} align="left">
                    Plantilla Tabla de Cobro
                  </Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 'bold', mt: 2 }} align="left">
                    Moneda
                  </Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 'bold', mt: 2 }} align="left">
                    Modalidad de Cobro
                  </Typography>

                </Grid>

                <Grid item xs={3}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={21}
                    InputProps={{
                      sx: { height: 25, width: 46 }
                    }}
                    fullWidth
                  />
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={14}
                    InputProps={{
                      sx: { height: 25, width: 46, mt: 5.5 }
                    }}
                    fullWidth
                  />
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={19}
                    InputProps={{
                      sx: { height: 25, width: 46, mt: 2.5 }
                    }}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={5}>
                  <Typography sx={{ fontSize: 13, fontWeight: 'bold' }} align="left">
                    Potencial de Usuarios
                  </Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 'bold', mt: 2 }} align="left">
                    Usuarios que Marcan (Valor de Referencia)
                  </Typography>

                </Grid>
                <Grid item xs={7}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    InputProps={{
                      sx: { height: 25, width: 150 }
                    }}
                    fullWidth
                  />
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    InputProps={{
                      sx: { height: 25, width: 150, mt: 2.2 }
                    }}
                    fullWidth
                  />

                </Grid>
              </Grid>

            </CardContent>

          </Card>
        </Grid>

        <Grid item xs={4.7} >
          < Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography sx={{ fontSize: 16, fontWeight: 'bold', backgroundColor: '#0d6efd', color: 'white' }}>
              Resumen Cotizaciones
            </Typography>
            <CardContent>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>ID Folio</th>
                    <th>Nombre Cotización</th>
                    <th>Estado</th>
                    <th>Alerta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12/03/2023</td>
                    <td>001</td>
                    <td>Venta Equipos</td>
                    <td>Activo</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>13/03/2023</td>
                    <td>002</td>
                    <td>Arriendo Equipos</td>
                    <td>Inactivo</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>20/05/2023</td>
                    <td>003</td>
                    <td>Capacitaciones</td>
                    <td>Activo</td>
                    <td>Sí</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                    <td>*</td>
                  </tr>
                </tbody>
              </Table>
            </CardContent>
          </Card>

        </Grid>

      </Grid>
      <Box align="center-right">
        <Stack direction="row" spacing={2} sx={{ mt: 2, ml: 2 }}   >
          <Button variant="contained">Guardar</Button>

          <Button variant="contained" href="#contained-buttons" color="success">
            Guardar y Cerrar
          </Button>
        </Stack>
      </Box>

    </Box>

  );
};

export default PropuestaNuevo;
