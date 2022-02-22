import React from "react";

// IMPORTO LOS COMPONENTES
import Menu from "./header/Menu";

// IMPORTO IMAGEN Y VIDEO
import maw from "../img/maw.png";
import logoAnimado from "../video/logo-mw.mp4";
import iconFrontend from "../img/icon-frontend.png";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";

const Home = () => {
  const [active, setActive] = React.useState(false);

  return (
    <div className="container-padre">
      <a name="Home"></a>
      <div loading="lazy" className="container_fondo-presentacion-imageDev">
        <div className="container-header">
          <video
            loading="lazy"
            autoPlay
            loop
            muted
            className="style-logo-video"
          >
            <source src={logoAnimado} />
          </video>

          <Menu />
        </div>

        <div className="container__presentacion-imageDeveloper">
          <div
            className="container-imageDeveloper"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img loading="lazy" src={maw} alt="" />
          </div>
          <div className="container__texto-presentacion">
            <span
              className="span__text-soy"
              data-aos="flip-right"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              ¡Hola!, soy
            </span>

            <h1
              className="style-h1-home"
              data-aos="flip-right"
              data-aos-duration="1000"
              data-aos-delay="1100"
            >
              <span className="nombre">Marcelo </span>

              <span className="apellido">Wasinger</span>
            </h1>

            <div
              className="container-textFrontendJR-iconFrontend"
              data-aos="flip-right"
              data-aos-duration="1000"
              data-aos-delay="1400"
            >
              <h2 className="style-frontendJr">
                {"{ "} Frontend Jr {" }"}
              </h2>
              <img loading="lazy" src={iconFrontend} alt="" />
            </div>
          </div>
          <div className="container-arrowDown">
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
