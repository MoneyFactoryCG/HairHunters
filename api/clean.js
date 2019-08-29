const mongoose = require('mongoose');
const orderModel = require('./models/Order');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(error => console.log(error))

orderModel.deleteMany({},(err, response) => {
  console.log(err || 'OK');
  console.log(response || 'ERROR');
  mongoose.connection.close();
});

