import { useState } from "react";
import { Menu, LogOut, Plus, Edit, X } from "lucide-react";
import Swal from "sweetalert2";

const VistaBodega = () => {
  const [bodegas, setBodegas] = useState([
    {
      id: "B32",
      tamano: "Mediana",
      edificio: "A",
      precio: 1500,
      estado: "Ocupada",
    },
    {
      id: "B33",
      tamano: "Grande",
      edificio: "B",
      precio: 2200,
      estado: "Vacante",
    },
    {
      id: "B34",
      tamano: "Chica",
      edificio: "A",
      precio: 1000,
      estado: "Fuera de venta",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBodega, setSelectedBodega] = useState(null);

  const handleNewBodega = () => {
    window.location.href = "/sedes/gestion";
  };

  const handleEdit = (bodega) => {
    setSelectedBodega(bodega);
    setModalOpen(true);
  };

  const handleInputChange = (field, value) => {
    setSelectedBodega({ ...selectedBodega, [field]: value });
  };

  const validateBodega = (bodega) => {
    if (!bodega.id || bodega.id.trim() === "") {
      return "El folio no puede estar vacío.";
    }
    if (!["Chica", "Mediana", "Grande"].includes(bodega.tamano)) {
      return "Seleccione un tamaño válido (Chica, Mediana o Grande).";
    }
    if (!bodega.edificio || bodega.edificio.trim() === "") {
      return "El edificio no puede estar vacío.";
    }
    if (bodega.edificio.trim().length !== 1 || !/[A-Z]/.test(bodega.edificio.trim())) {
      return "El edificio debe ser una letra mayúscula (ej. A, B, C).";
    }
    if (isNaN(bodega.precio) || Number(bodega.precio) <= 0) {
      return "El precio debe ser un número mayor a cero.";
    }
    if (!["Vacante", "Ocupada", "Fuera de venta"].includes(bodega.estado)) {
      return "Seleccione un estado válido (Vacante, Ocupada o Fuera de venta).";
    }
    return null;
  };

  const handleSaveChanges = () => {
    if (!selectedBodega) return;

    const error = validateBodega(selectedBodega);
    if (error) {
      Swal.fire({
        icon: "warning",
        title: "Validación",
        text: error,
      });
      return;
    }

    setBodegas((prev) =>
      prev.map((b) => (b.id === selectedBodega.id ? selectedBodega : b))
    );

    setModalOpen(false);
    Swal.fire({
      icon: "success",
      title: "Bodega actualizada",
      showConfirmButton: false,
      timer: 1500,
    });
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
        <div className="w-full max-w-6xl bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Listado de Bodegas</h1>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-orange-600"
              onClick={handleNewBodega}
            >
              <Plus className="w-5 h-5 mr-2" /> Nueva Bodega
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-orange-500 text-white text-center">
                  <th className="p-3 border border-gray-300">Folio</th>
                  <th className="p-3 border border-gray-300">Tamaño</th>
                  <th className="p-3 border border-gray-300">Edificio</th>
                  <th className="p-3 border border-gray-300">Precio</th>
                  <th className="p-3 border border-gray-300">Estado</th>
                  <th className="p-3 border border-gray-300">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {bodegas.map((bodega, index) => (
                  <tr key={index} className="text-gray-800 text-center">
                    <td className="p-3 border border-gray-300">{bodega.id}</td>
                    <td className="p-3 border border-gray-300">{bodega.tamano}</td>
                    <td className="p-3 border border-gray-300">{bodega.edificio}</td>
                    <td className="p-3 border border-gray-300">${bodega.precio}</td>
                    <td className="p-3 border border-gray-300">{bodega.estado}</td>
                    <td className="p-3 border border-gray-300">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg flex items-center hover:bg-blue-600"
                        onClick={() => handleEdit(bodega)}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
                {bodegas.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center p-4 text-gray-500">
                      No hay bodegas registradas.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {modalOpen && selectedBodega && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={() => setModalOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-4">Editar Bodega</h2>

            <div className="flex flex-col space-y-4">
              <input
                disabled
                value={selectedBodega.id}
                className="p-2 border border-gray-300 rounded-lg bg-gray-100"
              />
              <select
                value={selectedBodega.tamano}
                onChange={(e) => handleInputChange("tamano", e.target.value)}
                className="p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Selecciona tamaño</option>
                <option value="Chica">Chica</option>
                <option value="Mediana">Mediana</option>
                <option value="Grande">Grande</option>
              </select>
              <input
                placeholder="Edificio"
                value={selectedBodega.edificio}
                onChange={(e) => handleInputChange("edificio", e.target.value)}
                className="p-2 border border-gray-300 rounded-lg"
              />
              <input
                placeholder="Precio"
                type="number"
                value={selectedBodega.precio}
                onChange={(e) => handleInputChange("precio", e.target.value)}
                className="p-2 border border-gray-300 rounded-lg"
              />
              <select
                value={selectedBodega.estado}
                onChange={(e) => handleInputChange("estado", e.target.value)}
                className="p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Selecciona estado</option>
                <option value="Vacante">Vacante</option>
                <option value="Ocupada">Ocupada</option>
                <option value="Fuera de venta">Fuera de venta</option>
              </select>

              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                onClick={handleSaveChanges}
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VistaBodega;
