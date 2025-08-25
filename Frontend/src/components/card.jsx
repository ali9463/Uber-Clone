// Card.js
import React from 'react';

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-gradient-to-bl to-black from-green-800 rounded-lg shadow-lg p-6 m-4 max-w-sm text-start transform transition duration-500 hover:scale-105">
      <img src={imageSrc} alt={title} className="w-full h-[200px] rounded-md mb-4" />
      <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white text-base mb-4">{description}</p>
      <button className="border-2 border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300">
        Book Now
      </button>
    </div>
  );
};


const PricingCard = ({ planName, price, features, onButtonClick }) => {
  return (
    <div className="bg-gradient-to-bl to-black from-green-800 rounded-xl shadow-xl p-8 m-4 w-full md:w-80 transform transition duration-500 hover:scale-105">
      <p className="text-5xl text-center font-extrabold text-green-500 mb-6">${price}</p>
      <h3 className="text-2xl font-bold text-center text-white mb-2">{planName}</h3>
      
      <ul className="text-left mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-white mb-2">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button 
        onClick={onButtonClick}
        className="w-full border-2 border-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700  transition duration-300"
      >
        Select Plan
      </button>
    </div>
  );
};

export { Card, PricingCard };