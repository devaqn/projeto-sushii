import React from 'react';
import { useCart } from '@/context/CartContext';

const CheckoutButton: React.FC = () => {
  const { cartItems } = useCart();

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert('Seu carrinho está vazio.');
      return;
    }

    try {
      const response = await fetch('/.netlify/functions/mp-create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartItems),
      });

      const data = await response.json();
      if (data.id) {
        window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${data.id}`;
      } else {
        alert('Erro ao iniciar o pagamento.');
      }
    } catch (error) {
      alert('Falha na conexão com o servidor.');
    }
  };

  return (
    <button onClick={handleCheckout} className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4">
      Finalizar Pedido
    </button>
  );
};

export default CheckoutButton;
