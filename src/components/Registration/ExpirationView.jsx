import React from "react";
import cop from "./img/cop.jpg";

export default function ExpirationView() {
  const bodegas = [
    {
      folio: "B01",
      tamaño: "Mediana",
      precio: "$5,000",
      vencimiento: "15/03/2025",
      estado: "Vigente",
      accion: "Renovado",
    },
    {
      folio: "B03",
      tamaño: "Mediana",
      precio: "$5,000",
      vencimiento: "15/03/2025",
      estado: "Vigente",
      accion: "Renovar",
    },
    {
      folio: "C06",
      tamaño: "Grande",
      precio: "$7,000",
      vencimiento: "25/03/2025",
      estado: "Próximo a vencer",
      accion: "Renovar",
    },
    {
      folio: "C12",
      tamaño: "Mediana",
      precio: "$5,000",
      vencimiento: "25/03/2025",
      estado: "Próximo a vencer",
      accion: "Renovar",
    },
  ];

  const handleAction = (accion) => {
    console.log(`Acción seleccionada: ${accion}`);
    // Aquí puedes agregar la lógica para renovar o tomar la acción correspondiente.
  };

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-black p-4 text-white flex justify-between items-center">
        <h1 className="font-bold text-lg">VENCIMIENTO DE BODEGAS</h1>

        {/* Menú en pantallas grandes */}
        <nav className="hidden md:flex space-x-4">
          <a href="/" className="hover:underline">
            Inicio
          </a>
          <a href="/ExpirationView" className="hover:underline">
            Vencimiento
          </a>
          <a href="/PaymentsViews" className="hover:underline">
            Pagos
          </a>
          <a href="/login" className="hover:underline">
            Cerrar sesión
          </a>
        </nav>
      </header>

      <div
        className="h-screen w-screen flex flex-col items-center relative"
        style={{
          backgroundImage: `url(${cop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-3xl font-bold text-orange-600 my-10 mt-45">
          Detalles de vencimiento de bodegas
        </h1>

        <div className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-md">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Folio</th>
                <th className="px-4 py-2 text-left">Tamaño</th>
                <th className="px-4 py-2 text-left">Precio</th>
                <th className="px-4 py-2 text-left">Vencimiento</th>
                <th className="px-4 py-2 text-left">Estado</th>
                <th className="px-4 py-2 text-left">Acción</th>
              </tr>
            </thead>
            <tbody>
              {bodegas.map((bodega, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{bodega.folio}</td>
                  <td className="px-4 py-2">{bodega.tamaño}</td>
                  <td className="px-4 py-2">{bodega.precio}</td>
                  <td className="px-4 py-2">{bodega.vencimiento}</td>
                  <td className="px-4 py-2">{bodega.estado}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleAction(bodega.accion)}
                      className="bg-[#FF7700] text-white py-2 px-4 rounded-md hover:bg-[#a77d4e]"
                    >
                      {bodega.accion}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
