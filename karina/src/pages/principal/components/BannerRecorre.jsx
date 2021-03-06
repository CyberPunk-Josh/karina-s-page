import React from 'react';
import {Link} from 'react-router-dom';

const BannerRecorre = () => {
    return ( 
        <section className="encuentra mt-5">
            <div className="container">
                <div className="row text-light align-items-center">
                    <div className="col">
                        <h3>Recorre México con Nosotros</h3>
                        <p>Llena el formulario y un asesor se pondra en contacto contigo</p>
                        <Link to='/contacto' className="btn btn-warning text-uppercase py-2 mt-4 text-dark">Contactanos</Link>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default BannerRecorre;