import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RenovacionBodega = ({ rentaId, bodegaId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAction = async (action) => {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('token');
    
    try {
      // Endpoint para liberar bodega
      const response = await fetch(`http://localhost:8080/api/rentas/${rentaId}/${action}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error al ${action} bodega`);
      }

      if (action === 'liberar') {
        alert('Bodega liberada exitosamente');
      } else if (action === 'renovar') {
        // Redirigir a la página de renta
        navigate(`/rentar/${bodegaId}`);
      }
      
      window.location.reload();
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => handleAction('liberar')}
        disabled={loading}
        className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 disabled:bg-gray-100"
      >
        {loading ? '...' : 'Liberar'}
      </button>
      {/*
      <button
        onClick={() => handleAction('renovar')}
        disabled={loading}
        className="text-sm bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 disabled:bg-orange-300"
      >
        {loading ? '...' : 'Renovar'}
      </button>
    */}
      {error && (
        <div className="text-red-500 text-xs mt-1">{error}</div>
      )}
    </div>
  );
};

export default RenovacionBodega;