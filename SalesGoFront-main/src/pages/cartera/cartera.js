import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useMemo}  from 'react';
import NavbarPage from '../../components/NavbarPage';
import ListGroup from 'react-bootstrap/ListGroup';
import Grid from '@mui/material/Grid'; // Grid version 1
import Select from "@mui/material/Select";
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
import MaterialReactTable from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import { useTheme, useMediaQuery } from "@mui/material";
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import VoluntList from '../../components/listaTratos';
import ListaUsuarios from '../../components/listaUsuarios';
import clienteAxios from '../config/clienteAxios';
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import 'dayjs/locale/es';
const Cartera= () => {
  const nav = useNavigate();
    const columns = useMemo(() => [
        {
          accessorKey: 'razon_social',
          header: 'Razon Social',
        },
        {
          accessorKey: 'rut',
          header: 'Rut',
        },
        {
          accessorKey: 'city',
          header: 'Vendedor Asignado',
        },
        {
          accessorKey: 'estado',
          header: 'Estado',
          Cell: ({ cell }) => (
            <Box 
            component="span"
            sx={{ 
              backgroundColor: cell.getValue() === "Activo" ? "green" : "firebrick",
              borderRadius: '0.25rem',
              color: '#fff',
              maxWidth: '12ch',
              p: '0.25rem',
            }}
            >
             {cell.getValue()}
            </Box>
          )
        },
      ],
      [],
      );
      const data1 = [
        {
          name:  'John',
          
          address: '261 ',
          city: 'East Daphne',
          state: 'Activo',
        },
        {
          name: 'Jane',
        
        
          address: '769 ',
          city: 'Columbus',
          state: 'Inactivo',
        },
        {
          name: 'Joe',
          
          address: '566 ',
          city: 'South Linda',
          state: 'Activo',
        },
        {
          name: 'Kevin',
        
          address: '722 ',
          city: 'Lincoln',
          state: 'Inactivo',
        },
        {
          name: 'Joshua',
        
          address: '32188 ',
          city: 'Omaha',
          state: 'Inactivo',
        },
      ];

      const styleVol = {
        position: 'inherit',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%' , 
        height: '90%',
        bgcolor: 'white',
        border: '2px solid #000',
        borderRadius: 4,
        boxShadow: 1,
        p: 4,
        overflowY: 'auto', // Enable vertical scrolling
        scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    width: '0.4em',
  },
  '&::-webkit-scrollbar-track': {
    background: "#f1f1f1",
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555'
  }
      };
      const datos = [
        {
          id: '1',
          firstName: 'Dylan',
          middleName: 'Sprouse',
          lastName: 'Murray',
          address: '261 Erdman Ford',
          city: 'East Daphne',
          state: 'Kentucky',
          country: 'United States',
        },
        {
          id: '2',
          firstName: 'Raquel',
          middleName: 'Hakeem',
          lastName: 'Kohler',
          address: '769 Dominic Grove',
          city: 'Vancouver',
          state: 'British Columbia',
          country: 'Canada',
        },
        {
          id: '3',
          firstName: 'Ervin',
          middleName: 'Kris',
          lastName: 'Reinger',
          address: '566 Brakus Inlet',
          city: 'South Linda',
          state: 'West Virginia',
          country: 'United States',
        },
        {
          id: '4',
          firstName: 'Brittany',
          middleName: 'Kathryn',
          lastName: 'McCullough',
          address: '722 Emie Stream',
          city: 'Lincoln',
          state: 'Nebraska',
          country: 'United States',
        },
        {
          id: '5',
          firstName: 'Branson',
          middleName: 'John',
          lastName: 'Frami',
          address: '32188 Larkin Turnpike',
          city: 'Charleston',
          state: 'South Carolina',
          country: 'United States',
        },
        {
          id: '6',
          firstName: 'Branson',
          middleName: 'John',
          lastName: 'Frami',
          address: '32188 Larkin Turnpike',
          city: 'Charleston',
          state: 'South Carolina',
          country: 'United States',
        },
        {
          id: '7',
          firstName: 'Branson',
          middleName: 'John',
          lastName: 'Frami',
          address: '32188 Larkin Turnpike',
          city: 'Charleston',
          state: 'South Carolina',
          country: 'United States',
        },
        {
          id: '8',
          firstName: 'Branson',
          middleName: 'John',
          lastName: 'Frami',
          address: '32188 Larkin Turnpike',
          city: 'Charleston',
          state: 'South Carolina',
          country: 'United States',
        },
        {
          id: '9',
          firstName: 'Branson',
          middleName: 'John',
          lastName: 'Frami',
          address: '32188 Larkin Turnpike',
          city: 'Charleston',
          state: 'South Carolina',
          country: 'United States',
        },
        {
          id: '10',
          firstName: 'Branson',
          middleName: 'John',
          lastName: 'Frami',
          address: '32188 Larkin Turnpike',
          city: 'Charleston',
          state: 'South Carolina',
          country: 'United States',
        },
        {
          id: '11',
          firstName: 'Branson',
          middleName: 'John',
          lastName: 'Frami',
          address: '32188 Larkin Turnpike',
          city: 'Charleston',
          state: 'South Carolina',
          country: 'United States',
        },
      ];
      const [tabla, setTabla] = React.useState(true);
      const [openModal, setOpenModal] = React.useState(false);
      const [tipoModal, setTipoModal] = React.useState(0);
      const handleOpenModal =  (row,tipo) => {
        setTipoModal(tipo);
  
      
         setOpenModal(true);}

       const handleCloseModal = () => setOpenModal(false);
    //DatePicker Value
  const [valueDP, setValueDP] = React.useState(null);
  const [newValueHE, setValueHE] = React.useState(null);
     const [value, setValue] = React.useState(0);
   const [data2, setData2]= React.useState([]);
  const [ejecutar, setEjecutar] = React.useState(true);
     const [activeStep, setActiveStep] = React.useState(0);
     const [skipped, setSkipped] = React.useState(new Set());
     const proyectos = async ()=> {

      try {
        
        const { data1 } = await clienteAxios.get('/clientes')
        .then(function (response) {
         // setAlerta({})
         console.log(response.data)
         setData2(response.data);
         setEjecutar(false)
        
         return
        })
        .catch(function (error) {
          console.log('error')
         return
        });   
    } catch (error) {
        return
    }
    
    };
    if(ejecutar){
      proyectos();
    
    }
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
   //Routes
   const [modalCrear, setModalCrear] = React.useState(false);
   const [modalDependiente, setDependiente] = React.useState(false);
   const handleLinkClick = (event, message) => {
    if (message === "convocatorias") {
      setModalCrear(true);
      setDependiente(false)
    }else{
      setDependiente(true)
      setModalCrear(true);
    }
  };
  const handleCloseCliente = () => setModalCrear(false);
  const modalStyle = {
    position: 'absolute',
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)',
    width: '90%', // Adjust the width as needed
    height: '90vh', // Use viewport height to make sure it fits within the screen
    bgcolor: '#333333',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto', // Enable vertical scrolling
  };

//////////////
const [holding, setHolding] = React.useState('');
const handleHolding = (event) => {
  setHolding(event.target.value);
};

const [matriz, setMatriz] = React.useState('');
const handleMatriz= (event) => {
  setMatriz(event.target.value);
};
const [nombreMatriz, setNombreMatriz,] = React.useState('');
const [perteneceHolding, setPerteneceHolding] = React.useState("");
const handleChangePertenece = (event) => {

  setPerteneceHolding(event.target.value);
};

const datPrueba = [{
  id:1,
  nombre:"Holding 1"
},{
  id:2,
  nombre:"Holding 2"
},{
  id:3,
  nombre:"Holding 3"
}]

///////////////////////////////
const [nombre, setNombre] = React.useState('');
const handleNombre = (event) => {
  setNombre(event.target.value);
};
const [email, setEmail] = React.useState('');
const handleEmail = (event) => {
  setEmail(event.target.value);
};
const [rut, setRut] = React.useState('');
const handleRut = (event) => {
  setRut(event.target.value);
};
const [telefono, setTelefono] = React.useState('');
const handleTelefono = (event) => {
  setTelefono(event.target.value);
};
const [actividad, setActividad] = React.useState('');
const handleActividad = (event) => {
  setActividad(event.target.value);
};
const [pais, setPais] = React.useState('');
const handlePais = (event) => {
  setPais(event.target.value);
};
const [region, setRegion] = React.useState('');
const handleRegion = (event) => {
  setRegion(event.target.value);
};
const [ciudad, setCiudad] = React.useState('');
const handleCiudad = (event) => {
  setCiudad(event.target.value);
};
const [direccion, setDireccion] = React.useState('');
const handleDireccion = (event) => {
  setDireccion(event.target.value);
};
const [tipoEmpresaGeo, setTipoEmpresaGeo] = React.useState('');
const handleTipoEmpresaGeo = (event) => {
  setTipoEmpresaGeo(event.target.value);
};
const [partner, setPartner] = React.useState('');
const handlePartner = (event) => {
  setPartner(event.target.value);
};
const [rubro, setRubro] = React.useState('');
const handleRubro = (event) => {
  setRubro(event.target.value);
};
const [plazoPago, setPlazoPago] = React.useState('');
const handlePlazoPago= (event) => {
  setPlazoPago(event.target.value);
};
const [contactoPago, setContactoPago] = React.useState('');
const handleContactoPago = (event) => {
  setContactoPago(event.target.value);
};
const [emailPago, setEmailPago] = React.useState('');
const handleEmailPago = (event) => {
  setEmailPago(event.target.value);
};
const [direccionPago, setDireccionPago] = React.useState('');
const handleDireccionPago = (event) => {
  setDireccionPago(event.target.value);
};
const [lineaCredito, setLineaCredito] = React.useState('');
const handleLineaCredito = (event) => {
  setLineaCredito(event.target.value);
};
const [nombreRepresentante, setNombreRepresentante] = React.useState('');
const handleNombreRepresentante = (event) => {
  setNombreRepresentante(event.target.value);
};
const [emailRepresentante, setEmailRepresentante] = React.useState('');
const handleEmailRepresentante = (event) => {
  setEmailRepresentante(event.target.value);
};
const [rutRepresentante, setRutRepresentante] = React.useState('');
const handleRutRepresentante = (event) => {
  setRutRepresentante(event.target.value);
};
const [contactoFacturacion, setContactoFacturacion] = React.useState('');
const handleContactoFacturacion= (event) => {
  setContactoFacturacion(event.target.value);
};
const [emailFacturacion, setEmailFacturacion] = React.useState('');
const handleEmailFacturacion= (event) => {
  setEmailFacturacion(event.target.value);
};
const [rutFacturacion, setRutFacturacion] = React.useState('');
const handleRutFacturacion= (event) => {
  setRutFacturacion(event.target.value);
};
const [contactoCobranza, setContactoCobranza] = React.useState('');
const handleContactoCobranza = (event) => {
  setContactoCobranza(event.target.value);
};
const [emailCobranza, setEmailCobranza] = React.useState('');
const handleEmailCobranza = (event) => {
  setEmailCobranza(event.target.value);
};
const [rutCobranza, setRutCobranza] = React.useState('');
const handleRutCobranza = (event) => {
  setRutCobranza(event.target.value);
};
const [contactoOperacion, setContactoOperacion] = React.useState('');
const handleContactoOperacion= (event) => {
  setContactoOperacion(event.target.value);
};
const [emailOperacion, setEmailOperacion] = React.useState('');
const handleEmailOperacion = (event) => {
  setEmailOperacion(event.target.value);
};
const [rutOperacion, setRutOperacion] = React.useState('');
const handleRutOperacion = (event) => {
  setRutOperacion(event.target.value);
};
const [otroContacto, setOtroContacto] = React.useState('');
const handleOtroContacto= (event) => {
  setOtroContacto(event.target.value);
};
const [otroEmail, setOtroEmail] = React.useState('');
const handleOtroEmail = (event) => {
  setOtroEmail(event.target.value);
};
const [otroRut, setOtroRut] = React.useState('');
const handleOtroRut = (event) => {
  setOtroRut(event.target.value);
};
const [estado, setEstado] = React.useState('');
const handleEstado = (event) => {
  setEstado(event.target.value);
};
const [tipoCliente, setTipocliente] = React.useState('');
const handleTipoCliente = (event) => {
  setTipocliente(event.target.value);
};
const [tipoContrato, setTipoContrato] = React.useState('');
const handleTipoContrato = (event) => {
  setTipoContrato(event.target.value);
};
const handleSubmit = async ()=> {



  try {
    
      const { data1 } = await clienteAxios.post('/crearclientes', {

         //idConvocatoria: params.idConvocatoria,
         nombre	:nombre,	
         email	:email,	
         rut		:rut,
         telefono	:telefono,	
         actividad	:actividad,	
         pais		:pais,
         region		:region,
          ciudad		:ciudad,
         direccion		:direccion,
         tipoEmpresaGeo		:tipoEmpresaGeo,
         partner		:partner,
         rubro		:rubro,
         holding		:holding,
         matriz		:matriz,
         nombreFantasia		:nombreMatriz,
         holdingId		:perteneceHolding,
         plazoPago		:plazoPago,
         contactoPago		:contactoPago,
         emailPago		:emailPago,
         direccionPago		:direccionPago,
         lineaCredito		:lineaCredito,
         nombreRepresentante		:nombreRepresentante,
         emailRepresentante		:emailRepresentante,
         rutRepresentante		:rutRepresentante,
         nombreFacturacion		:contactoFacturacion,
         emailFacturacion		:emailFacturacion,
         rutFacturacion		:rutFacturacion,
         nombreCobranza		:contactoCobranza,
         emailCobranza	:emailCobranza,
         rutCobranza		:rutCobranza,
         nombreOperacion		:contactoOperacion,
         emailOperacion		:emailOperacion,
         rutOperacion	:rutOperacion,
         nombreOtro		:otroContacto,
         emailOtro	:otroEmail,
         rutOtro:otroRut,
         estado	:estado,
       tipoCliente	:tipoCliente,
       tipoContrato:tipoContrato



      })
     .then(function (response) {
           //console.log(response.data.idToken)
          //localStorage.setItem('token',JSON.stringify(response.data) )
        //setAuth(data)
           //event.target.reset();
       
      })
      .catch(function (error) {
// //        event.preventDefault();
      
    
        console.log(error)
// //       // document.getElementById(":r7:").value='';

      
     
       });
  
    
      console.log(data1)
    
  } catch (error) {
    
   }

 

};
   return (
 <body>


     <Box 

    
     >
     <NavbarPage/> 
     <Box  >
     <Breadcrumbs aria-label="breadcrumb" sx={ {ml:2}} >
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/inicio"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Inicio
              </Link>
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                <CasesRoundedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Cartera
              </Typography>
            </Breadcrumbs>
     </Box>
 <Box  sx={ {bgcolor:"#f0f1f2", minheight:"100vh"}}  height='100vh' >
 


            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 ,ml:3,color: "#4455f2"}}>
          Gestion de Cartera
            </Typography>
 
            <Button
                    variant="contained"
                    sx={{ bgcolor: "#5e76ff", color: "white",mb:2,ml:3 }}
                    size="small"
                        onClick={(event) =>
                          handleLinkClick(event, "convocatorias")
                        }
                  
                      >
                        <MoreTimeIcon /> Crear Cliente
                      </Button>
   <Card className="text-center" sx={{ boxShadow:8, ml:3,mr:3 }}>
   <CardContent>
   <Box
                      container
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                      }}
                      backgroundColor='#99c2c9'
                    >
 
                      </Box>
 <MaterialReactTable
      columns={columns}
      data={data1}
      localization={MRT_Localization_ES}
      enableRowActions 
      positionActionsColumn="last" 
      renderRowActionMenuItems={({ row }) => [
        <MenuItem > <EditIcon sx={{ mr:1 }} /> <b>Editar Cliente</b> </MenuItem>,
        <MenuItem  onClick={event => {handleOpenModal(row,1)}} > <EditIcon sx={{ mr:1 }} /> <b>Asignar Vendedor</b> </MenuItem>,
        <MenuItem  onClick={event => {handleLinkClick(row,"dependiente")}} > <EditIcon sx={{ mr:1 }} /> <b>Crear Dependientes</b> </MenuItem>,
        <MenuItem  onClick={event => {handleOpenModal(row,2)}} > <LeaderboardRoundedIcon sx={{ mr:1 }} /> <b>Ver Tratos</b> </MenuItem>,
     
      ]
    }
    muiTopToolbarProps={{ 
      sx: {
        backgroundColor: '#99c2c9',
      }, 
     }}
    muiTableHeadCellProps={{
      align: 'center',
      sx: {
        backgroundColor: '#99c2c9',
      },
    }}
    muiBottomToolbarProps={{ 
      sx: {
        backgroundColor: '#99c2c9',
      },
     }}
  
    muiTableBodyCellProps={{
      align: 'center'
    }}
    muiTablePaperProps={{
      elevation: 0, 
      sx: {
        backgroundColor:'#99c2c9'
      }
    }}
    initialState={{
      pagination: {
        pageSize: 5,
        pageIndex: 0
      }
    }} muiTablePaginationProps={{
      rowsPerPageOptions: [5, 10, 20, 30, 50, 100],
      showFirstButton: false,
      showLastButton: false,
      SelectProps: {
        native: true
      },
      labelRowsPerPage: 'Número de filas visibles'
    }}
    
  
    />
   </CardContent>
   </Card>
  <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{ backdrop: { style: { opacity: 0.2 } } }}
    >
      <Box sx={styleVol}>
      {tabla ? tipoModal ===1?<ListaUsuarios datos={datos} />:<VoluntList datos={datos} /> : '' } 
          <Divider sx={{ mt:2 }} />
          <Grid container sx={{ mt:2 }} spacing={1} justifyContent="flex-end" >
             <Grid item>
               <Button variant='contained' color='error' onClick={handleCloseModal}> Salir </Button>
             </Grid>
          </Grid>
      </Box>
   </Modal> 
   <Modal
      open={modalCrear}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{ backdrop: { style: { opacity: 0.2 } } }}
    >
      <Box sx={styleVol}>
        <Box>
       
        
          <Typography sx={{ bgcolor: "#5e76ff", color: "white" , fontSize:18}} align="center">
{modalDependiente?"Ingresar Dependiente":"Ingresar Cliente"}
          </Typography>
        </Box>
      <Divider sx={{ mt: 2, mb: 3 }}>
                    <Chip label="Datos Cliente" />
                  </Divider>
                  <Grid container spacing={2} mt={-3} >
                    <Grid item xs={12} sm={4}>
                    <TextField
                        label="Nombre de Cliente"
                        fullWidth
                        required
                      
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={nombre}
                        onChange={handleNombre}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                       
                        label="Email"
                        fullWidth
                        required
              
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={email}
                        onChange={handleEmail}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                       
                        label="RUT"
                        fullWidth
                        required
                      
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={rut}
                        onChange={handleRut}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        label="Teléfono"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={telefono}
                        onChange={handleTelefono}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                    
                        label="Actividad"
                        fullWidth
                        required
                      
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={actividad}
                        onChange={handleActividad}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                       
                        label="País"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={pais}
                        onChange={handlePais}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                      
                        label="Región"
                        fullWidth
                        required
                   
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={region}
                        onChange={handleRegion}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                      
                        label="Ciudad"
                        fullWidth
                        required
                      
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={ciudad}
                        onChange={handleCiudad}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                       
                        label="Dirección"
                        fullWidth
                        required
                     
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={direccion}
                        onChange={handleDireccion}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                       
                        label="Tipo Empresa Gep"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={tipoEmpresaGeo}
                        onChange={handleTipoEmpresaGeo}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                        
                        label="Partner"
                        fullWidth
                        required
                       
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={partner}
                        onChange={handlePartner}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                       
                        label="Rubro"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={rubro}
                        onChange={handleRubro}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}
                    hidden={modalDependiente}
                    >
                              <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">
                                  Es Holding?
                                </FormLabel>
                                <RadioGroup
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  name="radio-buttons-group"
                                  row
                                  value={holding}
                                  onChange={handleHolding}
                                >
                                  <FormControlLabel
                                    value="Si"
                                    control={<Radio />}
                                    label="Si"
                                  />
                                  <FormControlLabel
                                    value="No"
                                    control={<Radio />}
                                    label="No"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3} 
                            hidden={modalDependiente}
                            >
                              <FormControl
                              hidden={holding != "Si"}
                              >
                                <FormLabel id="demo-radio-buttons-group-label">
                                  Es Matriz?
                                </FormLabel>
                                <RadioGroup
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  name="radio-buttons-group"
                                  row
                                  value={matriz}
                                  onChange={handleMatriz}
                                >
                                  <FormControlLabel
                                    value="Si"
                                    control={<Radio />}
                                    label="Si"
                                  />
                                  <FormControlLabel
                                    value="No"
                                    control={<Radio />}
                                    label="No"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}
                            hidden={modalDependiente}>
                            
                              <TextField
                                label="Nombre Fantasia"
                                hidden={matriz != "Si"}
                                fullWidth
                                required
                                value={nombreMatriz}
                                onChange={(event) =>
                                  setNombreMatriz(event.target.value)
                                }
                              />
                        
                            <FormControl 
                            hidden={matriz != "No"}
                            fullWidth 
                            >
                    <InputLabel id="ocupación-label"> Ocupación </InputLabel>

                    <Select
                      
                      name="Seleccione Holding"
                      value={perteneceHolding}
                      label="Ocupación"
                      onChange={handleChange}
                      sx={{ bgcolor: "white" }}
                    >
                      <MenuItem value="">
                        <em>Seleccione Holding</em>
                      </MenuItem>

                      {/* {data.map(dato => {
                return <ListSubheader> {dato.nombre} </ListSubheader>
                 } )} */}

                      {datPrueba.map((dat, index) => (
                        <MenuItem value={dat.id}>
                          {dat.nombre}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                            </Grid>
                  </Grid>
                  <Divider sx={{ mt: 2, mb: 3 }}>
                    <Chip label="Datos de Crédito y Cobranza" />
                    
                  </Divider>
                  <Grid container spacing={2} mt={-3} >
                    <Grid item xs={12} sm={4}>
                    <TextField
                       
                        label="Plazo de Pago"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={plazoPago}
                        onChange={handlePlazoPago}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                     
                        label="Contacto Pago"
                        fullWidth
                        required
                       
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={contactoPago}
                        onChange={handleContactoPago}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                      
                        label="Email Pago"
                        fullWidth
                        required
                       
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={emailPago}
                        onChange={handleEmailPago}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                       
                        label="Dirección Pago"
                        fullWidth
                        required
                       
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={direccionPago}
                        onChange={handleDireccionPago}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                   
                        label="Línea de crédito"
                        fullWidth
                        required
                      
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={lineaCredito}
                        onChange={handleLineaCredito}
                      />
                    </Grid>
                    </Grid>
                  <Divider sx={{ mt: 2, mb: 3 }}>
                    <Chip label="Datos Representante" />
                  </Divider>
                  <Grid container spacing={2} mt={-3}>
                    <Grid item xs={12} sm={4}>
                    <TextField
                     
                        label="Nombre Representante"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={nombreRepresentante}
                        onChange={handleNombreRepresentante}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                       
                        label="Email"
                        fullWidth
                        required
                       
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={emailRepresentante}
                        onChange={handleEmailRepresentante}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                  
                        label="Rut"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={rutRepresentante}
                        onChange={handleRutRepresentante}
                      />
                    </Grid>
                    </Grid>
                  <Divider sx={{ mt: 2, mb: 3 }}>
                    <Chip label="Datos de Contacto" />
                  </Divider>
                  <Grid container spacing={2} mt={-3}>
                    <Grid item xs={12} sm={4}>
                    <TextField
                      id="mediosVerif"
                        label="Contacto de Facturacion"
                        fullWidth
                        required
                       
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={contactoFacturacion}
                        onChange={handleContactoFacturacion}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                       
                        label="Email Facturacion"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={emailFacturacion}
                        onChange={handleEmailFacturacion}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                        
                        label="Rut Facturacion"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={rutFacturacion}
                        onChange={handleRutFacturacion}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                     
                        label="Contacto de Cobranza"
                        fullWidth
                        required
                     
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={contactoCobranza}
                        onChange={handleContactoCobranza}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                      
                        label="Email Cobranza"
                        fullWidth
                        required
                       
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={emailCobranza}
                        onChange={handleEmailCobranza}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                        
                        label="Rut Cobranza"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={rutCobranza}
                        onChange={handleRutCobranza}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                      
                        label="Contacto de Operacion"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={contactoOperacion}
                        onChange={handleContactoOperacion}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                        
                        label="Email Operacion"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={emailOperacion}
                        onChange={handleEmailOperacion}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                        
                        label="Rut Operacion"
                        fullWidth
                        required
                     
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={rutOperacion}
                        onChange={handleRutOperacion}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                        
                        label="Otro Contacto"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={otroContacto}
                        onChange={handleOtroContacto}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                        
                        label="Otro Email"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={otroEmail}
                        onChange={handleOtroEmail}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                     
                        label="Otro Rut"
                        fullWidth
                        required
                      
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={otroRut}
                        onChange={handleOtroRut}
                      />
                    </Grid>
                    </Grid>
                  <Divider sx={{ mt: 2, mb: 3 }}>
                    <Chip label="Configuración Cliente" />
                  </Divider>
                  <Grid container spacing={2} mt={-3}>
                    <Grid item xs={12} sm={4}>
                    <TextField
                       
                        label="Estado de Cliente en el Sistema"
                        fullWidth
                        required
                        
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={estado}
                        onChange={handleEstado}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                        
                        label="Tipo de Cliente"
                        fullWidth
                        required
                     
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={tipoCliente}
                        onChange={handleTipoCliente}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                    
                        label="Tipo de contrato"
                        fullWidth
                        required
                       
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        value={tipoContrato}
                        onChange={handleTipoContrato}
                      />
                    </Grid>
                    </Grid>
          <Divider sx={{ mt:2 }} />
          <Grid container sx={{ mt:2 }} spacing={1} justifyContent="flex-end" >
            
             <Grid item>
               <Button variant='contained' color='error' onClick={handleCloseCliente}> Salir </Button>
             </Grid>
             <Grid item>
             <Button variant='contained'    sx={{ bgcolor: "#5e76ff", color: "white" }} onClick={handleSubmit}> Guardar </Button>
             </Grid>
          </Grid>
      </Box>
   </Modal> 
     </Box>
     </Box>
     </body>
   );
 };
 
 export default Cartera;