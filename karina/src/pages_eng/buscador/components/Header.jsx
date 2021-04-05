import React from 'react';

const Header = () => {
    return ( 
        <section className="fondo_buscador">
            <div className="d-flex text-center flex-column align-items-center justify-content-center aw-vertical-align">
                <h1 className="text-uppercase nombre text-white">VIKA Turismo y Transporte</h1>
                <p className="lead text-white px-5">Find your next destination with us</p>
                <p className="lead text-white px-4">Ask for our discounts and promotions for nationals and foreigners.</p>
            </div>
            <a href="http://wa.me/+525525744535?text=Deseo%20contactar%20con%20%20Transporte%20Yue%20" title='WhatsApp Yue' class="whatsapp" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
        </section>
     );
}
 
export default Header;