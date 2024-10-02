require('dotenv').config
const mongoose = require('mongoose')

const conn = process.env.ATLAS_URI
const connectToDb = async() =>{
    await mongoose.connect(conn)
    console.log(`dataBase conncted`)
}
module.exports = connectToDb