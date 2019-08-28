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
        type: String
      },
      type: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model("orders", orderSchema);
