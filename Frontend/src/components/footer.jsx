// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tl to-black from-green-900 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Brand/Logo */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">Expert Detailing</h2>
          <p className="text-sm">Tailored to your needs</p>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition duration-300">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition duration-300">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition duration-300">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 transition duration-300">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-white pt-6 mt-6 w-full">
          &copy; {new Date().getFullYear()} Expert Detailing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;