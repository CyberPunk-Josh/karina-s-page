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
                <Link to='/en/welcome' className={navbar ? 'text-uppercase text-white' : 'text-uppercase text-dark'}>Welcome</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/en/us' className={navbar ? 'text-uppercase text-white' : 'text-uppercase text-dark'}>Us</Link>
            </Nav.Link>
            <Nav.Link >
                <Link to='/en/routes' className={navbar ? 'text-uppercase text-white' : 'text-uppercase text-dark'}>Routes</Link>
            </Nav.Link>
            <Nav.Link >
                <Link to='/en/trips' className={navbar ? 'text-uppercase text-white' : 'text-uppercase text-dark'}>Trips</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/en/contact' className={navbar ? 'text-uppercase text-white' : 'text-uppercase text-dark'}>Contact</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/' className={navbar ? 'text-uppercase text-white' : 'text-uppercase text-dark'}>Es</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='/en/welcome' className={navbar ? 'text-uppercase text-warning' : 'text-uppercase text-warning'}>En</Link>
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
     );
}
 
export default Barra;