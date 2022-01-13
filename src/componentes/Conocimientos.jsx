import React from 'react'

/********** IMPORTO LOGOS **********/
import html from '../img/html.png';
import css from '../img/css.png';
import grid from '../img/grid.png';
import js from '../img/js.png';
import bootstrap from '../img/bootstrap.png';
import react from '../img/react.png';
import photoshop from '../img/photoshop.png';
import figma from '../img/figma.png';
import canva from '../img/canva.png';
import java from '../img/java.png';
import python from '../img/python.png';

const Conocimientos = () => {
    return (
        <div className="container-padre_conocimientos">
            <a name="Conocimientos"></a>
            <h1 className="style-h1-title color-white">Conocimientos</h1>
            <div className="title-lineaHorizontal" data-aos="slide-left" data-aos-duration="1000" data-aos-offset="220"></div>
            <h3 className="style-h3-subtitulo color-white">Mis conocimientos de software</h3>
            <div className="column-general">
                <div className="container-tech" data-aos="fade-right"
                data-aos-delay="200">
                    <h2 className="card__title" data-aos="zoom-in" data-aos-delay="250">Front End</h2>
                    <div className="container-frontend">
                        <div className="container__logo-nivel" data-aos="zoom-in" data-aos-delay="300">
                            <img src={html} alt="" className='style-logo-tech' />
                            <div className="container-nivel n-alto">
                                <span className="style-circle"></span>
                                <h3 className="style-text__nivel">alto</h3>
                            </div>
                        </div>
                        <div className="container__logo-nivel" data-aos="zoom-in" data-aos-delay="450">
                            <img src={css} alt="" className='style-logo-tech' />
                            <div className="container-nivel n-alto">
                                <span className="style-circle"></span>
                                <h3 className="style-text__nivel">alto</h3>
                            </div>
                        </div>
                        <div className="container__logo-nivel" data-aos="zoom-in" data-aos-delay="600">
                            <img src={grid} alt="" className='style-logo-tech' />
                            <div className="container-nivel n-alto">
                                <span className="style-circle"></span>
                                <h3 className="style-text__nivel">alto</h3>
                            </div>
                        </div>
                        <div className="container__logo-nivel" data-aos="zoom-in"  data-aos-delay="750">
                            <img src={js} alt="" className='style-logo-tech' />
                            <div className="container-nivel n-medio">
                                <span className="style-circle"></span>
                                <h3 className="style-text__nivel">medio</h3>
                            </div>
                        </div>
                        <div className="container__logo-nivel" data-aos="zoom-in"  data-aos-delay="900">
                            <img src={bootstrap} alt="" className='style-logo-tech' />
                            <div className="container-nivel n-medio">
                                <span className="style-circle"></span>
                                <h3 className="style-text__nivel">medio</h3>
                            </div>
                        </div>
                        <div className="container__logo-nivel" data-aos="zoom-in"  data-aos-delay="1050">
                            <img src={react} alt="" className="style-logo-tech" />
                            <div className="container-nivel n-medio">
                                <span className="style-circle"></span>
                                <h3 className="style-text__nivel">medio</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-tech" data-aos="fade-right"
                data-aos-delay="400">
                    <h2 className="card__title" data-aos="zoom-in"  data-aos-delay="450">Design</h2>
                    <div className="container-design">
                        <div className="container__logo-nivel" data-aos="zoom-in" data-aos-delay="750">
                            <img src={photoshop} alt="" className="style-logo-tech" />
                            <div className="container-nivel n-alto">
                                <span className="style-circle"></span>
                                <h3 className="style-text__nivel">alto</h3>
                            </div>
                        </div>
                        <div className="container__logo-nivel" data-aos="zoom-in"  data-aos-delay="900">
                            <img src={figma} alt="" className="style-logo-tech" />
                            <div className="container-nivel n-medio">
                                <span className="style-circle"></span>
                                <h3 className="style-text__nivel">medio</h3>
                            </div>
                        </div>
                        <div className="container__logo-nivel" data-aos="zoom-in"  data-aos-delay="1050">
                            <img src={canva} alt="" className="style-logo-tech" />
                            <div className="container-nivel n-medio">
                                <span className="style-circle"></span>
                                <h3 className="style-text__nivel">medio</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-tech" data-aos="fade-right"
                data-aos-delay="600">
                    <h2 className="card__title" data-aos="zoom-in" data-aos-delay="700">Back End</h2>
                    <div className="container-backend">
                        <div className="container__logo-nivel" data-aos="zoom-in"  data-aos-delay="1000">
                            <img src={java} alt="" className="style-logo-tech" />
                            <div className="container-nivel n-bajo">
                                <span className="style-circle"></span>
                                <h3 className="style-text__nivel">bajo</h3>
                            </div>
                        </div>
                        <div className="container__logo-nivel" data-aos="zoom-in" data-aos-delay="1150">
                            <img src={python} alt="" className="style-logo-tech" />
                            <div className="container-nivel n-bajo">
                                <span className="style-circle"></span>
                                <h3 className="style-text__nivel">bajo</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Conocimientos
