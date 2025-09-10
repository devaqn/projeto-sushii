const Cart = require('../models/Cart');

// Criar ou Atualizar Carrinho
const createOrUpdateCart = async (req, res) => {
  const { userId, items } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      cart.items = items;
      cart.total = items.reduce((total, item) => total + item.price * item.quantity, 0);
      await cart.save();
      return res.json(cart);
    }

    cart = new Cart({ userId, items, total: items.reduce((total, item) => total + item.price * item.quantity, 0) });
    await cart.save();
    return res.json(cart);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao criar/atualizar o carrinho' });
  }
};

// Obter Carrinho
const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: 'Carrinho não encontrado' });
    }
    return res.json(cart);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao buscar carrinho' });
  }
};

module.exports = { createOrUpdateCart, getCart };
