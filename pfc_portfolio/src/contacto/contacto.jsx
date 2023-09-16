import React from "react";
import { useNavigate } from "react-router-dom";
import "./contacto.styles.css";
import Linkedin from "../assets/linkedin.png";

const Contacto = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const response = await fetch(event.target.action, {
      method: event.target.method,
      body: form,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      event.target.reset();
      alert("Mensaje enviado!!");
    }
  };

  return (
    <div className="contacto-container">
      <div className="container p-4">
        <div className="texto-encabezado">
          <h1 className="titulo">¡Envíame un mensaje!</h1>
          <h2 className="sub-titulo">
            ¿Tienes alguna pregunta o propuesta, o simplemente quieres saludar?
            Adelante.
          </h2>
        </div>
        <div className="card-body">
          <form
            action="https://formspree.io/f/xaygbbee"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <input
                type="text"
                name="Name"
                placeholder="Introduzca su nombre"
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="email"
                placeholder="Introduce tu dirección de correo electrónico"
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="phone"
                placeholder="Tu teléfono"
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <textarea
                className="formControlMensaje"
                name="Mensage"
                placeholder="Mensaje"
              ></textarea>
            </div>

            <div className="text-center">
              <button className="btnEnviar">Enviar</button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="linkedin-container">
    <a href="URL_DEL_CURRICULUM.pdf" download="NombreDelCurriculum.pdf">
      <img src={Linkedin} alt="Currículum" className="linkedin" />
    </a>
  </div>

      </div>
    
  );
};

export default Contacto;
