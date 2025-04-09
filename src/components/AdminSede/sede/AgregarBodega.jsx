import { useState } from "react";
import { Plus, Edit } from "lucide-react"; // Asegúrate de importar los íconos correctos
import Swal from "sweetalert2";

// Simulación de bodegas registradas
const bodegasSimuladas = [
  { id: "B1", estado: "vacante", precio: 1500, tamano: "chica", edificio: "A", folio: "B32" },
  { id: "B2", estado: "ocupada", precio: 1800, tamano: "mediana", edificio: "B", folio: "B33" },
  { id: "B3", estado: "vacante", precio: 2200, tamano: "grande", edificio: "C", folio: "B34" },
];

const BodegaGestion = () => {
  const [bodegas, setBodegas] = useState(bodegasSimuladas);
  const [folio, setFolio] = useState("");
  const [precio, setPrecio] = useState("");
  const [tamano, setTamano] = useState("");
  const [vacante, setVacante] = useState("");
  const [edificio, setEdificio] = useState("");
  const [bodegaEdicion, setBodegaEdicion] = useState(null);

  // Validación para verificar si el formulario está completo
  const isFormValid = () => folio && precio && tamano && vacante && edificio;

  // Función para registrar una nueva bodega
  const handleSubmit = () => {
    if (isFormValid()) {
      const nuevaBodega = { folio, precio, tamano, vacante, edificio, estado: vacante };
      setBodegas([...bodegas, nuevaBodega]);

      Swal.fire({
        icon: "success",
        title: "Bodega registrada",
        text: "Los datos se han guardado correctamente",
        showCancelButton: true,
        confirmButtonText: "Ir al listado de bodegas",
        cancelButtonText: "Cerrar",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/sedes/vistabodega"; 
        }
      });

      // Limpiar campos
      setFolio("");
      setPrecio("");
      setTamano("");
      setVacante("");
      setEdificio("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor completa todos los campos.",
      });
    }
  };

  const handleRedirection = () => {
    window.location.href = "/sedes/vistabodega"; 
  };

  return (
    <div className="w-full font-sans bg-black text-white min-h-screen">
      <main className="pt-28 px-4 md:px-8 flex flex-col items-center min-h-screen bg-black">
        <div className="bg-white text-black w-full max-w-2xl p-8 rounded-xl shadow-lg mb-10">
          <h2 className="text-center text-3xl font-bold text-orange-500 mb-6">
            {bodegaEdicion ? "Editar Bodega" : "Alta de Bodega"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Folio (Ej: B32)"
              value={folio}
              onChange={(e) => setFolio(e.target.value)}
              disabled={bodegaEdicion && bodegaEdicion.estado === "ocupada"} // No permitir modificar el folio si está ocupada
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Precio personalizado"
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              disabled={bodegaEdicion && bodegaEdicion.estado === "ocupada"} // No permitir modificar el precio si está ocupada
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <select
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={tamano}
              onChange={(e) => setTamano(e.target.value)}
              disabled={bodegaEdicion && bodegaEdicion.estado === "ocupada"} // No permitir modificar el tamaño si está ocupada
            >
              <option value="">Tamaño de la bodega</option>
              <option value="chica">Chica</option>
              <option value="mediana">Mediana</option>
              <option value="grande">Grande</option>
            </select>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={vacante}
              onChange={(e) => setVacante(e.target.value)}
              disabled={bodegaEdicion && bodegaEdicion.estado === "ocupada"} // No permitir modificar el estado si está ocupada
            >
              <option value="">Estado</option>
              <option value="ocupada">Ocupada</option>
              <option value="vacante">Vacante</option>
              <option value="fuera de venta">Fuera de Venta</option>
            </select>
          </div>

          <input
            className="w-full p-3 border border-gray-300 rounded-lg mb-6"
            placeholder="Edificio (Ej: A, B, C...)"
            value={edificio}
            onChange={(e) => setEdificio(e.target.value)}
            disabled={bodegaEdicion && bodegaEdicion.estado === "ocupada"} // No permitir modificar el edificio si está ocupada
          />

          <button
            className={`w-full p-3 text-lg rounded-lg transition-all duration-300 ${
              isFormValid() && !bodegaEdicion
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            disabled={!isFormValid() || bodegaEdicion}
            onClick={handleSubmit}
          >
            {bodegaEdicion ? "Guardar Cambios" : "Registrar Bodega"}
          </button>

          <button
            className="w-full p-3 mt-4 text-lg rounded-lg bg-orange-600 text-white"
            onClick={handleRedirection}
          >
            Ir al listado de bodegas
          </button>

        </div>
      </main>
    </div>
  );
};

export default BodegaGestion;
