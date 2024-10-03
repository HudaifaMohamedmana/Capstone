const express = require('express');
const { fetchMenu, createMenu, fetchMenuById, updateMenu, deleteMenu} = require('../controllers/menuC');

const router = express.Router();

router.post('/', createMenu);

router.get('/', fetchMenu);

router.get('/:id', fetchMenuById);

router.put('/:id', updateMenu);

router.delete('/:id', deleteMenu);

module.exports = router;