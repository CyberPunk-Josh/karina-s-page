import React, {Fragment} from 'react';
import Barra from '../layout/Barra';
import Header from './components/Header';
import Buscador from './components/SearchFilter';

const Index = () => {
    return ( 
        <Fragment>
            <Barra />
            <Header />
            <Buscador/>
        </Fragment>
     );
}
 
export default Index;