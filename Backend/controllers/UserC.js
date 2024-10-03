const User = require('../models/UserM'); 

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({users});
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving users', error });
    }
};
const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = await User.create({ name, email, password, isAdmin: false });
        res.status(201).json({ message: 'User created successfully', newUser });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'Email already registered. Please sign in.' });
        } else {
            res.status(500).json({ error: 'Server error' });
        }
    }
};

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({user});
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving user', error });
    }
};
const updateUser = async (req, res) => {
    const { name, email, password} = req.body;

    try {
        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id, { 
            name,
            email,
            password 
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting user', error });
    }
};

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser
};
