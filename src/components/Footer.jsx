import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden group-hover:bg-white/90 transition-colors">
              <img 
                src={logo} 
                alt="IABM Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-green-500 tracking-tighter">IABM</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Iterambere ry’Abahinzi-Borozi ba Makera</span>
            </div>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering farmers in Makera since 2007. We strive to increase member income through production and market access.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-green-800 pb-2">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
            <li><Link to="/maize" className="hover:text-yellow-400 transition-colors">Maize Value Chain</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400 transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-green-800 pb-2">Core Activities</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li className="flex items-center space-x-2"><span></span> <span>Seed Multiplication</span></li>
            <li className="flex items-center space-x-2"><span></span> <span>Maize Processing</span></li>
            <li className="flex items-center space-x-2"><span></span> <span>Input Supply</span></li>
            <li className="flex items-center space-x-2"><span></span> <span>Market Access</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-6 border-b border-green-800 pb-2">Get in Touch</h4>
          <ul className="text-sm text-gray-400 space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-green-500"></span>
              <span>Makera, Rwanda<br />Southern Province</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500"></span>
              <span>info@iabmmakera.rw</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-500"></span>
              <span>+250785828143</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} IABM Cooperative. All rights reserved. Developed and designed by STEPH E House.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
