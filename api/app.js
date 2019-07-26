const express = require("express");
const bodyParser = require("body-parser");
const telegramNotificationsRoutes = require("./routes/telegramNotifications");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("cors")());
app.use("/api/telegramNotifications", telegramNotificationsRoutes);

module.exports = app;