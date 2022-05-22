import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORTO LOS COMPONENTES

import Home from "./componentes/Home";
import SobreMi from "./componentes/SobreMi";
import Conocimientos from "./componentes/Conocimientos";
import Proyectos from "./componentes/Proyectos";
import Contactos from "./componentes/Contactos";

// IMPORTO LOS 'CSS'
import "./App.css";

import "./css/home/HomeDESKTOP.css";
import "./css/home/HomeMOBILE.css";

import "./css/menu/Menu-desktop.css";
import "./css/menu/Menu-mobile.css";

import "./css/sobreMi/SobreMiDESKTOP.css";
import "./css/sobreMi/SobreMiMOBILE.css";

import "./css/conocimientos/ConocimientosDESKTOP.css";
import "./css/conocimientos/ConocimientosMOBILE.css";

import "./css/proyectos/ProyectosDESKTOP.css";
import "./css/proyectos/ProyectosMOBILE.css";

import "./css/contactos/ContactosDESKTOP.css";
import "./css/contactos/ContactosMOBILE.css";

function App() {
  // const [active, setActive] = React.useState(true);

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
