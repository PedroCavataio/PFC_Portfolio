import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import './App.css';
import Nav from "./nav/nav";
import Login from "./login/login";
import Landing from "./landingPage/landingPage";
import About from "./about/about";



function App() {
  const [access, setAccess] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  async function login(userData) {
    const { nombre, estacion } = userData;
    const URL = "http://localhost:3001/login/";
    try {
      const { data } = await axios.get(
        URL + `?nombre=${nombre}&estacion=${estacion}`
      );
      const { access } = data;
      setAccess(access);
      setUserName(nombre); 
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="App">
      {window.location.pathname == "/landing/:estacion" && <Nav className="styles-nav" />}
      {window.location.pathname == "/about" && <Nav className="styles-nav" />}

      <Routes>
        <Route path="/" element={<Login onLogin={login} access={access} />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/landing" element={<Landing userName={userName} />} /> 
        <Route path="/landing/:estacion" element={<Landing userName={userName} />} />
        <Route path="/about" element={<About />} />
      </Routes>
        
    </div>
  );
}

export default App;
