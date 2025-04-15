import React from "react";
import { useNavigate } from "react-router-dom";
import ColorPicker from "../ColorPicker";

export default function Navbar({ onOpen }) {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const rol = localStorage.getItem("rol");
  const theme = localStorage.getItem("theme-color") || "#FF7700";

  const handleLogout = () => {
    localStorage.clear();
    localStorage.setItem("theme-color", theme);
    navigate("/login");
  };

  const goToDashboardSuper = () => {
    navigate("/admin/");
  };
  const goToDashboardAdmin = () => {
    navigate("/sedes/");
  };

  const goToRentar = () => {
    navigate("/rentar");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost text-xl hover:underline">
          BODEGAS SIGEBO
        </a>
      </div>

      <div className="navbar-end flex gap-4 items-center mr-4">
        {token ? (
          <>
            {rol === "SUPERADMINISTRADOR" && (
              <button
                onClick={goToDashboardSuper}
                className="btn btn-outline btn-primary"
              >
                Dashboard
              </button>
            )}
            {rol === "ADMINISTRADOR" && (
              <button
                onClick={goToDashboardAdmin}
                className="btn btn-outline btn-primary"
              >
                Dashboard
              </button>
            )}

            {rol === "CLIENTE" && (
              <button
                onClick={goToRentar}
                className="btn btn-outline btn-success"
              >
                Rentar
              </button>
            )}

            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <button onClick={goToLogin} className="btn ">
              Iniciar sesión
            </button>
            <button onClick={goToRegister} className="btn  custom-bg">
              Registrarse
            </button>
          </>
        )}
        <ColorPicker />
      </div>
    </div>
  );
}
