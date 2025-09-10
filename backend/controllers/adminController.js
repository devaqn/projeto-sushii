const User = require('../models/User');
const Order = require('../models/Order');
const Cart = require('../models/Cart');

// Obter todos os usuários
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
};

// Obter todos os pedidos
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('userId').populate('cartId');
    return res.json(orders);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao buscar pedidos' });
  }
};

// Atualizar o status de um pedido
const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    return res.json(order);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao atualizar status do pedido' });
  }
};

// Excluir um usuário
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    await Cart.deleteMany({ userId: id }); // Excluir os carrinhos do usuário
    await Order.deleteMany({ userId: id }); // Excluir os pedidos do usuário
    return res.json({ message: 'Usuário excluído com sucesso' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro ao excluir usuário' });
  }
};

module.exports = { getUsers, getOrders, updateOrderStatus, deleteUser };
