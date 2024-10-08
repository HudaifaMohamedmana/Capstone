const Menu = require("../models/MenuM");

const fetchMenu = async (req, res) => {
  const menu = await Menu.find();
  res.json({ menu });
};

const fetchMenuById = async (req, res) => {
  const id = req.params.id;
  const item = await Menu.findById(id);
  res.json({ item });
};

const createMenu = async (req, res) => {
  const { type, imge, name, price, description, inStock } = req.body;
  try {
    const item = await Menu.create({
      type,
      imge,
      name,
      price,
      description,
      inStock,
    });
    res.status(201).json({ message: "Menu item created successfully", item });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: "Name must be unique" });
    } else {
      res.status(500).json({ error: "Server error" });
    }
  }
};

const updateMenu = async (req, res) => {
  const id = req.params.id;
  const { type, imge, name, price, description, inStock } = req.body;
  const item = await Menu.findByIdAndUpdate(id, {
    type: type,
    imge: imge,
    name: name,
    price: price,
    description: description,
    inStock: inStock,
  });
  res.json({ item });
};

const deleteMenu = async (req, res) => {
  const id = req.params.id;
  await Menu.deleteOne({ _id: id });
  res.json({ success: "Record Deleted Successfully" });
};

module.exports = {
  fetchMenu,
  fetchMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
};
