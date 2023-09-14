import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./landinPage.styles.css";
import Nav from "../nav/nav";
import ModalComponent from "../modal/modal"; 

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
    <div className={fondoPorEstacion()}>
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
  );
};

export default Landing;
