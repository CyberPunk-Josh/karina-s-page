import React from 'react';

import yue from '../../../img/yue.webp';

const AcercaNostros = () => {
    return ( 
        <section class="container karina-logo">
            <h2 class="text-uppercase text-center">Acerca de Nosotros</h2>
            <div class="row text-center">
                <div class="col-md-5">
                    <img src={yue} alt="imagen yue" className='img-fluid'/>
                </div>
                <div class="col-md-7 d-flex align-items-center justify-content-center">
                    <p>Somos una empresa 100% mexicana con 20 años de experiencia en trasportación de personas en viajes de placer o negocios y dar recorridos turísticos o paseos culturales en toda la república Mexicana, ofreciendo gran variedad de lugares representativos de nuestro México con autos de alta gamma con los mejores Guías de turistas certificados ante la secretaria de turismo y choferes capacitados en los siguientes idiomas: inglés, francés, alemán, portugués y español. VIKA turismo y transporte diseña y construye el recorrido e itinerario de acuerdo a tus necesidades ya que contamos con autos y camionetas con capacidad de hasta 20 personas según sea tu requerimiento con la calidez y amabilidad de una familia Mexicana.</p>
                </div>
            </div>
        </section>
     );
}
 
export default AcercaNostros;