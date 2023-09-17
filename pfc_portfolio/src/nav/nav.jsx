import React from "react";
import { useNavigate } from "react-router-dom";
import "./nav.styles.css";
import pedroCavataio from "../assets/pedro.png";
import { NavLink } from "react-router-dom";

let vacio = "";

function Nav() {
  const navigate = useNavigate();
  const abrir_cerrar_menu = () => {
    let menu_desplegable = document.getElementById("menu");
    let boton_cerrar = document.getElementById("x");
    menu_desplegable.classList.toggle("abrir_menu");
    boton_cerrar.classList.toggle("colocar_x");
  };

  const redirigirALogin = () => {
    navigate("/");
  };

  const redirigirAInicio = () => {
    navigate("/landing");
  };

  return (
    <>
      <header>
        <div className="barras">
          <button
            onClick={abrir_cerrar_menu}
            className="boton_menu"
            id="x"
          ></button>
        </div>
        <nav id="menu" className="desplegable">
          <h1 className="redirigirAInicio" onClick={redirigirAInicio}>
            <img src={pedroCavataio} alt="Logo" />
          </h1>
          

          <ul>
            <li>
            <NavLink to="/landing">
                Inicio
              </NavLink>
            </li>
            <li>
            <NavLink to="/trabajo">
                Mi trabajo
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                Mi resumen
              </NavLink>
            </li>
            <li>
            <NavLink to="/contacto">
                Contacto
              </NavLink>
            </li>
            <li>
              <a href onClick={redirigirALogin}>
                Salir
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
