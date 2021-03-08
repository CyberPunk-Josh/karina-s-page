import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import logo_mini from '../../img/logo_mini.webp';

const Barra = () => {
    return ( 
        <Navbar expand="lg" className='nav_prin fixed-top navegacion'>
        <Navbar.Brand href="#home" className='nav-principal'><img src={ logo_mini } alt="logo transporte yue" className='img-fluid'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#home" className='text-uppercase'>Inicio</Nav.Link>
            <Nav.Link href="#link" className='text-uppercase'>Nosotros</Nav.Link>
            <Nav.Link href="#link" className='text-uppercase'>Rutas</Nav.Link>
            <Nav.Link href="#link" className='text-uppercase'>Contacto</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
     );
}
 
export default Barra;