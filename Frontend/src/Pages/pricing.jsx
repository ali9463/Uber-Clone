// PricingSection.js
import React from 'react';
import {PricingCard} from '../components/card';

const Pricing = () => {
  const handleSelectPlan = (planName) => {
    alert(`You have selected the ${planName} plan!`);
  };

  const basicFeatures = [
    "Exterior Wash",
    "Interior Vacuuming",
    "Tire Shine",
    "Window Cleaning",
  ];

  const premiumFeatures = [
    "All Basic Features",
    "Interior Deep Clean",
    "Paint Protection",
    "Dashboard Polishing",
  ];

  const ultimateFeatures = [
    "All Premium Features",
    "Ceramic Coating",
    "Engine Bay Detailing",
    "Headlight Restoration",
  ];

  return (
    <div className=" py-16 bg-gradient-to-bl to-black from-green-900">
      <div className="text-start mb-12 ml-12">
        <h2 className="text-5xl font-extrabold text-white mb-2">Pricing</h2>
      </div>

      <div className="flex flex-wrap justify-center container mx-auto px-6">
        <PricingCard 
          planName="Basic"
          price="50"
          features={basicFeatures}
          onButtonClick={() => handleSelectPlan("Basic")}
        />
        <PricingCard 
          planName="Premium"
          price="150"
          features={premiumFeatures}
          onButtonClick={() => handleSelectPlan("Premium")}
        />
        <PricingCard 
          planName="Ultimate"
          price="300"
          features={ultimateFeatures}
          onButtonClick={() => handleSelectPlan("Ultimate")}
        />
      </div>
    </div>
  );
};

export default Pricing;