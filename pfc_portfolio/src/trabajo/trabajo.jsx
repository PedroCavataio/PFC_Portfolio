import React from "react";
import "./trabajo.styles.css";
import Umet from "../assets/umet.png";

const trabajo = () => {

  return (
    <>
    <div className="background">
    <div className="containerJob">
    
      <div className="trabajo-container">
        
        <div className="deploy">
          <a href="https://www.umet.edu.ar" target="_blank">
            <img src={Umet} alt="umet" className="umet" />
          </a>
        </div>
      </div>
     
      <div className="trabajo-container">
       
        <div className="deploy">
          <a href="https://www.umet.edu.ar" target="_blank">
            <img src={Umet} alt="umet" className="umet" />
          </a>
        </div>
      </div>
      
      <div className="trabajo-container">
       
        <div className="deploy">
          <a href="https://www.umet.edu.ar" target="_blank">
            <img src={Umet} alt="umet" className="umet" />
          </a>
        </div>
      </div>
   
      <div className="trabajo-container">
       

        <div className="deploy">
          <a href="https://www.umet.edu.ar" target="_blank">
            <img src={Umet} alt="umet" className="umet" />
          </a>
        </div>
      </div>
           
      </div>
      </div>
    </>
  );
};

export default trabajo;
