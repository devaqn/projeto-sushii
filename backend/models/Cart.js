const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
});

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [CartItemSchema],
  total: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
