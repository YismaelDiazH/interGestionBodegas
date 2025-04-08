import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AdminRoutes from "./routes/AdminRoutes"; // Tu layout con Sidebar y todo
import BodegaGestion from "./components/AdminSede/AgregarBodega";
import VistaBodega from "./components/AdminSede/VistaBodegas";
import VistaCliente from "./components/AdminSede/ListaClientes";
import AgregarCliente from "./components/AdminSede/AgregarCliente";
import "./App.css";

function App() {
  return (
    <Router>
      <AllRoutes />
    </Router>
  );
}

const AllRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Admin Panel con Sidebar y Navbar */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Sedes Admin rutas separadas */}
        <Route path="/sedes/gestion" element={<BodegaGestion />} />
        <Route path="/sedes/gestioncliente" element={<AgregarCliente />} />
        <Route path="/sedes/vistabodega" element={<VistaBodega />} />
        <Route path="/sedes/vistacliente" element={<VistaCliente />} />

        {/* Página por defecto */}
        <Route path="/" element={<div className="p-6">Bienvenido a la plataforma</div>} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
