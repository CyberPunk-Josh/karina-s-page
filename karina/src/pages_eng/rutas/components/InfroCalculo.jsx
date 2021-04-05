import React from 'react';
import calc from '../../../img/calc.svg';

const InfoCalculo = () => {
    return ( 
        <section class="container mt-5">
            <h2 class="text-center mb-3">Our Prices Calculate Based on:</h2>
            <div class="row calc">
                    <ul class="col-md-6 d-column align-items-center list-unstyled text-center">
                        <li class="nav-item mb-2">Number of People</li>
                        <i class="fas fa-users mb-4 "></i>
                        <li class="nav-item mb-2">Place Of Origin</li>
                        <i class="fas fa-map-marker-alt mb-4 "></i>
                        <li class="nav-item mb-2">Place of Destiny</li>
                        <i class="fas fa-car-side mb-4 "></i>
                        <li class="nav-item mb-2">Tour or Transfer</li>
                        <i class="fas fa-route"></i>
                    </ul>
                    <img src={calc} alt="calculo de precios" class="col-md-6 text-center text-md-right m-0 mt-4 mt-md-0" />
            </div>
        </section>
     );
}
 
export default InfoCalculo;