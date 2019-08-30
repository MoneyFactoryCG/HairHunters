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
        type: [[String],[String]],
        default: [[' '],[' ']]
      },
      price: {
        type: Number,
        default: 0
      },
      prepay: {
        sum: {
          type: Number,
          default: 0
        },
        method: {
          type: String,
          default: ' '
        }
      },
      master: {
        type: String,
        default: ' '
      },
      rdate: {
        type: Date,
        default: Date.now
      },
      note: {
        type: String,
        default: ' '
      }
    }
  ]
});

module.exports = mongoose.model("orders", orderSchema);
