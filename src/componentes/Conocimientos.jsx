import React from "react";

/********** IMPORTO LOGOS **********/
import html from "../img/html.png";
import css from "../img/css.png";
import js from "../img/js.png";
import react from "../img/react.png";
import responsive from "../img/responsiveWebDesign.png";
import grid from "../img/grid.png";
import bootstrap from "../img/bootstrap.png";
import git from "../img/git.png";
import github from "../img/github.png";
import photoshop from "../img/photoshop.png";
import figma from "../img/figma.png";
import canva from "../img/canva.png";
import java from "../img/java.png";
import python from "../img/python.png";
import vscode from "../img/vscode.png";
import terminal from "../img/terminal.png";

const Conocimientos = () => {
  // const [active, setActive] = React.useState(3);

  return (
    <div loading="lazy" className="container-padre_conocimientos">
      <a name="Conocimientos"></a>
      <div className="marco-separator-conocimientos"></div>
      <h1 className="style-h1-title color-white title-font">Conocimientos</h1>
      <div
        className="column-general__tech"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">HTML</h3>
          <img loading="lazy" src={html} alt="" className="style-logo-tech" />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">CSS</h3>
          <img loading="lazy" src={css} alt="" className="style-logo-tech" />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">JavaScript</h3>
          <img loading="lazy" src={js} alt="" className="style-logo-tech" />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">Grid</h3>
          <img loading="lazy" src={grid} alt="" className="style-logo-tech" />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">Responsive</h3>
          <img
            loading="lazy"
            src={responsive}
            alt=""
            className="style-logo-tech"
          />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">React</h3>
          <img loading="lazy" src={react} alt="" className="style-logo-tech" />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">Bootstrap</h3>
          <img
            loading="lazy"
            src={bootstrap}
            alt=""
            className="style-logo-tech"
          />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">Git</h3>
          <img loading="lazy" src={git} alt="" className="style-logo-tech" />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">GitHub</h3>
          <img loading="lazy" src={github} alt="" className="style-logo-tech" />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">Java</h3>
          <img loading="lazy" src={java} alt="" className="style-logo-tech" />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">Python</h3>
          <img loading="lazy" src={python} alt="" className="style-logo-tech" />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">Photoshop</h3>
          <img
            loading="lazy"
            src={photoshop}
            alt=""
            className="style-logo-tech"
          />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">Figma</h3>
          <img loading="lazy" src={figma} alt="" className="style-logo-tech" />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">Canva</h3>
          <img loading="lazy" src={canva} alt="" className="style-logo-tech" />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">VS Code</h3>
          <img loading="lazy" src={vscode} alt="" className="style-logo-tech" />
        </div>
        <div className="container__logo-title-tech">
          <h3 className="style-text__title-tech">Terminal</h3>
          <img
            loading="lazy"
            src={terminal}
            alt=""
            className="style-logo-tech"
          />
        </div>
      </div>
      <div className="marco-separator-inferior-conocimientos"></div>
    </div>
  );
};

export default Conocimientos;
