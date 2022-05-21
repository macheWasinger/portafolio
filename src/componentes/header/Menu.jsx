import React from "react";
import { useState } from "react";

import logoAnimado from "../../video/logo-mw-black.mp4";

const Menu = () => {
  const [active, setActive] = React.useState(0);
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
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

      <nav className={`menu-navegacion ${isActive ? "menu-activado" : "hide"}`}>
        <video
          autoPlay
          loop
          muted
          className="style-logo-video"
          style={{ display: "none" }}
        >
          <source src={logoAnimado} />
        </video>

        <div className="container-menuMobile shadow">
          <article
            className="article-menu w-25 rounded-pill"
            onClick={toggleMenu}
          >
            <a
              href="#Home"
              onClick={() => setActive(0)}
              className={`rounded-pill ${active === 0 ? "ancla_activo" : ""}`}
              smooth={true}
            >
              <i class="fa-solid fa-house"></i>
            </a>
          </article>

          <article
            className="article-menu w-25 rounded-pill"
            onClick={toggleMenu}
          >
            <a
              href="#SobreMi"
              onClick={() => setActive(1)}
              className={`rounded-pill ${active === 1 ? "ancla_activo" : ""}`}
              smooth={true}
            >
              <i class="fa-solid fa-user-tie"></i>
            </a>
          </article>

          <article
            className="article-menu w-25 rounded-pill"
            onClick={toggleMenu}
          >
            <a
              href="#Conocimientos"
              onClick={() => setActive(2)}
              className={`rounded-pill ${active === 2 ? "ancla_activo" : ""}`}
              smooth={true}
            >
              <i class="fa-solid fa-code"></i>
            </a>
          </article>

          <article
            className="article-menu w-25 rounded-pill"
            onClick={toggleMenu}
          >
            <a
              href="#Proyectos"
              onClick={() => setActive(3)}
              className={`rounded-pill ${active === 3 ? "ancla_activo" : ""}`}
              smooth={true}
            >
              <i class="fa-solid fa-laptop-code"></i>
            </a>
          </article>

          <article
            className="article-menu w-25 rounded-pill"
            onClick={toggleMenu}
          >
            <a
              href="#Contactos"
              onClick={() => setActive(4)}
              className={`rounded-pill ${active === 4 ? "ancla_activo" : ""}`}
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
  );
};

export default Menu;
