import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PagoExitoso = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const confirmarPago = async () => {
      try {
        if (!sessionId) {
          throw new Error('No se encontró ID de sesión');
        }

        // 1. Obtener detalles del pago
        const response = await fetch(`http://localhost:8080/api/checkout/session-info?session_id=${sessionId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (!response.ok) {
          throw new Error('Error al verificar el pago');
        }

        const session = await response.json();
        
        await fetch("http://localhost:8080/api/pagos/confirmar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            sessionId: sessionId,
            monto: session.amount_total / 100,
            paymentIntentId: session.payment_intent,
            paymentStatus: session.payment_status
          })
        });
        alert('¡Pago exitoso! La bodega ha sido rentada.');
        navigate('/renta/mis-rentas');
      } catch (error) {
        console.error('Error:', error);
        alert('Error al confirmar el pago: ' + error.message);
        navigate('/');
      }
    };

    if (sessionId) {
      confirmarPago();
    } else {
      navigate('/');
    }
  }, [sessionId, navigate]);

  return <div className="p-8 text-center">Verificando tu pago...</div>;
};

export default PagoExitoso;