import React from 'react'
import { Link } from 'react-scroll';
import { useState } from "react";

const Menu = () => {
     const [isActive, setActive] = useState(false);
     const toggleMenu = () => {
         setActive(!isActive);
     };

    return (
        <div className="container-Padre_menu">
            <div className="burger">
                <input type="checkbox" id="btn-menu" checked={isActive} onClick={toggleMenu} />
                <label for="btn-menu" className="label-menu">
                    <span id="span-1"></span>
                    <span id="span-2"></span>
                    <span id="span-3"></span>
                </label>
            </div>

            <nav className={`menu-navegacion ${isActive ? "menu-activado" : "hide"}`}>
                <ul>
                    <li className="item-li" onClick={toggleMenu}>
                        <Link to='Home' smooth={true}>Inicio</Link>
                    </li>
                    <li className="item-li" onClick={toggleMenu}>
                            <Link to='SobreMi' smooth={true}>Sobre mí</Link>
                    </li>
                    <li className="item-li" onClick={toggleMenu}>
                        <Link to='Conocimientos' smooth={true}>Conocimientos</Link>
                        </li>
                    <li className="item-li" onClick={toggleMenu}>
                            <Link to='Proyectos' smooth={true}>Proyectos</Link>
                    </li>
                    <li className="item-li" onClick={toggleMenu}>
                            <Link to='Contactos' smooth={true}>Contactos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
