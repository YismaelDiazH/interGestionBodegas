import React from "react";
import { useNavigate } from "react-router-dom";

const UserAdminList = ({ users, onDelete }) => {
  const navigate = useNavigate();

  // Filtrar solo administradores
  const adminUsers = users.filter(user => user.role === "Administrador");

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 p-4">
      <h2 className="text-xl font-bold mb-4">Lista de Administradores</h2>
      <table className="table">
        {/* Encabezado */}
        <thead>
          <tr className="bg-base-200">
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {adminUsers.length > 0 ? (
            adminUsers.map((user, index) => (
              <tr key={user.id} className="hover">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline btn-primary mr-2"
                    onClick={() => navigate(`/admin/users/edit/${user.id}`)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-outline btn-error"
                    onClick={() => onDelete(user.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-gray-500 py-4">
                No hay administradores registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserAdminList;
