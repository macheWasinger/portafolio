import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";

import logoAnimado from "../../video/logo-mw.mp4";

const Menu = () => {
  const [isActive, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!isActive);
  };

  return (
    <div className="container-Padre_menu">
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

      <nav className={`menu-navegacion ${isActive ? "menu-activado" : "hide"}`}>
        <video
          onLoadedMetadata="this.muted=true"
          autoPlay
          loop
          muted
          className="style-logo-video"
          style={{ display: "none" }}
        >
          <source src={logoAnimado} />
        </video>
        <ul>
          <div className="items-container">
            <li className="item-li" onClick={toggleMenu}>
              <a href="#Home" smooth={true}>
                Inicio
              </a>
            </li>
            <li className="item-li" onClick={toggleMenu}>
              <a href="#SobreMi" smooth={true}>
                Sobre mí
              </a>
            </li>
            <li className="item-li" onClick={toggleMenu}>
              <a href="#Conocimientos" smooth={true}>
                Conocimientos
              </a>
            </li>
            <li className="item-li" onClick={toggleMenu}>
              <a href="#Proyectos" smooth={true}>
                Proyectos
              </a>
            </li>
            <li className="item-li" onClick={toggleMenu}>
              <a href="#Contactos" smooth={true}>
                Contactos
              </a>
            </li>
          </div>
        </ul>
        <div className="container-logos">
        <a
          href="https://github.com/macheWasinger"
          target="_blank">
          <i class="fab fa-github style-i"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/marcelowasinger/">
          <i class="fab fa-linkedin-in style-i"></i>
        </a>
        <a
          href="https://twitter.com/maw_2018"
          target="_blank">
          <i class="fab fa-twitter style-i"></i>
        </a>
        <a
          href="https://www.instagram.com/machewasinger90/">
          <i class="fab fa-instagram style-i"></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100070072241358">
          <i class="fab fa-facebook-f style-i"></i>
        </a>
      </div>
      </nav>
    </div>
  );
};

export default Menu;
