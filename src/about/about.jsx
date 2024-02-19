import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./about.styles.css";
import figuraPuntos from "../assets/figuraPuntos.png";
import Henry from "../assets/henry.png";
import Ivba from "../assets/ivba.png";
import AA2000 from "../assets/aa2000.png";
import Tecnocasa from "../assets/tecnocasa.png";
import Umet from "../assets/umet.png";
import Ubicacion from "../assets/ubicacionMapaBlanco.png";
import UbicacionResponsive from "../assets/ubicacionResponsive.png";
import Curriculum from "../assets/CVpedroCavataioAMZ.pdf";
import pedroCavataio from "../assets/LogoPFC.png";
import CVPC from "../assets/descargaCV.png";
import CVResponsive from "../assets/descargaCVresponsive.png";

const About = () => {
  const [textColor, setTextColor] = useState("#04b8b8");

  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleButtonClick = () => {
    setTextColor("#e1e9e9");
    scrollToTop();
    setTimeout(() => {
      setTextColor("#04b8b8");
    }, 300);
  };

  const handleEnter = () => {
    navigate("/landing");
  };

  const cvImage = () => {
    if (window.screen.width <= 780) {
      return CVResponsive;
    }
    return CVPC;
  };

  const ubicacionImage = () => {
    if (window.screen.width <= 780) {
      return UbicacionResponsive;
    }
    return Ubicacion;
  };

  return (
    <>
      <div>
        <img
          src={pedroCavataio}
          alt="pedroIndex"
          className="nombreImageVista"
        />
      </div>
      <div className="about-container">
        <div className="sections-container">
          <div className="section">
            <div className="info">
              <div className="contAbout-texto">
                <div className="sectionCV">
                  <div className="ubicacion-container">
                    <img
                      src={ubicacionImage()}
                      alt="ubicacion"
                      className="ubicacion"
                    />
                    <p className="españa">España</p>
                  </div>
                  <a href={Curriculum} target="_blank">
                    <img src={cvImage()} alt="CV" className="CV" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="section-dividerCV" />

          <div className="section">
            <div className="data">
              <div className="contAbout-texto">
                <p>
                  <span class="job-role">Full Stack Web Developer</span>
                  <br />
                  <span class="company-name">Henry</span>
                  <br />
                  <span class="year">2023</span>
                </p>
              </div>
            </div>
            <div className="info">
              <div className="contAbout-textoDesarrollo">
                <p>
                  Mi participación en el bootcamp de Henry ha sido una
                  experiencia transformadora. A lo largo del programa, he
                  adquirido conocimientos sólidos en programación y desarrollo
                  web a través de un enfoque práctico y colaborativo. Los
                  proyectos desafiantes en los que trabajé en equipo no solo
                  mejoraron mis habilidades técnicas, sino también mis
                  habilidades de comunicación y resolución de problemas. Uno de
                  los aspectos más destacados fue el apoyo constante que recibí
                  de los instructores y mentores altamente calificados. Esto
                  hizo que mi proceso de aprendizaje fuera más efectivo y
                  gratificante. Estoy emocionado por lo que el futuro tiene
                  reservado para mí gracias a esta experiencia educativa.
                </p>
              </div>
            </div>
            <div className="images-container">
              <a href="https://www.soyhenry.com" target="_blank">
                <img src={Henry} alt="henry" className="henry" />
              </a>
            </div>
          </div>

          <hr className="section-dividerCV" />

         {/*  <div className="section">
            <div className="data">
              <div className="contAbout-texto">
                <p>
                  <span class="job-role">Full Stack Developer</span>
                  <br />
                  <span class="company-name">IVBA</span>
                  <br />
                  <span>Buenos Aires, Argentina</span>
                  <br />
                  <span>2022 - 2023</span>
                </p>
              </div>
            </div>
            <div className="info">
              <div className="contAbout-textoDesarrollo">
                <p>
                  A lo largo de mi experiencia como desarrollador en IVBA, me he
                  especializado en el mantenimiento y desarrollo de la intranet.
                  He utilizado como Stack tecnológico: JavaScript, ReactJS,
                  HTML, CSS, Node.js, Express, Sequelize y Nodemailer. Mi
                  enfoque se ha centrado en la estructuración y modularización
                  eficientes de componentes, con la implementación estratégica
                  de Redux para gestionar de manera efectiva el estado global.
                  Adicionalmente, he llevado a cabo pruebas de uso, incorporando
                  funciones clave como paginados, filtros combinados,
                  formularios, y la creación de rutas para nuevas vistas, así
                  como endpoints para llamadas a APIs. Este enfoque técnico ha
                  contribuido al éxito continuo y la mejora constante de la
                  intranet. Además, he participado activamente en la
                  colaboración con el sector de diseño UI/UX, siempre orientado
                  a ofrecer la mejor experiencia del usuario. Mi enfoque
                  proactivo se refleja en la resolución de problemas técnicos
                  muchas de las veces en colaboración con los usuarios finales.
                  En un entorno ágil, he sido parte integral de reuniones
                  diarias, sprints, demos y retrospectivas, contribuyendo al
                  dinamismo y éxito de los proyectos. Asimismo, he elaborado
                  documentación detallada que abarca la descripción de
                  implementaciones específicas y casos de uso. Estoy
                  comprometido con proporcionar soluciones técnicas y seguir
                  contribuyendo al progreso continuo de los proyectos.
                </p>
              </div>
            </div>
            <div className="images-container">
              <a href="https://www.gba.gob.ar/vivienda" target="_blank">
                <img src={Ivba} alt="ivba" className="ivba" />
              </a>
            </div>
          </div>

          <hr className="section-dividerCV" /> */}

          <div className="section">
            <div className="data">
              <div className="contAbout-texto">
                <p>
                  <span>Especialista en cintas  transportadoras Mantenimiento Preventivo / Predictivo / Correctivo de Sistema BHS Terminal Aeroportuario</span>
                  <br />
                  <span>AA 2000 S.A.</span>
                  <br />
                  <span>Buenos Aires, Argentina</span>
                  <br />
                  <span>2013 - 2022</span>
                </p>
              </div>
            </div>
            <div className="info">
              <div className="contAbout-textoDesarrollo">
                <p>
                Desde 2013, he desempeñado el rol de técnico de mantenimiento en Aeropuertos Argentina 2000 SA.
                A partir de 2018, y en el marco de la construcción de la nueva Terminal de Partidas del Aeropuerto Internacional Ministro Pistarini de Ezeiza,me especialicé en el montaje, reparación y mantenimiento correctivo, preventivo y predictivo de cintas transportadoras. Participé en el proyecto de implementación del avanzado sistema de autogestión de equipaje (BHS) en dicha terminal.
                <br />
                • 20 puestos de despacho (Self Baggage Drop-off) Autofacturación e impresión de etiquetas por pasajeros.
                <br />
                • 8 Tomógrafos.
                <br />
                • 2.250 metros de cinta transportadora de equipaje, 150balanzas, 150 inyectoras para etiquetas y 4 puestos alternativos en la vereda de ingreso,Vanderlande.
                <br />
                
                 <br />
                 <br />
                 1. Inspeccionar y mantener las cintas transportadoras: 
                 <br />
                 • Realizar inspecciones regulares de las cintas transportadoras para detectar problema o desgastes.
                 • Mantenimiento preventivo y correctivo de las cintas transportadoras, como la limpieza, lubricación y reemplazo de piezas desgastadas, centrado de bandas,cambio de rodillos, motores y fotocélulas.
                 <br />
                 <br />
                 2. Solucionar problemas: 
                 <br />
                 • Ante un problema con un cinta transportadora, me ocupaba de realizar diagnosis y solucionarlo de manera rápida y eficiente para minimizar el tiempo de inactividad. 
                 <br />
                 <br />
                 3. Realizarreparaciones:
                 <br />
                 • Reparación o sustitución de piezas.
                 • Corrección de las bandas. Fotocélulas, etc.
                 <br />
                 <br />
                 4. Registros:
                 <br />
                 • Elaboración del registro de todas las inspecciones, reparaciones y mantenimiento realizado en las cintas transportadoras. 
                 <br />
                 <br />
                 5.Garantizar la seguridad:
                 <br />
                 • Velar por la seguridad en su uso, así como el cumplimiento de la normativa de seguridad aplicable.
                </p>
              </div>
            </div>
            <div className="images-container">
              <a href="https://www.aa2000.com.ar" target="_blank">
                <img src={AA2000} alt="aa2000" className="aa2000" />
              </a>
            </div>
          </div>

          <hr className="section-dividerCV" />

          <div className="section">
            <div className="data">
              <div className="contAbout-texto">
                <p>
                  Administrador
                  <br />
                  Tecnocasa
                  <br />
                  Madrid, España.
                  <br />
                  2000 - 2012
                  <br />
                </p>
              </div>
            </div>
            <div className="info">
              <div className="contAbout-textoDesarrollo">
                <p>
                  En mi carrera en el sector inmobiliario, he desempeñado
                  diversas funciones, desde la intermediación en transacciones
                  hasta la gestión de valiosas propiedades. Mi enfoque siempre
                  ha sido proporcionar un servicio excepcional al cliente,
                  ofreciendo atención personalizada y resolviendo problemas de
                  manera eficiente. Gracias a un análisis de mercado exhaustivo,
                  pronostico movimientos y tomo decisiones estratégicas basadas
                  en las tendencias y la demanda del sector. Como hábil
                  negociador, he logrado acuerdos beneficiosos para todas las
                  partes involucradas. La gestión minuciosa de la documentación
                  ha sido fundamental en mi trabajo para garantizar su
                  integridad. Además, he aplicado estrategias de marketing
                  efectivas para promover propiedades. Mi compromiso con la
                  excelencia y el éxito en cada proyecto se refleja en mi
                  constante formación y actualización en regulaciones y
                  tendencias del sector.
                </p>
              </div>
            </div>
            <div className="images-container">
              <a href="https://www.tecnocasa.es" target="_blank">
                <img src={Tecnocasa} alt="tecnocasa" className="tecnocasa" />
              </a>
            </div>
          </div>

          <hr className="section-dividerCV" />

          <div className="section">
            <div className="data">
              <div className="contAbout-texto">
                <p>
                  Lic. En Gestión de Organizaciones
                  <br />
                  U.M.E.T
                  <br />
                  Buenos Aires, Argentina
                  <br />
                  2013 - 2018
                </p>
              </div>
            </div>
            <div className="info">
              <div className="contAbout-textoDesarrollo">
                <p>
                  Mi Licenciatura en Gestión de Organizaciones ha sido un viaje
                  académico y profesional profundamente enriquecedor. Durante mi
                  tiempo en la universidad, adquirí una base sólida en una
                  amplia gama de disciplinas relacionadas con la gestión, que
                  abarcan desde la planificación estratégica hasta la gestión de
                  recursos humanos y el análisis financiero. Estos conocimientos
                  me han proporcionado las herramientas esenciales para abordar
                  con confianza los desafíos empresariales del mundo real. Lo
                  que hace que esta experiencia sea aún más valiosa son las
                  conexiones significativas que establecí con profesores y
                  compañeros de clase. Estas conexiones no solo enriquecieron mi
                  aprendizaje, sino que también crearon una red de contactos que
                  sigue siendo fundamental en mi carrera profesional. En
                  resumen, mi Licenciatura en Gestión de Organizaciones no solo
                  me proporcionó una sólida base académica, sino que también me
                  brindó la oportunidad de crecer tanto a nivel personal como
                  profesional a través de conexiones significativas y
                  experiencias enriquecedoras.
                </p>
              </div>
            </div>
            <div className="images-container">
              <a href="https://www.umet.edu.ar" target="_blank">
                <img src={Umet} alt="umet" className="umet" />
              </a>
            </div>
          </div>

          <hr className="section-dividerCV" />
        </div>
        <div>
          <button
            onClick={handleButtonClick}
            className="scroll-button"
            style={{ color: textColor }}
          >
            ▲
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
