import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.styles.css";
import figuraPuntos from "../assets/figuraPuntos.png";
import DescargaCV from "../assets/descargaCV.png";
import Henry from "../assets/henry.png";
import AA2000 from "../assets/aa2000.png";
import Tecnocasa from "../assets/tecnocasa.png";
import Umet from "../assets/umet.png";

const About = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/landing");
  };

  return (
    <div className="about-container">
      <div className="sections-container">
        <div className="sectionCV">
          <a href="URL_DEL_CURRICULUM.pdf" download="NombreDelCurriculum.pdf">
            <img src={DescargaCV} alt="Currículum" className="CV" /> 
          </a>
        </div>
        <hr className="section-dividerCV" />

        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p>Full Stack Web Developer - Henry. (2023)</p>
            </div>
          </div>

          <div className="info">
            <div className="contAbout-texto">
              <p>
                Mi participación en el bootcamp de Soy Henry ha sido una
                experiencia transformadora. A lo largo del programa, he
                adquirido conocimientos sólidos en programación y desarrollo web
                a través de un enfoque práctico y colaborativo. Los proyectos
                desafiantes en los que trabajé en equipo no solo mejoraron mis
                habilidades técnicas, sino también mis habilidades de
                comunicación y resolución de problemas. Uno de los aspectos más
                destacados fue el apoyo constante que recibí de los instructores
                y mentores altamente calificados. Esto hizo que mi proceso de
                aprendizaje fuera más efectivo y gratificante. En resumen, el
                bootcamp de Soy Henry me ha preparado de manera sólida para una
                carrera exitosa en el mundo del desarrollo web, brindándome las
                habilidades técnicas y las habilidades blandas necesarias para
                tener éxito en esta industria en constante evolución. Estoy
                emocionado por lo que el futuro tiene reservado para mí gracias
                a esta experiencia educativa.
              </p>
            </div>
          </div>
          <div className="images-container">
            <img src={Henry} alt="henry" className="henry" />
          </div>
        </div>
        <hr className="section-divider" />

        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p>
                Supervisor de Estacionamiento - Aeropuertos Argentina 2000 S.A.
                (2013 - Actualidad) Buenos Aires, Argentina.
              </p>
            </div>
          </div>
          <div className="info">
            <div className="contAbout-texto">
              <p>
                Desde el año 2013, he desempeñado el rol de Supervisor en
                Aeropuertos Argentina 2000 S.A., una empresa líder en el sector.
                Mi principal responsabilidad ha sido supervisar y liderar un
                equipo de 30 personas en el Aeropuerto Jorge Newbery. Este
                entorno de trabajo es altamente dinámico y se caracteriza por
                mantener un exigente estándar de calidad tanto en las
                operaciones de caja como en el servicio al cliente, abarcando
                más de 747,000 transacciones anuales. Además de mis tareas
                habituales como Jefe de Estacionamiento, he tenido la
                oportunidad de formarme y ejercer como Coach de Agilidad, lo que
                me ha permitido contribuir al desarrollo profesional y al éxito
                del equipo.
              </p>
            </div>
          </div>
          <div className="images-container">
            <img src={AA2000} alt="aa2000" className="aa2000" />
          </div>
        </div>
        <hr className="section-divider" />
        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p>
                Gerente Tecnocasa Franchising Networks S.A. (2000 - 2012).
                Madrid, España.
              </p>
            </div>
          </div>
          <div className="info">
            <div className="contAbout-texto">
              <p>
                En mi trayectoria inmobiliaria, he desempeñado diversas
                funciones, desde intermediar en transacciones hasta gestionar
                valiosas propiedades. Mi enfoque principal fue brindar un
                servicio excepcional al cliente, incluyendo atención
                personalizada y resolución eficiente de problemas. He realizado
                un análisis exhaustivo del mercado inmobiliario, pronostico
                movimientos y toma decisiones estratégicas basadas en tendencias
                y demanda. Soy un hábil negociador, logrando acuerdos
                beneficiosos para todas las partes. La gestión de documentación
                ha sido clave en mi trabajo, garantizando su integridad. He
                aplicado estrategias de marketing efectivas para promover
                propiedades. Me he mantenido actualizado con regulaciones y
                tendencias a través de formación continua, comprometiéndome con
                la excelencia y el éxito en cada proyecto.
              </p>
            </div>
          </div>
          <div className="images-container">
            <img src={Tecnocasa} alt="tecnocasa" className="tecnocasa" />
          </div>
        </div>
        <hr className="section-divider" />

        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p>
                Lic. Gestión de Organizaciones - UMET (Universidad Metropolitana
                para la Educaión y el Trabajo). Buenos Aires, Argentina
              </p>
            </div>
          </div>
          <div className="info">
            <div className="contAbout-texto">
              <p>
                "Mi Licenciatura en Gestión de Organizaciones ha sido un viaje
                académico y profesional muy enriquecedor. Durante mi tiempo en
                la universidad, adquirí una base sólida en una amplia gama de
                disciplinas relacionadas con la gestión, desde la planificación
                estratégica hasta la gestión de recursos humanos y el análisis
                financiero. Estos conocimientos me han proporcionado las
                herramientas esenciales para abordar con confianza los desafíos
                empresariales en el mundo real. Lo que hace que esta experiencia
                sea aún más valiosa es la oportunidad de establecer conexiones
                significativas con profesores y compañeros de clase. Estas
                conexiones no solo enriquecieron mi aprendizaje, sino que
                también crearon una red de contactos que sigue siendo
                fundamental en mi carrera profesional. En resumen, mi
                Licenciatura en Gestión de Organizaciones no solo me proporcionó
                una sólida base académica, sino que también me dio la
                oportunidad de crecer personal y profesionalmente a través de
                conexiones significativas y experiencias enriquecedoras."
              </p>
            </div>
          </div>
          <div className="images-container">
            <img src={Umet} alt="umet" className="umet" />
          </div>
        </div>
        <hr className="section-divider" />

        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p></p>
            </div>
          </div>
          <div className="info">
            <div className="contAbout-texto">
              <p>
                <img src={figuraPuntos} alt="puntos" className="puntos" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
