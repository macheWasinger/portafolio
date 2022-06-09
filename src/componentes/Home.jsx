import React from "react";

// IMPORTO IMAGEN Y VIDEO
import maw from "../img/maw.png";
import logoAnimado from "../video/logo-mw2.mp4";

const Home = () => {
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
            <h1 className="style-h1-home">
              <span
                className="span__text-soy"
                data-aos="flip-right"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                ¡Hola!, soy
              </span>
              <span
                className="nombreApellido"
                data-aos="flip-right"
                data-aos-duration="1000"
                data-aos-delay="1100"
              >
                Marcelo Wasinger
              </span>
              <span
                className="style-frontendJr"
                data-aos="flip-right"
                data-aos-duration="1000"
                data-aos-delay="1400"
              >
                Frontend Developer Jr
              </span>
            </h1>
          </div>
          <div
            className="container-arrowDown"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="1700"
          >
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          {/* <MenuDesktop /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
