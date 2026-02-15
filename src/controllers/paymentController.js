const mercadopago = require('../config/mercadopago');

const createPreference = async (req, res) => {
  const { items } = req.body;

  const preference = {
    items: items,
    back_urls: {
      success: 'http://localhost:3000/success',
      failure: 'http://localhost:3000/failure',
      pending: 'http://localhost:3000/pending',
    },
    auto_return: 'approved',
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.json({ id: response.body.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creando preferencia' });
  }
};

module.exports = { createPreference };