import React from 'react';
import Navbar from './componentes/Navbar';
import './App.css';
import Home from './componentes/paginas/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Farmacias from './componentes/paginas/Farmacias';
import Medicamentos from './componentes/paginas/Medicamentos';
import Perfil from './componentes/paginas/Perfil';
import LogIn from './componentes/paginas/LogIn';
import Registro from './componentes/paginas/Registro';
import DetalleProducto from './componentes/paginas/DetalleProducto';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/farmacias'  component={Farmacias} />
          <Route path='/medicamentos' component={Medicamentos} />
          <Route path='/log-in' component={LogIn} />
          <Route path='/registro' component={Registro} />
          <Route path='/perfil' component={Perfil} />
          <Route path='/detalle' component={DetalleProducto} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
