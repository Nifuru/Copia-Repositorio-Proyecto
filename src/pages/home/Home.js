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
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HandshakeIcon from '@mui/icons-material/Handshake';
import GroupsIcon from '@mui/icons-material/Groups';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LockIcon from '@mui/icons-material/Lock';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReactEChart from 'echarts-for-react'
import Stack from "@mui/material/Stack";
import Badge from '@mui/material/Badge';
import '../../styles/Home.scss';


function Home() {
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
const steps = [
  "Reunión Agendada (SDR)",
  "Trato Creado",
  "Primera Reunión",
  "Levantamiento o Preventa",
  "Propuesta Enviada/ Negociación",
  "Piloto",
  "Listo para Cierre",

  "Implementando",
  "Facturando",
  "Congelado",
  " Pedido Cerrado",
  "Pedido Realizado",
  "Ticket",
];
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
 const optionBar = {
  xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 18],
      barGap: '20%',
      barCategoryGap: '40%'
    },
    {
      type: 'bar',
      data: [12, 14, 9, 9, 11]
    }
  ]
};
 const optionPie = {
  legend: {
    orient: 'vertical',
    x: 'left',
    data: ['A', 'B', 'C', 'D', 'E']
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '30',
          fontWeight: 'bold'
        }
      },
      data: [
        { value: 335, name: 'A' },
        { value: 310, name: 'B' },
        { value: 234, name: 'C' },
        { value: 135, name: 'D' },
        { value: 1548, name: 'E' }
      ]
    }
  ]
};
const optionPuntos = {
  xAxis: {
    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  yAxis: {},
  series: [
    {
      type: 'scatter',
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
};
return (
  <Box >
       
         <NavbarPage/> 
         
{/* <Stepper activeStep={activeStep} alternativeLabel>
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
        </Stepper> */}
        {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
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
</Box> */}
 <Box sx={ {bgcolor:"#f0f1f2", minheight:"100vh"}}  height='100vh'>
<Grid container  spacing={2} columns={18} sx={{ ml: 3}} >
                          <Grid item xs={4}>
                          <Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: "#619bf2",
                color: "white"
              }}
            >
             Pre-Venta
            </Typography>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title="Reunion Agendada">
              
                                  <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#f5940c"}}
                                    // onClick={() => handleDelete(i)}
                                  >  
                                      <MenuBookIcon/>
                                  </Button>
                                 
                                </Tooltip>
                                {/* <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: "bold",
                        
                          mt:2
                        }}
                      >
                     2500
                      </Typography> */}
              
              </Badge>
                </Grid>
                <Grid item xs={6}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title="Trato Creado">
                                  <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#f5940c"}}
                                    // onClick={() => handleDelete(i)}
                                  >
                                       <HandshakeIcon/>
                                  </Button>
                                </Tooltip>
                                </Badge>
               
                </Grid>
              </Grid>
            </CardContent>
          </Card>
                            
                          </Grid>
                          <Grid item xs={6}>
                          <Card className="text-center" sx={{ boxShadow: 8 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: "#619bf2",
                color: "white"
              }}
            >
             Venta
            </Typography>
            <CardContent>
            <Grid container spacing={2} columns={20} >
                <Grid item xs={4}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title=" Primera Reunion">
                                  <Button
                                    variant="contained"
                                 
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#f7db05"}}
                                    // onClick={() => handleDelete(i)}
                                  >
                                      < GroupsIcon />
                                  </Button>
                                </Tooltip>
                                </Badge>
                </Grid>
                <Grid item xs={4}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title="Levantamiento o Preventa">
                                  <Button
                                    variant="contained"
                                  
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#f7db05"}}
                                    // onClick={() => handleDelete(i)}
                                  >
                                      < FactCheckIcon />
                                  </Button>
                                </Tooltip>
                                </Badge>
                </Grid>
                <Grid item xs={4}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title="Propuesta Enviada/Negociacion">
                                  <Button
                                    variant="contained"
                                 
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#f7db05"}}
                                    // onClick={() => handleDelete(i)}
                                  >
                                      < DriveFileMoveIcon />
                                  </Button>
                                </Tooltip>
                                </Badge>
                </Grid>
                <Grid item xs={4}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title="Piloto">
                                  <Button
                                    variant="contained"
                                   
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#f7db05"}}
                                    // onClick={() => handleDelete(i)}
                                  >
                                      < WorkHistoryIcon />
                                  </Button>
                                </Tooltip>
                                </Badge>
                </Grid>
                <Grid item xs={4}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title="Listo Para Cierre">
                                  <Button
                                    variant="contained"
                                   
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#f7db05"}}
                                    // onClick={() => handleDelete(i)}
                                  >
                                      < LibraryAddCheckIcon />
                                  </Button>
                                </Tooltip>
                                </Badge>
                </Grid>
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
                color: "white"
              }}
            >
            Post-Venta
            </Typography>
            <CardContent>
            <Grid container spacing={2} columns={24} >
                <Grid item xs={4}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title="Implementado">
                                  <Button
                                    variant="contained"
                                   
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#62ba04"}}
                                    // onClick={() => handleDelete(i)}
                                  >
                                      < BeenhereIcon />
                                  </Button>
                                </Tooltip>
                                </Badge>
                </Grid>
                <Grid item xs={4}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title="Facturado">
                                  <Button
                                    variant="contained"
                                   
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#62ba04"}}
                                    // onClick={() => handleDelete(i)}
                                  >
                                      < ReceiptLongIcon  />
                                  </Button>
                                </Tooltip>
                                </Badge>
                </Grid>
                <Grid item xs={4}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title="Congelado">
                                  <Button
                                    variant="contained"
                                   
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#62ba04"}}
                                    // onClick={() => handleDelete(i)}
                                  >
                                      < AcUnitIcon />
                                  </Button>
                                </Tooltip>
                                </Badge>
                </Grid>
                <Grid item xs={4}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title="Pedido Cerrado">
                                  <Button
                                    variant="contained"
                                   
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#62ba04"}}
                                    // onClick={() => handleDelete(i)}
                                  >
                                      < LockIcon />
                                  </Button>
                                </Tooltip>
                                </Badge>
                </Grid>
                <Grid item xs={4}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title="Pedido Realizado">
                                  <Button
                                    variant="contained"
                                   
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#62ba04"}}
                                    // onClick={() => handleDelete(i)}
                                  >
                                      < DoneAllIcon />
                                  </Button>
                                </Tooltip>

                                </Badge>
                </Grid>
                
                <Grid item xs={4}>
                <Badge color="secondary" badgeContent={10000} max={9999
}>
                <Tooltip title="Tikect">
                                  <Button
                                    variant="contained"
                                   
                                    fullWidth
                                    sx={{ borderRadius: 2 ,bgcolor: "#62ba04"}}
                                    // onClick={() => handleDelete(i)}
                                  >
                                      < ListAltIcon />
                                  </Button>
                                </Tooltip>
                                </Badge>
                </Grid>
              </Grid>
            </CardContent>
          </Card>                
         </Grid>
                            
                          </Grid>
                          <Grid container  spacing={2} columns={13} sx={{ ml: 4,mt:3 }}>
                          <Grid item xs={6}> 
                          <Card variant="outlined" sx={{ boxShadow:6 }}>
            <CardContent>
              <Typography align='center' variant='h5' color="text.secondary" gutterBottom>
                <b> Venta Mensual $ </b>
              </Typography>
              <Box height='200px'>
              <ReactEChart style={{
                      width:"100%",
                      height:"100%"
                    }} option={option}/>
              </Box>
            </CardContent>
            </Card>
            </Grid>
                          <Grid item xs={6}>
                          <Card variant="outlined" sx={{ boxShadow:6 }}>
            <CardContent>
              <Typography align='center' variant='h5' color="text.secondary" gutterBottom>
                <b> Venta Mensual $ </b>
              </Typography>
              <Box height='200px'>
              <ReactEChart style={{
                      width:"100%",
                      height:"100%"
                    }} option={optionBar }/>
              </Box>
            </CardContent>
            </Card>
                          </Grid>
                          <Grid item xs={6}>
                          <Card variant="outlined" sx={{ boxShadow:6 }}>
            <CardContent>
              <Typography align='center' variant='h5' color="text.secondary" gutterBottom>
                <b> Venta Mensual $ </b>
              </Typography>
              <Box height='200px'>
              <ReactEChart style={{
                      width:"100%",
                      height:"100%"
                    }} option={optionPie }/>
              </Box>
            </CardContent>
            </Card>
                          </Grid>
                          <Grid item xs={6}>
                          <Card variant="outlined" sx={{ boxShadow:6 }}>
            <CardContent>
              <Typography align='center' variant='h5' color="text.secondary" gutterBottom>
                <b> Venta Mensual $ </b>
              </Typography>
              <Box height='200px'>
              <ReactEChart style={{
                      width:"100%",
                      height:"100%"
                    }} option={optionPuntos }/>
              </Box>
            </CardContent>
            </Card>
                          </Grid>
                          </Grid>
                          </Box>
</Box>

)
};

export default Home;


