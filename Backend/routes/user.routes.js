const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controllers');
const authMiddlewares = require('../middlewares/auth.middlewares')




router.post('/register', [
    body('username').notEmpty().withMessage('Username is required'), // Added username validation
    body('email').isEmail().withMessage('Invalid Email'),
    body('phone').isMobilePhone().withMessage('Invalid Phone Number'),
    body('password').isLength({min : 6}).withMessage('Password must be at least 6 Characters')
],
    userController.registerUser
);
router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min : 6}).withMessage('Password must be at least 6 Characters')
],
    userController.loginUser
);

router.get('/profile', authMiddlewares.authUser,   userController.getUserProfile)

router.post('/logout' , authMiddlewares.authUser , userController.logoutUser); 

module.exports = router;