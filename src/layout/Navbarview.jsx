import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Premium_Vector___Cleaning_service_logo-removebg-preview.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // Menutup menu saat klik link

  return (
    <nav className="bg-teal-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo dan Judul */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="MotorWash Logo" className="w-12 h-12 object-contain" />
          <h1 className="text-white text-xl font-bold">MotorWash</h1>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About</Link>
          <Link to="/services" className="text-white hover:text-gray-200">Services</Link>
          <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-teal-600 px-4 pb-4 transition-all duration-300 ease-in-out rounded-4xl">
          <div className="space-y-2 mt-2">
            <Link to="/" onClick={closeMenu} className="block text-white py-2 border-b border-white/20">Home</Link>
            <Link to="/about" onClick={closeMenu} className="block text-white py-2 border-b border-white/20">About</Link>
            <Link to="/services" onClick={closeMenu} className="block text-white py-2 border-b border-white/20">Services</Link>
            <Link to="/contact" onClick={closeMenu} className="block text-white py-2">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
