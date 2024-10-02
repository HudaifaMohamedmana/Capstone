const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
   type:{
      type: String,
      required: true,
   } ,
   imge: {
        type: String,
        required: true,
   },
   name: {
        type: String,
        required: true,
        unique: true, 
   },
   price: {
        type: Number,
        required: true,
   },
   description: String ,
   inStock: {
        type: Boolean,
        required: true,
   },
})

const Menu = mongoose.model('Menu',menuSchema);

module.exports = Menu;

