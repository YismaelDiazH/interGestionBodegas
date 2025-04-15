import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";

const DashboardAdministrador = () => {
  const [bodegas, setBodegas] = useState([]);
  const [filtroEdificio, setFiltroEdificio] = useState("");
  const [filtroTamano, setFiltroTamano] = useState("");
  const [nombreSede, setNombreSede] = useState("");

  useEffect(() => {
    const obtenerSedeDelUsuario = async () => {
      try {
        const usuario = JSON.parse(localStorage.getItem("user"));
        const correo = usuario?.sub;
  
        if (!correo) return;
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:8080/api/sedes/usuario/correo/${correo}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("No se pudo obtener la sede");
        }
  
        const sede = await response.json();
        setNombreSede(sede.nombre);
        localStorage.setItem("sedeId", sede.id);
        localStorage.setItem("sedeName",sede.nombre);
      } catch (error) {
        console.error("Error al obtener la sede:", error.message);
      }
    };
  
    obtenerSedeDelUsuario();
  }, []);
  
  useEffect(() => {
    const obtenerBodegas = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/bodegas/");
        if (!response.ok) {
          throw new Error("Error al obtener las bodegas");
        }
        const data = await response.json();
        setBodegas(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    obtenerBodegas();
  }, []);

  const bodegasFiltradas = useMemo(() => {
    return bodegas.filter((b) => {
      const coincideEdificio = !filtroEdificio || b.edificio === filtroEdificio;
      const coincideTamano = !filtroTamano || b.tamano === filtroTamano;
      return coincideEdificio && coincideTamano;
    });
  }, [bodegas, filtroEdificio, filtroTamano]);

  const totalIngresos = bodegasFiltradas
    .filter((b) => b.estado === "ocupada" && b.estatusPago === "pagado")
    .reduce((acc, b) => acc + b.precio, 0);

  const ocupadas = bodegasFiltradas.filter(
    (b) => b.estado === "ocupada"
  ).length;
  const vacantes = bodegasFiltradas.filter(
    (b) => b.estado === "vacante"
  ).length;
  const porDesalojar = bodegasFiltradas.filter(
    (b) => b.estado === "ocupada" && b.estatusPago === "impago"
  );

  const clientesImpagos = useMemo(() => {
    return bodegasFiltradas.filter((b) => b.estatusPago === "impago");
  }, [bodegasFiltradas]);

  const notificarCliente = async (idBodega) => {
    try {
      const response = await fetch(`http://localhost:8080/api/bodegas/${idBodega}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ estatusPago: "pagado" }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el estatus de pago");
      }

      console.log(`Notificación enviada a cliente de la bodega ${idBodega}`);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="p-8 w-full min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">
        Dashboard {nombreSede}
      </h1>
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <MetricCard
          titulo="Ingresos Totales"
          valor={`$${totalIngresos}`}
          color="green"
        />
        <MetricCard titulo="Ocupadas" valor={ocupadas} color="blue" />
        <MetricCard titulo="Vacantes" valor={vacantes} color="yellow" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-xl font-semibold text-red-500 mb-4">
          Bodegas por desalojar
        </h2>
        {porDesalojar.length > 0 ? (
          <ul className="space-y-3">
            {porDesalojar.map((bodega) => (
              <li
                key={bodega.id}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border rounded-lg bg-gray-50"
              >
                <div>
                  <p className="font-semibold">Folio: {bodega.id}</p>
                  <p className="text-sm text-gray-600">
                    Edificio {bodega.edificio} - Tamaño {bodega.tamano}
                  </p>
                </div>
                <button
                  className="mt-2 sm:mt-0 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={() => notificarCliente(bodega.id)}
                >
                  Notificar al cliente
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No hay bodegas por desalojar.</p>
        )}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold text-orange-500 mb-4">
          Clientes que faltan por pagar
        </h2>
        {clientesImpagos.length > 0 ? (
          <ul className="space-y-3">
            {clientesImpagos.map((bodega) => (
              <li
                key={bodega.id}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border rounded-lg bg-gray-50"
              >
                <div>
                  <p className="font-semibold">Cliente: {bodega.cliente}</p>
                  <p className="text-sm text-gray-600">
                    Bodega {bodega.id} - Edificio {bodega.edificio} - Tamaño{" "}
                    {bodega.tamano}
                  </p>
                  <p className="text-sm text-red-500">
                    Precio: ${bodega.precio}
                  </p>
                </div>
                <button
                  className="mt-2 sm:mt-0 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  onClick={() => notificarCliente(bodega.id)}
                >
                  Notificar al cliente
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            Todos los clientes están al día con sus pagos.
          </p>
        )}
      </div>
    </div>
  );
};

const MetricCard = ({ titulo, valor, color }) => {
  const colorClass = {
    green: "text-green-600",
    blue: "text-blue-600",
    yellow: "text-yellow-500",
  }[color] || "text-gray-800";

  return (
    <div
      className={`p-6 bg-${color}-200 rounded-lg shadow-lg text-center text-lg font-semibold ${colorClass}`}
    >
      <p>{titulo}</p>
      <p className="text-2xl font-bold">{valor}</p>
    </div>
  );
};

export default DashboardAdministrador;
