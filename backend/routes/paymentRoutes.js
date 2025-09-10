const express = require('express');
const router = express.Router();
const { createPaymentLink } = require('../controllers/paymentController');

router.post('/create-payment', createPaymentLink);

module.exports = router;
