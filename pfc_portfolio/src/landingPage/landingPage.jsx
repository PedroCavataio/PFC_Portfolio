import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./landinPage.styles.css";
import Nav from "../nav/nav";

const Landing = ({ userName }) => {
  const navigate = useNavigate();
  const { estacion } = useParams();
  const nombre = new URLSearchParams(window.location.search).get("nombre");

  const handleEnter = () => {
    navigate("/home");
  };

  const fondoPorEstacion = () => {
    if (!estacion) {
      return "landing-page";
    } else if (estacion === "Primavera") {
      return 'landing-page primavera'
    } else if (estacion === "Verano") {
      return 'landing-page verano'
    } else if (estacion === "Otoño") {
      return 'landing-page otoño'
    } else if (estacion === "Invierno") {
      return 'landing-page invierno'
    }
  }

  return (
    <div className={fondoPorEstacion()}>
      <Nav /> 
      {/* <div className="container-landing">
        <h2 className="description-landing">{nombre}, te presento mi Portfolio.</h2>
        <h3 className="sub-description">By Pedro Francisco Cavataio</h3>
        <button className="enter-button-landing" onClick={handleEnter}>Ingresar</button>
      </div> */}
    </div>
  );
};

export default Landing;