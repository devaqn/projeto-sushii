const express = require('express');
const router = express.Router();
const { getUsers, getOrders, updateOrderStatus, deleteUser } = require('../controllers/adminController');

router.get('/users', getUsers);
router.get('/orders', getOrders);
router.put('/orders/:id/status', updateOrderStatus);
router.delete('/users/:id', deleteUser);

module.exports = router;
