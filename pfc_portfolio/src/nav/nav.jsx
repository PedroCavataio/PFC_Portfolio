import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./nav.styles.css";


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
    navigate('/'); 
  }

  const redirigirAInicio = () => {
    navigate('/landing'); 
  }

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
        <h1 className='nombre redirigirAInicio' onClick={redirigirAInicio}>Pedro Cavataio</h1>
          
          <ul>
            <li>
              <a href={vacio}>Inicio</a>
            </li>
            <li>
              <a href={vacio}>Galería</a>
            </li>
            <li>
              <a href={vacio}>Proyectos</a>
            </li>
            <li>
              <a href={vacio}>Sobre Mi</a>
            </li>
            <li>
              <a href={vacio}>Contacto</a>
            </li>
            <li>
            <a href onClick={redirigirALogin}>Salir</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
