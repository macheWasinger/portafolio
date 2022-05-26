import React from "react";

import desktopMeli from "../img/desktopMeli.png";
import responsive from "../img/responsive.png";
import desktopMaquetado from "../img/desktopMaquetado.png";
import responsivePortafolio from "../img/responsivePortafolio.png";

import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react.png";
import iconResponsive from "../img/responsiveWebDesign.png";
import bootstrap from "../img/bootstrap.png";

const Proyectos = () => {
  const [active, setActive] = React.useState(false);

  const letter = document.querySelector(".style-h1__proyectos");

  return (
    <div className="container-padre__proyectos">
      <a name="Proyectos"></a>
      <h1 className="style-h1__proyectos title-font">Proyectos</h1>
      <article className="container-subtitleProyectos">
        <h3 className="style-h3-subtitulo__proyectos">
          Son algunos de mis proyectos
        </h3>
      </article>
      <div className="container-proyectos">
        <div
          className="container-project"
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
        </div>
        <div
          className="container-project"
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
                className="style-a__project style-a-project2"
              >
                Demo
              </a>

              <a
                href="https://github.com/macheWasinger/MaquetadoMeli.github.io"
                target="_blank"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
        <div
          className="container-project"
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
        </div>
        <div
          className="container-project"
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
                className="style-a__project style-a-project3"
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
          <div class="container-project-mobile carousel-item active">
            <a href="" target="_blank" className="style-a__project">
              <img
                loading="lazy"
                src={responsivePortafolio}
                alt=""
                className="style-image__product"
              />
              <div className="container-tech container__text-tech__project-4">
                <h3 className="title-project">Portafolio</h3>
                <div className="container__icons-techs">
                  <img src={html} alt="" />
                  <img src={css} alt="" />
                  <img src={js} className="icon-js" alt="" />
                  <img src={react} className="icon-react" alt="" />
                  <img
                    src={iconResponsive}
                    className="icon-responsive"
                    alt=""
                  />
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
            </a>
          </div>
          <div class="container-project-mobile carousel-item">
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
                    href="https://github.com/macheWasinger/MaquetadoMeli.github.io"
                    target="_blank"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </a>
          </div>
          <div class="container-project-mobile carousel-item">
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
                <div className="container__icons-techs">
                  <img src={html} alt="" />
                  <img src={css} alt="" />
                  <img src={js} className="icon-js" alt="" />
                  <img src={react} className="icon-react" alt="" />
                  <img
                    src={iconResponsive}
                    className="icon-responsive"
                    alt=""
                  />
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
            </a>
          </div>
          <div class="container-project-mobile carousel-item">
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
