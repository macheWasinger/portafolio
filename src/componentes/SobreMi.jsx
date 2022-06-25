import React from "react";

import smallImage from "../img/maw.png";
import cv from "../cv/CV-WasingerMarcelo-2022.pdf";

const SobreMi = () => {
  const [active, setActive] = React.useState(false);

  return (
    <div className="container-padre_sobreMi">
      <a name="SobreMi"></a>
      <div className="container_small-picture">
        <div className="container-image">
          <img
            loading="lazy"
            src={smallImage}
            className="style-smallImage"
            data-aos="fade-down-right"
            data-aos-duration="750"
            data-aos-offset="250"
            alt=""
          />
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
          Estudiante de sistemas proactivo y curioso, con muchas ganas de poner
          en práctica mi experiencia y de aprender nuevas tecnologías.
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
        <a
          download="CV-WasingerMarcelo2022"
          href={cv}
          className="style-button-descargarCV"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={() => setActive(true)}
          onMouseOut={() => setActive(false)}
        >
          <span className="text-descargarCV">Descargar CV</span>
          <span
            className={`iconPDF ${
              active === true ? "show-iconPDF" : "hide-iconPDF"
            }`}
          >
            <i className="fa-solid fa-file-lines"></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default SobreMi;
