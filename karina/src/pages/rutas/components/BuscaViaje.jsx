import React from 'react';
import {Link} from 'react-router-dom';

const BuscaViaje = () => {
    return ( 
        <div class="text-center buscador-viajes">
            <p class="text-uppercase">Busca tu  siguiente viaje en nuestro buscador</p>
            <Link to='/buscador' class="btn btn-warning py-2 text-uppercase">Buscador de Viajes</Link>
        </div>
     );
}
 
export default BuscaViaje;