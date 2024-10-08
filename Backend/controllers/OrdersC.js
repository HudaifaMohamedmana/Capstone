const Orders = require("../models/ordersM");

// ----------------------------------------------- make new order
const createOrder = async (req, res) => {
  try {
    const { email, item, total } = req.body;

    if (!item || item.length === 0) {
      return res.status(400).json({ message: "Items are required" });
    }
    const newOrder = new Orders({
      email: email,
      item: item,
      total: total,
    });
    res.status(201).json({ message: "Order created successfully", newOrder });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// ------------------------------------------------- all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

//--------------------------------------------------- order by ID
const getOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Orders.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

//---------------------------------------------------- Update order
const updateOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const { email, item, total } = req.body;
    const updatedOrder = await Orders.findByIdAndUpdate(id, {
      email: email,
      item: item,
      total: total,
    });

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res
      .status(200)
      .json({ message: "Order updated successfully", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
//------------------------------------------------------- Delete
const deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedOrder = await Orders.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
