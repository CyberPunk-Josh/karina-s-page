import React from 'react';

const Header = () => {
    return ( 
        <section class="fondo4">
            <div class="d-flex text-center flex-column align-items-center justify-content-center aw-vertical-align">
                <h1 class="text-uppercase nombre">Contact</h1>
                <p class="lead">VIKA turismo y transporte</p>
            </div>
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L1440,64L1440,320L0,320Z"></path></svg>
            <a href="http://wa.me/+525525744535?text=Deseo%20contactar%20con%20%20Transporte%20Yue%20" title='WhatsApp Yue' class="whatsapp" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
        </section>
     );
}
 
export default Header;