const express = require("express");
const mongoose = require('mongoose');
const passport = require('passport')
const bodyParser = require("body-parser");
const telegramNotificationsRoutes = require("./routes/telegramNotifications");
const orderRoutes = require("./routes/order");
const authRoutes = require("./routes/auth")
const keys = require('./config/keys')


const app = express();

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("cors")());
app.use("/api/telegramNotifications", telegramNotificationsRoutes);
app.use("/api/order", orderRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;