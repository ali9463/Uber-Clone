const UserModel = require('../models/user.models');

module.exports.createUser = async({username, email , password, phone}) => {
    if(!username || !email || !password || !phone){
        throw new Error ('All Fields are Required');
    }

    // Hash the password before creating the user
    const hashedPassword = await UserModel.hashPassword(password); // Use the static hashPassword method

    const user = await UserModel.create({
        username,
        email,
        password: hashedPassword, // Store the hashed password
        phone
    });
    return user;
};