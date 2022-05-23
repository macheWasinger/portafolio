import React, { useRef } from "react";

import { Link } from "react-scroll";

import useScrollSpy from "react-use-scrollspy";
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
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  return (
    <div className="App">
      <div className="container-menuDesktop shadow">
        <article
          className={`w-25 rounded-pill ${
            activeSection === 0 ? "ancla_activo" : ""
          }`}
        >
          <Link
            to="Home"
            smooth={true}
            className={`rounded-pill ${
              activeSection === 0 ? "ancla_activo borde-ancla" : ""
            }`}
          >
            <i class="fa-solid fa-house"></i>
          </Link>
        </article>

        <article
          className={`w-25 rounded-pill ${
            activeSection === 1 ? "ancla_activo" : ""
          }`}
        >
          <Link
            to="SobreMi"
            smooth={true}
            className={`rounded-pill ${
              activeSection === 1 ? "ancla_activo borde-ancla" : ""
            }`}
          >
            <i class="fa-solid fa-user-tie"></i>
          </Link>
        </article>

        <article
          className={`w-25 rounded-pill ${
            activeSection === 2 ? "ancla_activo" : ""
          }`}
        >
          <Link
            to="Conocimientos"
            smooth={true}
            className={`rounded-pill ${
              activeSection === 2 ? "ancla_activo borde-ancla" : ""
            }`}
          >
            <i class="fa-solid fa-code"></i>
          </Link>
        </article>

        <article
          className={`w-25 rounded-pill ${
            activeSection === 3 ? "ancla_activo" : ""
          }`}
        >
          <Link
            to="Proyectos"
            smooth={true}
            className={`rounded-pill ${
              activeSection === 3 ? "ancla_activo borde-ancla" : ""
            }`}
          >
            <i class="fa-solid fa-laptop-code"></i>
          </Link>
        </article>

        <article
          className={`w-25 rounded-pill ${
            activeSection === 4 ? "ancla_activo" : ""
          }`}
        >
          <Link
            to="Contactos"
            smooth={true}
            className={`rounded-pill ${
              activeSection === 4 ? "ancla_activo borde-ancla" : ""
            }`}
          >
            <i class="fa-solid fa-address-card"></i>
          </Link>
        </article>
      </div>

      <section ref={sectionRefs[0]}>
        <Home />
      </section>

      <section ref={sectionRefs[1]}>
        <SobreMi />
      </section>

      <section ref={sectionRefs[2]}>
        <Conocimientos />
      </section>

      <section ref={sectionRefs[3]}>
        <Proyectos />
      </section>

      <section ref={sectionRefs[4]}>
        <Contactos />
      </section>
    </div>
  );
}

export default App;
