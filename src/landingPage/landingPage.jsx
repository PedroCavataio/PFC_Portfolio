import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./landinPage.styles.css";
import Nav from "../nav/nav";
import Foto from "../assets/fotoPedro.jpg";


const Landing = ({ userName }) => {
  const navigate = useNavigate();
  const { estacion } = useParams();
  const nombre = new URLSearchParams(window.location.search).get("nombre");
  const [progress, setProgress] = useState(0);
  const [modalShown, setModalShown] = useState(true);
  const [brightness, setBrightness] = useState(0.1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
        setModalShown(false);
        setTimeout(() => {
          navigate("/landing");
        }, 0);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [progress, navigate]);

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
    setBrightness(0.05);
  };

  

  return (
    
    <>
    <Nav />
      <div className={fondoPorEstacion()}>
      
        <h1 className="fraseLanding">
        Si haces click en "Mi trabajo", verás una selección de proyectos en los que he estado involucrado.
        </h1>

        <div class="foto-container">
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
            Iluminar img.
          </button>
        </div> 
      </div>
      
      
     
    </>
  );
};

export default Landing;
