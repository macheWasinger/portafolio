import React from "react";
// import BarrasVerticales from "./BarrasVerticales";

const Contactos = () => {
  return (
    <div loading="lazy" className="container-padre__Contactos">
      {/* <BarrasVerticales /> */}
      <a name="Contactos"></a>
      <div className="container-hijo__contactos">
        <h1 className="style-h1__title-contactos color-white title-font">
          Contactarme a través de:
        </h1>
        <div className="container-logos">
          <a
            className="card linkedin-container"
            href="https://www.linkedin.com/in/marcelowasinger/"
            target="_blank"
          >
            {/* <span></span> */}
            <div className="container_redSocial_title-logo">
              <i class="fab fa-linkedin-in style-i"></i>
              {/* <p className="title-logo">LinkedIn</p> */}
            </div>
          </a>
          <a
            className="card github-container"
            href="https://github.com/macheWasinger"
            target="_blank"
          >
            {/* <span></span> */}
            <div className="container_redSocial_title-logo">
              <i class="fab fa-github style-i"></i>
              {/* <p className="title-logo">GitHub</p> */}
            </div>
          </a>
          <a
            className="card instagram-container"
            href="https://www.instagram.com/machewasinger90/"
            target="_blank"
          >
            {/* <span></span> */}
            <div className="container_redSocial_title-logo">
              <i class="fab fa-instagram style-i"></i>
              {/* <p className="title-logo">Instagram</p> */}
            </div>
          </a>
          <a
            className="card mail-container"
            href="mailto: marcelo_wasinger@hotmail.com"
          >
            {/* <span></span> */}
            <div className="container_redSocial_title-logo">
              <i class="fas fa-envelope style-i"></i>
              {/* <p className="title-logo">Hotmail</p> */}
            </div>
          </a>
        </div>
      </div>

      <div className="container__site-footer">
        {/* <Link to="Home" smooth={true}>
          <div className="style-button__return">
            <i class="fas fa-angle-up arrow-up"></i>
          </div>
        </Link> */}

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
          {/* <img loading="lazy" src={logo} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Contactos;
