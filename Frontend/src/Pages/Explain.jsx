import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

// Sample image (replace with your own)
import carImg from '/images/car-detail.jpg'; 

const Explain = () => {
  const features = [
    {
      title: "Precision Cleaning",
      description: "We use advanced techniques and tools to ensure every nook and cranny is spotless, leaving no detail overlooked.",
    },
    {
      title: "Premium Products",
      description: "Our high-quality, eco-friendly detailing products protect your vehicle's surfaces and provide a lasting shine.",
    },
    {
      title: "Certified Experts",
      description: "Our team consists of certified professionals with years of experience in the art of car care and detailing.",
    },
    {
      title: "Customer Satisfaction",
      description: "We are committed to providing an exceptional service that exceeds your expectations every time.",
    },
  ];

  return (
    <div className=" py-16 bg-gradient-to-tl to-black from-green-900">
      <div className="text-start mb-12 ml-12">
        <p className="text-6xl text-white font-medium">The</p>
        <h2 className="text-5xl font-extrabold text-green-500">Detailing Difference</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center container mx-auto px-6">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative">
          <img src={carImg} alt="Detailed car" className="rounded-lg shadow-xl" />
          <span role="img" aria-label="sparkles" className="absolute top-4 right-4 text-4xl">✨</span>
        </div>

        {/* Right Section - Features */}
        <div className="w-full lg:w-1/2 lg:pl-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start mb-8">
              <FaCheckCircle className="text-white text-3xl mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                <p className="text-white font-medium mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explain;