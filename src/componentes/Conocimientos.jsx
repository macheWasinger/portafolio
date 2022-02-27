import React from "react";

/********** IMPORTO LOGOS **********/
import html from "../img/html.png";
import css from "../img/css.png";
import grid from "../img/grid.png";
import js from "../img/js.png";
import bootstrap from "../img/bootstrap.png";
import react from "../img/react.png";
import responsive from "../img/responsiveWebDesign.png";
import photoshop from "../img/photoshop.png";
import figma from "../img/figma.png";
import canva from "../img/canva.png";
import java from "../img/java.png";
import python from "../img/python.png";

const Conocimientos = () => {
  const [active, setActive] = React.useState(3);

  return (
    <div loading="lazy" className="container-padre_conocimientos">
      <a name="Conocimientos"></a>
      <h1 className="style-h1-title color-white title-font">Conocimientos</h1>
      {/* <h3 className="style-h3-subtitulo color-white">
        Mis conocimientos de software
      </h3> */}
      <div className="column-general__tech">
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-right"
        >
          <h3 className="style-text__title-tech">HTML</h3>
          <img loading="lazy" src={html} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-right"
        >
          <h3 className="style-text__title-tech">CSS</h3>
          <img loading="lazy" src={css} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-left"
        >
          <h3 className="style-text__title-tech">GRID</h3>
          <img loading="lazy" src={grid} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-left"
        >
          <h3 className="style-text__title-tech">JAVASCRIPT</h3>
          <img loading="lazy" src={js} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-right"
        >
          <h3 className="style-text__title-tech">RESPONSIVE</h3>
          <img
            loading="lazy"
            src={responsive}
            alt=""
            className="style-logo-tech"
          />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-right"
        >
          <h3 className="style-text__title-tech">REACT</h3>
          <img loading="lazy" src={react} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-left"
        >
          <h3 className="style-text__title-tech">BOOTSTRAP</h3>
          <img
            loading="lazy"
            src={bootstrap}
            alt=""
            className="style-logo-tech"
          />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-left"
        >
          <h3 className="style-text__title-tech">PHOTOSHOP</h3>
          <img
            loading="lazy"
            src={photoshop}
            alt=""
            className="style-logo-tech"
          />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-right"
        >
          <h3 className="style-text__title-tech">FIGMA</h3>
          <img loading="lazy" src={figma} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-right"
        >
          <h3 className="style-text__title-tech">CANVA</h3>
          <img loading="lazy" src={canva} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-left"
        >
          <h3 className="style-text__title-tech">JAVA</h3>
          <img loading="lazy" src={java} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-left"
        >
          <h3 className="style-text__title-tech">PYTHON</h3>
          <img loading="lazy" src={python} alt="" className="style-logo-tech" />
        </div>
      </div>
    </div>
  );
};

export default Conocimientos;
