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
        <h1 className="text-6xl font-extrabold text-white mb-2 ">Drive when you want</h1>
        <h2 className="text-7xl text-green-500">Make what you need</h2>
      </header>
      <div className="flex flex-wrap justify-center">
        <Card
          imageSrc= {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwfVQmT45Ibh1gSoaKJm4_nUiQth0IbQ_Qg&s"}
          title="Car Drivers"
          description="A smooth and comfortable ride, with clean interiors, fresh seats, and a spotless dashboard — every ride feels refreshing and relaxing."
        />
        <Card
          imageSrc={"https://media.istockphoto.com/id/1414019690/photo/auto-rickshaw-bajaj-tuktuk-3d-rendering-on-white-background.jpg?s=612x612&w=0&k=20&c=qm75sswRZHLLJeGe0G1WZsioNToC1rhiJpBpTXBAVm8="}
          title="Auto Drivers"
          description="Neat and well-maintained autos for your everyday ride. Clean seats, dust-free handles, and a pleasant ride environment"
        />
        <Card
          imageSrc={"https://thumbs.dreamstime.com/b/cartoon-motorcycle-brown-seat-white-frame-327999856.jpg"}
          title="MotorCycle Drivers"
          description="Hygienic helmets, clean seating, and careful driving — making every two-wheeler ride safe and fresh."
        />
      </div>
    </div>
  );
};

export default AboutPage;