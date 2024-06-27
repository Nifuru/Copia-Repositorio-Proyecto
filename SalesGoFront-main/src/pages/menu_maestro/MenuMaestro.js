import React from 'react';
import NavbarPage from '../../components/NavbarPage';
import { NavLink } from "react-router-dom";
import '../../styles/App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Grid from "@mui/material/Grid"; // Grid version 1
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Link from '@mui/material/Link';
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import StepButton from "@mui/material/StepButton";
import TextField from "@mui/material/TextField";
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
const MenuMaestro = () => {
  return (
    <div className="menu-maestro" >
    

    <NavbarPage/> 
    <Box sx={{ mb:2}} >
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
            Menu Maestro
              </Typography>
            </Breadcrumbs>
     </Box>
    <Box
 sx={ {bgcolor:"#f0f1f2", minheight:"100vh"}}  height='100vh'
    
    >
    <Grid container spacing={2} columns={13}
  
       ml="50px"
    >
    <Grid item xs={12} sm={3}>
    <Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                mt:2
                // backgroundColor: "#619bf2",
              }}
            >
               <FeaturedPlayListIcon  sx={{ mr: 0.5 }} fontSize="inherit" />
             Categorizaciones
            </Typography>
            <CardContent>
              <Grid container>
                <Grid item xs={4}>
                <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Categorizaciones/TipoCliente"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Tipo Cliente
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Categorizaciones/TipoEmpresaCrud"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Tipo Empresa
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Categorizaciones/SectorCrud"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Sector
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Categorizaciones/IndustriaCrud"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Industria
              </Link>
              
              
                
                </Grid>
             
              </Grid>
            </CardContent>
          </Card>
    </Grid>
    <Grid item xs={12} sm={3}>
    <Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                mt:2
                // backgroundColor: "#619bf2",
              }}
            >
              <ShoppingBasketIcon sx={{ mr: 0.5 }} fontSize="inherit" />
             Comercial
            </Typography>
            <CardContent>
              <Grid container>
                <Grid item xs={6}>
    
       <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/PosibleClienteCrud"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Fuente de posible cliente
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/MarcajeCrud"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Metodo de marcaje
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/RangoEmpleadosCrud"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Rango de empleados
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/ReqCliMiniCrud"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Requisitos Clientes Min
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/Equipos"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
             Equipos
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/TipoCoordinacion"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Tipo Coordinación
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/ProductoSolucion"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Producto/Solución
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/Modalidad"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Modalidad de Cobro
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/Periocidad"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Periodicidad del Servicio
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/Plantillas"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Plantillas Tabla de Cobro
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/Estado"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Estado
              </Link>
           
                </Grid>
                <Grid item xs={6}>
                <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/FichaTecnica"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Ficha Técnica
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/Encuestas"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Encuestas
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/TipoEmpresaGeo"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Tipo empresa Geo
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/Anulacion"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Anulación
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/TipoCapacitacion"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Tipo de Capacitación
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/CostoCapacitacion"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Costo de Capacitación
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/EstadoCapacitacion"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Estado Capacitación 
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/TipoSoporte"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Tipo de Soporte
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/Partner"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Partner
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/Activacion"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Activación App
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Comercial/TipoPlanificacion"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Tipo planificación
              </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
    </Grid>
    <Grid item xs={12} sm={3}>
    <Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                mt:2
                // backgroundColor: "#619bf2",
              }}
            >
              <SouthAmericaIcon  sx={{ mr: 0.5 }} fontSize="inherit" />
             Territorio
            </Typography>
            <CardContent>
              <Grid container>
                <Grid item xs={4}>
                <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/Territorio/PaisCrud"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
             Pais
              </Link>
                </Grid>
             
              </Grid>
            </CardContent>
          </Card>
    </Grid>
    <Grid item xs={12} sm={3}>
    <Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                mt:2
                // backgroundColor: "#619bf2",
              }}
            >
              <MonetizationOnIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Monedas y Unidades
            </Typography>
            <CardContent>
              <Grid container>
                <Grid item xs={4}>
                <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/MonedasyUnidades/MonedasCrud"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
             Moneda Trato
              </Link>
                </Grid>
            
              </Grid>
            </CardContent>
          </Card>
    </Grid>
    <Grid item xs={12} sm={3}>
    <Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                mt:2
                // backgroundColor: "#619bf2",
              }}
            >
              <BrowseGalleryIcon  sx={{ mr: 0.5 }} fontSize="inherit" />
         Estados y procesos
            </Typography>
            <CardContent>
              <Grid container>
                <Grid item xs={4}>
                <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/MenuMaestro/EstadosyProcesos/TratoCrud"
                // onClick={(event) => handleLinkHome(event, "home")}
              >
              
              Estado Trato
              </Link>
                </Grid>
            
              </Grid>
            </CardContent>
          </Card>
    </Grid>
    </Grid>
    </Box>
   

   

    
    </div>
  );
}

export default MenuMaestro;