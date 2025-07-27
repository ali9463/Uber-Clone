const UserModel = require('../models/user.models');
const UserServices = require('../services/user.services');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res , next) =>{
    
    const errors = validationResult(req); // Renamed error to errors for clarity
    if(!errors.isEmpty()){ // Corrected to errors.isEmpty()
        return res.status(400).json({errors: errors.array()}) // Consistent with validationResult
    }

    const { username, email , phone, password } = req.body; // Added username to destructuring
    
    try {
        const user = await UserServices.createUser({ // UserServices will handle hashing
            username,
            email,
            password,
            phone
        });
        
        const token = user.generateAuthToken();
        res.status(201).json({ user, token });

    } catch (error) {
        // Handle potential errors during user creation (e.g., duplicate email)
        if (error.message.includes('duplicate key error') && error.message.includes('email')) {
            return res.status(409).json({ message: 'Email already registered.' });
        }
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'User registration failed.', error: error.message });
    }
}