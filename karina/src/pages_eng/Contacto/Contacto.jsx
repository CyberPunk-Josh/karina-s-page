import React, {Fragment} from 'react';
import Barra from '../../pages/layout/Barra_eng';
import Footer from '../../pages/layout/Footer_eng';
import Formulario from './Components/Formulario';
import Header from './Components/Header';

const Contacto = () => {
    return ( 
        <Fragment>
            <Barra/>
            <Header />
            <Formulario/>
            <Footer/>
        </Fragment>
     );
}
 
export default Contacto;