import React from "react";

import { Link } from "react-scroll";

import logo from "../img/logo-mw.png";

const Contactos = () => {
  return (
    <div className="container-padre__Contactos">
      <a name="Contactos"></a>
      <div className="container-hijo__contactos">
        <div className="container__title-lineaHorizontal">
          <h1 className="style-h1__title-contactos color-white title-font">Contactos</h1>
          <div
            className="title-lineaHorizontal__contactos"
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-offset="200"
          ></div>
        </div>
        <div className="container__datos-contactos">
          <div className="whatsapp-mail__container">
            <div className="container-whatsapp">
              <span data-aos="zoom-in" data-aos-delay="150">
                <i class="fab fa-whatsapp style-i"></i>
              </span>
              <p className="style-p">11-3091-1213</p>
            </div>
            <div className="container-mail">
              <span data-aos="zoom-in" data-aos-delay="300">
                <i class="far fa-envelope style-i"></i>
              </span>
              <p className="style-p">marcelo_wasinger@hotmail.com</p>
            </div>
          </div>
          <div className="container__logos-redes">
            <p className="style-seguimeEnRedes">
              Seguime en mis redes sociales:
            </p>
            <div className="container-logos">
              <a
                href="https://github.com/macheWasinger"
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="300"
                data-aos-offset="100"
              >
                <i class="fab fa-github style-i"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/marcelowasinger/"
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="650"
                data-aos-duration="300"
                data-aos-offset="100"
              >
                <i class="fab fa-linkedin-in style-i"></i>
              </a>
              <a
                href="https://twitter.com/maw_2018"
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="800"
                data-aos-duration="300"
                data-aos-offset="100"
              >
                <i class="fab fa-twitter style-i"></i>
              </a>
              <a
                href="https://www.instagram.com/machewasinger90/"
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="950"
                data-aos-duration="300"
                data-aos-offset="100"
              >
                <i class="fab fa-instagram style-i"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100070072241358"
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="1100"
                data-aos-duration="300"
                data-aos-offset="100"
              >
                <i class="fab fa-facebook-f style-i"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container__site-footer">
        <Link to="Home" smooth={true}>
          <div className="style-button__return">
            <i class="fas fa-chevron-circle-up"></i>
          </div>
        </Link>
        <div className="container-datos__siteFooter">
          <img src={logo} alt="" />
          <p className="style__text-desarrollador">
            © 2021 Creado por Marcelo Adrián Wasinger
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
