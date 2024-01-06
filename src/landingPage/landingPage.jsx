import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./landinPage.styles.css";
import Nav from "../nav/nav";
import Foto from "../assets/fotoPedro.jpg";
import Flecha from "../assets/flechaSoy.png";
import pedroCavataio from "../assets/LogoPFC.png";

const Landing = ({ userName }) => {
  const navigate = useNavigate();
  const { estacion } = useParams();
  const nombre = new URLSearchParams(window.location.search).get("nombre");
  const [progress, setProgress] = useState(0);
  const [modalShown, setModalShown] = useState(true);
  const [brightness, setBrightness] = useState(0.1);

  const handleEnter = () => {
    navigate("/landing");
  };

  const fondoPorEstacion = () => {
    if (!estacion) {
      return "landing-page";
    } else if (estacion === "Primavera") {
      return "landing-page primavera";
    } else if (estacion === "Verano") {
      return "landing-page verano";
    } else if (estacion === "Otoño") {
      return "landing-page otoño";
    } else if (estacion === "Invierno") {
      return "landing-page invierno";
    }
  };

  const handleLightHover = () => {
    setBrightness(1);
  };

  const handleLightLeave = () => {
    setBrightness(0.03);
  };

  return (
    <>
      <div className="image-logo">
        <img src={pedroCavataio} alt="pedroIndex" className="nombre-image" />
      </div>
      <Nav />
      <div className={fondoPorEstacion()}>
        <h1 className="fraseLanding">
          Con más de 20 años de experiencia en el mundo laboral, mi espíritu
          emprendedor transitó con éxito hacia el sector informático como
          Frontend Developer.
        </h1>

        <div className="foto-container">
          <img
            src={Foto}
            alt="Foto Pedro Cavataio"
            className="fotoPedro"
            style={{ filter: `brightness(${brightness})` }}
          />
          <button
            className="light"
            onMouseEnter={handleLightHover}
            onMouseLeave={handleLightLeave}
          >
            Este soy yo!&nbsp;&nbsp; <span className="arrow">▲</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
