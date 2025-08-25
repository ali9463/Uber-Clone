// AboutPage.js
import React from 'react';
import {Card, PricingCard} from '../components/card';

// Sample images (replace with your own)
import Carimg1 from '/images/car1.jpeg';
import Carimg2 from '/images/car2.jpeg';
import Carimg3 from '/images/car3.jpeg';

const AboutPage = () => {
  return (
    <div className=" min-h-screen py-16 bg-gradient-to-tr from-black to-green-900">
      <header className="text-start mb-12 ml-12">
        <h1 className="text-6xl font-extrabold text-white mb-2 ">Expert Detailing</h1>
        <h2 className="text-7xl text-green-500">Tailored to your Needs</h2>
      </header>
      <div className="flex flex-wrap justify-center">
        <Card
          imageSrc= {Carimg1}
          title="Interior Detailing"
          description="A complete interior cleaning service, including vacuuming, upholstery cleaning, and dashboard polishing."
        />
        <Card
          imageSrc={Carimg2}
          title="Exterior Detailing"
          description="Full exterior wash, wax, and tire shine to make your car look brand new."
        />
        <Card
          imageSrc={Carimg3}
          title="Ceramic Coating"
          description="Long-lasting protection for your car's paint, providing a high-gloss finish and superior durability."
        />
      </div>
    </div>
  );
};

export default AboutPage;