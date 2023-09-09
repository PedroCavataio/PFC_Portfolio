import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Nav from "./nav/nav";
import Login from "./login/login";
import './App.css';
import axios from "axios";

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
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login onLogin={login} access={access} />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
        
    </div>
  );
}

export default App;
