// Importar useNavigate ao invés de useHistory
import { useNavigate } from 'react-router-dom'; 

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, closeCart } = useCart();
  const navigate = useNavigate(); // Alteração aqui

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/payment/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartItems }),
      });
      const data = await response.json();
      window.location.href = data.init_point; // Redireciona para o Mercado Pago
    } catch (error) {
      console.error('Erro ao gerar link de pagamento', error);
    }
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} R$ x {item.quantity}
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => removeItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <h3>Total: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} R$</h3>
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};
