/* trabajo.jsx */
import React from "react";
import "./trabajo.styles.css";
import Countries from "../assets/countriesDeploy.png";
import Rick from "../assets/rickDeploy.png";
import Casting from "../assets/castingAppDeploy.png";
import Control from "../assets/controlDeploy.png";
import Proximamente from "../assets/proximamente.png";
import Redux from "../assets/reduxIcono.png";
import ReactIcono from "../assets/react.png";
import Sequelize from "../assets/sequelizeIcono.png";
import Html from "../assets/htmlIcono.png";
import Css from "../assets/cssIcono.png";
import Node from "../assets/nodeJs.png";
import Js from "../assets/javaScriptIcono.png";
import Express from "../assets/express.png";
import PostgreSQL from "../assets/postgreSQL.png";
import Excel from "../assets/excell.png";
import Bootstrap from "../assets/bootstrap.png";
import FormsPree from "../assets/formsPree.png";
import NodeMailer from "../assets/nodeMailer.png";

const trabajo = () => {
  return (
    <>
      <div className="background">
        <div className="containerJob">

        <div className="trabajo-container">
          <p className="tituloProyectos">Casting APP - Proyecto grupal</p>
            <div className="deploy">
              <a
                href="https://deploy-sprint-2-frontend.onrender.com/"
                target="_blank"
              >
                <div className="image-container left">
                  <img
                    src={Casting}
                    alt="castingAppDeploy"
                    className="castingAppDeploy"
                  />
                </div>
              </a>
              <div className="image-container">
                <div className="image-row">
                  <div className="image-item">
                    <img src={Js} alt="js" className="js" />
                    <p className="image-text">JavaScript</p>
                  </div>
                  <div className="image-item">
                    <img src={ReactIcono} alt="react" className="react" />
                    <p className="image-text">React</p>
                  </div>
                  <div className="image-item">
                    <img src={Redux} alt="reduxIcono" className="reduxIcono" />
                    <p className="image-text">Redux</p>
                  </div>
                  <div className="image-item">
                    <img src={Html} alt="htmlIcono" className="htmlIcono" />
                    <p className="image-text">HTML</p>
                  </div>
                  <div className="image-item">
                    <img src={Css} alt="cssIcono" className="cssIcono" />
                    <p className="image-text">CSS</p>
                  </div>
                  <div className="image-item">
                    <img src={Bootstrap} alt="bootstrap" className="bootstrap" />
                    <p className="image-text">Bootstrap</p>
                  </div>
                  <div className="image-item">
                    <img src={FormsPree} alt="formspree" className="formspree" />
                    <p className="image-text">Formspree</p>
                  </div>
                  <div className="image-item">
                    <img src={NodeMailer} alt="nodemailer" className="nodemailer" />
                    <p className="image-text">Nodemailer</p>
                  </div>
                  <div className="image-item">
                    <img src={Sequelize} alt="sequelize" className="sequelize" />
                    <p className="image-text">Sequelize</p>
                  </div>
                  <div className="image-item">
                    <img src={Node} alt="nodeJs" className="nodeJs" />
                    <p className="image-text">NodeJs</p>
                  </div>
                  <div className="image-item">
                    <img src={Express} alt="express" className="express" />
                    <p className="image-text">Express</p>
                  </div>
                  <div className="image-item">
                    <img src={PostgreSQL} alt="postgreSQL" className="postgreSQL" />
                    <p className="image-text">PostgreSQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="trabajo-container">
            <p className="tituloProyectos">SPA Countries - Api</p>
            <div className="deploy">
              <a href="https://www.umet.edu.ar" target="_blank">
                <div className="image-container left">
                  <img src={Countries} alt="countries" className="countries" />
                </div>
              </a>
              <div className="image-container">
                <div className="image-row">
                  <div className="image-item">
                    <img src={Js} alt="js" className="js" />
                    <p className="image-text">JavaScript</p>
                  </div>
                  <div className="image-item">
                    <img src={ReactIcono} alt="react" className="react" />
                    <p className="image-text">React</p>
                  </div>
                  <div className="image-item">
                    <img src={Redux} alt="reduxIcono" className="reduxIcono" />
                    <p className="image-text">Redux</p>
                  </div>
                  <div className="image-item">
                    <img src={Html} alt="htmlIcono" className="htmlIcono" />
                    <p className="image-text">HTML</p>
                  </div>
                  <div className="image-item">
                    <img src={Css} alt="cssIcono" className="cssIcono" />
                    <p className="image-text">CSS</p>
                  </div>
                  <div className="image-item">
                    <img src={Bootstrap} alt="bootstrap" className="bootstrap" />
                    <p className="image-text">Bootstrap</p>
                  </div>
                  <div className="image-item">
                    <img src={Sequelize} alt="sequelize" className="sequelize" />
                    <p className="image-text">Sequelize</p>
                  </div>
                  <div className="image-item">
                    <img src={Node} alt="nodeJs" className="nodeJs" />
                    <p className="image-text">NodeJs</p>
                  </div>
                  <div className="image-item">
                    <img src={Express} alt="express" className="express" />
                    <p className="image-text">Express</p>
                  </div>
                  <div className="image-item">
                    <img src={PostgreSQL} alt="postgreSQL" className="postgreSQL" />
                    <p className="image-text">PostgreSQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="trabajo-container">
          <p className="tituloProyectos">SPA Rick & Morty - Api</p>
            <div className="deploy">
              <a href="https://www.umet.edu.ar" target="_blank">
                <div className="image-container">
                  <img src={Rick} alt="rick" className="rick" />
                </div>
              </a>
              <div className="image-container">
                <div className="image-row">
                  <div className="image-item">
                    <img src={Js} alt="js" className="js" />
                    <p className="image-text">JavaScript</p>
                  </div>
                  <div className="image-item">
                    <img src={ReactIcono} alt="react" className="react" />
                    <p className="image-text">React</p>
                  </div>
                  <div className="image-item">
                    <img src={Redux} alt="reduxIcono" className="reduxIcono" />
                    <p className="image-text">Redux</p>
                  </div>
                  <div className="image-item">
                    <img src={Html} alt="htmlIcono" className="htmlIcono" />
                    <p className="image-text">HTML</p>
                  </div>
                  <div className="image-item">
                    <img src={Css} alt="cssIcono" className="cssIcono" />
                    <p className="image-text">CSS</p>
                  </div>
                  <div className="image-item">
                    <img src={Sequelize} alt="sequelize" className="sequelize" />
                    <p className="image-text">Sequelize</p>
                  </div>
                  <div className="image-item">
                    <img src={Node} alt="nodeJs" className="nodeJs" />
                    <p className="image-text">NodeJs</p>
                  </div>
                  <div className="image-item">
                    <img src={Express} alt="express" className="express" />
                    <p className="image-text">Express</p>
                  </div>
                  <div className="image-item">
                    <img src={PostgreSQL} alt="postgreSQL" className="postgreSQL" />
                    <p className="image-text">PostgreSQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        

          <div className="trabajo-container">
          <p className="tituloProyectos">Control PK-AEP AA2000</p>
            <div className="deploy">
              <a href="https://www.umet.edu.ar" target="_blank">
                <div className="image-container">
                  <img src={Control} alt="control" className="control" />
                </div>
              </a>
              <div className="image-container">
                <div className="image-row">
                  <div className="image-item">
                    <img src={Excel} alt="excel" className="excel" />
                    <p className="image-text">Excel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="trabajo-container">
          <p className="tituloProyectos">Portfolio Delfina Deluca - en construcción</p>
            <div className="deploy">
              <a
                /* href="https://deploy-sprint-2-frontend.onrender.com/" */
                target="_blank"
              >
                <div className="image-container left">
                  <img
                    src={Proximamente}
                    alt="castingAppDeploy"
                    className="castingAppDeploy"
                  />
                </div>
              </a>
              <div className="image-container">
                <div className="image-row">
                  <div className="image-item">
                    <img src={Js} alt="js" className="js" />
                    <p className="image-text">JavaScript</p>
                  </div>
                  <div className="image-item">
                    <img src={ReactIcono} alt="react" className="react" />
                    <p className="image-text">React</p>
                  </div>
                  <div className="image-item">
                    <img src={Redux} alt="reduxIcono" className="reduxIcono" />
                    <p className="image-text">Redux</p>
                  </div>
                  <div className="image-item">
                    <img src={Html} alt="htmlIcono" className="htmlIcono" />
                    <p className="image-text">HTML</p>
                  </div>
                  <div className="image-item">
                    <img src={Css} alt="cssIcono" className="cssIcono" />
                    <p className="image-text">CSS</p>
                  </div>
                  <div className="image-item">
                    <img src={Bootstrap} alt="bootstrap" className="bootstrap" />
                    <p className="image-text">Bootstrap</p>
                  </div>
                  <div className="image-item">
                    <img src={FormsPree} alt="formspree" className="formspree" />
                    <p className="image-text">Formspree</p>
                  </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default trabajo;
