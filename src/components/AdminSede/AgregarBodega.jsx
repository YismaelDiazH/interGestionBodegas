import { useState } from "react";
import { X, Menu } from "lucide-react";
import Swal from "sweetalert2";

export default function BodegaGestion() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [folio, setFolio] = useState("");
  const [precio, setPrecio] = useState("");
  const [tamano, setTamano] = useState("");
  const [vacante, setVacante] = useState("");

  const isFormValid = () => folio && precio && tamano && vacante;

  const handleSubmit = () => {
    if (isFormValid()) {
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Los datos se han guardado correctamente",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Algo falló, por favor verifica los datos",
      });
    }
  };

  return (
    <div className="w-full font-sans bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black p-4 text-white flex justify-between items-center">
        <h1 className="font-bold text-lg">BODEGAS SIGEBO</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:underline">
            Iniciar sesión
          </a>
          <a href="#" className="hover:underline">
            Contacto
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={28} />
        </button>
        {/* Menú móvil */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black p-6 shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>
          <nav className="mt-10 flex flex-col space-y-4">
            <a href="#" className="hover:underline">
              Inicio
            </a>
            <a href="#" className="hover:underline">
              Iniciar Sesión
            </a>
            <a href="#" className="hover:underline">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Formulario */}
      <main className="pt-28 px-4 md:px-8 flex justify-center items-center min-h-screen bg-black">
        <div className="bg-white text-black w-full max-w-2xl p-8 rounded-xl shadow-lg">
          <h2 className="text-center text-3xl font-bold text-orange-500 mb-6">
            Gestión de Bodegas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Folio"
              value={folio}
              onChange={(e) => setFolio(e.target.value)}
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Precio"
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={tamano}
              onChange={(e) => setTamano(e.target.value)}
            >
              <option value="">Selecciona el tamaño</option>
              <option value="pequeño">Pequeño</option>
              <option value="mediano">Mediano</option>
              <option value="grande">Grande</option>
            </select>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
              value={vacante}
              onChange={(e) => setVacante(e.target.value)}
            >
              <option value="">Estado de la bodega</option>
              <option value="ocupada">Ocupada</option>
              <option value="vacante">Vacante</option>
              <option value="fuera de venta">Fuera de Venta</option>
            </select>
          </div>

          <button
            className={`w-full p-3 text-lg rounded-lg transition-all duration-300 ${
              isFormValid()
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            disabled={!isFormValid()}
            onClick={handleSubmit}
          >
            Aceptar
          </button>
        </div>
      </main>
    </div>
  );
}