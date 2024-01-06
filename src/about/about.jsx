import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./about.styles.css";
import figuraPuntos from "../assets/figuraPuntos.png";
import DescargaCV from "../assets/descargaCV.png";
import Henry from "../assets/henry.png";
import Ivba from "../assets/ivba.png";
import AA2000 from "../assets/aa2000.png";
import Tecnocasa from "../assets/tecnocasa.png";
import Umet from "../assets/umet.png";
import Ubicacion from "../assets/ubicacionMapaBlanco.png";
import Curriculum from "../assets/CVpedroCavataio_fullStackDeveloper.pdf";
import pedroCavataio from "../assets/LogoPFC.png";

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

  return (
    <div className="about-container">
      <div className="image-logo">
        <img src={pedroCavataio} alt="pedroIndex" className="nombre-image" />
      </div>
      <div className="sections-container">
        <div className="section">
          <div className="info">
            <div className="contAbout-texto">
              <div className="sectionCV">
              <div className="ubicacion-container">
                <img src={Ubicacion} alt="Ubicacion" className="ubicacion" />
                <p className="españa">
                  España
                </p>
                </div>
                <a href={Curriculum} target="_blank">
                  <img src={DescargaCV} alt="CV" className="CV" />
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
            <div className="contAbout-texto">
              <p>
                Mi participación en el bootcamp de Henry ha sido una experiencia
                transformadora. A lo largo del programa, he adquirido
                conocimientos sólidos en programación y desarrollo web a través
                de un enfoque práctico y colaborativo. Los proyectos desafiantes
                en los que trabajé en equipo no solo mejoraron mis habilidades
                técnicas, sino también mis habilidades de comunicación y
                resolución de problemas. Uno de los aspectos más destacados fue
                el apoyo constante que recibí de los instructores y mentores
                altamente calificados. Esto hizo que mi proceso de aprendizaje
                fuera más efectivo y gratificante. Estoy emocionado por lo que
                el futuro tiene reservado para mí gracias a esta experiencia
                educativa.
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

        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p>
                <span class="job-role">Frontend Developer</span>
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
            <div className="contAbout-texto">
              <p>
                Durante mi periodo como desarrollador en el Departamento de
                Sistemas del Instituto de Vivienda de Buenos Aires, desde
                octubre de 2022 hasta noviembre de 2023, me he centrado en el
                mantenimiento de sistemas, aplicando actualizaciones y parches
                con lenguajes como HTML, CSS, JavaScript y ReactJS. Mis
                responsabilidades incluyeron desde corregir bugs para garantizar
                estabilidad hasta realizar historias de usuario y mejoras de
                rendimiento. En un entorno ágil, he participado activamente en
                reuniones diarias, sprints, demos y retrospectivas. Colaboré
                estrechamente con analistas para agregar nuevas funcionalidades
                y mejorar las existentes, utilizando tecnologías como React para
                el desarrollo frontend. Además, he resuelto problemas técnicos
                en colaboración con usuarios finales. La documentación
                detallada, que abarcaba la descripción de implementaciones
                específicas y casos de uso, desempeñó un papel clave en mi rol
                al facilitar la colaboración y establecer bases sólidas para
                futuros desarrollos.
              </p>
            </div>
          </div>
          <div className="images-container">
            <a href="https://www.gba.gob.ar/vivienda" target="_blank">
              <img src={Ivba} alt="ivba" className="ivba" />
            </a>
          </div>
        </div>

        <hr className="section-dividerCV" />

        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p>
                <span>Supervisor Experiencia al Cliente</span>
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
            <div className="contAbout-texto">
              <p>
                Desde el año 2013, he ocupado el puesto de Supervisor en
                Aeropuertos Argentina 2000 S.A., una destacada empresa en el
                sector aeroportuario. En mis primeros años en atención al
                cliente, gestionaba transacciones complejas de cobro para
                diversos perfiles y modos de pago. Desde 2016 hasta 2022, asumí
                el rol de Supervisor en la gerencia de Experiencia al Cliente,
                liderando un equipo de 30 personas en el Aeropuerto Jorge
                Newbery. En este entorno aeroportuario altamente dinámico, con
                más de 747,000 transacciones anuales, mantuve altos estándares
                de calidad. A partir de 2016, además de mis responsabilidades
                como Supervisor, me formé y desempeñé el rol de Coach de
                Agilidad. Esta doble función me ha permitido contribuir al
                desarrollo de mi equipo, fomentando la adaptabilidad en un
                entorno dinámico. Mi trayectoria refleja habilidades sólidas en
                la gestión de operaciones, resolución de problemas, atención al
                detalle, adaptación a cambios y estabilidad profesional;
                elementos fundamentales para el éxito en mi carrera.
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
            <div className="contAbout-texto">
              <p>
                En mi carrera en el sector inmobiliario, he desempeñado diversas
                funciones, desde la intermediación en transacciones hasta la
                gestión de valiosas propiedades. Mi enfoque siempre ha sido
                proporcionar un servicio excepcional al cliente, ofreciendo
                atención personalizada y resolviendo problemas de manera
                eficiente. Gracias a un análisis de mercado exhaustivo,
                pronostico movimientos y tomo decisiones estratégicas basadas en
                las tendencias y la demanda del sector. Como hábil negociador,
                he logrado acuerdos beneficiosos para todas las partes
                involucradas. La gestión minuciosa de la documentación ha sido
                fundamental en mi trabajo para garantizar su integridad. Además,
                he aplicado estrategias de marketing efectivas para promover
                propiedades. Mi compromiso con la excelencia y el éxito en cada
                proyecto se refleja en mi constante formación y actualización en
                regulaciones y tendencias del sector.
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
            <div className="contAbout-texto">
              <p>
                Mi Licenciatura en Gestión de Organizaciones ha sido un viaje
                académico y profesional profundamente enriquecedor. Durante mi
                tiempo en la universidad, adquirí una base sólida en una amplia
                gama de disciplinas relacionadas con la gestión, que abarcan
                desde la planificación estratégica hasta la gestión de recursos
                humanos y el análisis financiero. Estos conocimientos me han
                proporcionado las herramientas esenciales para abordar con
                confianza los desafíos empresariales del mundo real. Lo que hace
                que esta experiencia sea aún más valiosa son las conexiones
                significativas que establecí con profesores y compañeros de
                clase. Estas conexiones no solo enriquecieron mi aprendizaje,
                sino que también crearon una red de contactos que sigue siendo
                fundamental en mi carrera profesional. En resumen, mi
                Licenciatura en Gestión de Organizaciones no solo me proporcionó
                una sólida base académica, sino que también me brindó la
                oportunidad de crecer tanto a nivel personal como profesional a
                través de conexiones significativas y experiencias
                enriquecedoras.
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

        <div className="section">
          <div className="data">
            <div className="contAbout-texto">
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className={`footer`}>
        <button
          onClick={handleButtonClick}
          className="scroll-button"
          style={{ color: textColor }}
        >
          ▲
        </button>
      </div>
    </div>
  );
};

export default About;
