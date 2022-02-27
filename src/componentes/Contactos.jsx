import React from "react";

import { Link } from "react-scroll";

import logo from "../img/logo-mw.png";
import hand from "../img/hand.png";

const Contactos = () => {
  return (
    <div loading="lazy" className="container-padre__Contactos">
      <a name="Contactos"></a>
      <div className="container-hijo__contactos">
        <h1 className="style-h1__title-contactos color-white title-font">
          ¿Hablamos sobre trabajar juntos?
        </h1>
        <div className="container-logos">
          <a
            className="logo-redSocial__container linkedin-container"
            href="https://www.linkedin.com/in/marcelowasinger/"
            target="_blank"
          >
            <div className="container_redSocial_title-logo">
              <p className="title-logo">LinkedIn</p>
              <i class="fab fa-linkedin-in style-i"></i>
            </div>
          </a>
          <a
            className="logo-redSocial__container github-container"
            href="https://github.com/macheWasinger"
            target="_blank"
          >
            <div className="container_redSocial_title-logo">
              <p className="title-logo">GitHub</p>
              <i class="fab fa-github style-i"></i>
            </div>
          </a>
          <a
            className="logo-redSocial__container instagram-container"
            href="https://www.instagram.com/machewasinger90/"
            target="_blank"
          >
            <div className="container_redSocial_title-logo">
              <p className="title-logo">Instagram</p>
              <i class="fab fa-instagram style-i"></i>
            </div>
          </a>
          <a
            className="logo-redSocial__container mail-container"
            href="mailto: marcelo_wasinger@hotmail.com"
          >
            <div className="container_redSocial_title-logo">
              <p className="title-logo">Hotmail</p>
              <i class="fas fa-envelope style-i"></i>
            </div>
          </a>
        </div>
        {/* <div className="container__title-lineaHorizontal">
          <h1 className="style-h1__title-contactos color-white title-font">
            Contactos
          </h1>
          <div
            className="title-lineaHorizontal__contactos"
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-offset="200"
          ></div>
        </div>
        <div className="container__datos-contactos">
          <div className="container-mail">
            <span data-aos="zoom-in" data-aos-delay="300">
              <a
                href="mailto: marcelo_wasinger@hotmail.com"
                className="logo-redSocial__container mail-container"
              >
                <i class="fas fa-envelope style-i"></i>
              </a>
            </span>
            <p className="style-p">marcelo_wasinger@hotmail.com</p>
          </div>
          <div className="container-whatsapp">
            <span
              data-aos="zoom-in"
              data-aos-delay="1250"
              data-aos-duration="300"
              data-aos-offset="100"
            >
              <a
                className="logo-redSocial__container whatsapp-container"
                href="https://wa.me/541130911213"
                target="_blank"
              >
                <i className="fab fa-whatsapp whatsapp-icon style-i"></i>
              </a>
            </span>
            <p className="style__text-hazme-click">Click aquí</p>
            <span
              className="content-hand"
              data-aos="zoom-in"
              data-aos-delay="1400"
              data-aos-duration="300"
              data-aos-offset="100"
            >
              <img loading="lazy" src={hand} alt="" />
            </span>
          </div>
          <div className="container__logos-redes">
            <video
              loading="lazy"
              className="style__animation-seguime"
              autoPlay
              loop
              muted
            >
              <source src={seguime} />
            </video>

            <div className="container-logos">
              <a
                className="logo-redSocial__container linkedin-container"
                href="https://www.linkedin.com/in/marcelowasinger/"
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="300"
                data-aos-offset="100"
              >
                <i class="fab fa-linkedin-in style-i"></i>
              </a>
              <a
                className="logo-redSocial__container github-container"
                href="https://github.com/macheWasinger"
                target="_blank"
                data-aos="zoom-in"
                data-aos-delay="650"
                data-aos-duration="300"
                data-aos-offset="100"
              >
                <i class="fab fa-github style-i"></i>
              </a>
              <a
                className="logo-redSocial__container twitter-container"
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
                className="logo-redSocial__container instagram-container"
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
                className="logo-redSocial__container facebook-container"
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
        </div> */}
      </div>

      <div className="container__site-footer">
        <Link to="Home" smooth={true}>
          <div className="style-button__return">
            <i class="fas fa-angle-up arrow-up"></i>
          </div>
        </Link>
        <div className="container-datos__siteFooter">
          <p className="style__text-desarrollador">
            © 2021 Creado por Marcelo Adrián Wasinger
          </p>
          <img loading="lazy" src={logo} alt="" />
        </div>
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
      </div>
    </div>
  );
};

export default Contactos;
