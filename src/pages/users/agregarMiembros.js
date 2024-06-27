import React, { useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MaterialReactTable from "material-react-table";
import NavbarPage from '../../components/NavbarPage';
import { MRT_Localization_ES } from "material-react-table/locales/es";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EditIcon from "@mui/icons-material/Edit";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import CasesRoundedIcon from "@mui/icons-material/CasesRounded";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import clienteAxios from "../../config/clienteAxios";
import axios from "axios";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

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

const AgregarMiembros = () => {
  const location = useLocation();
  const [ejecutar, setEjecutar] = React.useState(false);
//   const params = new URLSearchParams(location.search);
//   const id = params.get("id");
//   const proyect = JSON.parse(id);
  const [user, setUser] = React.useState([]);
  const [userDisponible, setUserDisponible] = React.useState([]);
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("token"));
    if (items) {
      setItems(items);
    }
  }, []);

  const rol = '1';

//   const userS = async () => {
//     try {
//       const { data1 } = await axios
//         .get("/usuariosequipos", {
//           params: {
//             id: proyect.id,
//           },
//         })
//         .then(function (response) {
//           // setAlerta({})
//           console.log(response.data);
//           let datos=response.data;
//           let datosDisponible=datos.filter((dato) => dato.equiposA =="Disponible");
//           datos= datos.filter((dato) => dato.equiposA =="Asignado");
          
//           setUser(datos);
//           setUserDisponible(datosDisponible)
//           setEjecutar(false);
//           return;
//         })
//         .catch(function (error) {
//           console.log("error");
//           return;
//         });
//     } catch (error) {
//       return;
//     }
//   };
//   if (ejecutar) {
//     userS();
//   }
  const nav = useNavigate();

  function handleClickBreadCrumbs(event) {
    event.preventDefault();
  }

  //Modal Handlers
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Theme
  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  //DropDown Button
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDropDown = Boolean(anchorEl);
  const handleDropDown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropDown = () => {
    setAnchorEl(null);
  };

  //Routes
  const handleLinkHome = (event, message) => {
    if (message === "home") {
      nav("/inicio");
    }
  };

  const handleLinkProjects = (event, message) => {
    if (message === "proyectos") {
      nav("/proyectos");
    }
  };

  const handleLinkAdmin = (event, message) => {
    if (message === "administrar") {
      nav("/adminEquipos");
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "Nombre",
      },
      {
        accessorKey: "lastName",
        header: "Apellido",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "state",
        header: "Estado",
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={{
              backgroundColor:
                cell.getValue() === "Asignado" ? "green" : "darkorange",
              borderRadius: "0.25rem",
              color: "#fff",
              maxWidth: "9ch",
              p: "0.25rem",
            }}
          >
            {cell.getValue()}
          </Box>
        ),
      },
    ],
    []
  );

  const handleSubmit = async (dato) => {
    console.log(dato);
    // try {
    //   const { data1 } = await axios
    //     .put("/asignarequipo", {
    //       correo: dato.original.email,
    //       equipo: proyect.id,
    //     })
    //     .then(function (response) {
    //       // setAlerta({})
    //       //console.log(response.data.idToken)
    //       //localStorage.setItem('token',JSON.stringify(response.data) )
    //       //setAuth(data)
    //       setEjecutar(true);
    //     })
    //     .catch(function (error) {
    //       console.log("error");
    //       // document.getElementById(":r7:").value='';
    //     });

    //   //setOpen(false);
    // } catch (error) {}
  };
  const handleEliminar = async (dato) => {
    console.log(dato);
    try {
      const { data1 } = await axios
        .put("/asignarequipo", {
          correo: dato.original.email,
          equipo: 0,
        })
        .then(function (response) {
          // setAlerta({})
          //console.log(response.data.idToken)
          //localStorage.setItem('token',JSON.stringify(response.data) )
          //setAuth(data)
          setEjecutar(true);
        })
        .catch(function (error) {
          console.log("error");
          // document.getElementById(":r7:").value='';
        });

      //setOpen(false);
    } catch (error) {}
  };

  //Tabs Handlers
  const [valueTabs, setValueTabs] = React.useState(0);

  const handleChangeTabs = (event, newValueTabs) => {
    setValueTabs(newValueTabs);
  };
  const datos = [
    {
      id: '1',
      firstName: 'Dylan',
      middleName: 'Sprouse',
      lastName: 'Murray',
      address: '261 Erdman Ford',
      city: 'East Daphne',
      state: 'Asignado',
      country: 'United States',
    },
    {
      id: '2',
      firstName: 'Raquel',
      middleName: 'Hakeem',
      lastName: 'Kohler',
      address: '769 Dominic Grove',
      city: 'Vancouver',
      state: 'Asignado',
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
      state: 'Asignado',
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

  if (user === "")
    return (
      <Container component="main" maxWidth="xs">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
    );

  return (
    <Box>
        <NavbarPage/> 
      {rol === "1" ||
      rol === "2" ||
      rol === "6" ||
      rol === "7" ||
      rol === "10" ? (
        <>
          <Box
            role="presentation"
            onClick={handleClickBreadCrumbs}
            sx={{ mb: 3 }}
          >
            {/* <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/inicio"
                onClick={(event) => handleLinkHome(event, "home")}
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Inicio
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/proyectos"
                onClick={(event) => handleLinkProjects(event, "proyectos")}
              >
                <CasesRoundedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Proyectos
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/adminEquipos"
                onClick={(event) => handleLinkAdmin(event, "administrar")}
              >
                <GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Administrar Equipos
              </Link>
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                <GroupAddIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Agregar Miembros
              </Typography>
            </Breadcrumbs> */}
            <Typography variant="h3" sx={{ mt: 2 }}>
              <b>Agregar Miembros:</b> "Equipo Prueba"
            </Typography>
          </Box>
          <Box
            gridColumn="span 2"
            gridRow="span 1"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="1rem 1rem"
            flex="1 1 100%"
            borderRadius="0.55rem"
          >
            <CssBaseline />
            <Container>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ mb: 2, fontWeight: "bold" }}
                  >
                    Crear Equipo
                  </Typography>
                  <Divider />
                  <Grid container spacing={2} mt={2} mb={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="nombreEquipo"
                        required
                        fullWidth
                        id="nombreEquipo"
                        label="Nombre de Equipo"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        type="number"
                        id="miembros"
                        label=" Cantidad de Miembros"
                        name="miembros"
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        required
                        fullWidth
                        id="descripcion"
                        label="Descripción"
                        name="descripcion"
                      />
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid
                    container
                    sx={{ mt: 2 }}
                    spacing={1}
                    justifyContent="center"
                  >
                    <Grid item sm={6} xs={6}>
                      <Button
                        variant="contained"
                        color="error"
                        size="large"
                        fullWidth
                        onClick={handleClose}
                      >
                        Cancelar
                      </Button>
                    </Grid>
                    <Grid item sm={6} xs={6}>
                      <Button
                        variant="contained"
                        sx={{ bgcolor: "teal", color: "white" }}
                        size="large"
                        fullWidth
                      >
                        Guardar
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Modal>
              <Box
                gridColumn="span 8"
                gridRow="span 3"
                backgroundColor={theme.palette.background.alt}
                p="1.5rem"
                borderRadius="1.5rem"
                mt="5px"
                height="fit-content"
                sx={{ boxShadow: 4 }}
              >
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={valueTabs}
                      onChange={handleChangeTabs}
                      variant={isSmallScreen ? "scrollable" : "fullWidth"}
                      scrollButtons
                      allowScrollButtonsMobile
                    >
                      <Tab
                        icon={<VerifiedIcon />}
                        iconPosition="start"
                        label="Vendedores Asignados"
                        {...a11yProps(0)}
                      />
                      <Tab
                        icon={<PersonSearchIcon />}
                        iconPosition="start"
                        label="Vendedores Disponibles"
                        {...a11yProps(1)}
                      />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={valueTabs} index={0}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          Listado de Vendedores Asignados
                        </Typography>
                      </Grid>
                    </Grid>
                    <MaterialReactTable
                      columns={columns}
                      data={datos}
                      localization={MRT_Localization_ES}
                      enableRowActions
                      positionActionsColumn="last"
                      muiTablePaperProps={{
                        elevation: 0,
                        sx: {
                          backgroundColor: theme.palette.background.alt,
                        },
                      }}
                      renderRowActionMenuItems={({ closeMenu, row }) => [
                        <MenuItem
                          key="edit"
                          onClick={(event) => {
                            handleSubmit(row);
                            closeMenu();
                          }}
                          style={{
                            display:
                              row.getValue("state") != "Asignado"
                                ? "block"
                                : "none",
                          }}
                        >
                          <PersonAddAltIcon sx={{ mr: 1 }} />
                          <b> Agregar Miembro </b>
                        </MenuItem>,
                        <MenuItem
                          key="delete"
                          onClick={(event) => {
                            handleEliminar(row);
                            closeMenu();
                          }}
                          sx={{ color: "#FF6347", fontWeight: "bold" }}
                          style={{
                            display:
                              row.getValue("state") === "Asignado"
                                ? "block"
                                : "none",
                          }}
                        >
                          <PersonRemoveAlt1Icon sx={{ mr: 1 }} /> Quitar Miembro
                        </MenuItem>,
                      ]}
                      muiTopToolbarProps={{
                        sx: {
                          backgroundColor: theme.palette.background.alt,
                        },
                      }}
                      muiTableHeadCellProps={{
                        align: "center",
                        sx: {
                          backgroundColor: theme.palette.background.alt,
                        },
                      }}
                      muiBottomToolbarProps={{
                        sx: {
                          backgroundColor: theme.palette.background.alt,
                        },
                      }}
                      muiTableBodyProps={{
                        sx: {
                          "& tr:nth-of-type(odd)": {
                            backgroundColor: theme.palette.background.light,
                          },
                        },
                      }}
                      muiTableBodyCellProps={{
                        align: "center",
                      }}
                      initialState={{
                        pagination: {
                          pageSize: 5,
                          pageIndex: 0,
                        },
                      }}
                      muiTablePaginationProps={{
                        rowsPerPageOptions: [5, 10, 20, 30, 50, 100],
                        showFirstButton: false,
                        showLastButton: false,
                        SelectProps: {
                          native: true,
                        },
                        labelRowsPerPage: "Número de filas visibles",
                      }}
                    />
                  </CustomTabPanel>
                  <CustomTabPanel value={valueTabs} index={1}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          Listado de Vendedores Disponibles
                        </Typography>
                      </Grid>
                    </Grid>
                    <MaterialReactTable
                      columns={columns}
                      data={datos}
                      localization={MRT_Localization_ES}
                      enableRowActions
                      positionActionsColumn="last"
                      muiTablePaperProps={{
                        elevation: 0,
                        sx: {
                          backgroundColor: theme.palette.background.alt,
                        },
                      }}
                      renderRowActionMenuItems={({ closeMenu, row }) => [
                        <MenuItem
                          key="edit"
                          onClick={(event) => {
                            handleSubmit(row);
                            closeMenu();
                          }}
                          style={{
                            display:
                              row.getValue("state") != "Asignado"
                                ? "block"
                                : "none",
                          }}
                        >
                          <PersonAddAltIcon sx={{ mr: 1 }} />
                          <b> Agregar Miembro </b>
                        </MenuItem>,
                        <MenuItem
                          key="delete"
                          onClick={(event) => {
                            handleEliminar(row);
                            closeMenu();
                          }}
                          sx={{ color: "#FF6347", fontWeight: "bold" }}
                          style={{
                            display:
                              row.getValue("state") == "Asignado"
                                ? "block"
                                : "none",
                          }}
                        >
                          <PersonRemoveAlt1Icon sx={{ mr: 1 }} /> Quitar Miembro
                        </MenuItem>,
                      ]}
                      muiTopToolbarProps={{
                        sx: {
                          backgroundColor: theme.palette.background.alt,
                        },
                      }}
                      muiTableHeadCellProps={{
                        align: "center",
                        sx: {
                          backgroundColor: theme.palette.background.alt,
                        },
                      }}
                      muiBottomToolbarProps={{
                        sx: {
                          backgroundColor: theme.palette.background.alt,
                        },
                      }}
                      muiTableBodyProps={{
                        sx: {
                          "& tr:nth-of-type(odd)": {
                            backgroundColor: theme.palette.background.light,
                          },
                        },
                      }}
                      muiTableBodyCellProps={{
                        align: "center",
                      }}
                      initialState={{
                        pagination: {
                          pageSize: 5,
                          pageIndex: 0,
                        },
                      }}
                      muiTablePaginationProps={{
                        rowsPerPageOptions: [5, 10, 20, 30, 50, 100],
                        showFirstButton: false,
                        showLastButton: false,
                        SelectProps: {
                          native: true,
                        },
                        labelRowsPerPage: "Número de filas visibles",
                      }}
                    />
                  </CustomTabPanel>
                </Box>
              </Box>
            </Container>
          </Box>
        </>
      ) : (
        "No paso"
      )}
    </Box>
  );
};

export default AgregarMiembros;