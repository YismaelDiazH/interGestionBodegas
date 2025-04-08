import React, { useState } from "react";
import UserAdminList from "../../components/admin/userAdmin/UserAdminList";
import { useNavigate } from "react-router-dom";

const initialUsers = [
  { id: 1, firstName: "Carlos", lastName: "López", role: "Administrador", email: "carlos@example.com", phone: "123456789", rfc: "ABC123", address: "Calle Ficticia 123", postalCode: "01000" },
  { id: 2, firstName: "María", lastName: "Rodríguez", role: "Administrador", email: "maria@example.com", phone: "987654321", rfc: "XYZ456", address: "Av. Real 456", postalCode: "02000" },
  { id: 3, firstName: "Luis", lastName: "Pérez", role: "Usuario", email: "luis@example.com", phone: "555555555", rfc: "LMN789", address: "Calle Ejemplo 789", postalCode: "03000" },
];

const UserAdminPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [userToDelete, setUserToDelete] = useState(null);
  const navigate = useNavigate();

  // Filtrar solo administradores
  const adminUsers = users.filter(user => user.role === "Administrador");

  // Manejo de la eliminación de usuario
  const handleDeleteClick = (id) => {
    setUserToDelete(id);
    document.getElementById('my_modal_2').showModal(); // Abre el modal
  };

  const handleDeleteConfirm = () => {
    setUsers(users.filter(user => user.id !== userToDelete));
    setUserToDelete(null);
    document.getElementById('my_modal_2').close(); // Cierra el modal
  };

  const handleDeleteCancel = () => {
    setUserToDelete(null);
    document.getElementById('my_modal_2').close(); // Cierra el modal
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

      {/* Lista de administradores */}
      <UserAdminList users={adminUsers} onDelete={handleDeleteClick} />

      {/* Modal de confirmación de eliminación */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">¿Estás seguro de eliminar este administrador?</h3>
          <div className="py-4">
            <button className="btn btn-sm btn-outline btn-danger mr-2" onClick={handleDeleteConfirm}>Confirmar</button>
            <button className="btn btn-sm btn-outline btn-secondary" onClick={handleDeleteCancel}>Cancelar</button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UserAdminPage;
