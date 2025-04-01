import { useState } from "react";
import { Menu, LogOut } from "lucide-react";

const BodegaGestion = () => {
  const [folio, setFolio] = useState("");
  const [precio, setPrecio] = useState("");
  const [tamano, setTamano] = useState("");
  const [vacante, setVacante] = useState("");

  // Función para validar si todos los campos están completos
  const isFormValid = () => {
    return folio !== "" && precio !== "" && tamano !== "" && vacante !== "";
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <nav className="bg-orange-500 text-white p-4 flex justify-between items-center w-full fixed top-0 left-0 z-50">
        <div className="text-lg font-bold">LOGO</div>
        <div className="space-x-4 flex">
          <Menu className="cursor-pointer" />
          <LogOut className="cursor-pointer" />
        </div>
      </nav>

      <div className="flex-1 p-10 pt-24">
        <h1 className="text-center text-2xl font-semibold mb-6 text-gray-800">Gestión de Bodegas</h1>

        
        <div className="max-w-lg w-full mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-6 mb-4">
            
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

          <div className="grid grid-cols-2 gap-6 mb-4">
            {/* Segundo par de selects */}
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

          {/* Botón Aceptar */}
          <button
            className={`w-full p-3 rounded-lg hover:bg-orange-600 focus:outline-none mt-4 ${isFormValid() ? 'bg-orange-500 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
            disabled={!isFormValid()}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodegaGestion;
