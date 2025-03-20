import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebookF, FaWhatsapp, FaFacebookMessenger, FaMoon, FaSun, FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import logo from "../../assets/ujuzi-logo.png";
import "../Navbar/Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isWhyUsOpen, setIsWhyUsOpen] = useState(false);
  const location = useLocation(); // Get current location

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobileA menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Toggle Why Us dropdown
  const toggleWhyUs = () => {
    setIsWhyUsOpen(!isWhyUsOpen);
  };

  // Apply theme to the entire document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 p-4 md:p-5 flex justify-between items-center ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        } shadow-lg transition-colors duration-300`}
      >
        {/* Logo and Brand Name */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Ujuzi Digital Creations Logo"
            className="h-10 md:h-12 w-auto mr-3 md:mr-4 cursor-pointer"
          />
          {!isMenuOpen && (
            <Link
              to="/"
              className={`text-lg md:text-xl md:hidden lg:block font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              } cursor-pointer transition-colors duration-300`}
            >
              Ujuzi Digital Creations
            </Link>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link
              to="/"
              className={`${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300 relative`}
            >
              HOME
              {location.pathname === "/" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 animate-underline"></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300 relative`}
            >
              ABOUT
              {location.pathname === "/about" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 animate-underline"></span>
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300 relative`}
            >
              SERVICES
              {location.pathname === "/services" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 animate-underline"></span>
              )}
            </Link>
          </li>
          {/* Why Us Dropdown */}
          <li className="relative">
            <div
              className={`flex items-center space-x-1 cursor-pointer ${
                isDarkMode ? "text-white" : "text-gray-800"
              } hover:text-blue-700 transition-colors duration-300 text-sm`}
              onClick={toggleWhyUs}
            >
              <span>WHY US</span>
              <FaChevronDown className="text-sm" />
            </div>
            {/* Dropdown Menu with Smooth Transition */}
            <ul
              className={`absolute top-8 left-0 w-48 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } text-sm shadow-lg rounded-lg py-2 transition-all duration-300 ${
                isWhyUsOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              {["Why Choose Us", "Clients"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className={`block px-4 py-2 ${
                      isDarkMode ? "text-white hover:bg-gray-700" : "text-gray-600 hover:bg-gray-200"
                    } transition-colors duration-300`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              to="/reviews"
              className={`hover:text-blue-400 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300 relative`}
            >
              REVIEWS
              {location.pathname === "/reviews" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 animate-underline"></span>
              )}
            </Link>
          </li>
          <li>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer transition-colors duration-300"
            >
              Request A Quote
            </button>
          </li>
          {/* Theme Toggle with Moon and Sun Icons */}
          <li>
            <div className="flex items-center space-x-2">
              <FaMoon
                className={`text-lg mr-1 size-3.5 cursor-pointer ${
                  isDarkMode ? "text-white" : "text-gray-800"
                } transition-colors duration-300`}
                onClick={isDarkMode ? undefined : toggleTheme}
              />
              <div
                className="relative w-10 h-6 cursor-pointer"
                onClick={toggleTheme}
              >
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-4 ${
                    isDarkMode ? "bg-gray-600" : "bg-gray-300"
                  } rounded-full transition-colors duration-300`}
                ></div>
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
                    isDarkMode ? "left-1" : "left-5"
                  }`}
                ></div>
              </div>
              <FaSun
                className={`text-lg size-3.5 -ml-1 cursor-pointer ${
                  isDarkMode ? "text-white" : "text-gray-800"
                } transition-colors duration-300`}
                onClick={!isDarkMode ? undefined : toggleTheme}
              />
            </div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        {!isMenuOpen && (
          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            <FaBars className={isDarkMode ? "text-white" : "text-gray-800"} />
          </button>
        )}
      </nav>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-1/2 ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        } bg-opacity-95 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <button
            className="text-2xl cursor-pointer"
            onClick={closeMenu}
          >
            <FaTimes className={isDarkMode ? "text-white" : "text-gray-800"} />
          </button>
        </div>

        {/* Title: Main Menu */}
        <div
          className={`text-center text-lg font-bold ${
            isDarkMode ? "text-white" : "text-gray-800"
          } mb-2 pb-2 border-b-4 ${
            isDarkMode ? "border-white" : "border-gray-800"
          } border-double transition-colors duration-300`}
        >
          Main Menu
        </div>

        {/* Centered Menu Items */}
        <ul className="flex flex-col items-center space-y-6 p-6">
          <li>
            <Link
              to="/"
              className={`hover:text-blue-400 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300`}
              onClick={closeMenu}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`hover:text-blue-400 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300`}
              onClick={closeMenu}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`hover:text-blue-400 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300`}
              onClick={closeMenu}
            >
              SERVICES
            </Link>
          </li>
          {/* Why Us Link (No Dropdown in Mobile View) */}
          <li>
            <Link
              to="/why-us"
              className={`hover:text-blue-400 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300`}
              onClick={closeMenu}
            >
              WHY US
            </Link>
          </li>
          {/* Clients Link (Restored in Mobile View) */}
          <li>
            <Link
              to="/clients"
              className={`hover:text-blue-400 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300`}
              onClick={closeMenu}
            >
              CLIENTS
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className={`hover:text-blue-400 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300`}
              onClick={closeMenu}
            >
              REVIEWS
            </Link>
          </li>
          <li>
            <button
              className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 cursor-pointer transition-colors duration-300"
              onClick={closeMenu}
            >
              Message Us
            </button>
          </li>
          {/* Theme Toggle with Moon and Sun Icons */}
          <li>
            <div className="flex items-center space-x-2">
              <FaMoon
                className={`text-lg cursor-pointer ${
                  isDarkMode ? "text-white" : "text-gray-800"
                } transition-colors duration-300`}
                onClick={isDarkMode ? undefined : toggleTheme}
              />
              <div
                className="relative w-10 h-6 cursor-pointer"
                onClick={toggleTheme}
              >
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-4 ${
                    isDarkMode ? "bg-gray-600" : "bg-gray-300"
                  } rounded-full transition-colors duration-300`}
                ></div>
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
                    isDarkMode ? "left-1" : "left-5"
                  }`}
                ></div>
              </div>
              <FaSun
                className={`text-lg cursor-pointer ${
                  isDarkMode ? "text-white" : "text-gray-800"
                } transition-colors duration-300`}
                onClick={!isDarkMode ? undefined : toggleTheme}
              />
            </div>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="absolute bottom-2 left-0 w-full flex justify-center space-x-6">
          {[
            { icon: FaFacebookF, color: "blue-400", link: "https://www.facebook.com" },
            { icon: FaWhatsapp, color: "green-400", link: "https://wa.me/yourwhatsapplink" },
            { icon: FaFacebookMessenger, color: "blue-500", link: "https://www.messenger.com" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${
                isDarkMode ? "text-white" : "text-gray-800"
              } hover:text-${social.color} cursor-pointer transition-colors duration-300`}
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;