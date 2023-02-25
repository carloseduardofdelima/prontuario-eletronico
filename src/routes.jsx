import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import { Pacientes } from "./pages/Pacientes";
import { NovoPaciente } from "./pages/NovoPaciente";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/novopaciente" element={<NovoPaciente />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
