const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  order: {
    type: Number,
    required: true
  },
  list: [
    {
      name: {
        type: String
      },
      phone: {
        type: Number
      },
      type: {
        type: Number
      }
    }
  ]
});

module.exports = mongoose.model("orders", orderSchema);
