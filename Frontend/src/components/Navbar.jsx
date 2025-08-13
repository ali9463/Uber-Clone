import React from 'react';

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="p-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white z-20">
          CarCab
        </div>

        {/* Desktop Navigation Options */}
        <div className="hidden md:flex space-x-8 text-white">
          <a href="#" className="hover:text-green-500 transition duration-300">Services</a>
          <a href="#" className="hover:text-green-500 transition duration-300">About</a>
          <a href="#" className="hover:text-green-500 transition duration-300">Contact</a>
          <a href="#" className="hover:text-green-500 transition duration-300">Pricing</a>
        </div>

        {/* Book Now Button for desktop */}
        <button className="hidden md:block border-2 border-white text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-black">
          Book Now
        </button>

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
          <a href="#" className="hover:text-green-300 text-lg transition duration-300" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#" className="hover:text-green-300 text-lg transition duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#" className="hover:text-green-300 text-lg transition duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a href="#" className="hover:text-green-300 text-lg transition duration-300" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <button className="border-2 border-white text-white font-bold py-2 px-6 rounded-full mt-4 transition duration-300 hover:bg-white hover:text-black" onClick={() => setIsMenuOpen(false)}>
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;