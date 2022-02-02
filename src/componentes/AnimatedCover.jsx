import React from "react";

const AnimatedCover = () => {
  const [active, setActive] = React.useState(true);

  return (
    <div
      className={`main-container__animatedCover ${
        active === !true ? "hide__container-animatedCover" : ""
      }`}
    >
      <div
        className={`block1 block transitionDuration ${
          active === !true ? "hide1" : ""
        }`}
      ></div>
      <div
        className={`block2 block transitionDuration ${
          active === !true ? "hide2" : ""
        }`}
      ></div>
      <div
        className={`block3 block transitionDuration ${
          active === !true ? "hide3" : ""
        }`}
      ></div>
      <div
        className={`block4 block transitionDuration ${
          active === !true ? "hide4" : ""
        }`}
      ></div>

      <div
        className={`textAnimation-button-text-desarrollador_container ${
          active === !true ? "hide-mainContainer-animation" : ""
        }`}
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <section
          className={`text-animation__container ${
            active === !true ? "hide-animation" : ""
          }`}
        >
          <span
            className={`${
              active === !true ? "hide-letter1 letter-opacity" : ""
            }`}
          >
            B
          </span>

          <span
            className={`${
              active === !true ? "hide-letter2 letter-opacity" : ""
            }`}
          >
            I
          </span>

          <span
            className={`${
              active === !true ? "hide-letter3 letter-opacity" : ""
            }`}
          >
            E
          </span>

          <span
            className={`${
              active === !true ? "hide-letter4 letter-opacity" : ""
            }`}
          >
            N
          </span>

          <span
            className={`${
              active === !true ? "hide-letter5 letter-opacity" : ""
            }`}
          >
            V
          </span>

          <span
            className={`${
              active === !true ? "hide-letter6 letter-opacity" : ""
            }`}
          >
            E
          </span>

          <span
            className={`${
              active === !true ? "hide-letter7 letter-opacity" : ""
            }`}
          >
            N
          </span>

          <span
            className={`${
              active === !true ? "hide-letter8 letter-opacity" : ""
            }`}
          >
            I
          </span>

          <span
            className={`${
              active === !true ? "hide-letter9 letter-opacity" : ""
            }`}
          >
            D
          </span>

          <span
            className={`${
              active === !true ? "hide-letter10 letter-opacity" : ""
            }`}
          >
            O
          </span>

          <span
            className={`${
              active === !true ? "hide-letter11 letter-opacity" : ""
            }`}
          >
            /
          </span>

          <span
            className={`${
              active === !true ? "hide-letter12 letter-opacity" : ""
            }`}
          >
            a
          </span>
        </section>

        <button
          onClick={() => setActive(!true)}
          className={`button-enter-portafolio ${
            active === !true ? "hide-button" : ""
          }`}
        >
          <span className="style-text-ingresar">ingresar</span>
          <i class="fas fa-arrow-right"></i>
        </button>
        <aside
          className={`style__text-desarrollador-animatedCover ${
            active === !true ? "hide-aside" : ""
          }`}
        >
          © 2021 Creado por Marcelo Adrián Wasinger
        </aside>
      </div>

      <div className={`burbujas ${active === !true ? "hide-burbujas" : ""}`}>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
        <div className="burbuja"></div>
      </div>
    </div>
  );
};

export default AnimatedCover;
