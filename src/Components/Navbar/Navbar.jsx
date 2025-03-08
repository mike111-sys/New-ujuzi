import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebookF, FaWhatsapp, FaFacebookMessenger, FaMoon, FaSun, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/ujuzi-logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isWhyUsOpen, setIsWhyUsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
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
            <div
              className={`text-lg md:text-xl md:hidden lg:block font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              } cursor-pointer transition-colors duration-300`}
            >
              Ujuzi Digital Creations
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {["Home", "About", "Services"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`${
                  isDarkMode ? "text-white" : "text-gray-800"
                } text-sm cursor-pointer transition-colors duration-300`}
              >
                {item.toUpperCase()}
              </a>
            </li>
          ))}
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
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className={`block px-4 py-2 ${
                      isDarkMode ? "text-white hover:bg-gray-700" : "text-gray-600 hover:bg-gray-200"
                    } transition-colors duration-300`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a
              href="#reviews"
              className={`hover:text-blue-400 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300`}
            >
              REVIEWS
            </a>
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
          } mb-4 pb-2 border-b-4 ${
            isDarkMode ? "border-white" : "border-gray-800"
          } border-double transition-colors duration-300`}
        >
          Main Menu
        </div>

        {/* Centered Menu Items */}
        <ul className="flex flex-col items-center space-y-6 p-6">
          {["Home", "About", "Services"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`hover:text-blue-400 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                } text-sm cursor-pointer transition-colors duration-300`}
                onClick={closeMenu}
              >
                {item.toUpperCase()}
              </a>
            </li>
          ))}
          {/* Why Us Link (No Dropdown in Mobile View) */}
          <li>
            <a
              href="#why-us"
              className={`hover:text-blue-400 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300`}
              onClick={closeMenu}
            >
              WHY US
            </a>
          </li>
          {/* Clients Link (Restored in Mobile View) */}
          <li>
            <a
              href="#clients"
              className={`hover:text-blue-400 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300`}
              onClick={closeMenu}
            >
              CLIENTS
            </a>
          </li>
          <li>
            <a
              href="#reviews"
              className={`hover:text-blue-400 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } text-sm cursor-pointer transition-colors duration-300`}
              onClick={closeMenu}
            >
              REVIEWS
            </a>
          </li>
          <li>
            <button
              className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 cursor-pointer transition-colors duration-300"
              onClick={closeMenu}
            >
              Request A Quote
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
        <div className="absolute bottom-6 left-0 w-full flex justify-center space-x-6">
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