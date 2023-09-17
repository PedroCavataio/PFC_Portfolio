import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./landinPage.styles.css";
import Nav from "../nav/nav";
import ModalComponent from "../modal/modal";
import Foto from "../assets/fotoPedro.jpg";
import Cuadrado from "../assets/cuadrado.png";
import Petalos from "../assets/petalos.png";
import Cuadros from "../assets/cuadros.png";
import Lineas from "../assets/lineas.png";
import LineaLoca from "../assets/lineaLoca.png";
import LineaLocaBlanca from "../assets/lineaLocaBlanca.png";

const Landing = ({ userName }) => {
  const navigate = useNavigate();
  const { estacion } = useParams();
  const nombre = new URLSearchParams(window.location.search).get("nombre");
  const [progress, setProgress] = useState(0);
  const [modalShown, setModalShown] = useState(true);

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

  return (
    <>
      <div className={fondoPorEstacion()}>

        <div className="cuadrado">
        <img
        src={Cuadrado}
        alt="cuadrado"
        className="cua"
        />
        </div>

      {/*   <div className="lineas">
        <img
        src={Lineas}
        alt="lineas"
        className="lineas"
        />
        </div>

        <div className="lineaLoca">
        <img
        src={LineaLoca}
        alt="lineaLoca"
        className="lineaLoca"
        />
        </div>

        <div className="lineaLocaBlanca">
        <img
        src={LineaLocaBlanca}
        alt="lineaLocaBlanca"
        className="lineaLocaBlanca"
        />
        </div> */}

        <div className="cuadros">
        <img
        src={Cuadros}
        alt="cuadros"
        className="cuadros"
        />
        </div>

        
        <div class="foto-container">
          <img
            src={Foto}
            alt="Foto Pedro Cavataio"
            className="fotoPedro"
          />
          
        </div>
        <h1 className="fraseLanding">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>

        <Nav />
        {/* {!modalShown && (
        <h1 className="fraseLanding">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
      )} */}
      </div>
    </>
  );
};

export default Landing;
