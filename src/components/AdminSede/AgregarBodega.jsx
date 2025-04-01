import { useState } from "react";
import { Menu, LogOut } from "lucide-react";
import Swal from "sweetalert2";

const BodegaGestion = () => {
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
    <div className="flex flex-col min-h-screen w-full bg-white overflow-hidden">
      <nav className="bg-orange-500 text-white p-4 flex justify-between items-center w-full shadow-md fixed top-0 left-0 z-50">
        <div className="text-lg font-bold">LOGO</div>
        <div className="space-x-4 flex">
          <Menu className="cursor-pointer" />
          <LogOut className="cursor-pointer" />
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-grow w-full min-h-screen bg-white pt-24 px-4 md:px-6">
        <div className="w-full max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
          <h1 className="text-center text-2xl font-semibold mb-6 text-gray-800">Gestión de Bodegas</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800"
              placeholder="Folio"
              value={folio}
              onChange={(e) => setFolio(e.target.value)}
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800"
              placeholder="Precio"
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4">
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800"
              value={tamano}
              onChange={(e) => setTamano(e.target.value)}
            >
              <option value="">Selecciona el tamaño</option>
              <option value="pequeño">Pequeño</option>
              <option value="mediano">Mediano</option>
              <option value="grande">Grande</option>
            </select>

            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800"
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
            className={`w-full p-3 rounded-lg transition-all duration-300 ${isFormValid() ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
            disabled={!isFormValid()}
            onClick={handleSubmit}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodegaGestion;
