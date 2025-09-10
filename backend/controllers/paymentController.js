const mercadoPago = require('mercadopago');
const dotenv = require('dotenv');

dotenv.config();

mercadoPago.configurations.setAccessToken(process.env.MP_ACCESS_TOKEN);

// Criar a preferência de pagamento
const createPaymentLink = async (req, res) => {
  const { items } = req.body;

  const preference = {
    items: items.map(item => ({
      title: item.name,
      quantity: item.quantity,
      unit_price: item.price
    })),
    back_urls: {
      success: 'http://localhost:5000/payment/success',
      failure: 'http://localhost:5000/payment/failure',
      pending: 'http://localhost:5000/payment/pending'
    },
    auto_return: 'approved'
  };

  try {
    const response = await mercadoPago.preferences.create(preference);
    res.json({ init_point: response.body.init_point });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar pagamento' });
  }
};

module.exports = { createPaymentLink };
