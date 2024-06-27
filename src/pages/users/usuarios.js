import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useMemo}  from 'react';
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
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import ClienteLista from '../../components/listaClientes';
import VoluntList from '../../components/listaTratos';
import clienteAxios from '../config/clienteAxios';
function Usuarios() {
  const columns = useMemo(() => [
    {
      accessorKey: 'name',
      header: 'Nombre',
    },
    {
      accessorKey: 'address',
      header: 'Rut',
    },
    {
      accessorKey: 'state',
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
    height: '50%',
    bgcolor: '#e3e2cf',
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
 const handleLinkClick = (event, message) => {
  if (message === "convocatorias") {
    setModalCrear(true);
  }
};
const handleCloseCliente = () => setModalCrear(false);
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

<Box >
<Breadcrumbs aria-label="breadcrumb" sx={ {ml: 2}} >
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
           Usuarios
              </Typography>
            </Breadcrumbs>
</Box>
<Box  sx={ {bgcolor:"#f0f1f2", minheight:"100vh"}}  height='100vh' >
<Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 ,ml:3,color: "#4455f2"}}>
          Gestion de Usuarios
            </Typography>
 
            <Button
                    variant="contained"
                    sx={{ bgcolor: "#5e76ff", color: "white",mb:2,ml:3 }}
                    size="small"
                        onClick={(event) =>
                          handleLinkClick(event, "convocatorias")
                        }
                  
                      >
                        <MoreTimeIcon /> Crear Usuarios
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
    <MenuItem > <EditIcon sx={{ mr:1 }} /> <b>Activar</b> </MenuItem>,
    <MenuItem onClick={event => {handleOpenModal(row,1)}}> <EditIcon sx={{ mr:1 }} /> <b>Asignar Cliente</b> </MenuItem>,
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
     {tabla ? tipoModal ===1?<ClienteLista datos={datos} />:<VoluntList datos={datos} /> : '' } 
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
          <Typography sx={{ bgcolor: "teal", color: "white" , fontSize:18}} align="center">
Ingresar Usuario
          </Typography>
        </Box>
      <Divider sx={{ mt: 2, mb: 3 }}>
                    <Chip label="Datos Usuario" />
                  </Divider>
                  <Grid container spacing={2} mt={-3} >
                 
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="mediosVerif"
                        label="Nombre del Empleado"
                        fullWidth
                        required
                        name="Correo"
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        // value={val.mediosVerif}
                        // onChange={(e) => handleChangeInput(e, i)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="mediosVerif"
                        label="Rut"
                        fullWidth
                        required
                        name="Correo"
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        // value={val.mediosVerif}
                        // onChange={(e) => handleChangeInput(e, i)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="mediosVerif"
                        label="Telefono"
                        fullWidth
                        required
                        name="Correo"
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        // value={val.mediosVerif}
                        // onChange={(e) => handleChangeInput(e, i)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="mediosVerif"
                        label="Email"
                        fullWidth
                        required
                        name="Correo"
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        // value={val.mediosVerif}
                        // onChange={(e) => handleChangeInput(e, i)}
                      />
                    </Grid>
                  
                  </Grid>
              
                  <Divider sx={{ mt: 2, mb: 3 }}>
                    <Chip label="Asignacion de Estado" />
                  </Divider>
                  <Grid container spacing={2} mt={-3}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="mediosVerif"
                        label="Seleccionar Equipo"
                        fullWidth
                        required
                        name="nombre"
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        // value={val.mediosVerif}
                        // onChange={(e) => handleChangeInput(e, i)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="mediosVerif"
                        label="Seleccione Rol"
                        fullWidth
                        required
                        name="Correo"
                        InputProps={{
                          sx: { height: 40, ml: 1, mt: 1 },
                        }}
                        // value={val.mediosVerif}
                        // onChange={(e) => handleChangeInput(e, i)}
                      />
                    </Grid>
                
                    </Grid>

          <Divider sx={{ mt:2 }} />
          <Grid container sx={{ mt:2 }} spacing={1} justifyContent="flex-end" >
            
             <Grid item>
               <Button variant='contained' color='error' onClick={handleCloseCliente}> Salir </Button>
             </Grid>
          </Grid>
      </Box>
   </Modal>
   </Box> 
 </Box>

);
  }
  
  export default Usuarios;