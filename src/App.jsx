import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORTO LOS COMPONENTES
// import AnimatedCover from "./componentes/AnimatedCover";

import Home from "./componentes/Home";
import SobreMi from "./componentes/SobreMi";
import Conocimientos from "./componentes/Conocimientos";
import Proyectos from "./componentes/Proyectos";
import Contactos from "./componentes/Contactos";

// IMPORTO LOS 'CSS'
import "./App.css";
import "./css/animatedCover/AnimatedCoverDESKTOP.css";
import "./css/animatedCover/AnimatedCoverMOBILE.css";

import "./css/home/HomeDESKTOP.css";
import "./css/home/HomeMOBILE.css";

import "./css/menu/MenuDESKTOP.css";
import "./css/menu/MenuMOBILE.css";

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
    <div
      className="App"
      // className={`App ${active === true ? "disable-scroll" : ""}`}
    >
      {/* <AnimatedCover onPress={() => setActive(false)} 
      /> */}
      <Home />
      <SobreMi />
      <Conocimientos />
      <Proyectos />
      <Contactos />
    </div>
  );
}

export default App;
