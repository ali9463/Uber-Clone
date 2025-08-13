const captainModel = require('../models/captain.models');


module.exports.createCaptain = async ({
    captainName , email, password, color, plate, capacity, vehicleType
}) => {
    if (!captainName || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = captainModel.create({
        captainName,
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}