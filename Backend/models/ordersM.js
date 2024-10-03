const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
   item: [{
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
      }
   }],
   total: Number
})

const Orders = mongoose.model('Orders',ordersSchema);

module.exports = Orders;

