import React from "react";

// IMPORTO LOS COMPONENTES
import Menu from "./header/Menu";

// IMPORTO IMAGEN Y VIDEO
import maw from "../img/maw.png";
import logoAnimado from "../video/logo-mw.mp4";
import videoFrontendAnimation from "../video/FrontendJr.mp4";

const Home = () => {
  return (
    <div className="container-padre">
      <a name="Home"></a>
      <div className="container_fondos-colores">
        <div className="container_dark-grey">
          <video autoPlay loop muted className="style-logo-video">
            <source src={logoAnimado} />
          </video>

          <div className="scroll" id="animacionScroll"></div>

          <div className="container__texto-presentacion">
            <span className="span__text-soy">Soy</span>
            <div className="text-deslizable__container">
              <h1 className="style-h1-home">
                <span className="nombre-apellido">Marcelo Wasinger</span>
              </h1>
            </div>

            <br />
            <video
              onLoadedMetadata="this.muted=true"
              autoPlay
              loop
              muted
              className="style-videoFrontend-animation"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <source src={videoFrontendAnimation} />
            </video>
          </div>
        </div>

        <div className="container-orange">
          <Menu />
          <img src={maw} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
