import React from "react";

import smallImage from "../img/maw.png";
import cv from "../cv/CV-MarceloWasinger-MaquetadorWeb.pdf";

const SobreMi = () => {
  return (
    <div className="container-padre_sobreMi">
      <a name="SobreMi"></a>
      <div className="container_small-picture">
        <div className="container-image">
          <img
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
        <span
          className="style-span_linea-horizontal"
          data-aos-duration="600"
          data-aos-offset="200"
          data-aos="slide-left"
        ></span>
        <p className="style-p-sobreMi">
          Hola, soy Marcelo Adrián Wasinger. Estudié Licenciatura en sistemas en
          la Universidad Nacional de general Sarmiento por el lapso de 2 años.
          <br />
          Por problemas de caracter personal, tuve que poner en pausa mi
          cursada.
          <br />
          Momentáneamente, estudio de manera autodidacta.
        </p>
        <a
          download="CV-MarceloWasinger"
          href={cv}
          className="style-button-descargarCV"
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
};

export default SobreMi;
