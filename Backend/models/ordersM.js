const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
   itme: [{
      imge: {
         type: String,
         required: true,
      },
      names: {
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

