import React from "react";

import desktopMeli from "../../img/desktopMeli.png";
import responsive from "../../img/responsive.png";
import desktopMaquetado from "../../img/desktopMaquetado.png";
import responsivePortafolio from "../../img/responsivePortafolio.png";
import responsiveCRUDclinica from "../../img/responsiveCRUDclinica.png";
import APImeli from "../../img/APImeli.png";

import html from "../../img/html.png";
import css from "../../img/css.png";
import js from "../../img/js.png";
import react from "../../img/react.png";
import iconResponsive from "../../img/responsiveWebDesign.png";
import bootstrap from "../../img/bootstrap.png";
import iconApi from "../../img/api.png";

const ProyectosMobile = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div
        class="carousel-inner"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-offset="200"
      >
        <div className="container-project-mobile carousel-item active">
          <section className="style-a__project">
            <img
              loading="lazy"
              src={APImeli}
              alt=""
              className="style-image__product"
            />
            <div className="container-tech container__text-tech__project-1">
              <h3 className="title-project">API Meli</h3>
              <div className="container__icons-techs">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} className="icon-js" alt="" />
                <img src={react} className="icon-react" alt="" />
                <img src={iconResponsive} className="icon-responsive" alt="" />
                <img src={bootstrap} alt="" />
                <img src={iconApi} alt="" />
              </div>
              <div className="container-ver">
                <a
                  href="https://machewasinger.github.io/apiMeli/"
                  target="_blank"
                  className="style-a__project"
                >
                  Demo
                </a>

                <a
                  href="https://github.com/macheWasinger/apiMeli"
                  target="_blank"
                >
                  Repo
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="container-project-mobile carousel-item">
          <section className="style-a__project">
            <img
              loading="lazy"
              src={responsivePortafolio}
              alt=""
              className="style-image__product"
            />
            <div className="container-tech container__text-tech__project-2">
              <h3 className="title-project">Portafolio</h3>
              <div className="container__icons-techs">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} className="icon-js" alt="" />
                <img src={react} className="icon-react" alt="" />
                <img src={iconResponsive} className="icon-responsive" alt="" />
                <img src={bootstrap} alt="" />
              </div>
              <div className="container-ver">
                <a
                  href="https://github.com/macheWasinger/portafolio"
                  target="_blank"
                >
                  Repo
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="container-project-mobile carousel-item">
          <section className="style-a__project">
            <img
              loading="lazy"
              src={responsiveCRUDclinica}
              alt=""
              className="style-image__product"
            />
            <div className="container-tech container__text-tech__project-3">
              <h3 className="title-project">CRUD Clínica</h3>
              <div className="container__icons-techs">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={react} className="icon-react" alt="" />
                <img src={iconResponsive} className="icon-responsive" alt="" />
                <img src={bootstrap} alt="" />
              </div>
              <div className="container-ver">
                <a
                  href="https://machewasinger.github.io/CRUDclinica/"
                  target="_blank"
                  className="style-a__project"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/macheWasinger/CRUDclinica"
                  target="_blank"
                >
                  Repo
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="container-project-mobile carousel-item">
          <section className="style-a__project">
            <img
              loading="lazy"
              src={responsive}
              alt=""
              className="style-image__product"
            />
            <div className="container-tech container__text-tech__project-4">
              <h3 className="title-project">Destino ARG</h3>
              <div className="container__icons-techs">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} className="icon-js" alt="" />
                <img src={react} className="icon-react" alt="" />
                <img src={iconResponsive} className="icon-responsive" alt="" />
                <img src={bootstrap} alt="" />
              </div>
              <div className="container-ver">
                <a
                  href="https://machewasinger.github.io/destinoarg/"
                  target="_blank"
                  className="style-a__project"
                >
                  Demo
                </a>

                <a
                  href="https://github.com/macheWasinger/destinoarg"
                  target="_blank"
                >
                  Repo
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="container-project-mobile carousel-item">
          <section className="style-a__project">
            <img
              loading="lazy"
              src={desktopMaquetado}
              alt=""
              className="style-image__product"
            />
            <div className="container-tech container__text-tech__project-5">
              <h3 className="title-project">Maquetado</h3>
              <div className="container__iconTechs-NoResponsive">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} className="icon-js" alt="" />
                <img src={bootstrap} alt="" />
              </div>
              <div className="container-ver">
                <a
                  href="https://machewasinger.github.io/Maquetado.github.io/"
                  target="_blank"
                  className="style-a__project"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/macheWasinger/Maquetado.github.io"
                  target="_blank"
                >
                  Repo
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="container-project-mobile carousel-item">
          <section className="style-a__project">
            <img
              loading="lazy"
              src={desktopMeli}
              alt=""
              className="style-image__product"
            />
            <div className="container-tech container__text-tech__project-6">
              <h3 className="title-project">Maquetado Meli</h3>
              <div className="container__iconTechs-NoResponsive">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} className="icon-js" alt="" />
                <img src={bootstrap} alt="" />
              </div>
              <div className="container-ver">
                <a
                  href="https://machewasinger.github.io/MaquetadoMeli.github.io/"
                  target="_blank"
                  className="style-a__project"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/macheWasinger/MaquetadoMeli.github.io/"
                  target="_blank"
                >
                  Repo
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-offset="200"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-offset="200"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ProyectosMobile;
