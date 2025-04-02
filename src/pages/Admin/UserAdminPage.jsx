import React, { useState } from "react";
import UserAdminList from "../../components/admin/userAdmin/UserAdminList";
import { useNavigate } from "react-router-dom";

const initialUsers = [
  { id: 1, name: "Carlos López", role: "Administrador", email: "carlos@example.com" },
  { id: 2, name: "María Rodríguez", role: "Editor", email: "maria@example.com" },
  { id: 3, name: "Luis Pérez", role: "Usuario", email: "luis@example.com" },
];

const UserAdminPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const navigate = useNavigate();

  // Filtrar solo administradores
  const adminUsers = users.filter(user => user.role === "Administrador");

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de eliminar este administrador?");
    if (confirmDelete) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Administradores</h1>

      {/* Botón para agregar administradores */}
      <button 
        className="btn btn-primary btn-wide mb-4"
        onClick={() => navigate("new")}
      >
        Agregar Administrador
      </button>

      <UserAdminList users={adminUsers} onDelete={handleDelete} />
    </div>
  );
};

export default UserAdminPage;
