import React, { useState } from "react";
import { FaBars, FaTimes, FaFacebookF, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import logo from "../../assets/ujuzi-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 p-4 md:p-5 flex justify-between items-center bg-gray-800 shadow-lg">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Ujuzi Digital Creations Logo"
            className="h-10 md:h-12 w-auto mr-3 md:mr-4 cursor-pointer"
          />
          {/* Hide text when menu is open */}
          {!isMenuOpen && (
            <div className="text-xl md:text-2xl font-bold text-white cursor-pointer">
              Ujuzi Digital Creations
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><a href="#home" className="hover:text-blue-400 text-white cursor-pointer">HOME</a></li>
          <li><a href="#about" className="hover:text-blue-400 text-white cursor-pointer">ABOUT</a></li>
          <li><a href="#services" className="hover:text-blue-400 text-white cursor-pointer">SERVICES</a></li>
          <li><a href="#why-us" className="hover:text-blue-400 text-white cursor-pointer">WHY US</a></li>
          <li><a href="#clients" className="hover:text-blue-400 text-white cursor-pointer">CLIENTS</a></li>
          <li><a href="#reviews" className="hover:text-blue-400 text-white cursor-pointer">REVIEWS</a></li>
          <li>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
              Request A Quote
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button (Hide when menu is open) */}
        {!isMenuOpen && (
          <button className="md:hidden text-2xl text-white cursor-pointer" onClick={toggleMenu}>
            <FaBars />
          </button>
        )}
      </nav>

      {/* Mobile Nav Drawer (50% width) */}
      <div
        className={`fixed inset-y-0 left-0 w-1/2 bg-gray-900 bg-opacity-80 backdrop-blur-md text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <button className="text-2xl text-white cursor-pointer" onClick={closeMenu}>
            <FaTimes />
          </button>
        </div>

        {/* Title: Main Menu */}
        <div className="text-center text-lg font-bold text-white mb-4 pb-2 border-b-4 border-white border-double">
          Main Menu
        </div>

        {/* Centered Menu Items */}
        <ul className="flex flex-col items-center space-y-6 p-6">
          <li><a href="#home" className="hover:text-blue-400 text-lg cursor-pointer" onClick={closeMenu}>HOME</a></li>
          <li><a href="#about" className="hover:text-blue-400 text-lg cursor-pointer" onClick={closeMenu}>ABOUT</a></li>
          <li><a href="#services" className="hover:text-blue-400 text-lg cursor-pointer" onClick={closeMenu}>SERVICES</a></li>
          <li><a href="#why-us" className="hover:text-blue-400 text-lg cursor-pointer" onClick={closeMenu}>WHY US</a></li>
          <li><a href="#clients" className="hover:text-blue-400 text-lg cursor-pointer" onClick={closeMenu}>CLIENTS</a></li>
          <li><a href="#reviews" className="hover:text-blue-400 text-lg cursor-pointer" onClick={closeMenu}>REVIEWS</a></li>
          <li>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" onClick={closeMenu}>
              Request A Quote
            </button>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400 cursor-pointer">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-green-400 cursor-pointer">
            <FaWhatsapp />
          </a>
          <a href="https://www.messenger.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-500 cursor-pointer">
            <FaFacebookMessenger />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
