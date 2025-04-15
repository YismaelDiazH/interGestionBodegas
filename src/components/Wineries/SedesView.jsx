import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cop from "./img/cop.jpg";

export default function SedesClienteView() {
  const [sedes, setSedes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); 
  useEffect(() => {
    const fetchSedes = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/sedes/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("Error al obtener las sedes");
        }

        const data = await response.json();
        setSedes(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching sedes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSedes();
  }, [token]);

  const handleVerBodegas = (sedeId) => {
    navigate(`/renta/sedes/${sedeId}/bodegas`);
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center py-10 relative"
      style={{
        backgroundImage: `url(${cop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <h1 className="text-3xl font-bold text-orange-600 mb-10 bg-white px-6 py-3 rounded-lg shadow-lg">
        Nuestras Sedes Disponibles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-6xl">
        {sedes.map((sede) => (
          <div
            key={sede.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{sede.nombre}</h2>
              <p className="text-gray-600 mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {sede.direccion}
              </p>
              
              <div className="mb-4">
                <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                  Sede {sede.id}
                </span>
              </div>

              <button
                onClick={() => handleVerBodegas(sede.id)}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                Ver Bodegas Disponibles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}