const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true },
  total: { type: Number, required: true },
  status: { type: String, default: 'Pending' }, // Status: Pending, Processing, Completed
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
