import React, {Fragment} from 'react';
import Barra from '../layout/Barra';
import Header from './components/Header';
import ViajesFav from './components/ViajesFav';
import ViajesSec from './components/ViajesSec';
import BannerRecorre from '../principal/components/BannerRecorre';
import InfoCalculo from './components/InfoCalculo';
import Footer from '../layout/Footer';
import BuscaViaje from './components/BuscaViaje';

const Rutas = () => {
    return ( 
        <Fragment>
            <Barra />
            <Header />
            <ViajesFav />
            <ViajesSec />
            <BuscaViaje/>
            <BannerRecorre />
            <InfoCalculo />
            <Footer/>
        </Fragment>
     );
}
 
export default Rutas;