const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  spam: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    required: true
  },
  status: {
    type: String,
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
        type: [[String],[String]]
      },
      price: {
        type: Number
      },
      prepay: {
        sum: {
          type: Number
        },
        method: {
          type: String
        }
      },
      master: {
        type: String
      },
      rdate: {
        type: Date,
        default: Date.now
      },
      note: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model("orders", orderSchema);
