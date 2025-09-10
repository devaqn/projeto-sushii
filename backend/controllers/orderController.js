const Order = require('../models/Order');
const Cart = require('../models/Cart');

// Criar Pedido
const createOrder = async (req, res) => {
  const { cartId, userId } = req.body;

  try {
    const cart = await Cart.findById(cartId);

    if (!cart) {
      return res.status(404).json({ message: 'Carrinho não encontrado' });
    }

    const order = new Order({
      cartId,
      userId,
      total: cart.total,
    });

    await order.save();
    return res.json(order);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao criar o pedido' });
  }
};

// Obter Pedidos de um Usuário
const getOrders = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ userId });
    if (!orders.length) {
      return res.status(404).json({ message: 'Nenhum pedido encontrado' });
    }
    return res.json(orders);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao buscar pedidos' });
  }
};

module.exports = { createOrder, getOrders };
