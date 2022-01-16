import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";

import logoMW from "../../img/logo-mw.png";

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
      </nav>
    </div>
  );
};

export default Menu;
