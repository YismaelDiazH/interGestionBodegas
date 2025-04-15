import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserAdminForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = id !== undefined;

  const initialState = {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    telefono: "",
    rfc: "",
    direccion: "",
    codigopos: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      if (isEditing) {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:8080/api/usuarios/id/${id}`);
          if (!response.ok) throw new Error("No se pudo obtener el usuario");
          const data = await response.json();
          setFormData({
            nombre: data.nombre || "",
            apellidoPaterno: data.apellidoPaterno || "",
            apellidoMaterno: data.apellidoMaterno || "",
            email: data.email || "",
            telefono: data.telefono || "",
            rfc: data.rfc || "",
            direccion: data.direccion || "",
            codigopos: data.codigopos || "",
          });
        } catch (err) {
          console.error("Error cargando el usuario:", err);
          setError("No se pudo cargar el usuario.");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchUser();
  }, [id, isEditing]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      nombre: formData.nombre,
      apellidoPaterno: formData.apellidoPaterno,
      apellidoMaterno: formData.apellidoMaterno,
      email: formData.email,
      telefono: formData.telefono,
      rfc: formData.rfc,
      direccion: formData.direccion,
      codigopos: formData.codigopos,
      rol: "ADMINISTRADOR",
      password: "Admin123!", // puedes ajustar esto si el backend lo requiere
    };

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `http://localhost:8080/api/usuarios/${id}`
      : `http://localhost:8080/api/usuarios/`;

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        console.error("Error del servidor:", errorData);
        throw new Error("No se pudo guardar");
      }

      navigate("/admin/administradores");
    } catch (err) {
      console.error("Error al guardar:", err);
      alert("Error al guardar: " + err.message);
    }
  };

  if (loading) return <p className="p-6">Cargando datos del usuario...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-base-100 rounded-lg shadow-md max-w-6xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6">
        {isEditing ? "Editar Administrador" : "Nuevo Administrador"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nombre */}
        <div>
          <label className="input validator">
            <input
              type="text"
              name="nombre"
              required
              placeholder="Nombre"
              pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,50}"
              value={formData.nombre}
              onChange={handleChange}
            />
          </label>
          <p className="validator-hint">
            Debe tener entre 3 y 50 caracteres y solo contener letras.
          </p>
        </div>

        {/* Apellido Paterno */}
        <div>
          <label className="input validator">
            <input
              type="text"
              name="apellidoPaterno"
              required
              placeholder="Apellido Paterno"
              pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,50}"
              value={formData.apellidoPaterno}
              onChange={handleChange}
            />
          </label>
          <p className="validator-hint">Debe tener entre 3 y 50 caracteres.</p>
        </div>

        <div>
          <label className="input validator">
            <input
              type="text"
              name="apellidoMaterno"
              required
              placeholder="Apellido Materno"
              pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]{3,50}"
              value={formData.apellidoMaterno}
              onChange={handleChange}
            />
          </label>
          <p className="validator-hint">Debe tener entre 3 y 50 caracteres.</p>
        </div>

        <div>
          <label className="input validator">
            <input
              type="email"
              name="email"
              required
              placeholder="Correo Electrónico"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <p className="validator-hint">Debe ser un correo válido.</p>
        </div>

        <div>
          <label className="input validator">
            <input
              type="tel"
              name="telefono"
              required
              pattern="\d{10}"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </label>
          <p className="validator-hint">Debe tener 10 dígitos.</p>
        </div>

        <div>
          <label className="input validator">
            <input
              type="text"
              name="rfc"
              required
              placeholder="RFC"
              pattern="[A-Z]{4}\d{6}[A-Z0-9]{3}"
              value={formData.rfc}
              onChange={handleChange}
            />
          </label>
          <p className="validator-hint">Debe ser un RFC válido.</p>
        </div>

        <div>
          <label className="input validator">
            <input
              type="text"
              name="direccion"
              required
              placeholder="Dirección"
              pattern="[A-Za-z0-9.,# ]{5,100}"
              value={formData.direccion}
              onChange={handleChange}
            />
          </label>
          <p className="validator-hint">Entre 5 y 100 caracteres.</p>
        </div>

        <div>
          <label className="input validator">
            <input
              type="text"
              name="codigopos"
              required
              placeholder="Código Postal"
              pattern="\d{5}"
              value={formData.codigopos}
              onChange={handleChange}
            />
          </label>
          <p className="validator-hint">Debe tener 5 dígitos.</p>
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" className="btn custom-bg btn-wide">
          {isEditing ? "Guardar Cambios" : "Agregar Administrador"}
        </button>
      </div>
    </form>
  );
};

export default UserAdminForm;
