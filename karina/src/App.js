import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// components
import Principal from './pages/principal/principal';
import Nosotros from './pages/nosotros/Nosotros';
import Rutas from './pages/rutas/rutas';
import Contacto from './pages/Contacto/Contacto';
import Buscador from './pages/buscador/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Principal} />
          <Route path='/nosotros' exact component={Nosotros} />
          <Route path='/rutas' exact component={Rutas}/>
          <Route path='/contacto' exact component={Contacto}/>
          <Route path='/buscador' exact component={Buscador}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
