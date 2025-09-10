const express = require('express');
const router = express.Router();
const { createOrUpdateCart, getCart } = require('../controllers/cartController');

router.post('/', createOrUpdateCart);
router.get('/:userId', getCart);

module.exports = router;
