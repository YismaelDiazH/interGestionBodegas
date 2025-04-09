import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SedeAdminRoutes from "./routes/SedesAdminRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import MainView from "./components/MainPage/MainView";
import LoginView from "./components/Login/LoginView";
import RegistrationView from "./components/Registration/RegistrationView";
import { ColorProvider } from "./context/ColorContext";
import "./App.css";

// Simulación del rol actual
const userRole = "admin"; // o "sede"

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Página principal o pública */}
        <Route path="/" element={<MainView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegistrationView />} />

        {/* Rutas protegidas o por rol */}
        {userRole === "admin" && (
          <Route path="/admin/*" element={<AdminRoutes />} />
        )}

        {userRole === "sede" && (
          <Route path="/sedes/*" element={<SedeAdminRoutes />} />
        )}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ColorProvider>
    
    <Router>
      <AnimatedRoutes />
    </Router>
    </ColorProvider>
  );
}

export default App;
