import React from "react";
import "./trabajo.styles.css";
import Tecnocasa from "../assets/tecnocasa.png";

const trabajo = () => {
  return (
    <div className="trabajo-container">
    

             <a href="https://www.tecnocasa.es" target="_blank">
          <img src={Tecnocasa} alt="tecnocasa" className="tecnocasa" />
        </a>
      </div>
   
  );
};

export default trabajo;
