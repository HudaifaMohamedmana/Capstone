const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    imge: {
        type: ,
        required: true,
     },
     names: {
        type: String,
        required: true,
     },
     total: {
        type: Number,
        required: true,
     }
})

const Orders = mongoose.model('Orders',ordersSchema);

module.exports = Orders;

