require("dotenv").config();
const express = require("express");
const PORT = process.env.port || 3000;
const app = express();
const cors = require("cors");
const connectToDb = require("./db/connectToDb");
const ordersR = require("./router/OrdersR");
const userR = require("./router/UserR");
const menuR = require("./router/MenuR");

connectToDb();

app.use(express.json());
app.use(cors());
//-----------------------------------------------------------------------------------------------
app.use("/user", userR);
app.use("/menu", menuR);
app.use("/orders", ordersR);

//------------------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
