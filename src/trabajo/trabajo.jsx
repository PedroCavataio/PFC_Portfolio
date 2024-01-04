import React, { useRef, useEffect } from "react";
import "./trabajo.styles.css";
import CountriesGris from "../assets/countriesDeployGris.png";
import Countries from "../assets/countriesDeploy.png";
import RickGris from "../assets/rickDeployGris.png";
import Rick from "../assets/rickDeploy.png";
import CastingGris from "../assets/castingAppDeployGris.png";
import Casting from "../assets/castingAppDeploy.png";
import ControlGris from "../assets/controlDeployGris.png";
import Control from "../assets/controlDeploy.png";
import Proximamente from "../assets/proximamente.png";
import ProximamenteGris from "../assets/proximamenteGris.png";
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
import ControlAep from "../assets/ControlAEP.xlsx";
import { useNavigate } from "react-router-dom";

export const CastingRef = React.createRef();
export const RickMortyRef = React.createRef();
export const SPAcountriesRef = React.createRef();
export const ControlRef = React.createRef();
export const ProximamenteRef = React.createRef();



const Trabajo = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  useEffect(() => {
    navigate("/trabajo#astingRef");
  }, [navigate]);

  return (
    <>
      <div className="background">
        <div className="containerJob">
          <div className="trabajo-container" id="castingRef" ref={CastingRef}>
            <p className="tituloProyectos">Casting APP - Proyecto grupal</p>
            <div className="deploy">
              <a
                href="https://deploy-sprint-2-frontend.onrender.com/"
                target="_blank"
              >
                <div className="image-container left">
                  <img
                    src={CastingGris}
                    alt="castingDeployGris"
                    className="image-gris"
                  />
                  <img
                    src={Casting}
                    alt="castingDeploy"
                    className="image-color"
                  />
                </div>
              </a>
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
                  <img
                    src={NodeMailer}
                    alt="nodemailer"
                    className="nodemailer"
                  />
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
                  <img
                    src={PostgreSQL}
                    alt="postgreSQL"
                    className="postgreSQL"
                  />
                  <p className="image-text">PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>

          <div  className="trabajo-container"
            id="rickMortyRef"
            ref={RickMortyRef}>
            
            <p className="tituloProyectos">SPA Rick & Morty - Api</p>
            <div className="deploy">
              <a href="https://pedrocavataio.github.io/rick_and_morty/" target="_blank">
                <div className="image-container left">
                  <img
                    src={RickGris}
                    alt="rickDeployGris"
                    className="image-gris"
                  />
                  <img src={Rick} alt="rickDeploy" className="image-color" />
                </div>
              </a>
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
                  <img
                    src={PostgreSQL}
                    alt="postgreSQL"
                    className="postgreSQL"
                  />
                  <p className="image-text">PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>


          <div  className="trabajo-container"
            id="SPAcountriesRef"
            ref={SPAcountriesRef}>

            <p className="tituloProyectos">SPA Countries - Api</p>
            <div className="deploy">
              <a href="https://www.umet.edu.ar" target="_blank">
                <div className="image-container left">
                  <img
                    src={CountriesGris}
                    alt="countriesDeployGris"
                    className="image-gris"
                  />
                  <img
                    src={Countries}
                    alt="countriesDeploy"
                    className="image-color"
                  />
                </div>
              </a>
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

          

          <div className="trabajo-container" id="controlRef" ref={ControlRef}>
            <p className="tituloProyectos">Control PK-AEP AA2000</p>
            <div className="deploy">
              <a href={ControlAep} target="_blank">
                <div className="image-container left">
                  <img
                    src={ControlGris}
                    alt="controlDeployGris"
                    className="image-gris"
                  />
                  <img
                    src={Control}
                    alt="controlDeploy"
                    className="image-color"
                  />
                </div>
              </a>

              <div className="image-row">
                <div className="image-item">
                  <img src={Excel} alt="excel" className="excel" />
                  <p className="image-text">Excel</p>
                </div>
              </div>
            </div>
          </div>

          <div className="trabajo-container"
            id="proximamenteRef"
            ref={ProximamenteRef}>
            <p className="tituloProyectos">
              Portfolio Delfina Deluca - en construcción
            </p>
            <div className="deploy">
              <div className="image-container left">
                <img
                  src={ProximamenteGris}
                  alt="proximamenteGris"
                  className="image-gris "
                />
                <img
                  src={Proximamente}
                  alt="proximamente"
                  className="image-color"
                />
              </div>
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

         <div className="footer">
          <button onClick={scrollToTop} className="scroll-button">
            Volver arriba
          </button>
        </div>
      </div>
    </>
  );
};

export default Trabajo;
