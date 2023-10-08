import React from "react";
import "./trabajo.styles.css";
import Countries from "../assets/countriesDeploy.png";
import Rick from "../assets/rickDeploy.png";
import Casting from "../assets/castingAppDeploy.png";
import Control from "../assets/controlDeploy.png";
import Redux from "../assets/redux.png";
import ReactIcono from "../assets/reactIcono.png";
import Sequelize from "../assets/sequelizeIcono.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Node from "../assets/node.png";
import Js from "../assets/js.png";
import Express from "../assets/express.png";
import Postgress from "../assets/postgresqlIcono.png";

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

                  <div className="skill-container">
                    <div className="skill-group">                      
                      <img src={Redux} alt="Redux" className="redux" />
                      <img src={ReactIcono} alt="React" className="react" />
                      <img src={Js} alt="js" className="js" />
                    </div>
                    <div className="skill-group">                                      
                      <img src={Css} alt="css" className="css" />
                      <img src={Html} alt="html" className="html" />
                      <img src={Sequelize} alt="sequelize" className="sequelize" />
                    </div>
                    <div className="skill-group">
                      <img src={Postgress} alt="postgress" className="postgress" />
                      <img src={Node} alt="node" className="node" />
                      <img src={Express} alt="express" className="express" />
                    </div>  
                  </div>

                </div>                
              </a>              
            </div>
          </div>

          <div className="trabajo-container">
            <div className="deploy">
              <a href="https://www.umet.edu.ar" target="_blank">
                <div className="image-container">
                  <img src={Rick} alt="rick" className="rick" /> 

                  <div className="skill-container">
                    <div className="skill-group">                      
                      <img src={Redux} alt="Redux" className="redux" />
                      <img src={ReactIcono} alt="React" className="react" />
                      <img src={Js} alt="js" className="js" />
                    </div>
                    <div className="skill-group">                                      
                      <img src={Css} alt="css" className="css" />
                      <img src={Html} alt="html" className="html" />
                      <img src={Sequelize} alt="sequelize" className="sequelize" />
                    </div>
                    <div className="skill-group">
                      <img src={Postgress} alt="postgress" className="postgress" />
                      <img src={Node} alt="node" className="node" />
                      <img src={Express} alt="express" className="express" />
                    </div>  
                  </div>

                  </div>
                  </a>              
                  
              </div>
           </div>
          

          <div className="trabajo-container">
            <div className="deploy">
              <a href="https://deploy-sprint-2-frontend.onrender.com/"
                target="_blank">
                <div className="image-container left">
                  <img src={Casting}
                    alt="castingAppDeploy"
                    className="castingAppDeploy"
                  /> 

                <div className="skill-container">
                    <div className="skill-group">                      
                      <img src={Redux} alt="Redux" className="redux" />
                      <img src={ReactIcono} alt="React" className="react" />
                      <img src={Js} alt="js" className="js" />
                    </div>
                    <div className="skill-group">                                      
                      <img src={Css} alt="css" className="css" />
                      <img src={Html} alt="html" className="html" />
                      <img src={Sequelize} alt="sequelize" className="sequelize" />
                    </div>
                    <div className="skill-group">
                      <img src={Postgress} alt="postgress" className="postgress" />
                      <img src={Node} alt="node" className="node" />
                      <img src={Express} alt="express" className="express" />
                    </div>  
                  </div>
                  </div>
              </a>
              
            </div>
          </div>

          <div className="trabajo-container">
            <div className="deploy">
              <a href="https://www.umet.edu.ar" target="_blank">
                <div className="image-container">
                  <img src={Control} alt="control" className="control" /> 

                <div className="skill-container">
                    <div className="skill-group">                      
                      <img src={Redux} alt="Redux" className="redux" />
                      <img src={ReactIcono} alt="React" className="react" />
                      <img src={Js} alt="js" className="js" />
                    </div>
                    <div className="skill-group">                                      
                      <img src={Css} alt="css" className="css" />
                      <img src={Html} alt="html" className="html" />
                      <img src={Sequelize} alt="sequelize" className="sequelize" />
                    </div>
                    <div className="skill-group">
                      <img src={Postgress} alt="postgress" className="postgress" />
                      <img src={Node} alt="node" className="node" />
                      <img src={Express} alt="express" className="express" />
                    </div>  
                  </div>
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
