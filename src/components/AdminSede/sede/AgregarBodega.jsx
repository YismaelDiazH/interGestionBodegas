import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const edificiosValidos = ["A", "B", "C"];

const BodegaGestion = () => {
  const [folio, setFolio] = useState("");
  const [precio, setPrecio] = useState("");
  const [tamano, setTamano] = useState("");
  const [vacante, setVacante] = useState("");
  const [edificio, setEdificio] = useState("");

  const [precioValido, setPrecioValido] = useState(true);
  const [folioValido, setFolioValido] = useState(true);
  const [edificioValido, setEdificioValido] = useState(true);

  const validarPrecio = (valor) => {
    const numero = parseFloat(valor);
    setPrecioValido(!isNaN(numero) && numero > 0);
  };

  const validarEdificio = (valor) => {
    setEdificioValido(edificiosValidos.includes(valor.toUpperCase()));
  };

  const validarFolioUnicoAPI = async (valor) => {
    try {
      const response = await axios.get("http://localhost:8080/api/bodegas/");
      const folios = response.data.map((bodega) => bodega.folio.toUpperCase());
      const existe = folios.includes(valor.toUpperCase());
      setFolioValido(!existe);
    } catch (error) {
      console.error("Error al validar folio:", error);
      setFolioValido(false);
    }
  };

  const isFormValid = () =>
    folio.trim() !== "" &&
    precioValido &&
    tamano.trim() !== "" &&
    vacante.trim() !== "" &&
    edificio.trim() !== "" &&
    folioValido &&
    edificioValido;

  const handleSubmit = async () => {
    if (!isFormValid()) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos o inválidos",
        text: "Verifica todos los campos antes de continuar.",
      });
      return;
    }

    const nuevaBodega = {
      tipo: tamano,
      folio: folio.trim(),
      precio: parseFloat(precio),
      status: vacante.toUpperCase(),
    };

    try {
      // Llamada a la API para crear la bodega
      await axios.post("http://localhost:8080/api/bodegas/crear/", nuevaBodega);
      Swal.fire({
        icon: "success",
        title: "Bodega registrada",
        text: "Los datos se han guardado correctamente.",
        confirmButtonText: "Ir al listado de bodegas",
        showCancelButton: true,
        cancelButtonText: "Seguir aquí",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/sedes/vistabodega";
        }
      });

      // Limpiar los campos
      setFolio("");
      setPrecio("");
      setTamano("");
      setVacante("");
      setEdificio("");
      setFolioValido(true);
      setEdificioValido(true);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al guardar",
        text: "No se pudo registrar la bodega. Intenta más tarde.",
      });
      console.error("Error al guardar:", error);
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
            Alta de Bodega
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Folio (Ej: B32)"
                value={folio}
                onChange={(e) => {
                  const nuevoFolio = e.target.value;
                  setFolio(nuevoFolio);
                  if (nuevoFolio.trim()) {
                    validarFolioUnicoAPI(nuevoFolio);
                  } else {
                    setFolioValido(true);
                  }
                }}
              />
              {!folioValido && (
                <p className="text-sm text-red-500 mt-1">
                  Este folio ya está registrado.
                </p>
              )}
            </div>

            <div>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Precio personalizado"
                type="number"
                value={precio}
                onChange={(e) => {
                  setPrecio(e.target.value);
                  validarPrecio(e.target.value);
                }}
              />
              {!precioValido && (
                <p className="text-sm text-red-500 mt-1">
                  Ingresa un precio válido mayor a 0.
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <select
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={tamano}
              onChange={(e) => setTamano(e.target.value)}
            >
              <option value="">Tamaño de la bodega</option>
              <option value="Chica">Chica</option>
              <option value="Mediana">Mediana</option>
              <option value="Grande">Grande</option>
            </select>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={vacante}
              onChange={(e) => setVacante(e.target.value)}
            >
              <option value="">Estado</option>
              <option value="DISPONIBLE">Disponible</option>
              <option value="OCUPADA">Ocupada</option>
              <option value="FUERA DE VENTA">Fuera de Venta</option>
            </select>
          </div>

          <div>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg mb-1"
              placeholder="Edificio (solo A, B, C)"
              value={edificio}
              onChange={(e) => {
                const nuevoEdificio = e.target.value.toUpperCase();
                setEdificio(nuevoEdificio);
                validarEdificio(nuevoEdificio);
              }}
            />
            {!edificioValido && (
              <p className="text-sm text-red-500 mt-1">
                Edificio no válido. Usa A, B o C.
              </p>
            )}
          </div>

          <button
            className={`w-full p-3 mt-6 text-lg rounded-lg transition-all duration-300 ${
              isFormValid()
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            disabled={!isFormValid()}
            onClick={handleSubmit}
          >
            Registrar Bodega
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
