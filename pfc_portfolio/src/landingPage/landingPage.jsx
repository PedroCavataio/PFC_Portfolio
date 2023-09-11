import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./landinPage.styles.css";
import Nav from "../nav/nav";

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
        clearInterval(interval); // Detener el intervalo cuando el progreso llega al 100%
        setModalShown(false);
        setTimeout(() => {
          navigate("/landing");
        }, 0); // Retrasar la redirección después de completar el progreso
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
      <Nav />
      {modalShown && (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  ¡Genial, {nombre}! ¡Excelente elección!. {estacion} es una época maravillosa del año.
                </h5>
                  <div className="modal-body">
                  {nombre}, te presento mi Portfolio.
                  </div>
                <h5 className="modal-title" id="exampleModalLabel">
                  Progreso: {progress}%
                </h5>
              </div>             
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Landing;
