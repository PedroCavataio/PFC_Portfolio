import React from 'react';
import { useNavigate } from 'react-router-dom';
import fotoPedro from '../assets/fotoPedro.jpg';
import './about.styles.css';

const About = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="about-container">
      <img src={fotoPedro} alt="Foto Pedro Cavataio" className="profile-image" />
      <h2 class="nameAbout"> "Pedro Cavataio" </h2>
      <div className="contAbout-texto">
      <p>
       Soy Pedro y estoy emocionado por adentrarme en la industria del desarrollo. Apasionado Full Stack Developer con una perspectiva única a pesar de mi experiencia no tecnológica. Comprometido con el aprendizaje constante y el éxito de los proyectos. Licenciado en Gestión de Organizaciones, con más de 20 años liderando equipos dinámicos y altas transacciones anuales. Coach de Agilidad y creador del programa de control de gestión Parking AEP. Estoy comprometido con el aprendizaje continuo y ansioso por contribuir al crecimiento y éxito de los proyectos en los que participe. ¡Listo para asumir nuevos desafíos y hacer una diferencia en el mundo del desarrollo!
      </p>
          <div className="about-list">
            
            </div>
          </div>
      <button className="enter-button-about" onClick={handleEnter}>
        <span className="enter-button-about-text">volver</span>
      </button>
    </div>
  );
};

export default About;
