require("dotenv").config();
const express = require("express");
const cors = require("cors");
const paymentRoutes = require('./routes/payments');
const app = express();
express.json()
app.use(cors());
app.use(express.json());          // for JSON bodies
app.use(express.urlencoded({ extended: true })); // for form data
app.use('/api/payments', require("./routes/payments"));
app.use('/api/payment-success', require("./routes/patmentSusses"));
app.use("/api/auth", require("./routes/auth.routes"));

app.use("/api/products", require("./routes/product.routes"));

module.exports = app;
