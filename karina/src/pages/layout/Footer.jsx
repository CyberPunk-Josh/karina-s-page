import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return ( 
        <footer className="footer bg-dark mt-5 py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-4 columna-footer">
                    <h2 className='text-center'>Links</h2>
                    <ul className="nav text-center d-flex flex-column justify-content-center">
                        <li className="nav-item"><Link to='/' className='nav-link'>Inicio</Link></li>
                        <li className="nav-item"><Link to='/nosotros' className='nav-link'>Nosotros</Link></li>
                        <li className="nav-item"><Link to='/contacto' className='nav-link'>Contacto</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 columna-footer">
                    <h2 className='text-center'>Contacto</h2>
                    <p className='text-center text-white'>Teléfono: 55 2574 4535</p>
                    <ul className="nav d-flex flex-column justify-content-center align-items-center">
                        <div class="wrapper">
                            <div class="button">
                                <div class="icon">
                                    <i class="fab fa-facebook-square"></i>
                                </div>
                                <a href="https://www.facebook.com/VIKA-turismo-y-transporte-102375181811166" target="blank" className='text-decoration-none'>
                                    <span>Facebook</span>
                                </a>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <p className="copyright text-light text-center footer-yue">
                        &copy; 2021 <span>Tranporte Yue</span>. Todos los derechos reservados
                    </p>
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;