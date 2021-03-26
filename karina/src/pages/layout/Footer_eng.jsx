import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return ( 
        <footer className="footer bg-dark mt-5 py-4">
        <div className="container">
            <div className="row">
                <ul className="nav col flex-column flex-sm-row text-center">
                    <li className="nav-item"><Link to='/en/welcome' className='nav-link'>Welcome</Link></li>
                    <li className="nav-item"><Link to='/en/us' className='nav-link'>Us</Link></li>
                    <li className="nav-item"><Link to='/en/contact' className='nav-link'>Contact</Link></li>
                </ul>
                <p className="copyright text-light col-md-4 text-center text-md-right m-0 mt-4 mt-md-0">
                    2020 All Rights Reserved
                </p>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;