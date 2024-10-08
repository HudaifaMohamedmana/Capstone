const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  item: [
    {
      imge: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  total: {
    type: String,
    required: true,
  },
});

const Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
