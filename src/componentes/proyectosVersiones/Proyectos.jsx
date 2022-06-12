import React from "react";

import ProyectosMobile from "./ProyectosMobile";

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

const Proyectos = () => {
  return (
    <div className="container-padre__proyectos">
      <a name="Proyectos"></a>
      <h1 className="style-h1__proyectos title-font">Proyectos</h1>
      <article className="container-subtitleProyectos">
        <h3 className="style-h3-subtitulo__proyectos">
          Los proyectos están ordenados de mayor a menor. En ellos, se puede ver
          la evolución de mi código.
        </h3>
      </article>
      <div className="container-proyectos">
        <div
          className="container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="600"
        >
          <span className="span-APImeli">
            <img
              loading="lazy"
              src={APImeli}
              alt=""
              className="style-image__product"
            />
          </span>
          <div className="container-tech container__text-tech__project-1">
            <h3 className="title-project">Api Meli</h3>
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
        </div>
        <div
          className="container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="300"
        >
          <span className="span-portafolio">
            <img
              loading="lazy"
              src={responsivePortafolio}
              alt=""
              className="style-image__product"
            />
          </span>
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
        </div>

        <div
          className="container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="600"
        >
          <span className="span-responsiveCRUDclinica">
            <img
              loading="lazy"
              src={responsiveCRUDclinica}
              alt=""
              className="style-image__product"
            />
          </span>
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
        </div>

        <div
          className="container-project"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <span className="span-responsiveDestinoARG">
            <img
              loading="lazy"
              src={responsive}
              alt=""
              className="style-image__product"
            />
          </span>
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
        </div>
        <div
          className="container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="300"
        >
          <span className="span-desktopMaquetado">
            <img
              loading="lazy"
              src={desktopMaquetado}
              alt=""
              className="style-image__product"
            />
          </span>
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
                className="style-a__project style-a-project3"
              >
                Demo
              </a>
              <a
                href="https://github.com/macheWasinger/Maquetado.github.io/"
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
          data-aos-delay="800"
        >
          <span className="span-desktopMeli">
            <img
              loading="lazy"
              src={desktopMeli}
              alt=""
              className="style-image__product"
            />
          </span>
          <div className="container-tech container__text-tech__project-6">
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
      </div>

      {/***********  RESPONSIVE ***********/}
      <ProyectosMobile />
    </div>
  );
};

export default Proyectos;
