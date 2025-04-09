import React, { useState } from "react";
import cop from "./img/cop.jpg";

export default function PaymentsView() {
  const [paymentDetails, setPaymentDetails] = useState({
    nombre: "",
    clave: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pago realizado con SPEI:", paymentDetails);
    // Aquí puedes integrar la lógica para procesar el pago con SPEI
  };

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-black p-4 text-white flex justify-between items-center">
        <h1 className="font-bold text-lg">PAGOS SIGEBO</h1>

        {/* Menú en pantallas grandes */}
        <nav className="hidden md:flex space-x-4">
          <a href="/" className="hover:underline">
            Inicio
          </a>
          <a href="ExpirationView" className="hover:underline">
            Vencimiento
          </a>
          <a href="" className="hover:underline">
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
          Realiza tu pago con SPEI
        </h1>

        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Detalles de pago
          </h2>

          {/* Formulario de pago con SPEI */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-sm font-semibold mb-2"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={paymentDetails.nombre}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="clave"
                className="block text-sm font-semibold mb-2"
              >
                Clave de SPEI
              </label>
              <input
                type="text"
                id="clave"
                name="clave"
                value={paymentDetails.clave}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={paymentDetails.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF7700] text-white py-2 rounded-md hover:bg-[#a77d4e]"
            >
              Realizar pago con SPEI
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
