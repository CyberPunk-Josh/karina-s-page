import React, {Fragment} from 'react';

// components
import Barra from '../../pages/layout/Barra_eng';
import Header from '../welcome/components/Header';
import About from '../welcome/components/SobreNosotros_eng';
import Favorite from '../welcome/components/ViajesFavoritos_eng';
import Banner from '../welcome/components/BannerRecorre_eng';
import Experience from '../welcome/components/NuestraExperiencia_eng';
import Footer from '../../pages/layout/Footer_eng';

const Welcome = () => {
    return ( 
        <Fragment>
            <Barra/>
            <Header/>
            <About/>
            <Favorite/>
            <Banner/>
            <Experience/>
            <Footer/>
        </Fragment>
     );
}
 
export default Welcome;