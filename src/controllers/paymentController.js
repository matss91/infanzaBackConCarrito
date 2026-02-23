const { client, Preference } = require('../config/mercadoPago');
const PreferenceModel = require('../models/Preference');

const createPreference = async (req, res) => {
  try {
    const { items, payer } = req.body; // 👈 IMPORTANTE

    const preferenceData = {
      items: items.map(item => ({
        title: item.title,
        quantity: Number(item.quantity),
        unit_price: Number(item.unit_price),
        currency_id: item.currency_id || 'ARS'
      }))
    };

    const preference = new Preference(client);
    const response = await preference.create({ body: preferenceData });

    // ✅ AQUÍ VA LA SOLUCIÓN CORRECTA
    const newPref = new PreferenceModel({
      preference_id: response.id,
      items: preferenceData.items,
      payer: payer, // 👈 ESTA LÍNEA ES LA QUE FALTABA
      status: 'created'
    });

    await newPref.save();

    res.json({
      id: response.id,
      init_point: response.init_point
    });

  } catch (error) {
    console.error('Error creando preferencia:', error);
    res.status(500).json({ error: 'Error creando preferencia' });
  }
};

module.exports = { createPreference };