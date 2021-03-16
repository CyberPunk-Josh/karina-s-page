import React, {Fragment} from 'react';
import Barra from '../layout/Barra';
import Footer from '../layout/Footer';
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