import React from "react";

import desktopMeli from "../img/desktopMeli.png";
import responsive from "../img/responsive.png";
import desktopMaquetado from "../img/desktopMaquetado.png";
import responsivePortafolio from "../img/responsivePortafolio.png";

const Proyectos = () => {
  const [active, setActive] = React.useState(false);

  const letter = document.querySelector(".style-h1__proyectos");

  return (
    <div className="container-padre__proyectos">
      <a name="Proyectos"></a>
      <h1 className="style-h1__proyectos title-font">Proyectos</h1>
      <div
        className="title-proyectos__lineaHorizontal"
        data-aos="slide-left"
        data-aos-duration="700"
        data-aos-offset="220"
      ></div>
      <h3 className="style-h3-subtitulo__proyectos">
        Estos son algunos de mis proyectos
      </h3>
      <div className="container-proyectos">
        <div
          className="container-hijo__proyecto4 container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="300"
        >
          <img
            loading="lazy"
            src={responsivePortafolio}
            alt=""
            className="style-image__product"
          />
          <div className="container-tech container__text-tech__project-4">
            <h3 className="title-project">Portafolio</h3>
            <span className="style-span__text-tech">
              JavaScript - CSS - HTML - React - Bootstrap - Responsive Web
              Design
            </span>
            <div className="container-ver">
              <a
                href="https://github.com/macheWasinger/portafolio"
                target="_blank"
              >
                <h3 className="verCodigo">Ver código</h3>
              </a>
            </div>
          </div>
        </div>
        <div
          className="container-hijo__proyecto1 container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="450"
        >
          <img
            loading="lazy"
            src={desktopMeli}
            alt=""
            className="style-image__product"
          />
          <div className="container-tech container__text-tech__project-1">
            <h3 className="title-project">Copia Meli</h3>
            <span className="style-span__text-tech">
              JavaScript - CSS - HTML - Bootstrap
            </span>
            <div className="container-ver">
              <a
                href="https://machewasinger.github.io/MaquetadoMeli.github.io/"
                target="_blank"
                className="style-a__project style-a-project2"
              >
                <h3 className="verProyecto">Ver proyecto</h3>
              </a>

              <a
                href="https://github.com/macheWasinger/MaquetadoMeli.github.io"
                target="_blank"
              >
                <h3 className="verCodigo">Ver código</h3>
              </a>
            </div>
          </div>
        </div>
        <div
          className="container-hijo__proyecto2 container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="600"
        >
          <img
            loading="lazy"
            src={responsive}
            alt=""
            className="style-image__product"
          />{" "}
          <div className="container-tech container__text-tech__project-2">
            <h3 className="title-project">Destino ARG</h3>
            <span className="style-span__text-tech">
              JavaScript - CSS - HTML - React - Bootstrap - Responsive Web
              Design
            </span>
            <div className="container-ver">
              <a
                href="https://machewasinger.github.io/destinoarg/"
                target="_blank"
                className="style-a__project"
              >
                <h3 className="verProyecto">Ver proyecto</h3>
              </a>

              <a
                href="https://github.com/macheWasinger/destinoarg"
                target="_blank"
              >
                <h3 className="verCodigo">Ver Código</h3>
              </a>
            </div>
          </div>
        </div>
        <div
          className="container-hijo__proyecto3 container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="750"
        >
          <img
            loading="lazy"
            src={desktopMaquetado}
            alt=""
            className="style-image__product"
          />
          <div className="container-tech container__text-tech__project-3">
            <h3 className="title-project">Maquetado</h3>
            <span className="style-span__text-tech">
              JavaScript - CSS - HTML - Bootstrap
            </span>
            <div className="container-ver">
              <a
                href="https://machewasinger.github.io/Maquetado.github.io/"
                target="_blank"
                className="style-a__project style-a-project3"
              >
                <h3 className="verProyecto">Ver proyecto</h3>
              </a>
              <a
                href="https://github.com/macheWasinger/Maquetado.github.io"
                target="_blank"
              >
                <h3 className="verCodigo">Ver código</h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/***********  RESPONSIVE ***********/}
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
          <div class="carousel-item active">
            <a href="" target="_blank" className="style-a__project">
              <img
                loading="lazy"
                src={responsivePortafolio}
                alt=""
                className="style-image__product"
              />
              <div className="container-tech container__text-tech__project-4">
                <h3 className="title-project">Portafolio</h3>
                <span className="style-span__text-tech">
                  JavaScript - CSS - HTML - React - Bootstrap - Responsive Web
                  Design
                </span>
                <div className="container-ver">
                  <a
                    href="https://github.com/macheWasinger/portafolio"
                    target="_blank"
                  >
                    <h3 className="verCodigo">Ver código</h3>
                  </a>
                </div>
              </div>
            </a>
          </div>
          <div class="carousel-item">
            <a
              href="https://machewasinger.github.io/MaquetadoMeli.github.io/"
              target="_blank"
              className="style-a__project"
            >
              <img
                loading="lazy"
                src={desktopMeli}
                alt=""
                className="style-image__product"
              />
              <div className="container-tech container__text-tech__project-1">
                <h3 className="title-project">Copia Meli</h3>
                <span className="style-span__text-tech">
                  JavaScript - CSS - HTML - Bootstrap
                </span>
                <div className="container-ver">
                  <a
                    href="https://machewasinger.github.io/MaquetadoMeli.github.io/"
                    target="_blank"
                    className="style-a__project style-a-project2"
                  >
                    <h3 className="verProyecto">Ver proyecto</h3>
                  </a>

                  <a
                    href="https://github.com/macheWasinger/MaquetadoMeli.github.io"
                    target="_blank"
                  >
                    <h3 className="verCodigo">Ver código</h3>
                  </a>
                </div>
              </div>
            </a>
          </div>
          <div class="carousel-item">
            <a
              href="https://machewasinger.github.io/destinoarg/"
              target="_blank"
              className="style-a__project"
            >
              <img
                loading="lazy"
                src={responsive}
                alt=""
                className="style-image__product"
              />
              <div className="container-tech container__text-tech__project-2">
                <h3 className="title-project">Destino ARG</h3>
                <span className="style-span__text-tech">
                  JavaScript - CSS - HTML - React - Bootstrap - Responsive Web
                  Design
                </span>
                <div className="container-ver">
                  <a
                    href="https://machewasinger.github.io/destinoarg/"
                    target="_blank"
                    className="style-a__project"
                  >
                    <h3 className="verProyecto">Ver proyecto</h3>
                  </a>

                  <a
                    href="https://github.com/macheWasinger/destinoarg"
                    target="_blank"
                  >
                    <h3 className="verCodigo">Ver Código</h3>
                  </a>
                </div>
              </div>
            </a>
          </div>
          <div class="carousel-item">
            <a
              href="https://machewasinger.github.io/Maquetado.github.io/"
              target="_blank"
              className="style-a__project"
            >
              <img
                loading="lazy"
                src={desktopMaquetado}
                alt=""
                className="style-image__product"
              />
              <div className="container-tech container__text-tech__project-3">
                <h3 className="title-project">Maquetado</h3>
                <span className="style-span__text-tech">
                  JavaScript - CSS - HTML - Bootstrap
                </span>
                <div className="container-ver">
                  <a
                    href="https://machewasinger.github.io/Maquetado.github.io/"
                    target="_blank"
                    className="style-a__project style-a-project3"
                  >
                    <h3 className="verProyecto">Ver proyecto</h3>
                  </a>
                  <a
                    href="https://github.com/macheWasinger/Maquetado.github.io"
                    target="_blank"
                  >
                    <h3 className="verCodigo">Ver código</h3>
                  </a>
                </div>
              </div>
            </a>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-offset="200"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-offset="200"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Proyectos;
