import React from 'react';

const Header = () => {
    return ( 
        <section className="fondo">
            <div className="d-flex text-center flex-column align-items-center justify-content-center aw-vertical-align">
                <h1 className="text-uppercase nombre text-white">VIKA Turismo y Transporte</h1>
                <p className="lead text-white px-5">Las mejores experiencias en recorridos y transportación terrestre en toda la ciudad de México y república mexicana con VIKA, turismo y transporte.</p>
                <p className="lead text-white px-4">Pregunta por nuestros descuentos y promociones para nacionales y extranjeros.</p>
            </div>
            <a href="http://wa.me/+525525744535?text=Deseo%20contactar%20con%20%20Transporte%20Yue%20" title='WhatsApp Yue' class="whatsapp" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
        </section>
     );
}
 
export default Header;