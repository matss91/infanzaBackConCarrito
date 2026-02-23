// config/mercadoPago.js
const { MercadoPagoConfig, Preference } = require('mercadopago');

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN || 'TU_ACCESS_TOKEN'
});

module.exports = { client, Preference };