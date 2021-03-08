import React from 'react';

const Header = () => {
    return ( 
        <section className="fondo2">
            <div className="d-flex text-center flex-column align-items-center justify-content-center aw-vertical-align">
                <h1 className="text-uppercase nombre">Acerca de Nosotros</h1>
                <p className="lead">VIKA turismo y transporte</p>
            </div>
            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L1440,64L1440,320L0,320Z"></path></svg>
        </section>
     );
}
 
export default Header;