import React, { useState, useRef } from "react";
import useScrollSpy from "react-use-scrollspy";

const MenuMobile = () => {
  // const [active, setActive] = React.useState(0);
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
  );
};

export default MenuMobile;
