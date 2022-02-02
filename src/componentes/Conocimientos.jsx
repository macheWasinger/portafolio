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
import frontend from "../img/frontend.png";
import design from "../img/design.png";
import backend from "../img/backend.png";
import refresh from "../img/refresh.png";

const Conocimientos = () => {
  const [active, setActive] = React.useState(3);

  return (
    <div className="container-padre_conocimientos">
      <a name="Conocimientos"></a>
      <h1 className="style-h1-title color-white title-font">Conocimientos</h1>
      <div
        className="title-lineaHorizontal"
        data-aos="slide-left"
        data-aos-duration="1000"
        data-aos-offset="220"
      ></div>
      <h3 className="style-h3-subtitulo color-white">
        Mis conocimientos de software
      </h3>
      <div
        className="column-general"
        data-aos="slide-right"
        data-aos-delay="250"
      >
        <div
          className={`frontendIcon-container image-title-tech__container ${
            active == 0 ? "hidden" : ""
          }`}
          onClick={() => setActive(0)}
        >
          <img src={frontend} className="iconImage__tech" alt="" />
          <h2
            className="card__title"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-offset="10"
          >
            Front End
          </h2>
        </div>
        <div className={`${active === 0 ? "container-tech" : "hidden"}`}>
          <div className="container-frontend">
            <div className="container__logo-title-tech">
              <h3 className="style-text__title-tech">HTML</h3>
              <img src={html} alt="" className="style-logo-tech" />
            </div>
            <div className="container__logo-title-tech">
              <h3 className="style-text__title-tech">CSS</h3>
              <img src={css} alt="" className="style-logo-tech" />
            </div>
            <div className="container__logo-title-tech">
              <h3 className="style-text__title-tech">GRID</h3>
              <img src={grid} alt="" className="style-logo-tech" />
            </div>
            <div className="container__logo-title-tech">
              <h3 className="style-text__title-tech">JAVASCRIPT</h3>
              <img src={js} alt="" className="style-logo-tech" />
            </div>
            <div className="container__logo-title-tech">
              <h3 className="style-text__title-tech">RESPONSIVE</h3>
              <img src={responsive} alt="" className="style-logo-tech" />
            </div>
            <div className="container__logo-title-tech">
              <h3 className="style-text__title-tech">REACT</h3>
              <img src={react} alt="" className="style-logo-tech" />
            </div>
            <div className="container__logo-title-tech">
              <h3 className="style-text__title-tech">BOOTSTRAP</h3>
              <img src={bootstrap} alt="" className="style-logo-tech" />
            </div>
          </div>
        </div>

        <div
          className={`designIcon-container image-title-tech__container ${
            active == 1 ? "hidden" : ""
          }`}
          onClick={() => setActive(1)}
        >
          <img src={design} className="iconImage__tech" alt="" />
          <h2
            className="card__title"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-offset="10"
          >
            Design
          </h2>
        </div>
        <div className={`${active === 1 ? "container-tech" : "hidden"}`}>
          <div className="container-design">
            <div className="container__logo-title-tech">
              <h3 className="style-text__title-tech">PHOTOSHOP</h3>
              <img src={photoshop} alt="" className="style-logo-tech" />
            </div>
            <div className="container__logo-title-tech">
              <h3 className="style-text__title-tech">FIGMA</h3>
              <img src={figma} alt="" className="style-logo-tech" />
            </div>
            <div className="container__logo-title-tech">
              <h3 className="style-text__title-tech">CANVA</h3>
              <img src={canva} alt="" className="style-logo-tech" />
            </div>
          </div>
        </div>

        <div
          className={`backendIcon-container image-title-tech__container ${
            active === 2 ? "hidden" : ""
          }`}
          onClick={() => setActive(2)}
        >
          <img src={backend} className="iconImage__tech" alt="" />
          <h2
            className="card__title"
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-offset="10"
          >
            Back End
          </h2>
        </div>
        <div className={`${active == 2 ? "container-tech" : "hidden"}`}>
          <div className="container-backend">
            <div className="container__logo-title-tech">
              <h3 className="style-text__title-tech">JAVA</h3>
              <img src={java} alt="" className="style-logo-tech" />
            </div>
            <div className="container__logo-title-tech">
              <h3 className="style-text__title-tech">PYTHON</h3>
              <img src={python} alt="" className="style-logo-tech" />
            </div>
          </div>
        </div>
      </div>
      <div className="iconRefresh-container" onClick={() => setActive(3)}>
        <img
          src={refresh}
          alt=""
          className={`icon-refresh__style ${
            active === 3 ? "refreshAnimation" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Conocimientos;
