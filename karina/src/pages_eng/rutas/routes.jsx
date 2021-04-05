import React, {Fragment} from 'react';

// components
import Barra from '../../pages/layout/Barra_eng';
import Footer from '../../pages/layout/Footer_eng';
import Header from './components/Header';
import ViajesFav from './components/ViajesFav';
import ViajesSec from './components/ViajesSec';
import BuscaViaje from './components/BuscaViaje';
import BannerRecorre from '../welcome/components/BannerRecorre_eng';
import InfoCalculo from './components/InfroCalculo';

const Routes = () => {
    return ( 
        <Fragment>
            <Barra/>
            <Header/>
            <ViajesFav/>
            <ViajesSec/>
            <BuscaViaje/>
            <BannerRecorre/>
            <InfoCalculo/>
            <Footer/>
        </Fragment>
     );
}
 
export default Routes;