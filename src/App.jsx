import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cabanas from "./pages/Cabanas.jsx";
import Reserva from "./pages/Reserva.jsx";
import Servicios from "./pages/Servicios.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Cabanas" element={<Cabanas />} />
      <Route path="/Reserva" element={<Reserva />} />
      <Route path="/Servicios" element={<Servicios />} />
    </Routes>
  );
}

export default App;
