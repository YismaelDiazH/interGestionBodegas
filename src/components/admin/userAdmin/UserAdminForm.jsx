import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserAdminForm = ({ users, setUsers }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = id !== undefined;

  const initialState = { name: "", email: "", role: "Administrador" };
  const [formData, setFormData] = useState(initialState);

  // Cargar datos del usuario si es edición
  useEffect(() => {
    if (isEditing) {
      const userToEdit = users.find(user => user.id === parseInt(id));
      if (userToEdit) {
        setFormData(userToEdit);
      }
    }
  }, [id, users]);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Guardar administrador
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setUsers(users.map(user => (user.id === parseInt(id) ? formData : user)));
    } else {
      setUsers([...users, { ...formData, id: users.length + 1 }]);
    }
    
    navigate("/admin/users");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-base-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{isEditing ? "Editar Administrador" : "Nuevo Administrador"}</h2>

      {/* Nombre */}
      <label className="input validator mb-4">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </g>
        </svg>
        <input
          type="text"
          name="name"
          required
          placeholder="Nombre Completo"
          pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,50}"
          minLength="3"
          maxLength="50"
          title="Solo letras y espacios, entre 3 y 50 caracteres"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <p className="validator-hint">Debe tener entre 3 y 50 caracteres y solo contener letras.</p>

      {/* Correo Electrónico */}
      <label className="input validator mb-4">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <p className="validator-hint hidden">Ingrese una dirección de correo válida.</p>

      {/* Botón de Envío */}
      <button className="btn btn-primary btn-wide" type="submit">
        {isEditing ? "Guardar Cambios" : "Agregar Administrador"}
      </button>
    </form>
  );
};

export default UserAdminForm;
