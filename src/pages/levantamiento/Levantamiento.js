import React, { useState } from "react";
import NavbarPage from "../../components/NavbarPage";
import "../../styles/Home.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Grid from "@mui/material/Grid"; // Grid version 1
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import StepButton from "@mui/material/StepButton";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { LocalizationProvider } from "@mui/x-date-pickers";
//import { esES } from '@mui/x-date-pickers/locales';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import Stack from "@mui/material/Stack";
import "dayjs/locale/es";
const Tab1Content = () => (
  <div class="mb-3 row">
    <label for="" class="col-sm-6 col-form-label">
      <strong>Nombre</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Fono</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Correo</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Dirección</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-7 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Ciudad</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Cargo</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>
  </div>
);

const Tab2Content = () => (
  <div class="mb-3 row">
    <label for="" class="col-sm-4 col-form-label">
      <strong>Nombre</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-7 col-form-label">
        Carlos Vilches
      </label>
    </div>

    <label for="" class="col-sm-4 col-form-label">
      <strong>Fono</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-7 col-form-label">
        97645345
      </label>
    </div>

    <label for="" class="col-sm-4 col-form-label">
      <strong>Correo</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-7 col-form-label">
        cvilches@gmail.com
      </label>
    </div>

    <label for="" class="col-sm-4 col-form-label">
      <strong>Dirección</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-7 col-form-label">
        Providencia#14000
      </label>
    </div>

    <label for="" class="col-sm-4 col-form-label">
      <strong>Ciudad</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-7 col-form-label">
        Santiago
      </label>
    </div>

    <label for="" class="col-sm-4 col-form-label">
      <strong>Cargo</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-7 col-form-label"></label>
    </div>
  </div>
);

const Tab3Content = () => (
  <div class="mb-3 row">
    <label for="" class="col-sm-6 col-form-label">
      <strong>Nombre</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Fono</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Correo</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Dirección</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-7 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Ciudad</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Cargo</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>
  </div>
);

const Tab4Content = () => (
  <div class="mb-3 row">
    <label for="" class="col-sm-6 col-form-label">
      <strong>Nombre</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Fono</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Correo</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Dirección</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-7 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Ciudad</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>

    <label for="" class="col-sm-6 col-form-label">
      <strong>Cargo</strong>
    </label>
    <div class="col-sm-6">
      <label for="" class="col-sm-6 col-form-label"></label>
    </div>
  </div>
);

const Timeline = () => (
  <div className="containerbar">
    <ul className="progressbar">
      <li className="active">Reunión Agendada</li>
      <li className="active">Trato Creado</li>
      <li className="active">Primera Reunión</li>
      <li className="active">Levantamiento o Preventa</li>
      <li>Propuesta Enviada/ Negociación</li>
      <li>Piloto</li>
      <li>Listo para Cierre</li>
      <li>Implementando</li>
      <li>Facturando</li>
      <li>Congelado</li>
      <li>Cerrado Pedido</li>
      <li>Pedido Realizado</li>
    </ul>
  </div>
);
const steps = [
  "Reunión Agendada (SDR)",
  "Trato Creado",
  "Primera Reunión",
  "Levantamiento o Preventa",
  "Propuesta Enviada/ Negociación",
  "Piloto",
  "Listo para Cierre",
  "Listo para Cierre",
  "Implementando",
  "Facturando",
  "Congelado",
  "Cerrado Pedido",
  "Pedido Realizado",
];
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const hold = "Holding";

function LevantamientoForm() {
  const nav = useNavigate();
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
  const [data, setData] = useState([
    { indicador: "", metas: "", mediosVerif: "" },
  ]);
  const [activar, setActivar] = useState(true);
  let contador = 0;

  const handleClick = () => {
    setData([...data, { indicador: "", metas: "", mediosVerif: "" }]);
    setActivar(true);
  };
  const handleChangeInput = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...data];
    onchangeVal[i][name] = value;
    setData(onchangeVal);
    for (let i = 0; i < data.length; i++) {
      if (data[i].roles !== "" && data[i].cantidad !== "") {
      } else {
        contador = contador + 1;
      }
      if (contador !== 0) {
        setActivar(true);
      } else {
        setActivar(false);
      }
    }
  };
  const handleDelete = (i) => {
    const deleteVal = [...data];
    deleteVal.splice(i, 1);
    setData(deleteVal);
  };

  /////Links
  const handleIngresar = () => {
    nav("/Soportereunionform");
  };

  return (
    <Box>
      <NavbarPage />
      <Grid container spacing={2} columns={17} sx={{ ml: 3 }}>
        <Grid item xs={3}>
          <Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: "#619bf2",
              }}
            >
              DATOS CLIENTE
            </Typography>
            <CardContent>
              <Grid container>
                <Grid item xs={4}>
                  <Typography
                    sx={{ fontSize: 10, fontWeight: "bold", mb: 0.2 }}
                    align="left"
                  >
                    Tipo Empresa
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                    align="left"
                  >
                    Pais
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                    align="left"
                  >
                    Razón Social
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                    align="left"
                  >
                    RUT
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                    align="left"
                  >
                    Dirección
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                    align="left"
                  >
                    Giro
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                    align="left"
                  >
                    Rubro
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography
                    sx={{ fontSize: 10, borderBottom: 0.1, ml: 0.5 }}
                    align="left"
                  >
                    Holding
                  </Typography>

                  <Typography
                    sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                    align="left"
                  >
                    Chile
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                    align="left"
                  >
                    Mline SPA
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                    align="left"
                  >
                    76.605.374-2
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                    align="left"
                  >
                    Talca 537
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                    align="left"
                  >
                    Desarrollos
                  </Typography>
                  <Typography
                    sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                    align="left"
                  >
                    Informática TI
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: "#619bf2",
              }}
            >
              EMPRESAS HOLDING
            </Typography>
            <CardContent>
              <Grid container>
                <Grid item xs={6}></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: "#619bf2",
              }}
            >
              INFORMACIÓN DE REFERENCIA
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="basic tabs example"
                sx={{ minHeight: "30px", height: "30px" }}
              >
                <Tab
                  label={
                    <Typography sx={{ fontSize: 12, mb: 1 }}>
                      Datos Cliente
                    </Typography>
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  label={
                    <Typography sx={{ fontSize: 12, mb: 1 }}>
                      Datos Vendedor
                    </Typography>
                  }
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} sx={{ mb: 1 }}>
              <CardContent sx={{ mt: -3 }}>
                <Grid container columns={24}>
                  <Grid item xs={4}>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.2 }}
                      align="left"
                    >
                      Nombre
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Telefono
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Correo
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Dirección
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Ciudad
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Cargo
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.1, ml: 0.5 }}
                      align="left"
                    >
                      Holding
                    </Typography>

                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Chile
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Mline SPA
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      76.605.374-2
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Talca 537
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Desarrollos
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ ml: 1 }}>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.2 }}
                      align="left"
                    >
                      Nombre
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Telefono
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Correo
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Dirección
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Ciudad
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Cargo
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.1, ml: 0.5 }}
                      align="left"
                    >
                      Holding
                    </Typography>

                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Chile
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Mline SPA
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      76.605.374-2
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Talca 537
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Desarrollos
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <CardContent sx={{ mt: -3 }}>
                <Grid container columns={24}>
                  <Grid item xs={4}>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.2 }}
                      align="left"
                    >
                      Nombre
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Telefono
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Correo
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Dirección
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Ciudad
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Cargo
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.1, ml: 0.5 }}
                      align="left"
                    >
                      Holding
                    </Typography>

                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Chile
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Mline SPA
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      76.605.374-2
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Talca 537
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Desarrollos
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sx={{ ml: 1 }}>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.2 }}
                      align="left"
                    >
                      Nombre
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Telefono
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Correo
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Dirección
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Ciudad
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                      align="left"
                    >
                      Cargo
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.1, ml: 0.5 }}
                      align="left"
                    >
                      Holding
                    </Typography>

                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Chile
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Mline SPA
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      76.605.374-2
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Talca 537
                    </Typography>
                    <Typography
                      sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                      align="left"
                    >
                      Desarrollos
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CustomTabPanel>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: "#619bf2",
              }}
            >
              CONTACTO
            </Typography>
            <CardContent>
              <Grid container>
                <Grid item xs={6}>
                  <Typography
                    sx={{ fontSize: 15, fontWeight: "bold", mb: 0.1 }}
                    align="left"
                  >
                    Correo
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale="es"
                    fullWidth
                  >
                    <DesktopDatePicker
                      name="fecha"
                      inputFormat="DD/MM/YYYY"
                      value={valueDP}
                      onChange={setValueDP}
                      disablePast
                      fullWidth
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "20px",
                          mt: "5px",
                        },
                      }}
                      renderInput={(params) => {
                        return <TextField fullWidth {...params} />;
                      }}
                      clearable
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <TextField
                sx={{ mt: 2 }}
                id="outlined-multiline-static"
                label="Comentarios"
                multiline
                rows={2}
                placeholder="comentarios"
                fullWidth
              />
              {data.map((val, i) => (
                <div>
                  <Grid
                    container
                    spacing={2}
                    sx={{ mt: 1 }}
                    justifyContent="center"
                  >
                    <Grid item xs={4} sm={7}>
                      <TextField
                        id="mediosVerif"
                        label="Nombre"
                        fullWidth
                        required
                        name="Correo"
                        value={val.mediosVerif}
                        onChange={(e) => handleChangeInput(e, i)}
                      />
                    </Grid>
                    <Grid item xs={5} sm={2} sx={{ mt: 1 }}>
                      <Tooltip title="Eliminar Indicador">
                        <Button
                          variant="contained"
                          color="error"
                          fullWidth
                          sx={{ borderRadius: 2 }}
                          onClick={() => handleDelete(i)}
                        >
                          <DeleteIcon />
                        </Button>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </div>
              ))}
              <Grid container justifyContent="center">
                <Grid item xs={8} sm={6} sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    disabled={activar}
                    sx={{
                      bgcolor: "teal",
                      color: "white",
                      borderRadius: 2,
                    }}
                    fullWidth
                    onClick={handleClick}
                  >
                    Añadir Más
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {activeStep === 0 ? (
                <Grid container spacing={2} columns={13} sx={{ ml: 3 }}>
                  <Grid item xs={4}>
                    <Card className="text-center" sx={{ boxShadow: 8 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                          backgroundColor: "#bfbdbd",
                        }}
                      >
                        INFORMACION REUNION
                      </Typography>
                      <CardContent>
                        <Grid container>
                          <Grid item xs={4}>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold" }}
                              align="left"
                            >
                              Vendedor
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              JP
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              KAM
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Fecha reunión
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Hora reunión
                            </Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1 },
                              }}
                              fullWidth
                            />

                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <LocalizationProvider
                              dateAdapter={AdapterDayjs}
                              adapterLocale="es"
                              fullWidth
                            >
                              <DesktopDatePicker
                                name="fecha"
                                inputFormat="DD/MM/YYYY"
                                value={valueDP}
                                onChange={setValueDP}
                                disablePast
                                fullWidth
                                sx={{
                                  "& .MuiInputBase-root": {
                                    height: "30px",
                                    mt: "5px",
                                  },
                                }}
                                renderInput={(params) => {
                                  return <TextField fullWidth {...params} />;
                                }}
                                clearable
                              />
                            </LocalizationProvider>

                            <LocalizationProvider
                              dateAdapter={AdapterDayjs}
                              fullWidth
                            >
                              <MobileTimePicker
                                fullWidth
                                name="horaEncuentro"
                                sx={{
                                  "& .MuiInputBase-root": {
                                    height: "30px",
                                    mt: "5px",
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
                        <Divider sx={{ mt: 4, mb: 3 }}>
                          <Chip label="Participantes Reunión" />
                        </Divider>
                        {data.map((val, i) => (
                          <div>
                            <Grid
                              container
                              spacing={2}
                              sx={{ mt: 1 }}
                              justifyContent="center"
                            >
                              <Grid item xs={4} sm={6}>
                                <TextField
                                  required
                                  fullWidth
                                  id="indicador"
                                  label="Nombre"
                                  name="indicador"
                                  value={val.indicador}
                                  onChange={(e) => handleChangeInput(e, i)}
                                />
                              </Grid>
                              <Grid item xs={4} sm={6}>
                                <TextField
                                  required
                                  fullWidth
                                  id="metas"
                                  label="Cargo"
                                  name="metas"
                                  value={val.metas}
                                  onChange={(e) => handleChangeInput(e, i)}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              spacing={2}
                              sx={{ mt: 1 }}
                              justifyContent="center"
                            >
                              <Grid item xs={4} sm={5}>
                                <TextField
                                  id="mediosVerif"
                                  label="Nombre"
                                  fullWidth
                                  required
                                  name="Correo"
                                  value={val.mediosVerif}
                                  onChange={(e) => handleChangeInput(e, i)}
                                />
                              </Grid>
                              <Grid item xs={4} sm={5}>
                                <TextField
                                  required
                                  fullWidth
                                  id="metas"
                                  label="Telefono"
                                  name="metas"
                                  value={val.metas}
                                  onChange={(e) => handleChangeInput(e, i)}
                                />
                              </Grid>
                              <Grid item xs={5} sm={2} sx={{ mt: 1 }}>
                                <Tooltip title="Eliminar Indicador">
                                  <Button
                                    variant="contained"
                                    color="error"
                                    fullWidth
                                    sx={{ borderRadius: 2 }}
                                    onClick={() => handleDelete(i)}
                                  >
                                    <DeleteIcon />
                                  </Button>
                                </Tooltip>
                              </Grid>
                            </Grid>
                          </div>
                        ))}
                        <Grid container justifyContent="center">
                          <Grid item xs={8} sm={2} sx={{ mt: 3 }}>
                            <Button
                              variant="contained"
                              disabled={activar}
                              sx={{
                                bgcolor: "teal",
                                color: "white",
                                borderRadius: 2,
                              }}
                              fullWidth
                              onClick={handleClick}
                            >
                              Añadir Más
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card className="text-center" sx={{ boxShadow: 8 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                          backgroundColor: "#bfbdbd",
                        }}
                      >
                        INFOMERCIAL
                      </Typography>
                      <CardContent>
                        <Grid container>
                          <Grid item xs={4}>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold" }}
                              align="left"
                            >
                              Industria
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Territorio (Pais)
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Rango de empleados
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Fuente Posible Cliente
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Origen
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Sector
                            </Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1 },
                              }}
                              fullWidth
                            />

                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />

                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                        <Divider sx={{ mt: 4, mb: 3 }}>
                          <Chip label="Soporte Reunión Inicial" />
                        </Divider>
                        <Typography
                          sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                          align="left"
                        >
                          Guia Reunion
                        </Typography>
                        <Box>
                          <Typography
                            sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                            align="left"
                          >
                            Levanta datos
                          </Typography>
                          <Button
                            variant="contained"
                            href="#contained-buttons"
                            color="success"
                            onClick={handleIngresar}
                          >
                            Ingresar
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card className="text-center" sx={{ boxShadow: 8 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                          backgroundColor: "#bfbdbd",
                        }}
                      >
                        COMENTARIOS Y CONSIDERACIONES
                      </Typography>
                      <CardContent>
                        <TextField
                          sx={{ mt: 2 }}
                          id="outlined-multiline-static"
                          label="Comentarios"
                          multiline
                          rows={8}
                          placeholder="comentarios"
                          fullWidth
                        />
                        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                          <Button variant="contained">Guardar</Button>

                          <Button
                            variant="contained"
                            href="#contained-buttons"
                            color="success"
                          >
                            Guardar y Cerrar
                          </Button>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
            </Typography>

            <Typography sx={{ mt: 2, mb: 1 }}>
              {activeStep === 1 ? (
                <Grid container spacing={2} columns={13} sx={{ ml: 3 }}>
                  <Grid item xs={3}>
                    <Card className="text-center" sx={{ boxShadow: 8 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                          backgroundColor: "#bfbdbd",
                        }}
                      >
                        INFORMACION TRATO
                      </Typography>
                      <CardContent>
                        <Grid container>
                          <Grid item xs={4}>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold" }}
                              align="left"
                            >
                              Vendedor
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Nombre Trato
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Contacto Trato
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Nombre
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Telefono
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Correo
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Dirección
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Ciudad
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Cargo
                            </Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1 },
                              }}
                              fullWidth
                            />

                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={3}>
                    <Card className="text-center" sx={{ boxShadow: 8 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                          backgroundColor: "#bfbdbd",
                        }}
                      >
                        INFOMERCIAL
                      </Typography>
                      <CardContent>
                        <Grid container>
                          <Grid item xs={4}>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold" }}
                              align="left"
                            >
                              Industria
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Territorio (Pais)
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Rango de empleados
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Fuente Posible Cliente
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Origen
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Sector
                            </Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1 },
                              }}
                              fullWidth
                            />

                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />

                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={3}>
                    <Card className="text-center" sx={{ boxShadow: 8 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                          backgroundColor: "#bfbdbd",
                        }}
                      >
                        VALORIZACION INICIAL DEL TRATO
                      </Typography>
                      <CardContent>
                        <Grid container>
                          <Grid item xs={7}>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold" }}
                              align="left"
                            >
                              Industria
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Producto/Solución
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              N° Empleados que marcan
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              N° Empleados potenciales futuros
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Valor por cada usuario
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Moneda Trato
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Valor por usuario en UF
                            </Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1 },
                              }}
                              fullWidth
                            />

                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />

                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={3}>
                    <Card className="text-center" sx={{ boxShadow: 8 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                          backgroundColor: "#bfbdbd",
                        }}
                      >
                        EJECUTIVOS ASIGNADOS
                      </Typography>
                      <CardContent>
                        <Grid container>
                          <Grid item xs={7}>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold" }}
                              align="left"
                            >
                              Industria
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Producto/Solución
                            </Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1 },
                              }}
                              fullWidth
                            />

                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
            </Typography>

            <Typography sx={{ mt: 2, mb: 1 }}>
              {activeStep === 2 ? (
                <Grid container spacing={2} columns={13} sx={{ ml: 3 }}>
                  <Grid item xs={4}>
                    <Card className="text-center" sx={{ boxShadow: 8 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                          backgroundColor: "#bfbdbd",
                        }}
                      >
                        INFORMACION REUNION
                      </Typography>
                      <CardContent>
                        <Grid container>
                          <Grid item xs={4}>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold" }}
                              align="left"
                            >
                              Vendedor
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              JP
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              KAM
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Fecha reunión
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Hora reunión
                            </Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1 },
                              }}
                              fullWidth
                            />

                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <LocalizationProvider
                              dateAdapter={AdapterDayjs}
                              adapterLocale="es"
                              fullWidth
                            >
                              <DesktopDatePicker
                                name="fecha"
                                inputFormat="DD/MM/YYYY"
                                value={valueDP}
                                onChange={setValueDP}
                                disablePast
                                fullWidth
                                sx={{
                                  "& .MuiInputBase-root": {
                                    height: "30px",
                                    mt: "5px",
                                  },
                                }}
                                renderInput={(params) => {
                                  return <TextField fullWidth {...params} />;
                                }}
                                clearable
                              />
                            </LocalizationProvider>

                            <LocalizationProvider
                              dateAdapter={AdapterDayjs}
                              fullWidth
                            >
                              <MobileTimePicker
                                fullWidth
                                name="horaEncuentro"
                                sx={{
                                  "& .MuiInputBase-root": {
                                    height: "30px",
                                    mt: "5px",
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
                        <Divider sx={{ mt: 4, mb: 3 }}>
                          <Chip label="Participantes Reunión" />
                        </Divider>
                        {data.map((val, i) => (
                          <div>
                            <Grid
                              container
                              spacing={2}
                              sx={{ mt: 1 }}
                              justifyContent="center"
                            >
                              <Grid item xs={4} sm={6}>
                                <TextField
                                  required
                                  fullWidth
                                  id="indicador"
                                  label="Nombre"
                                  name="indicador"
                                  value={val.indicador}
                                  onChange={(e) => handleChangeInput(e, i)}
                                />
                              </Grid>
                              <Grid item xs={4} sm={6}>
                                <TextField
                                  required
                                  fullWidth
                                  id="metas"
                                  label="Cargo"
                                  name="metas"
                                  value={val.metas}
                                  onChange={(e) => handleChangeInput(e, i)}
                                />
                              </Grid>
                            </Grid>
                            <Grid
                              container
                              spacing={2}
                              sx={{ mt: 1 }}
                              justifyContent="center"
                            >
                              <Grid item xs={4} sm={5}>
                                <TextField
                                  id="mediosVerif"
                                  label="Nombre"
                                  fullWidth
                                  required
                                  name="Correo"
                                  value={val.mediosVerif}
                                  onChange={(e) => handleChangeInput(e, i)}
                                />
                              </Grid>
                              <Grid item xs={4} sm={5}>
                                <TextField
                                  required
                                  fullWidth
                                  id="metas"
                                  label="Telefono"
                                  name="metas"
                                  value={val.metas}
                                  onChange={(e) => handleChangeInput(e, i)}
                                />
                              </Grid>
                              <Grid item xs={5} sm={2} sx={{ mt: 1 }}>
                                <Tooltip title="Eliminar Indicador">
                                  <Button
                                    variant="contained"
                                    color="error"
                                    fullWidth
                                    sx={{ borderRadius: 2 }}
                                    onClick={() => handleDelete(i)}
                                  >
                                    <DeleteIcon />
                                  </Button>
                                </Tooltip>
                              </Grid>
                            </Grid>
                          </div>
                        ))}
                        <Grid container justifyContent="center">
                          <Grid item xs={8} sm={2} sx={{ mt: 3 }}>
                            <Button
                              variant="contained"
                              disabled={activar}
                              sx={{
                                bgcolor: "teal",
                                color: "white",
                                borderRadius: 2,
                              }}
                              fullWidth
                              onClick={handleClick}
                            >
                              Añadir Más
                            </Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card className="text-center" sx={{ boxShadow: 8 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                          backgroundColor: "#bfbdbd",
                        }}
                      >
                        INFOMERCIAL
                      </Typography>
                      <CardContent>
                        <Grid container>
                          <Grid item xs={4}>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold" }}
                              align="left"
                            >
                              Industria
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Territorio (Pais)
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Rango de empleados
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Fuente Posible Cliente
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Origen
                            </Typography>
                            <Typography
                              sx={{ fontSize: 12, fontWeight: "bold", mt: 2 }}
                              align="left"
                            >
                              Sector
                            </Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1 },
                              }}
                              fullWidth
                            />

                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />

                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              InputProps={{
                                sx: { height: 25, ml: 1, mt: 1 },
                              }}
                              fullWidth
                            />
                          </Grid>
                        </Grid>
                        <Divider sx={{ mt: 4, mb: 3 }}>
                          <Chip label="Soporte Reunión Inicial" />
                        </Divider>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card className="text-center" sx={{ boxShadow: 8 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                          backgroundColor: "#bfbdbd",
                        }}
                      >
                        COMENTARIOS Y CONSIDERACIONES
                      </Typography>
                      <CardContent>
                        <TextField
                          sx={{ mt: 2 }}
                          id="outlined-multiline-static"
                          label="Comentarios"
                          multiline
                          rows={8}
                          placeholder="comentarios"
                          fullWidth
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
            </Typography>

            <Typography sx={{ mt: 2, mb: 1 }}>
              {activeStep === 10 ? (
                <Grid container spacing={2} sx={{ ml: 3 }}>
                  <Grid item xs={4}>
                    <Card className="text-center" sx={{ boxShadow: 8 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                          backgroundColor: "#bfbdbd",
                        }}
                      >
                        Conoce su empresa
                      </Typography>
                      <CardContent>
                        <Grid container>
                          <Grid item xs={4}>
                            <Typography
                              sx={{ fontSize: 10, fontWeight: "bold", mb: 0.2 }}
                              align="left"
                            >
                              Cual es su actividad
                            </Typography>
                            <Typography
                              sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                              align="left"
                            >
                              Existe Ppto para Control
                            </Typography>
                            <Typography
                              sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                              align="left"
                            >
                              Existe Ppto para Control
                            </Typography>
                            <Typography
                              sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                              align="left"
                            >
                              Tienen Sucuarsales
                            </Typography>
                            <Typography
                              sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                              align="left"
                            >
                              Que registro de Control tienen
                            </Typography>
                            <Typography
                              sx={{ fontSize: 10, fontWeight: "bold", mb: 0.1 }}
                              align="left"
                            >
                              Que software de sueldos tienen
                            </Typography>

                            <TextField
                              sx={{ mt: 2 }}
                              id="outlined-multiline-static"
                              label="Levanta dolores"
                              multiline
                              rows={4}
                              placeholder="Levanta dolores"
                            />
                            <TextField
                              sx={{ mt: 2 }}
                              id="outlined-multiline-static"
                              label="Como se imagina la solución a sus dolores"
                              multiline
                              rows={4}
                              placeholder="Como se imagina la solución a sus dolores"
                            />
                          </Grid>
                          <Grid item xs={8}>
                            <Typography
                              sx={{ fontSize: 10, borderBottom: 0.1, ml: 0.5 }}
                              align="left"
                            >
                              Holding
                            </Typography>

                            <Typography
                              sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                              align="left"
                            >
                              Chile
                            </Typography>
                            <Typography
                              sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                              align="left"
                            >
                              Mline SPA
                            </Typography>
                            <Typography
                              sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                              align="left"
                            >
                              76.605.374-2
                            </Typography>
                            <Typography
                              sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                              align="left"
                            >
                              Talca 537
                            </Typography>
                            <Typography
                              sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                              align="left"
                            >
                              Desarrollos
                            </Typography>
                            <Typography
                              sx={{ fontSize: 10, borderBottom: 0.5, ml: 0.5 }}
                              align="left"
                            >
                              Informática TI
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    2
                  </Grid>
                  <Grid item xs={4}>
                    3
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
}

export default LevantamientoForm;
