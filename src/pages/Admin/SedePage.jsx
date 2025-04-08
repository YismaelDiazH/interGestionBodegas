import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SedeList from "../../components/admin/sedes/SedesList";  // Asumiendo que tienes un componente para mostrar las sedes

const initialSedes = [
  { id: 1, name: "Sede Principal", location: "Ciudad Central", administrator: "Admin1" },
  { id: 2, name: "Sede Secundaria", location: "Zona Norte", administrator: "Admin2" },
  { id: 3, name: "Sede Terciaria", location: "Zona Sur", administrator: "Admin3" },
  { id: 4, name: "Sede Cuaternaria", location: "Zona Este", administrator: "Admin4" },
  { id: 5, name: "Sede Quina", location: "Zona Oeste", administrator: "Admin5" },
  { id: 6, name: "Sede Sexta", location: "Zona Centro", administrator: "Admin6" },
  { id: 7, name: "Sede Séptima", location: "Zona Norte", administrator: "Admin7" },
  { id: 8, name: "Sede Octava", location: "Zona Sur", administrator: "Admin8" },
  { id: 9, name: "Sede Novena", location: "Zona Este", administrator: "Admin9" },
  { id: 10, name: "Sede Décima", location: "Zona Oeste", administrator: "Admin10" },
];

const SedePage = () => {
  const [sedes, setSedes] = useState(initialSedes);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de eliminar esta sede?");
    if (confirmDelete) {
      setSedes(sedes.filter(sede => sede.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Sedes</h1>

      {/* Botón para agregar nuevas sedes */}
      <button 
        className="btn btn-primary btn-wide mb-4"
        onClick={() => navigate("new")}
      >
        Agregar Nueva Sede
      </button>

      {/* Lista de sedes */}
      <SedeList sedes={sedes} onDelete={handleDelete} />
    </div>
  );
};

export default SedePage;
