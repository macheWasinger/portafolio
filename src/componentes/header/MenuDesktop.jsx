import React from "react";

const MenuDesktop = () => {
  const [active, setActive] = React.useState(0);

  return (
    <div className="container-menuDesktop shadow">
      <article className="w-25 rounded-pill">
        <a
          href="#Home"
          onClick={() => setActive(0)}
          className={`rounded-pill ${active === 0 ? "ancla_activo" : ""}`}
        >
          <i class="fa-solid fa-house"></i>
        </a>
      </article>

      <article className="w-25 rounded-pill">
        <a
          href="#SobreMi"
          onClick={() => setActive(1)}
          className={`rounded-pill ${active === 1 ? "ancla_activo" : ""}`}
        >
          <i class="fa-solid fa-user-tie"></i>
        </a>
      </article>

      <article className="w-25 rounded-pill">
        <a
          href="#Conocimientos"
          onClick={() => setActive(2)}
          className={`rounded-pill ${active === 2 ? "ancla_activo" : ""}`}
        >
          <i class="fa-solid fa-code"></i>
        </a>
      </article>

      <article className="w-25 rounded-pill">
        <a
          href="#Proyectos"
          onClick={() => setActive(3)}
          className={`rounded-pill ${active === 3 ? "ancla_activo" : ""}`}
        >
          <i class="fa-solid fa-laptop-code"></i>
        </a>
      </article>

      <article className="w-25 rounded-pill">
        <a
          href="#Contactos"
          onClick={() => setActive(4)}
          className={`rounded-pill ${active === 4 ? "ancla_activo" : ""}`}
        >
          <i class="fa-solid fa-address-card"></i>
        </a>
      </article>
    </div>
  );
};

export default MenuDesktop;
