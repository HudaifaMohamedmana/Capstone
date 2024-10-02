require('dotenv').config()
const express = require('express')
const PORT = process.env.port || 3000
const app = express()
const cors = require('cors');
const connectToDb = require('./db/connectToDb')
const MenuC = require('./controllers/menuC')
connectToDb()

app.use(express.json())
app.use(cors())
//-----------------------------------------------------------------------------------------------

app.get(`/Menu`,MenuC.fetchMenu)

app.post(`/Menu`,MenuC.createMenu)

app.get(`/Menu/:id`,MenuC.fetchMenuById)

app.put(`/Menu/:id`,MenuC.updateMenu)

app.delete(`/Menu/:id`,MenuC.deleteMenu)



//------------------------------------------------------------------------------------------------
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})