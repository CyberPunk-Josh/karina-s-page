import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import logo_mini from '../../img/logo_mini.webp';

const Barra = () => {

    const [navbar, setnavbar] = useState(false);


    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setnavbar(true)
        } else {
            setnavbar(false)
        }
    };

    window.addEventListener('scroll', changeBackground)


    // nav_prin fixed-top navegacion active active
    return ( 
        <Navbar expand="lg" className={navbar ? 'nav_prin fixed-top navegacion activo' : 'nav_prin fixed-top active'}>
        <Navbar.Brand href="/" className='nav-principal'><img src={ logo_mini } alt="logo transporte yue" className='img-fluid'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link >
                <Link to='/' className={navbar ? 'text-uppercase text-white' : 'text-uppercase text-dark'}>Inicio</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/nosotros' className={navbar ? 'text-uppercase text-white' : 'text-uppercase text-dark'}>Nosotros</Link>
            </Nav.Link>
            <Nav.Link >
                <Link to='/rutas' className={navbar ? 'text-uppercase text-white' : 'text-uppercase text-dark'}>Rutas</Link>
            </Nav.Link>
            <Nav.Link >
                <Link to='/buscador' className={navbar ? 'text-uppercase text-white' : 'text-uppercase text-dark'}>Viajes</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/contacto' className={navbar ? 'text-uppercase text-white' : 'text-uppercase text-dark'}>Contacto</Link>
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
     );
}
 
export default Barra;