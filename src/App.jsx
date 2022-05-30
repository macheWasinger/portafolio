import React, { useState, useRef } from "react";

import { Link } from "react-scroll";

import useScrollSpy from "react-use-scrollspy";
import "bootstrap/dist/css/bootstrap.min.css";

// IMPORTO LOS COMPONENTES

import Home from "./componentes/Home";
import SobreMi from "./componentes/SobreMi";
import Conocimientos from "./componentes/Conocimientos";
import Proyectos from "./componentes/proyectosVersiones/Proyectos";
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
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

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
            className={`style-Link title_section-home rounded-pill ${
              activeSection === 0 ? "ancla_activo borde-ancla text-hide" : ""
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
            className={`style-Link title_section-sobreMi rounded-pill ${
              activeSection === 1 ? "ancla_activo borde-ancla text-hide" : ""
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
            className={`style-Link title_section-conocimientos rounded-pill ${
              activeSection === 2 ? "ancla_activo borde-ancla text-hide" : ""
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
            className={`style-Link title_section-proyectos rounded-pill ${
              activeSection === 3 ? "ancla_activo borde-ancla text-hide" : ""
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
            className={`style-Link title_section-contactos rounded-pill ${
              activeSection === 4 ? "ancla_activo borde-ancla text-hide" : ""
            }`}
          >
            <i class="fa-solid fa-address-card"></i>
          </Link>
        </article>
      </div>

      {/************ MENÚ RESPONSIVE ************/}
      <div className="container-Padre_menu" style={{ display: "none" }}>
        <div className="burger">
          <input
            type="checkbox"
            id="btn-menu"
            checked={isActive}
            onClick={toggleMenu}
          />
          <label for="btn-menu" className="label-menu">
            <span id="span-1"></span>
            <span id="span-2"></span>
            <span id="span-3"></span>
          </label>
        </div>

        <nav
          className={`menu-navegacion ${isActive ? "menu-activado" : "hide"}`}
        >
          <div className="container-menuMobile shadow">
            <article
              className={`article-menu w-25 rounded-pill ${
                activeSection === 0 ? "ancla_activo" : ""
              }`}
              onClick={toggleMenu}
            >
              <a
                href="#Home"
                className={`rounded-pill ${
                  activeSection === 0 ? "ancla_activo borde-ancla" : ""
                }`}
                smooth={true}
              >
                <i class="fa-solid fa-house"></i>
              </a>
            </article>

            <article
              className={`article-menu w-25 rounded-pill ${
                activeSection === 1 ? "ancla_activo" : ""
              }`}
              onClick={toggleMenu}
            >
              <a
                href="#SobreMi"
                className={`rounded-pill ${
                  activeSection === 1 ? "ancla_activo borde-ancla" : ""
                }`}
                smooth={true}
              >
                <i class="fa-solid fa-user-tie"></i>
              </a>
            </article>

            <article
              className={`article-menu w-25 rounded-pill ${
                activeSection === 2 ? "ancla_activo" : ""
              }`}
              onClick={toggleMenu}
            >
              <a
                href="#Conocimientos"
                className={`rounded-pill ${
                  activeSection === 2 ? "ancla_activo borde-ancla" : ""
                }`}
                smooth={true}
              >
                <i class="fa-solid fa-code"></i>
              </a>
            </article>

            <article
              className={`article-menu w-25 rounded-pill ${
                activeSection === 3 ? "ancla_activo" : ""
              }`}
              onClick={toggleMenu}
            >
              <a
                href="#Proyectos"
                className={`rounded-pill ${
                  activeSection === 3 ? "ancla_activo borde-ancla" : ""
                }`}
                smooth={true}
              >
                <i class="fa-solid fa-laptop-code"></i>
              </a>
            </article>

            <article
              className={`article-menu w-25 rounded-pill ${
                activeSection === 4 ? "ancla_activo" : ""
              }`}
              onClick={toggleMenu}
            >
              <a
                href="#Contactos"
                className={`rounded-pill ${
                  activeSection === 4 ? "ancla_activo borde-ancla" : ""
                }`}
                smooth={true}
              >
                <i class="fa-solid fa-address-card"></i>
              </a>
            </article>
          </div>

          <div className="container-logos">
            <a
              href="https://www.linkedin.com/in/marcelowasinger/"
              className="logo-redSocial__container github-container"
              target="_blank"
            >
              <i class="fab fa-github style-i"></i>
            </a>
            <a
              href="https://github.com/macheWasinger"
              className="logo-redSocial__container linkedin-container"
              target="_blank"
            >
              <i class="fab fa-linkedin-in style-i"></i>
            </a>
            <a
              className="logo-redSocial__container instagram-container"
              href="https://www.instagram.com/machewasinger90/"
              target="_blank"
            >
              <i class="fab fa-instagram style-i"></i>
            </a>
            <a
              className="logo-redSocial__container whatsapp-container"
              href="https://wa.me/541130911213"
              target="_blank"
            >
              <i className="fab fa-whatsapp whatsapp-icon style-i"></i>
            </a>
            <a
              href="mailto: marcelo_wasinger@hotmail.com"
              className="logo-redSocial__container mail-container"
            >
              <i class="fas fa-envelope style-i"></i>
            </a>
          </div>
        </nav>
      </div>

      {/*****************************************/}

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
