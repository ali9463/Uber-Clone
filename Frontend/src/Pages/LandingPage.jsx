import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AboutPage from './AboutPage';
import Footer from '../components/footer';
import Features from './Features';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <div className="bg-black text-white">
      {}
      <div className="min-h-screen bg-gradient-to-br from-black to-green-900">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {}
        <div className="container mx-auto px-6 py-20 flex flex-col items-center justify-center">
          <div className="w-full text-center md:w-2/3 lg:w-1/2">
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-white">Easiast Way</span>{' '}
              <span className="text-green-500">to Reach Destinition</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              At Caberr, we go beyond just getting you from point A to B. Our professional drivers, well-maintained vehicles, and seamless booking process ensure every ride feels premium. Whether it’s a daily commute or a special occasion, ride with confidence — because you deserve the best.
            </p>
           <Link to="/home-user"> <button  className="bg-white text-green-900 font-bold py-3 px-6 rounded-full flex items-center justify-center mx-auto mb-10 transition duration-300 ease-in-out hover:bg-gray-200">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
              Let's Go
            </button> </Link>
          </div>

          <div className="w-full relative md:w-2/3 lg:w-1/2">
            <img 
              src="/images/car-main.png" 
              alt="Luxury Car" 
              className="w-full rounded-lg  mx-auto"
            />
            {}
            {}
          </div>
        </div>
      </div>
    </div>
      <section id="about">
        <AboutPage />
      </section>

      <section id="explain">
        <Features/>
      </section>
    
<Footer />
    </>

  );
}

export default LandingPage;