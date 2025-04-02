import React from "react";
import { useNavigate } from "react-router-dom";

const SedesList = ({ sedes, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 p-4">
      <table className="table">
        <thead>
          <tr className="bg-base-200">
            <th>#</th>
            <th>Nombre de la Sede</th>
            <th>Ubicación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sedes.length > 0 ? (
            sedes.map((sede, index) => (
              <tr key={sede.id} className="hover">
                <th>{index + 1}</th>
                <td>{sede.nombre}</td>
                <td>{sede.ubicacion}</td>
                <td>
                  {/* Botón Editar */}
                  <button
                    className="btn btn-sm btn-outline btn-primary mr-2"
                    onClick={() => navigate(`/admin/sedes/edit/${sede.id}`)}
                  >
                    Editar
                  </button>

                  {/* Botón Eliminar */}
                  <button
                    className="btn btn-sm btn-outline btn-error"
                    onClick={() => onDelete(sede.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-gray-500 py-4">
                No hay sedes registradas.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SedesList;
