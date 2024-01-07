import React from "react";
import { useNavigate } from "react-router-dom";
import "./contacto.styles.css";
import Linkedin from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import Whatsapp from "../assets/whatsapp.png";
import Gmail from "../assets/gmail.png";
import pedroCavataio from "../assets/LogoPFC.png";

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
    <>
      <div>
        <img src={pedroCavataio} alt="pedroIndex" className="nombreImageVista" />
      </div>
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
                placeholder="Introduzca su dirección de correo electrónico"
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

      <div className="redes-container">
        <a href="https://www.linkedin.com/in/pedro-francisco-cavataio/" target="_blank"> 
          <img src={Linkedin} alt="Linkedin" className="linkedin" />
        </a>
        <a href="https://github.com/PedroCavataio" target="_blank"> 
          <img src={GitHub} alt="GitHub" className="github" />
        </a>
        <a href="https://wa.me/611854700" target="_blank">
          <img src={Whatsapp} alt="whatsapp" className="whatsapp" />
        </a>
        <a href="https://gmail.com" target="_blank">
          <img src={Gmail} alt="gmail" className="gmail" />
        </a>
      </div>
    </div>
    </>
  );
};

export default Contacto;
