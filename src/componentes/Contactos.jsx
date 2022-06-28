import React from "react";
// import BarrasVerticales from "./BarrasVerticales";

const Contactos = () => {
  return (
    <div loading="lazy" className="container-padre__Contactos">
      <a name="Contactos"></a>
      <div className="container-hijo__contactos">
        <h1 className="style-h1__title-contactos">Contactarme a través de:</h1>
        <div className="container-logos">
          <a
            className="card linkedin-container"
            href="https://www.linkedin.com/in/marcelowasinger/"
            target="_blank"
          >
            <div className="container_redSocial_title-logo">
              <i class="fab fa-linkedin-in style-i"></i>
            </div>
          </a>
          <a
            className="card github-container"
            href="https://github.com/macheWasinger"
            target="_blank"
          >
            <div className="container_redSocial_title-logo">
              <i class="fab fa-github style-i"></i>
            </div>
          </a>
          <a
            className="card instagram-container"
            href="https://www.instagram.com/machewasinger90/"
            target="_blank"
          >
            <div className="container_redSocial_title-logo">
              <i class="fab fa-instagram style-i"></i>
            </div>
          </a>
          <a
            className="card mail-container"
            href="mailto: marcelo_wasinger@hotmail.com"
          >
            <div className="container_redSocial_title-logo">
              <i class="fas fa-envelope style-i"></i>
            </div>
          </a>
        </div>
      </div>

      <div className="container__site-footer">
        <div className="container-whatsapp">
          <span>
            <a
              className="whatsapp-container"
              href="https://wa.me/541130911213"
              target="_blank"
            >
              <i className="fab fa-whatsapp whatsapp-icon style-i"></i>
            </a>
          </span>
        </div>

        <div className="container-datos__siteFooter">
          <p className="style__text-desarrollador">
            © 2021 Creado por Marcelo Adrián Wasinger
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
