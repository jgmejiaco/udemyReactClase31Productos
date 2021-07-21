import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

//  React Router DOM para las rutas de cada página
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//  REDUX tiene su propio PROVIDER
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}> {/* Todas las funciones de los reducers estarán disponibles en todo el proyecto */}
        <Header />

        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Productos}/>
            <Route exact path="/productos/nuevo" component={NuevoProducto}/>
            <Route exact path="/productos/editar/:id" component={EditarProducto}/>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
