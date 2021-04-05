import React from 'react';

import yue from '../../../img/yue.webp';

const AcercaNostros = () => {
    return ( 
        <section class="container karina-logo">
            <h2 class="text-uppercase text-center">About Us</h2>
            <div class="row text-center">
                <div class="col-md-5">
                    <img src={yue} alt="imagen yue" className='img-fluid'/>
                </div>
                <div class="col-md-7 d-flex align-items-center justify-content-center">
                    <p>We are a  100 %  Mexican Company, 20 years of experience  transporting people on pleasure or business trips throughout the Mexican Republic offering a variety of representative places of our beloved country  with high-end vehicles operated by a private chauffeur and and your specialized tour guide who will advice you about the subjects of your tour.
                    VIKA designs the route and itinerary according to your tour necesities , all our experience is offered in order to give you the best tour experience you deserve. We move our people from a asingle pax up to 20. Giving to you our traditional kidness and warmth of a mexican family.
                    Our vehicles will exceed your expectations   since we have cars and trucks with capacity for up to 20 people according to your requirement with the warmth and kindness of a Mexican family.</p>
                </div>
            </div>
        </section>
     );
}
 
export default AcercaNostros;