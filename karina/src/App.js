import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// components
import Principal from './pages/principal/principal';
import Nosotros from './pages/nosotros/Nosotros';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Principal} />
          <Route path='/nosotros' exact component={Nosotros} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
