const UserModel = require('../models/user.models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const blacklistSchematoken = require('../models/blacklist.models');

module.exports.authUser = async (req , res , next) => {
  const token = req.cookies.token || req.headers.authorization?.split('')[1];
  if(!token){
    return res.status(401).json({message: "Unauthorized"})
  }


    const blacklistToken = await blacklistSchematoken.findOne({ token });
    if (blacklistToken) {
        return res.status(401).json({ message: 'Token is blacklisted.' });
    }  

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '24h' });
    const user = await UserModel.findById(decoded._id).select('-password');

    req.user = user;
    return next();

  } catch (error) {
    return res.status(401).json({message: "Unauthorized"})
  }
}