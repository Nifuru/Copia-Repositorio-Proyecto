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


function Estado() {


  const [tipoclienteList, setTipocliente] = useState([]);
  const [id_tipocliente, setId_tipocliente] = useState();
  const [nombre_tipocliente, setNombreTipocliente] = useState("");
  const [editarT, setEditarTipocliente] = useState(false);


  const columns = useMemo(() => [
    {
      accessorKey: 'razon_social',
      header: 'Nombre',
    },
    {
      accessorKey: 'rut',
      header: 'Descripcion',
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
    height: '40%',
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

   //Routes
 const [modalCrear, setModalCrear] = React.useState(false);
 const handleLinkClick = (event, message) => {
  if (message === "convocatorias") {
    setModalCrear(true);
  }
};
const handleCloseModal = () => setModalCrear(false);


  return (
<Box>
      <NavbarPage/> 
      <Box>
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
                Estado
              </Typography>
            </Breadcrumbs>
      </Box>
      <Box sx={ {bgcolor:"#f0f1f2", minheight:"100vh"}}  height='100vh'>
   
            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 ,ml:3,color: "#4455f2"}}>
            Estado
            </Typography>
            <Button
                        variant="contained"
                        sx={{ bgcolor: "#5e76ff", color: "white",mb:2,ml:3 }}
                        size="small"
                         onClick={(event) =>
                           handleLinkClick(event, "convocatorias")
                        }
                  
                      >
                        <MoreTimeIcon /> Crear 
                      </Button>
      <Card className="text-center" sx={{ boxShadow:8, ml:3,mr:3,mt:3 }}>
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
        <MenuItem > <EditIcon sx={{ mr:1 }} /> <b>Eliminar Cliente</b> </MenuItem>,
        <MenuItem   > <EditIcon sx={{ mr:1 }} /> <b>Editar Cliente</b> </MenuItem>,
       
     
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
      </Box>
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
Crear Estado
          </Typography>
        </Box>
      <Divider sx={{ mt: 2, mb: 3 }}>
                    <Chip label="Datos" />
                  </Divider>
                  <Grid container spacing={2} mt={-3} >
                 
                    <Grid item xs={12} sm={6}>
                    <TextField
                        id="mediosVerif"
                        label="Estado"
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
                        label="Descripcion"
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
               <Button variant='contained' color='error' onClick={handleCloseModal}> Salir </Button>
             </Grid>
             <Grid item>
               <Button variant='contained'    sx={{ bgcolor: "#5e76ff", color: "white" }} onClick={handleCloseModal}> Guardar </Button>
             </Grid>
          </Grid>
      </Box>
   </Modal> 
      </Box>
  );
}

export default Estado;
