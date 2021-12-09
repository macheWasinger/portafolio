import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// IMPORTO LOS COMPONENTES
import Home from './componentes/Home';
import SobreMi from './componentes/SobreMi';
import Conocimientos from './componentes/Conocimientos';
import Proyectos from './componentes/Proyectos';
import Contactos from './componentes/Contactos';

// IMPORTO LOS 'CSS'
import './App.css';
import './css/Home.css';
import './css/Menu.css';
import './css/SobreMi.css';
import './css/Conocimientos.css';
import './css/Proyectos.css';
import './css/Contactos.css';

function App() {
  return (
    <div className="App">
      <Home />
      <SobreMi />
      <Conocimientos />
      <Proyectos />
      <Contactos />
    </div>
  );
}

export default App;
