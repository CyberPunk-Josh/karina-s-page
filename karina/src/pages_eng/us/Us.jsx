import React, {Fragment} from 'react';

// components
import Barra from '../../pages/layout/Barra_eng';
import Header from '../us/components/Header_eng';
import About from '../us/components/AcercaNosotros_eng';
import Acordion from '../us/components/Acordion_eng';
import Facebook from '../us/components/Facebook_eng';
import Footer from '../../pages/layout/Footer_eng';

const Us = () => {
    return ( 
        <Fragment>
            <Barra/>
            <Header/>
            <About/>
            <Acordion/>
            <Facebook/>
            <Footer/>
        </Fragment>
     );
}
 
export default Us;