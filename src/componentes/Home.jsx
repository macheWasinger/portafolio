import React from 'react';

// IMPORTO LOS COMPONENTES
import Menu from './header/Menu';

// IMPORTO IMAGEN Y VIDEO
import maw from '../img/maw.png';
import logoAnimado from '../video/logo-mw.mp4';
import animacionMaquetador from '../video/maquetador.mp4';

const Home = () => {
    return (
        <div className="container-padre">
            <a name="Home"></a>
            <div className="container_fondos-colores">
                <div className="container_dark-grey">

                    <video onLoadedMetadata="this.muted=true" autoPlay loop muted className="style-logo-video">
                        <source src={logoAnimado} />
                    </video>
                    <div className="container__texto-presentacion">
                        <h1 className="style-h1-home">
                            <span data-aos="fade-right" data-aos-delay="100">Soy</span>
                            <span className
                            ="style-nombre" data-aos="fade-right" data-aos-delay="300">Marcelo</span>
                            <span className="style-apellido" data-aos="fade-right" data-aos-delay="500">Wasinger</span>
                        </h1>
                        
                        <span className="style-span_linea-horizontal-home1" data-aos="zoom-in" data-aos-delay="700"></span>

                        <span className="style-span_linea-horizontal-home2" data-aos="zoom-in" data-aos-delay="950"></span>

                        <video onLoadedMetadata="this.muted=true" autoPlay loop muted className="style-animacionMaquetador" data-aos="zoom-in" data-aos-delay="1250">
                        <source src={animacionMaquetador} />
                        </video>
                    </div>
                </div>

                <div className="container-orange">
                    <Menu />
                    <img src={maw} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;