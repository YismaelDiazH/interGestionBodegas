import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion"; // Agrega esta línea
import "./App.css";
import BodegaGestion from "./components/AdminSede/AgregarBodega";
import VistaBodega from "./components/AdminSede/VistaBodegas";
import VistaCliente from "./components/AdminSede/ListaClientes";
import AgregarCliente from "./components/AdminSede/AgregarCliente";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {" "}
      {/* Asegúrate de que AnimatePresence esté envuelto alrededor de Routes */}
      <Routes location={location} key={location.pathname}>
        {/* Autentificacion 
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />*/}

        {/* Sedes Admin WIP */}
        <Route path="/sedes">
          <Route path="gestion" element={<BodegaGestion />} />
          <Route path="gestioncliente" element={<AgregarCliente />} />
          <Route path="vistabodega" element={<VistaBodega />} />
          <Route path="vistacliente" element={<VistaCliente />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error al obtener los datos: " + error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Datos de la API desde Django</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const userRole = "admin";
  return (
    <Router>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <AnimatedRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
