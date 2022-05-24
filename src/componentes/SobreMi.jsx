import React from "react";

import smallImage from "../img/maw.png";
import cv from "../cv/CV-WasingerMarcelo2022.pdf";

const SobreMi = () => {
  return (
    <div className="container-padre_sobreMi">
      <a name="SobreMi"></a>
      <div className="container_small-picture_downloadCV">
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
        <a
          download="CV-WasingerMarcelo2022"
          href={cv}
          className="style-button-descargarCV btn btn-warning pt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar CV
        </a>
      </div>
      <div className="container-text_sobreMi">
        <h1 className="style-h1-sobreMi title-font">Sobre mí</h1>
        <p
          className="style-p-sobreMi"
          data-aos="zoom-in"
          data-aos-duration="400"
          data-aos-offset="200"
        >
          Hola, soy Marcelo Adrián Wasinger. Estudié Licenciatura en sistemas en
          la Universidad Nacional de General Sarmiento por el lapso de 2 años.
          <br />
          Por problemas de caracter personal, tuve que poner en pausa mi
          cursada.
          <br />
          Momentáneamente, estudio de manera autodidacta.
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
    </div>
  );
};

export default SobreMi;
