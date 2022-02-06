import React from "react";

// IMPORTO LOS COMPONENTES
import Menu from "./header/Menu";

// IMPORTO IMAGEN Y VIDEO
import maw from "../img/maw.png";
import logoAnimado from "../video/logo-mw.mp4";
import { setActiveLink } from "react-scroll/modules/mixins/scroller";

const Home = () => {
  const [active, setActive] = React.useState(false);

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
            <span className="span__text-soy">¡Hola!, soy</span>
            <div
              className="bloqueDeslizable-container"

              // className={`bloqueDeslizable-container ${
              //   active === true ? "showAnimationNombreApellido" : ""
              // }`}
              // onPressButtonIngresar={() => setActive(true)}
            >
              <h1 className="style-h1-home">
                <span className="nombre">Marcelo </span>
                <span className="apellido">Wasinger</span>
              </h1>
            </div>

            <h2 className="style-frontendJr">
              {"{ "} Frontend Jr {" }"}
            </h2>
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
