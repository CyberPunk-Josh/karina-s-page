import React from 'react';
import {Link} from 'react-router-dom';

const BuscaViaje = () => {
    return ( 
        <div class="text-center buscador-viajes">
            <p class="text-uppercase">Find your next trip in our search engine</p>
            <Link to='/en/trips' class="btn btn-warning py-2 text-uppercase">Travel Search Engine</Link>
        </div>
     );
}
 
export default BuscaViaje;