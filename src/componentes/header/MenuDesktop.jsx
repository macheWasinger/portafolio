import React from "react";
import { Link } from "react-scroll";

const MenuDesktop = () => {
  const [active, setActive] = React.useState(0);

  return (
    <div className="container-menuDesktop shadow">
      <article className="w-25 rounded-pill">
        <Link
          to="Home"
          smooth={true}
          onClick={() => setActive(0)}
          className={`rounded-pill ${active === 0 ? "ancla_activo" : ""}`}
        >
          <i class="fa-solid fa-house"></i>
        </Link>
      </article>

      <article className="w-25 rounded-pill">
        <Link
          to="SobreMi"
          smooth={true}
          onClick={() => setActive(1)}
          className={`rounded-pill ${active === 1 ? "ancla_activo" : ""}`}
        >
          <i class="fa-solid fa-user-tie"></i>
        </Link>
      </article>

      <article className="w-25 rounded-pill">
        <Link
          to="Conocimientos"
          smooth={true}
          onClick={() => setActive(2)}
          className={`rounded-pill ${active === 2 ? "ancla_activo" : ""}`}
        >
          <i class="fa-solid fa-code"></i>
        </Link>
      </article>

      <article className="w-25 rounded-pill">
        <Link
          to="Proyectos"
          smooth={true}
          onClick={() => setActive(3)}
          className={`rounded-pill ${active === 3 ? "ancla_activo" : ""}`}
        >
          <i class="fa-solid fa-laptop-code"></i>
        </Link>
      </article>

      <article className="w-25 rounded-pill">
        <Link
          to="Contactos"
          smooth={true}
          onClick={() => setActive(4)}
          className={`rounded-pill ${active === 4 ? "ancla_activo" : ""}`}
        >
          <i class="fa-solid fa-address-card"></i>
        </Link>
      </article>
    </div>
  );
};

export default MenuDesktop;
