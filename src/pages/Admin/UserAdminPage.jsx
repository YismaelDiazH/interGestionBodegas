import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserAdminList from "../../components/admin/userAdmin/UserAdminList";

const UserAdminPage = () => {
  const [users, setUsers] = useState([]);
  const [userToDelete, setUserToDelete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/usuarios/")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener usuarios");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDeleteClick = (id) => {
    setUserToDelete(id);
    document.getElementById("my_modal_2").showModal();
  };

  const handleDeleteConfirm = () => {
    fetch(`http://localhost:8080/api/usuarios/${userToDelete}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al eliminar usuario");
        setUsers(users.filter((user) => user.id !== userToDelete));
        setUserToDelete(null);
        document.getElementById("my_modal_2").close();
      })
      .catch((err) => {
        console.error(err);
        alert("Hubo un error al eliminar el usuario");
        document.getElementById("my_modal_2").close();
      });
  };

  const handleDeleteCancel = () => {
    setUserToDelete(null);
    document.getElementById("my_modal_2").close();
  };

  const adminUsers = users.filter((user) => user.rol === "ADMINISTRADOR");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Administradores</h1>
      <button
        className="btn custom-bg btn-wide mb-4"
        onClick={() => navigate("new")}
      >
        Agregar Administrador
      </button>

      {loading ? (
        <p className="text-gray-500">Cargando usuarios...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <UserAdminList users={adminUsers} onDelete={handleDeleteClick} />
      )}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">¿Estás seguro de eliminar este administrador?</h3>
          <div className="py-4">
            <button
              className="btn btn-sm btn-outline btn-danger mr-2"
              onClick={handleDeleteConfirm}
            >
              Confirmar
            </button>
            <button
              className="btn btn-sm btn-outline btn-secondary"
              onClick={handleDeleteCancel}
            >
              Cancelar
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UserAdminPage;
