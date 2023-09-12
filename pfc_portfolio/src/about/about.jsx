import React from "react";
import { useNavigate } from "react-router-dom";
import fotoPedro from "../assets/fotoPedro.jpg";
import "./about.styles.css";
import figuraPuntos from "../assets/figuraPuntos.png"
import figuraPuntitos from "../assets/puntitos.png"
import figuraTriangulos from "../assets/triangulos.png"
import figuraCuadrado from "../assets/cuadrado.png"

const About = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/landing");
  };

  return (
    
    <div className="about-container">
      
      <div className="contAbout-texto">
        <p>
          Soy Pedro y estoy emocionado por adentrarme en la industria del
          desarrollo. Apasionado Full Stack Developer con una perspectiva única
          a pesar de mi experiencia no tecnológica. Comprometido con el
          aprendizaje constante y el éxito de los proyectos. Licenciado en
          Gestión de Organizaciones, con más de 20 años liderando equipos
          dinámicos y altas transacciones anuales. Coach de Agilidad y creador
          del programa de control de gestión Parking AEP. Estoy comprometido con
          el aprendizaje continuo y ansioso por contribuir al crecimiento y
          éxito de los proyectos en los que participe. ¡Listo para asumir nuevos
          desafíos y hacer una diferencia en el mundo del desarrollo!
        </p>
        
      </div>
      <img
        src={fotoPedro}
        alt="Foto Pedro Cavataio"
        className="profile-image"
      />
      <img
        src={figuraPuntos}
        alt="puntos"
        className="puntos"
      />
      <img
        src={figuraPuntitos}
        alt="puntitos"
        className="puntitos"
      />
      <img
        src={figuraPuntitos}
        alt="puntitos"
        className="puntitos2"
      />
      <img
        src={figuraTriangulos}
        alt="triangulos"
        className="triangulos"
      />
      <img
        src={figuraCuadrado}
        alt="cuadrado"
        className="cuadrado"
      />


    </div>
  );
};

export default About;
