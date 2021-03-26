import React from 'react';

import icono_seguridad from '../../../img/icono_seguridad.webp';
import icono_disponible from '../../../img/icono_disponible.webp';
import icono_precio from '../../../img/icono_precio.webp';

const SobreNosotros = () => {
    return ( 
        <section className="container sobre-nosotros mt-5">
            <h2 className="text-center mb-5">More About Us</h2>
            <div className="row">
                <div className="col-sm-4 text-center">
                    <img src={icono_disponible}alt="icono disponible" className="img-fluid mb-4" />
                    <h3 className="mb-3 text-uppercase">Immediate Availability</h3>
                    <p>Service 24/7, 365 days a year.  Contact us and make your reservation. Contact us,  get reports and make your reservation.</p>
                </div>
                <div className="col-sm-4 text-center">
                    <img src={icono_seguridad} alt="icono seguridad" className="img-fluid mb-4"/>
                    <h3 className="mb-3 text-uppercase">Security</h3>
                    <p>VIKA tourism and transport we bear in mind that safety is one of the most important aspects of the trip, that is why we offered  you insurance coverage to our passengers and our vehicles always under mechanical supervisión and more important real mechanical maintenance.</p>
                </div>
                <div className="col-sm-4 text-center">
                    <img src={icono_precio} alt="icono precio" className="img-fluid mb-4"/>
                    <h3 className="mb-3 text-uppercase">The best Price</h3>
                    <p>Rate according  to your service requested. Contact one of our agents and get your reservation.</p>
                </div>
            </div>
        </section>
     );
}
 
export default SobreNosotros;