// src/routes/SedeAdminRoutes.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import BodegaGestion from "../components/AdminSede/AgregarBodega";
import VistaBodega from "../components/AdminSede/VistaBodegas";
import VistaCliente from "../components/AdminSede/ListaClientes";
import AgregarCliente from "../components/AdminSede/AgregarCliente";

const SedeAdminRoutes = () => {
  return (
    <Routes>
      <Route path="gestion" element={<BodegaGestion />} />
      <Route path="gestioncliente" element={<AgregarCliente />} />
      <Route path="vistabodega" element={<VistaBodega />} />
      <Route path="vistacliente" element={<VistaCliente />} />
    </Routes>
  );
};

export default SedeAdminRoutes;
