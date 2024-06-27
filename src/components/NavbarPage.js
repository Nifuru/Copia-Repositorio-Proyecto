import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand } from 'reactstrap';
import { FaHome } from "react-icons/fa";
import Dashboard from './Dashboard';
import logo from "../assets/Logo_SaleGo.png";
import Box from '@mui/material/Box';
import { FaServer, FaRegAddressCard, FaRegSun, FaDesktop } from "react-icons/fa";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      secondDropdownOpen: false,
    };
  }

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  toggleSecondDropdown = () => {
    this.setState({
      secondDropdownOpen: !this.state.secondDropdownOpen,
    });
  };

  render() {
    return (
     <Box>
        {/* ======= Top Bar ======= */}
        <Box sx={{  width:80, height:80}}> <img className="imglogin" src={logo}
                alt="login form" style={{ width: '100%', height: '100%', objectFit: 'cover'}}  /></Box>

        {/* ======= Header */}
        <header id="header" className="">
          {/* Barra de navegación principal */}
          <Navbar  style={{ backgroundColor: "#0328fc" }}  dark expand="md">
    
             
           
          
              {/* <a href="/Home" className="container d-flex align-items-center">
                <strong className="icon-home">
                  <FaHome />
                </strong>
              </a> */}
          
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
              <NavItem>
                  <NavLink href="/Cartera"><FaRegAddressCard /> Cartera</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/LevantamientoForm"><FaRegAddressCard /> Levantamiento  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Propuesta"><FaRegAddressCard /> Propuesta  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Soportereunionform"><FaRegAddressCard /> Soporte Reunion
                    </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/TratoCreadoForm"><FaRegAddressCard /> Trato Creado  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/MenuMaestro"><FaServer /> Menu Maestro</NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink href="/Equipos"><FaRegAddressCard /> Equipos</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink href="/Usuarios"><FaRegAddressCard /> Usuarios</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/CMClientes"><FaDesktop />
                  </NavLink>
                </NavItem>
              </Nav>
         
            </Collapse>
          </Navbar>
        </header>
        <Dashboard />
        {/* FIN */}
        </Box>
    );
  }
}

export default NavbarPage;