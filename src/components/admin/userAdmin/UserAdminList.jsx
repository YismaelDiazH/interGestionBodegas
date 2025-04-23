import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserAdminList = ({ users, onDelete }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Función para filtrar usuarios
  const filteredUsers = users.filter((user) =>
    Object.values(user).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="rounded-box border border-base-content/5 bg-base-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Lista de Administradores</h2>
        <div className="relative ">
          <input
            type="text"
            placeholder="Buscar administrador..."
            className="input input-bordered input-sm w-full max-w-xs pl-[60px] pr-[60px] mt-[10px] mb-[10px] "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setSearchTerm("")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div
        className="overflow-x-auto custom-scrollbar"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <table className="table w-full">
          <thead>
            <tr className="bg-base-200 sticky top-0">
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido paterno</th>
              <th>Apellido materno</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>RFC</th>
              <th>Dirección</th>
              <th>Código Postal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={user.id} className="hover">
                  <th>{index + 1}</th>
                  <td>{user.nombre}</td>
                  <td>{user.apellidoPaterno}</td>
                  <td>{user.apellidoMaterno}</td>
                  <td>{user.email}</td>
                  <td>{user.telefono}</td>
                  <td>{user.rfc}</td>
                  <td>{user.direccion}</td>
                  <td>{user.codigopos}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline btn-primary mr-2"
                      onClick={() =>
                        navigate(`/admin/administradores/edit/${user.id}`)
                      }
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
                <td colSpan="10" className="text-center text-gray-500 py-4">
                  {searchTerm
                    ? "No se encontraron resultados"
                    : "No hay administradores registrados."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {filteredUsers.length > 0 && (
        <div className="text-center mt-2 text-sm text-gray-500">
          Mostrando {filteredUsers.length} de {users.length} administradores
        </div>
      )}
    </div>
  );
};

export default UserAdminList;
