const captainModel = require('../models/captain.models');

const dummyGeocodeResponse = {
    status: 'OK',
    results: [
        {
            geometry: {
                location: {
                    lat: 31.5204, // Example latitude for Lahore, Pakistan
                    lng: 74.3487  // Example longitude for Lahore, Pakistan
                }
            }
        }
    ]
};

const dummyDistanceTimeResponse = {
    status: 'OK',
    rows: [
        {
            elements: [
                {
                    status: 'OK',
                    distance: {
                        text: '12.3 km',
                        value: 12300
                    },
                    duration: {
                        text: '25 mins',
                        value: 1500
                    }
                }
            ]
        }
    ]
};

const dummyAutocompleteResponse = {
    status: 'OK',
    predictions: [
        { description: 'Lahore, Punjab, Pakistan' },
        { description: 'Karachi, Sindh, Pakistan' },
        { description: 'Islamabad, Capital Pakistan' },
        { description: 'Multan, Punjab, Pakistan' },
        { description: 'Arifwala, Punjab, Pakistan' },
        { description: 'Sahiwal, Punjab, Pakistan' },
        { description: 'Rawalpindi, Punjab, Pakistan' },
        { description: 'Gujarnwala, Punjab, Pakistan' },
    ]
};
// --- Dummy Data Block End ---

module.exports.getAddressCoordinate = async (address) => {
    console.log(`Using dummy data for address: ${address}`);
    return Promise.resolve({
        ltd: dummyGeocodeResponse.results[0].geometry.location.lat,
        lng: dummyGeocodeResponse.results[0].geometry.location.lng
    });
};

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }
    console.log(`Using dummy data for distance from ${origin} to ${destination}`);
    
    // You can add simple logic here to simulate different responses based on input
    if (origin.toLowerCase().includes('lahore') && destination.toLowerCase().includes('karachi')) {
        return Promise.resolve({
            status: 'OK',
            distance: { text: '1,250 km', value: 1250000 },
            duration: { text: '16 hours', value: 57600 }
        });
    }

    return Promise.resolve(dummyDistanceTimeResponse.rows[0].elements[0]);
};

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('query is required');
    }
    console.log(`Using dummy data for autocomplete with input: ${input}`);
    
    return Promise.resolve(dummyAutocompleteResponse.predictions.map(prediction => prediction.description).filter(value => value));
};

module.exports.getCaptainsInTheRadius = async (lat, lng, radiusKm) => {
  console.log(`Returning all captains as dummy for radius ${radiusKm} km around (${lat},${lng})`);
  const captains = await captainModel.find();
  return captains;
};