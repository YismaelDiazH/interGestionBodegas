import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SedeAdminRoutes from "./routes/SedesAdminRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import "./App.css";

// Simulación del rol actual (esto puede venir de contexto, auth, etc.)
const userRole = "admin"; // o "sede"

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Rutas por rol */}
        {userRole === "admin" && (
          <Route path="/admin/*" element={<AdminRoutes />} />
        )}
        {userRole === "sede" && (
          <Route path="/sedes/*" element={<SedeAdminRoutes />} />
        )}
        {/* Ruta por defecto si no coincide ningún rol */}
        <Route path="*" element={<Navigate to={`/${userRole}`} replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
