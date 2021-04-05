import React from 'react';

// tarjetas
import Antropologia from '../Cards/Antropologia';
import Basilica from '../Cards/Basilica';
import Mural from '../Cards/MuralU';
import PlayaMazunte from '../Cards/PlayaMazunte';
import Teotihuacan from '../Cards/Teotihuacan';
import Tequila from '../Cards/Tequila';
import Tula from '../Cards/Tula';
import Vitral from '../Cards/Vitral';
import CascadaChiflon from '../Cards/CascadaChiflon';
import LagosMonte from '../Cards/LagosMonte';
import SCristobal from '../Cards/SCristobal';
import Callon from '../Cards/Callon';
import Palenque from '../Cards/Palenque';
import Chichen from '../Cards/Chichen';
import Ekbalam from '../Cards/Ekbalam';
import Cenotes from '../Cards/Cenotes';
import Valladolid from '../Cards/Valladolid';
import Xcaret from '../Cards/Xcaret';

const ViajesSec = () => {
    return ( 
        <div className="container mt-5">
            <h2 className='text-center mb-5'>Our Favorite Trips</h2>
            <div className="container-cards">
            <div className="row ">
                <div className="col-md-4 mt-3">
                    <Antropologia />
                </div>
                <div className="col-md-4 mt-3">
                    <Basilica/>
                </div>
                <div className="col-md-4 mt-3">
                    <Mural/>
                </div>
                <div className="col-md-4 mt-3">
                    <Vitral/>
                </div>
                <div className="col-md-4 mt-3">
                    <Teotihuacan/>
                </div>
                <div className="col-md-4 mt-3">
                    <Tula/>
                </div>
                <div className="col-md-4 mt-3">
                    <Tequila/>
                </div>
                <div className="col-md-4 mt-3">
                    <PlayaMazunte/>
                </div>
                <div className="col-md-4 mt-3">
                    <CascadaChiflon />
                </div>
                <div className="col-md-4 mt-3">
                    <LagosMonte/>
                </div>
                <div className="col-md-4 mt-3">
                    <SCristobal />
                </div>
                <div className="col-md-4 mt-3">
                    <Callon />
                </div>
                <div className="col-md-4 mt-3">
                    <Palenque />
                </div>
                <div className="col-md-4 mt-3">
                    <Chichen/>
                </div>
                <div className="col-md-4 mt-3">
                    <Ekbalam/>
                </div>
                <div className="col-md-4 mt-3">
                    <Cenotes/>
                </div>
                <div className="col-md-4 mt-3">
                    <Valladolid/>
                </div>
                <div className="col-md-4 mt-3">
                    <Xcaret/>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default ViajesSec;