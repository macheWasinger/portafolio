import React from "react";

import apiSearchMeli from "../img/api-search-meli.png";
import portafolio from "../img/home-portafolio.png";
import crudClinica from "../img/crud-clinica.png";
import destinoArg from "../img/destinoArg.jpg";
import maquetadoChallenge from "../img/maquetado.jpg";
import clonHomeMeli from "../img/meli.jpg";

import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react.png";
import iconResponsive from "../img/responsiveWebDesign.png";
import bootstrap from "../img/bootstrap.png";
import iconApi from "../img/api.png";

const Proyectos = () => {
  return (
    <div className="container-padre__proyectos">
      <a name="Proyectos"></a>
      {/* <span className="bloque-diagonal"></span> */}
      <h1 className="style-h1__proyectos title-font">Proyectos</h1>

      <article
        className="container-subtitleProyectos d-flex flex-column"
        data-aos="zoom-out"
        data-aos-duration="300"
        data-aos-delay="300"
      >
        <p className="text-subtitulo__proyectos">
          Están ordenados de Mayor a Menor para demostrar la evolución de mi
          código.
        </p>
      </article>

      <div className="container-proyectos">
        <article
          className="container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
        >
          <span className="span-APImeli">
            <img
              loading="lazy"
              src={apiSearchMeli}
              alt=""
              className="style-image__product"
            />
          </span>
          <div className="container-tech container__text-tech__project-1">
            <h1 className="num-proyecto">01.</h1>
            <h3 className="title-project">Api-Search Meli</h3>
            <div className="container-description">
              <p className="text-description">
                En este proyecto, usé la API "Search" de Meli para buscar
                cualquier producto y filtrarlo mediante su valor (menor o mayor
                precio), por su condición (nuevo o usado) y por su envío gratis.
              </p>
            </div>
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
        </article>
        <article
          className="container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
        >
          <span className="span-portafolio">
            <img
              loading="lazy"
              src={portafolio}
              alt=""
              className="style-image__product"
            />
          </span>
          <div className="container-tech container__text-tech__project-2">
            <h1 className="num-proyecto">02.</h1>
            <h3 className="title-project">Portafolio</h3>
            <div className="container-description">
              <p className="text-description">
                Como se puede prever, es mi Portafolio; Fue un proyecto muy
                importante porque me sirvió para perfeccionarme y plasmar los
                conocimientos adquiridos.
                <br />
                En mi Portafolio y en la práctica del ítem n°1 (Api Search
                Meli), se puede apreciar mi gran evolución con respecto a mis
                conocimientos y a mi código, gracias a la constante
                capacitación.
              </p>
            </div>
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
        </article>

        <article
          className="container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
        >
          <span className="span-responsiveCRUDclinica">
            <img
              loading="lazy"
              src={crudClinica}
              alt=""
              className="style-image__product"
            />
          </span>
          <div className="container-tech container__text-tech__project-3">
            <h1 className="num-proyecto">03.</h1>
            <h3 className="title-project">CRUD Clínica</h3>
            <div className="container-description">
              <p className="text-description">
                Se trata del CRUD de un listado de una clínica en la que se
                puede agregar, editar, actualizar y eliminar los datos de un
                paciente.
              </p>
            </div>
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
        </article>

        <article className="container-project" data-aos="zoom-in">
          <span className="span-responsiveDestinoARG">
            <img
              loading="lazy"
              src={destinoArg}
              alt=""
              className="style-image__product"
            />
          </span>
          <div className="container-tech container__text-tech__project-4">
            <h1 className="num-proyecto">04.</h1>
            <h3 className="title-project">Destino ARG</h3>
            <div className="container-description">
              <p className="text-description">
                Esta página web tiene como objetivo mostrar los distintos puntos
                turísticos de nuestro país, su riqueza, su fauna y su cultura
                marcada por el carácter multiétnico y multicultural de su
                población.
              </p>
            </div>
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
        </article>
        <article
          className="container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
        >
          <span className="span-desktopMaquetado">
            <img
              loading="lazy"
              src={maquetadoChallenge}
              alt=""
              className="style-image__product"
            />
          </span>
          <div className="container-tech container__text-tech__project-5">
            <h1 className="num-proyecto">05.</h1>
            <h3 className="title-project">Desafío técnico</h3>
            <div className="container-description">
              <p className="text-description">
                Este proyecto es un desafío técnico que hice el año pasado. El
                mismo consistió en hacer un maquetado a través de un prototipo.
              </p>
            </div>

            <div className="container__icons-techs">
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
        </article>

        <article className="container-project" data-aos="zoom-in">
          <span className="span-desktopMeli">
            <img
              loading="lazy"
              src={clonHomeMeli}
              alt=""
              className="style-image__product"
            />
          </span>
          <div className="container-tech container__text-tech__project-6">
            <h1 className="num-proyecto">06.</h1>
            <h3 className="title-project">Clon Home Meli</h3>
            <div className="container-description">
              <p className="text-description">
                Es el primer proyecto que hice hace casi 2 años atrás, la idea
                fue hacer un clon de la página de inicio de Mercado Libre.
                Ingresando al repo, se nota el nivel básico que tenía en
                comparación con los últimos proyectos que he realizado.
              </p>
            </div>

            <div className="container__icons-techs">
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
        </article>
      </div>
      <article
        className="container-data-experiencia d-flex flex-column"
        data-aos="zoom-out"
        data-aos-duration="300"
        data-aos-delay="300"
      >
        <h4 className="title-experiencia">Experiencia laboral</h4>
        <p className="text-experiencia">
          Entre la experiencia práctica que tengo, se encuentra maquetar las
          versiones Desktop y Mobile de la página web "Mooveshark" utilizando
          las tecnologías: HTML, CSS, JavaScript, React y Flexbox.
        </p>
      </article>
    </div>
  );
};

export default Proyectos;
