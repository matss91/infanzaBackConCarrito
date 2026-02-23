// models/Preference.js
const mongoose = require('mongoose');

const PreferenceSchema = new mongoose.Schema({
  preference_id: { type: String, required: true },  // el id que devuelve Mercado Pago
  items: { type: Array, required: true },          // los productos de la preferencia
  payer: { type: Object, required: true },         // datos del comprador
  status: { type: String, default: 'created' },   // estado inicial
  date_created: { type: Date, default: Date.now } // fecha de creación
});

module.exports = mongoose.model('Preference', PreferenceSchema);