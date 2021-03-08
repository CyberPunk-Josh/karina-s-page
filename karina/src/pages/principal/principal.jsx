import React, {Fragment} from 'react';
import Barra from '../layout/Barra';
import Footer from '../layout/Footer';
import BannerRecorre from './components/BannerRecorre';
import Header from './components/Header';
import NuestraExperiencia from './components/NuestraExperiencia';
import SobreNosotros from './components/SobreNosotros';
import ViajesFavoritos from './components/ViajesFavoritos';

const Principal = () => {
    return ( 
        <Fragment>
            <Barra />
            <Header />
            <SobreNosotros />
            <ViajesFavoritos />
            <BannerRecorre />
            <NuestraExperiencia/>
            <Footer />
        </Fragment>
     );
}
 
export default Principal;