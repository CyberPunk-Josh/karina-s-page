import React from 'react';

import facebook from '../../../img/facebook.svg';

const Facebook = () => {
    return ( 
        <div class="container facebook mt-5">
        <div class="row">
            <div class="col-md-8 text-center">
                <img src={facebook} alt="pagina de facebook" class="img-fluid" />
            </div>
            <div class="col-md-4 d-column align-items-center justify-content-center mt-4">
                <p class="text-center text-uppercase">Encuentranos en Facebook</p>
                <a href="https://www.facebook.com/VIKA-turismo-y-transporte-102375181811166" class="btn btn-warning text-uppercase py-2 d-block text-white">Pagina Facebook</a>
            </div>
        </div>
    </div>
     );
}
 
export default Facebook;