import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./login.styles.css";
import "react-toastify/dist/ReactToastify.css";
/* import fondoLogin from "../assets/nubesLogin.jpg"; */
import pedroCavataio from "../assets/PEDRO.png";
import Modal from '../modal/modal';

const Login = ({ onLogin, access }) => {
  const [userData, setUserData] = useState({ nombre: "", estacion: "" });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

    const redirigirAInicio = () => {
    navigate('/landing'); 
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    const formattedValue =
      name === "nombre"
        ? value.charAt(0).toUpperCase() + value.slice(1)
        : value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(); 
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin();
    if (Object.keys(validationErrors).length === 0) {
      notify();
      onLogin(userData);
      setUserData({ nombre: "", estacion: "" });
      setErrors({});
      setTimeout(() => {
        setIsModalOpen(true);
        navigate(`/landing/${userData.estacion}?nombre=${userData.nombre}`);        
      }, 1000);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateLogin = () => {
    const errors = {};

    if (!userData.nombre) {
      errors.nombre = "El nombre es requerido";
    } else if (!isValidNombre(userData.nombre)) {
      errors.nombre = "El nombre no es válido";
    } else if (userData.nombre.length > 35) {
      errors.nombre = "El nombre no puede tener más de 35 caracteres";
    }

    if (!userData.estacion) {
      errors.estacion = "La estación del año es requerida";
    } else if (userData.estacion.length < 5 || userData.estacion.length > 10) {
      errors.estacion =
        "La estación del año, debe tener entre 5 y 10 caracteres";
    } else if (
      userData.estacion !== "Verano" &&
      userData.estacion !== "Otoño" &&
      userData.estacion !== "Primavera" &&
      userData.estacion !== "Invierno"
    ) {
      errors.estacion =
        "Esa no es una estación del año válida, te doy una pista (invierno/primavera/verano/otoño)";
    }
    return errors;
  };

  const isValidNombre = (nombre) => {
    return true;
  };

  const notify = () => {
    toast.info(
      //`¡Genial, ${userData.nombre}! ¡Excelente elección!. ${userData.estacion} es una época maravillosa del año.`,
      `Ingresando`,
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "colored",
      }
    );
  };

  return (
    <>
    <form className="login-container" onSubmit={handleSubmit}>
      {/* <div className="image-container">
        <img src={fondoLogin} alt="fondo Login" className="planetLogin-image" />
      </div> */}
      <div className="image-logo">
        <img src={pedroCavataio} alt="pedroIndex" className="nombre-image" />
      </div>
      <div className="contenedor">
        <div className="hola">ALOHA!! </div>
        <div className="login-group">
          <label htmlFor="nombre"> ¿Cuál es tu nombre?</label>
          <input
            placeholder="nombre"
            type="text"
            id="nombre"
            name="nombre"
            value={userData.nombre}
            onChange={handleChange}
            className="login-input"
            disabled={access}
            autoFocus
          />
          {errors.nombre && (
            <span className={`error-message ${errors.nombre ? "active" : ""}`}>
              {errors.nombre}
            </span>
          )}
        </div>
        <div className="login-group">
          <label htmlFor="estacion">
            ¿Cuál es tu estación del año favorita?
          </label>
          <input
            placeholder="estación"
            type="text"
            id="estacion"
            name="estacion"
            value={userData.estacion}
            onChange={handleChange}
            className="login-input"
            disabled={access}
            autoFocus
          />
          {errors.estacion && (
            <span
              className={`error-message ${errors.estacion ? "active" : ""}`}
            >
              {errors.estacion}
            </span>
          )}
        </div>
        <button className="login-button" disabled={access}>
          Ingresar
        </button>        
      </div>
      <div>
      <button className="Saltar-button"  onClick={redirigirAInicio}>
          Saltar Intro
        </button> 
      </div>

      <div>
        <ToastContainer />
      </div>
    </form>
    {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Login;
