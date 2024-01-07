import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./login.styles.css";
import "react-toastify/dist/ReactToastify.css";
import pedroCavataio from "../assets/LogoPFC.png";

const Login = ({ onLogin, access }) => {
  const [userData, setUserData] = useState({ nombre: ""/* , estacion: ""  */});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

    const redirigirAInicio = () => {
    navigate('/landing'); 
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    const formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
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
      setUserData({ nombre: ""/* , estacion: "" */ });
      setErrors({});
      setTimeout(() => {
        /* navigate(`/landing/${userData.estacion}?nombre=${userData.nombre}`); */        
        navigate(`/landing/?nombre=${userData.nombre}`);        
      }, 5000);
    } else {
      setErrors(validationErrors);
    }
  };

 
    const validateLogin = () => {
      const errors = {};
  
      if (!userData.nombre) {
        errors.nombre = "El nombre es requerido";
      } else if (userData.nombre.length > 35) {
        errors.nombre = "El nombre no puede tener más de 35 caracteres";
      }  
      return errors;
    };


  const isValidNombre = (nombre) => {
    return true;
  };

  const notify = () => {
    toast.info(
      `¡Hola, ${userData.nombre}! ¡Gracias por estar aquí. Tu interés en mi trabajo es una fuente de motivación!.`,
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
     <form className="login-container" onSubmit={handleSubmit}>
      <div className="image-logo">
        <img src={pedroCavataio} alt="pedroIndex" className="nombreImage" />
      </div>
      <div className="contenedor">
        <div className="hola">ALOHA!! </div>
        <div className="login-groupD">Soy, Pedro </div>
        <div className="login-groupD">¿Cuál es tu nombre?</div>
        <div className="login-group">        
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
        <button className="login-button" disabled={access}>
          Ingresar
        </button>  
        <button className="login-button"  onClick={redirigirAInicio}>
          Saltar Intro
        </button>             
      </div>    

      <div>
        <ToastContainer />
      </div>
    </form>    
  );
};

export default Login;
