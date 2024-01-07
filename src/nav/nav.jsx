import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./nav.styles.css";
import pedroCavataio from "../assets/LogoPFC.png";
import { NavLink } from "react-router-dom";


function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = React.createRef();
 

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        cerrarMenu();
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  const nombreImagenLogo = () => {
    navigate("/landing");
  };

  const handleMenuHover = () => {
    if (activeItem === "/trabajo") {
      setIsMenuOpen(true);
    }
  };

  const handleMenuLeave = () => {
    setIsMenuOpen(false);
  };

  const handleSectionClick = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const abrir_cerrar_menu = () => {
    let menu_desplegable = document.getElementById("menu");
    let boton_cerrar = document.getElementById("x");
    menu_desplegable.classList.toggle("abrir_menu");
    boton_cerrar.classList.toggle("colocar_x");
  };

  const cerrarMenu = () => {
    const menuDesplegable = document.getElementById("menu");
    const botonCerrar = document.getElementById("x");
    menuDesplegable.classList.remove("abrir_menu");
    botonCerrar.classList.remove("colocar_x");
  };

 
  return (
    <>
      <header ref={menuRef}>
        <div className="barras">
          <button
            onClick={abrir_cerrar_menu}
            className="button_menu"
            id="x"
          ><img /></button>
        </div>

        <nav id="menu" className="desplegable">
          <ul>
            <li>
              <NavLink
                to="/PFC_Portfolio"
                onClick={() => setActiveItem("/landing")}
              >
                <img
                  src={pedroCavataio}
                  alt="pedroIndex"
                  className="nombreImagenLogo"
                />
              </NavLink>
            </li>

            <li className={activeItem === "/landing" ? "active" : ""}>
              <NavLink to="/landing" onClick={() => setActiveItem("/landing")}>
                Inicio
              </NavLink>
            </li>

            <li className={activeItem === "/trabajo" ? "active" : ""}>
              <NavLink to="/trabajo" onClick={() => setActiveItem("/trabajo")}>
                Mi trabajo
              </NavLink>
            </li>

            <li className={activeItem === "/about" ? "active" : ""}>
              <NavLink to="/about" onClick={() => setActiveItem("/about")}>
                Mi resumen
              </NavLink>
            </li>

            <li className={activeItem === "/contacto" ? "active" : ""}>
              <NavLink
                to="/contacto"
                onClick={() => setActiveItem("/contacto")}
              >
                Contacto
              </NavLink>
            </li>

            <li>
              <a href="/PFC_Portfolio">Salir</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
