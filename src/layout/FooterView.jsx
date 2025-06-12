import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="text-lg">&copy; 2025 MotorWash. All rights reserved.</p>
          <div className="space-x-6">
            <Link to="/privacy" className="hover:text-gray-200">Privacy</Link>
            <Link to="/terms" className="hover:text-gray-200">Terms</Link>
            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
