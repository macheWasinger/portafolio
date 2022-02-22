import React from "react";

import imageMeli from "../img/meli.jpg";
import imageDestinoArg from "../img/destinoArg.jpg";
import imageMaquetado from "../img/maquetado.jpg";

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
      <div className="container-proyectos" data-aos="flip-right">
        <div
          className="container-hijo__proyecto1 container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="300"
        >
          <img
            loading="lazy"
            src={imageDestinoArg}
            alt=""
            className="style-image__product"
          />{" "}
          loading="lazy"
          <div className="container__text-tech__project-1">
            <span className="style-span__text-tech">JavaScript</span>
            <span className="style-span__text-tech">CSS</span>
            <span className="style-span__text-tech">HTML</span>
            <span className="style-span__text-tech">React</span>
            <span className="style-span__text-tech">Bootstrap</span>
            <span className="style-span__text-tech">Responsive Web Design</span>
          </div>
          <a
            href="https://machewasinger.github.io/destinoarg/"
            target="_blank"
            className="style-a__project"
          >
            <i class="fa-solid fa-eye"></i>
          </a>
        </div>
        <div
          className="container-hijo__proyecto2 container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="450"
        >
          <img
            loading="lazy"
            src={imageMeli}
            alt=""
            className="style-image__product"
          />
          <div className="container__text-tech__project-2">
            <span className="style-span__text-tech">JavaScript</span>
            <span className="style-span__text-tech">CSS</span>
            <span className="style-span__text-tech">HTML</span>
            <span className="style-span__text-tech">Bootstrap</span>
          </div>
          <a
            href="https://machewasinger.github.io/MaquetadoMeli.github.io/"
            target="_blank"
            className="style-a__project style-a-project2"
          >
            <i class="fa-solid fa-eye"></i>
          </a>
        </div>
        <div
          className="container-hijo__proyecto3 container-project"
          data-aos="zoom-in"
          data-aos-offset="100"
          data-aos-delay="600"
        >
          <img
            loading="lazy"
            src={imageMaquetado}
            alt=""
            className="style-image__product"
          />
          <div className="container__text-tech__project-3">
            <span className="style-span__text-tech">JavaScript</span>
            <span className="style-span__text-tech">CSS</span>
            <span className="style-span__text-tech">HTML</span>
            <span className="style-span__text-tech">Bootstrap</span>
          </div>
          <a
            href="https://machewasinger.github.io/Maquetado.github.io/"
            target="_blank"
            className="style-a__project style-a-project3"
          >
            <i class="fa-solid fa-eye"></i>
          </a>
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
            <a
              href="https://machewasinger.github.io/destinoarg/"
              target="_blank"
              className="style-a__project"
            >
              <img
                loading="lazy"
                src={imageDestinoArg}
                alt=""
                className="style-image__product"
              />
              <div
                className="container__text-tech__project project-1"
                data-aos="slide-right"
                data-aos-delay="250"
              >
                <span className="style-span__text-tech">JavaScript</span>
                <span className="style-span__text-tech">CSS</span>
                <span className="style-span__text-tech">HTML</span>
                <span className="style-span__text-tech">React</span>
                <span className="style-span__text-tech">Bootstrap</span>
                <span className="style-span__text-tech">
                  Responsive Web Design
                </span>
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
                src={imageMeli}
                alt=""
                className="style-image__product"
              />
              <div className="container__text-tech__project project-2">
                <span className="style-span__text-tech">JavaScript</span>
                <span className="style-span__text-tech">CSS</span>
                <span className="style-span__text-tech">HTML</span>
                <span className="style-span__text-tech">Bootstrap</span>
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
                src={imageMaquetado}
                alt=""
                className="style-image__product"
              />
              <div className="container__text-tech__project project-3">
                <span className="style-span__text-tech">JavaScript</span>
                <span className="style-span__text-tech">CSS</span>
                <span className="style-span__text-tech">HTML</span>
                <span className="style-span__text-tech">Bootstrap</span>
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
