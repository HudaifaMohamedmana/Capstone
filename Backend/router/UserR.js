const express = require('express');
const { createUser,getUserById,getAllUsers,updateUser,deleteUser } = require('../controllers/UserC');

const router = express.Router();

router.post('/', createUser);

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;