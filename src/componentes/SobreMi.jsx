import React from "react";

import smallImage from "../img/maw.png";

import mawAnimado from "../img/mawAnimado.png";

import cv from "../cv/CV-WasingerMarcelo-2022.pdf";

const SobreMi = () => {
  const [active, setActive] = React.useState(false);

  const [handleImage, setHandleImage] = React.useState(false);

  const [textCVdownloaded, setTextCVdownloaded] = React.useState(false);

  const activeHandleImage = () => {
    setTimeout(function () {
      setHandleImage(!false);
    }, 200);
  };

  const disableHandleImage = () => {
    setTimeout(function () {
      setHandleImage(false);
    }, 200);
  };

  const handleCurriculum = () => {
    setTextCVdownloaded(!false);
    setActive(false);
  };

  return (
    <div className="container-padre_sobreMi d-flex flex-column">
      <a name="SobreMi"></a>
      <section className="container-image-texts">
        <div className="container_small-picture">
          <div
            className="container-image"
            onMouseOver={() => activeHandleImage()}
            onMouseOut={() => disableHandleImage()}
          >
            <article className="image_container">
              <img
                loading="lazy"
                src={handleImage ? smallImage : mawAnimado}
                className={`main-style-image ${
                  handleImage ? "show-maw" : "show-mawAnimado"
                }`}
                alt=""
              />
            </article>
          </div>
        </div>
        <div className="container-text_sobreMi">
          <h1 className="style-h1-sobreMi title-font">Sobre mí</h1>
          <p
            className="style-p-sobreMi"
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-offset="200"
          >
            Estudiante de sistemas proactivo y curioso, con muchas ganas de
            poner en práctica mi experiencia y de aprender nuevas tecnologías.
            <br />
            <br />
            Me encanta trabajar en equipo, compartir mis conocimientos, ser
            organizado y planificador, y lo que me falta en conocimiento y
            experiencia, lo complemento con las ganas y empuje que tengo.
          </p>
          <div className="container__title-text-hobbies">
            <h2
              className="title-hobbies"
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="150"
            >
              Hobbies
            </h2>
            <p
              className="text-hobbies"
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="300"
            >
              Familia | Amigos | Perros | Entrenar | Viajar | Escuchar música
            </p>
          </div>
        </div>
      </section>
      <a
        download="CV-WasingerMarcelo2022"
        href={cv}
        className={`style-button-descargarCV ${
          textCVdownloaded ? "hideEffectHoverButton" : ""
        }`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
        onClick={() => handleCurriculum()}
      >
        <span className="container-text-descargarCV">
          {textCVdownloaded ? (
            <div className="container-text__CV-descargado">
              <div className="texto-CV-descargado">CV descargado</div>{" "}
              <i class="fa-solid fa-circle-check"></i>
            </div>
          ) : (
            <div className="texto-descargar-CV">Descargar CV</div>
          )}
        </span>
        <span
          className={`iconPDF ${
            active === true ? "show-iconPDF" : "hide-iconPDF"
          }`}
        >
          <i className="fa-solid fa-file-lines"></i>
        </span>
      </a>
    </div>
  );
};

export default SobreMi;
