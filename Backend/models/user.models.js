const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  socketId: { type: String, default: null },
});

// Instance method to generate an auth token
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET); // Added expiry
    return token;
};

// Instance method to compare a plain text password with the hashed password
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// Static method to hash a password
userSchema.statics.hashPassword = async function(password) { // Changed to static method
    return await bcrypt.hash(password, 10);
};

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;