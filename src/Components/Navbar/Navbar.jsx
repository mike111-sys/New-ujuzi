// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import menu and close icons
import logo from '../../assets/ujuzi-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar (Sticky with Transparent Background Initially) */}
      <nav
        className={`fixed w-full top-0 z-50 p-4 md:p-5 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}
      >
        <div className="flex items-center">
          <img src={logo} alt="Ujuzi Digital Creations Logo" className="h-10 md:h-12 w-auto mr-3 md:mr-4" />
          <div className="text-xl md:text-2xl font-bold text-white">Ujuzi Digital Creations</div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><a href="#home" className="hover:text-blue-400 text-white">HOME</a></li>
          <li><a href="#about" className="hover:text-blue-400 text-white">ABOUT</a></li>
          <li><a href="#services" className="hover:text-blue-400 text-white">SERVICES</a></li>
          <li><a href="#why-us" className="hover:text-blue-400 text-white">WHY US</a></li>
          <li><a href="#clients" className="hover:text-blue-400 text-white">CLIENTS</a></li>
          <li><a href="#reviews" className="hover:text-blue-400 text-white">REVIEWS</a></li>
          <li>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Request A Quote
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-white" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Nav Drawer (Slides from Right) */}
      <div
        className={`fixed inset-y-0 right-0 w-1/2 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Icon Inside Drawer */}
        <div className="flex justify-end p-4">
          <button className="text-2xl" onClick={toggleMenu}>
            <FaTimes />
          </button>
        </div>

        {/* Mobile Nav Links (Spaced Vertically) */}
        <ul className="flex flex-col space-y-6 p-6">
          <li><a href="#home" className="hover:text-blue-400 text-lg">HOME</a></li>
          <li><a href="#about" className="hover:text-blue-400 text-lg">ABOUT</a></li>
          <li><a href="#services" className="hover:text-blue-400 text-lg">SERVICES</a></li>
          <li><a href="#why-us" className="hover:text-blue-400 text-lg">WHY US</a></li>
          <li><a href="#clients" className="hover:text-blue-400 text-lg">CLIENTS</a></li>
          <li><a href="#reviews" className="hover:text-blue-400 text-lg">REVIEWS</a></li>
          <li>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Request A Quote
            </button>
          </li>
        </ul>
      </div>

      {/* Partial Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;