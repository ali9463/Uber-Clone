import React from 'react';
import {Link} from 'react-scroll';
import {Link as RouterLink} from 'react-router-dom';

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="p-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white z-20">
          CarCab
        </div>

        {/* Desktop Navigation Options */}
        <div className="hidden md:flex space-x-8 text-white cursor-pointer">
          <Link to="explain" smooth={true} duration={500} className="hover:text-green-500 transition duration-300">Services</Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-green-500 transition duration-300">About</Link>
          <Link to="pricing" smooth={true} duration={500} className="hover:text-green-500 transition duration-300">Contact</Link>
          <Link to="pricing" smooth={true} duration={500} className="hover:text-green-500 transition duration-300">Pricing</Link>
        </div>

        {/* Book Now Button for desktop */}
        <RouterLink to='/login' className="hidden md:block border-2 border-white text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-black cursor-pointer">
          Book Now
        </RouterLink>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-white focus:outline-none z-20"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div 
        className={`fixed top-0 right-0 w-64 h-full bg-green-800 bg-opacity-90 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out z-10 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center pt-24 space-y-6 text-white">
          <Link to="#" className="hover:text-green-300 text-lg transition duration-300" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="#" className="hover:text-green-300 text-lg transition duration-300" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="#" className="hover:text-green-300 text-lg transition duration-300" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="#" className="hover:text-green-300 text-lg transition duration-300" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
         <RouterLink to='/login' className="border-2 border-white text-white font-bold py-2 px-6 rounded-full mt-4 transition duration-300 hover:bg-white hover:text-black" onClick={() => setIsMenuOpen(false)}>
            Book Now
          </RouterLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;