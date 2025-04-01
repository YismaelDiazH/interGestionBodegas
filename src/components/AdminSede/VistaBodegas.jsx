import { useState } from "react";
import { Menu, LogOut, Plus, Edit } from "lucide-react";
import Swal from "sweetalert2";

const VistaBodega = () => {
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

  const handleNewBodega = () => {
    window.location.href = "/sedes/gestion"; // Redirige directamente a la nueva pantalla
  };

  return (
    <div className="flex flex-col min-h-screen w-screen bg-white overflow-hidden">
      <nav className="bg-orange-500 text-white p-4 flex justify-between items-center w-full shadow-md fixed top-0 left-0 z-50">
        <div className="text-lg font-bold">LOGO</div>
        <div className="space-x-4 flex">
          <Menu className="cursor-pointer" />
          <LogOut className="cursor-pointer" />
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1 w-full min-h-screen bg-white pt-20 px-4 md:px-6">
        <div className="w-full max-w-5xl bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Bodegas</h1>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-orange-600"
              onClick={handleNewBodega} // Redirige directamente
            >
              <Plus className="w-5 h-5 mr-2" /> Nuevo
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th className="p-3 border border-gray-300">ID</th>
                  <th className="p-3 border border-gray-300">Tamaño</th>
                  <th className="p-3 border border-gray-300">Email</th>
                  <th className="p-3 border border-gray-300">Estado</th>
                  <th className="p-3 border border-gray-300">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800 text-center">
                  <td className="p-3 border border-gray-300">1</td>
                  <td className="p-3 border border-gray-300">Mediano</td>
                  <td className="p-3 border border-gray-300">correo@example.com</td>
                  <td className="p-3 border border-gray-300">Ocupada</td>
                  <td className="p-3 border border-gray-300">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg flex items-center hover:bg-blue-600">
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
                <tr className="text-gray-800 text-center">
                  <td className="p-3 border border-gray-300">2</td>
                  <td className="p-3 border border-gray-300">Grande</td>
                  <td className="p-3 border border-gray-300">usuario@example.com</td>
                  <td className="p-3 border border-gray-300">Vacante</td>
                  <td className="p-3 border border-gray-300">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg flex items-center hover:bg-blue-600">
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaBodega;
