import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import AdminRoutes from "./routes/AdminRoutes"; // AdminRoutes se encargará de manejar todo lo relacionado a la sección admin
import Sidebar from "./components/admin/Sidebar"; // Sidebar de administración
import "./App.css";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

const MainLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin"); // Detecta si la ruta es una ruta de administración

  return (
    <div className="flex">
      {/* Mostrar Sidebar solo en las rutas de administración */}
      {isAdminRoute && <Sidebar />}

      {/* Contenedor de rutas */}
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/admin/*" element={<AdminRoutes />} />
          {/* Otras rutas del sistema podrían ir aquí */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
