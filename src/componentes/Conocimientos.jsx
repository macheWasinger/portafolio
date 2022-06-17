import React, { useState } from "react";

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
import firebase from "../img/firebase.png";
import api from "../img/api.png";
import iphone from "../img/smartphone.png";
import logoMW from "../video/logo-mw2.mp4";
import app1 from "../img/app1.png";
import app2 from "../img/app2.png";
import app3 from "../img/app3.png";
import app4 from "../img/app4.png";
import camFrontal from "../img/camFrontal.png";

const Conocimientos = (props) => {
  // const [active, setActive] = React.useState(3);
  const [showTechsLeft, setShowTechsLeft] = useState(false);

  React.useEffect(() => {
    let updateTime = function () {
      let h = new Date();
      let hours = h.getHours();
      let minutes = h.getMinutes();
      // let ampm = "";

      if (hours >= 12) {
        hours = hours;
        // ampm = " PM";
      }
      // else {
      //   ampm = " AM";
      // }

      if (hours === 0) {
        hours = 12;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      let spanHora = document.querySelector("#hora");
      let spanMinutos = document.querySelector("#minutos");
      // let spanAMPM = document.querySelector("#ampm");

      spanHora.textContent = hours;
      // spanAMPM.textContent = " " + ampm;

      spanMinutos.textContent = minutes;
    };

    updateTime();
    setInterval(updateTime, 1000);

    // const progress = document.querySelector(".progress");
    // const percentage = document.querySelector(".percentage");

    // navigator.getBattery().then(function (battery) {
    //   console.log(bateryManager);
    //   let level = battery.level * 100;
    //   progress.style.width = `${level}%`;
    //   percentage.textContent = level + "%";
    //   console.log(Math.floor(level));
    // });
  }, []);

  return (
    <div loading="lazy" className="container-padre_conocimientos">
      <a name="Conocimientos"></a>

      <h1 className="style-h1-title color-white title-font">Conocimientos</h1>

      <div className="container-info-tecnologias">
        <article className="main-container-left">
          <section
            className="container-tech-left"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={html}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">HTML</h3>
            </div>
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={css}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">CSS</h3>
            </div>
            <div className="container__logo-title-tech">
              <img loading="lazy" src={js} alt="" className="style-logo-tech" />
              <h3 className="style-text__title-tech">JavaScript</h3>
            </div>
          </section>
          <section
            className="container-tech-left"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={react}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">React</h3>
            </div>
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={api}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">API</h3>
            </div>
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={firebase}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">Firebase</h3>
            </div>
          </section>
          <section
            className="container-tech-left"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={responsive}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">Responsive</h3>
            </div>
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={grid}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">Grid</h3>
            </div>
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={bootstrap}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">Bootstrap</h3>
            </div>
          </section>
        </article>

        <div className="container__smartphone-videoMW">
          <div className="container-smartphone">
            <img src={iphone} alt="" />
          </div>
          <div className="container__notifications-videoMW-apps">
            <div className="container-notificactions d-flex justify-content-between align-items-center">
              <p className="text-horario">
                <span id="hora"></span>:<span id="minutos"></span>
                {/* <span id="ampm"></span> */}
              </p>
              <div className="container__image-camFrontal">
                <img src={camFrontal} alt="" />
              </div>
              <article className="container-battery d-flex align-items-center">
                <article className="container-top-left">
                  <i className="fa-solid fa-wifi ml-1"></i>
                  <i className="fa-solid fa-signal"></i>
                </article>
                <p className="percentage" id="percentage"></p>
                {/* <div class="box_battery">
                  <div id="carga" class="carga center">
                    <span class="progress"></span>
                  </div>
                  <div class="battery center"></div>
                </div> */}
                <article className="container-battery">
                  <p>100%</p>
                  <i class="fa-solid fa-battery-full"></i>
                </article>
              </article>
            </div>

            <video loading="lazy" autoPlay loop muted className="video-mw">
              <source src={logoMW} />
            </video>
            <div className="container-image-smartphoneApps d-flex justify-content-around">
              <div className="container-app_image">
                <img src={app1} alt="" />
              </div>
              <div className="container-app_image">
                <img src={app2} alt="" />
              </div>
              <div className="container-app_image">
                <img src={app3} alt="" />
              </div>
              <div className="container-app_image">
                <img src={app4} alt="" />
              </div>
            </div>
            <section className="buttons-options">
              <span className="button-option"></span>
              <span className="button-option"></span>
              <span className="button-option"></span>
            </section>
          </div>
        </div>

        <div className="main-container-right">
          <section
            className="container-tech-right"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={git}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">Git</h3>
            </div>
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={github}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">GitHub</h3>
            </div>
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={java}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">Java</h3>
            </div>
          </section>
          <section
            className="container-tech-left"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={python}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">Python</h3>
            </div>
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={photoshop}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">Photoshop</h3>
            </div>
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={figma}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">Figma</h3>
            </div>
          </section>
          <section
            className="container-tech-left"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={canva}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">Canva</h3>
            </div>
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={vscode}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">VS Code</h3>
            </div>
            <div className="container__logo-title-tech">
              <img
                loading="lazy"
                src={terminal}
                alt=""
                className="style-logo-tech"
              />
              <h3 className="style-text__title-tech">Terminal</h3>
            </div>
          </section>
        </div>
      </div>

      <div
        className="container-data-estudios"
        data-aos="zoom-out"
        data-aos-duration="300"
        data-aos-delay="300"
      >
        <h4 className="title-estudios">Estudios</h4>
        <p className="text-estudios">
          Estudié Desarrollo Web Frontend mediante cursos online en plataformas
          digitales. Además, me capacito constantemente para ampliar mis
          conocimientos.
        </p>
      </div>
    </div>
  );
};

export default Conocimientos;
