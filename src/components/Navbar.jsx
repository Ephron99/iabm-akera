import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.jpeg';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Maize Value Chain', path: '/maize' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row items-center justify-between px-12 py-3 bg-white shadow-sm">
      <Link to="/" className="flex items-center space-x-3 group">
        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
          <img 
            src={logo} 
            alt="IABM Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-3xl font-black text-green-700 tracking-tighter group-hover:text-green-800 transition-colors">IABM</span>
            <div className="ml-2 transform group-hover:rotate-12 transition-transform">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 00-8-8zM7 10a3 3 0 116 0 3 3 0 01-6 0z" />
              </svg>
            </div>
          </div>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">Iterambere ry’Abahinzi-Borozi ba Makera</span>
        </div>
      </Link>
      
      <div className="mt-4 md:mt-0 bg-green-900 rounded-full flex items-center px-2 py-1.5 space-x-1 shadow-inner border border-green-800">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              isActive(link.path) 
                ? 'bg-yellow-400 text-green-950 shadow-md' 
                : 'text-green-50 hover:text-yellow-400'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
