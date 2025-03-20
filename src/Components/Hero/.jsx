import React, { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/ujuzi-logo.png";
import "../Navbar/Navbar.css";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev); // Persist to localStorage
      return !prev;
    });
  };

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 p-4 flex justify-between items-center ${isDarkMode ? "bg-gray-900" : "bg-white"} shadow-lg transition-colors duration-300`}>
        <div className="flex items-center">
          <img src={logo} alt="Ujuzi Digital Creations Logo" className="h-10 w-auto mr-3 cursor-pointer" />
        </div>

        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link to="/" className={`text-sm ${isDarkMode ? "text-white" : "text-gray-800"} transition-colors`}>HOME</Link></li>
          <li><Link to="/about" className={`text-sm ${isDarkMode ? "text-white" : "text-gray-800"} transition-colors`}>ABOUT</Link></li>
          <li><Link to="/services" className={`text-sm ${isDarkMode ? "text-white" : "text-gray-800"} transition-colors`}>SERVICES</Link></li>
          <li><Link to="/reviews" className={`text-sm ${isDarkMode ? "text-white" : "text-gray-800"} transition-colors`}>REVIEWS</Link></li>

          <li>
            <div className="flex items-center space-x-2">
              <FaMoon className={`text-lg cursor-pointer ${isDarkMode ? "text-white" : "text-gray-800"}`} onClick={isDarkMode ? undefined : toggleTheme} />
              <div className="relative w-10 h-6 cursor-pointer" onClick={toggleTheme}>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-4 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"} rounded-full transition-colors`} />
                <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md transition-transform ${isDarkMode ? "left-1" : "left-5"}`} />
              </div>
              <FaSun className={`text-lg cursor-pointer ${isDarkMode ? "text-white" : "text-gray-800"}`} onClick={!isDarkMode ? undefined : toggleTheme} />
            </div>
          </li>
        </ul>

        <button className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          <FaBars className={isDarkMode ? "text-white" : "text-gray-800"} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
