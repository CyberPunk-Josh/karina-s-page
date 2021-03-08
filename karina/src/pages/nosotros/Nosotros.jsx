import React, {Fragment} from 'react';

// components
import Barra from '../layout/Barra';
import Header from '../nosotros/components/Header';
import AcercaNosotros from '../nosotros/components/AcercaNosotros';
import Acordion from '../nosotros/components/Acordion';
import Facebook from '../nosotros/components/Facebook';
import Footer from '../layout/Footer';

const Nosotros = () => {
    return ( 
        <Fragment>
            <Barra />
            <Header />
            <AcercaNosotros />
            <Acordion />
            <Facebook />
            <Footer />
        </Fragment>
     );
}
 
export default Nosotros;