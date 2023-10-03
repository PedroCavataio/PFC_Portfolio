import React from "react";
import "./trabajo.styles.css";
import Countries from "../assets/countriesDeploy.png";
import Rick from "../assets/rickDeploy.png";
import Casting from "../assets/castingAppDeploy.png";
import Control from "../assets/controlDeploy.png";

const trabajo = () => {

  return (
    <>
    <div className="background">
    <div className="containerJob">
    
      <div className="trabajo-container">
        
        <div className="deploy">
          <a href="https://www.umet.edu.ar" target="_blank">
          <div className="image-container left">
            <img src={Countries} alt="countries" className="countries" />
            </div>
          </a>
        </div>
      </div>

  
      <div className="trabajo-container">
       
      <div className="deploy">
          <a href="https://www.umet.edu.ar" target="_blank">
            <div className="image-container">
            <img src={Rick} alt="rick" className="rick" />
            </div>
          </a>
        </div>
      </div>
      
      <div className="trabajo-container">
       
      <div className="deploy">
          <a href="https://deploy-sprint-2-frontend.onrender.com/" target="_blank">
          <div className="image-container left">
            <img src={Casting} alt="castingAppDeploy" className="castingAppDeploy" />
            </div>
          </a>
        </div>
      </div>
   
      <div className="trabajo-container">
       

      <div className="deploy">
          <a href="https://www.umet.edu.ar" target="_blank">
          <div className="image-container">
            <img src={Control} alt="control" className="control" />
            </div>
          </a>
        </div>
      </div>
           
      </div>
      </div>
    </>
  );
};

export default trabajo;
