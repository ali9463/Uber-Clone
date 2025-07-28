const UserModel = require('../models/user.models');
const UserServices = require('../services/user.services');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res , next) =>{
    
    const errors = validationResult(req); 
    if(!errors.isEmpty()){ 
        return res.status(400).json({errors: errors.array()}) 
    }

    const { username, email , phone, password } = req.body; 
    
    try {
        const user = await UserServices.createUser({ 
            username,
            email,
            password,
            phone
        });
        
        const token = user.generateAuthToken();
        res.status(201).json({ user, token });

    } catch (error) {
        if (error.message.includes('duplicate key error') && error.message.includes('email')) {
            return res.status(409).json({ message: 'Email already registered.' });
        }
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'User registration failed.', error: error.message });
    }
}

module.exports.loginUser = async (req, res, next) => {
const errors = validationResult(req); 
    if(!errors.isEmpty()){ 
        return res.status(400).json({errors: errors.array()}) 
    }
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email }).select('+password');

    if(!user){
       return res.status(401).json({message:'Invalid Email and Password'})
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message:'Invalid Email and Password'})
    }
    const token = user.generateAuthToken();

    res.status(200).json({token, user})

}

