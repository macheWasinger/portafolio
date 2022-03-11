import React from "react";

/********** IMPORTO LOGOS **********/
import html from "../img/html.png";
import css from "../img/css.png";
import grid from "../img/grid.png";
import js from "../img/js.png";
import bootstrap from "../img/bootstrap.png";
import react from "../img/react.png";
import git from "../img/git.png";
import github from "../img/github.png";
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
      <div className="marco-separator-conocimientos"></div>
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
          <h3 className="style-text__title-tech">JavaScript</h3>
          <img loading="lazy" src={js} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-left"
        >
          <h3 className="style-text__title-tech">Grid</h3>
          <img loading="lazy" src={grid} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-right"
        >
          <h3 className="style-text__title-tech">Responsive</h3>
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
          <h3 className="style-text__title-tech">React</h3>
          <img loading="lazy" src={react} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-left"
        >
          <h3 className="style-text__title-tech">Bootstrap</h3>
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
          <h3 className="style-text__title-tech">Git</h3>
          <img loading="lazy" src={git} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-left"
        >
          <h3 className="style-text__title-tech">GitHub</h3>
          <img loading="lazy" src={github} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-left"
        >
          <h3 className="style-text__title-tech">Java</h3>
          <img loading="lazy" src={java} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-left"
        >
          <h3 className="style-text__title-tech">Python</h3>
          <img loading="lazy" src={python} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-left"
        >
          <h3 className="style-text__title-tech">Photoshop</h3>
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
          <h3 className="style-text__title-tech">Figma</h3>
          <img loading="lazy" src={figma} alt="" className="style-logo-tech" />
        </div>
        <div
          className="container__logo-title-tech"
          data-aos-duration="700"
          data-aos="flip-right"
        >
          <h3 className="style-text__title-tech">Canva</h3>
          <img loading="lazy" src={canva} alt="" className="style-logo-tech" />
        </div>
      </div>
      <div className="marco-separator-inferior-conocimientos"></div>
    </div>
  );
};

export default Conocimientos;
