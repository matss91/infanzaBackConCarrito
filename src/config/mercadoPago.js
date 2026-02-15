const mercadopago = require('mercadopago');

// Configura tu Access Token
mercadopago.configurations.setAccessToken(process.env.MP_ACCESS_TOKEN);

module.exports = mercadopago;