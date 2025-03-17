import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark-mode')
  );

  // Observe changes to the dark-mode class
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark-mode'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Dynamic styles based on dark mode
  const backgroundColor = isDarkMode
    ? 'bg-gray-900 text-white'
    : 'bg-gray-100 text-gray-900';
  const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const borderColor = isDarkMode ? 'border-gray-600' : 'border-gray-300';
  const buttonColor = isDarkMode
    ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-900'
    : 'bg-blue-600 hover:bg-blue-500 text-white';

  return (
    <motion.footer
      className={`py-10 px-6 md:px-16 ${backgroundColor}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-3">
            Ujuzi Digital Creations
          </h2>
          <p className={textColor}>
            Crafting exceptional digital experiences through innovative designs, web solutions, and marketing strategies.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="text-center md:text-left space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3 className="text-lg font-semibold text-yellow-400">Contact Us</h3>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaMapMarkerAlt className="text-yellow-400" />
            <p className={textColor}>Nakuru, Kenya</p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaPhoneAlt className="text-yellow-400" />
            <p className={textColor}>+254 741 238 738</p>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaEnvelope className="text-yellow-400" />
            <p className={textColor}>info@ujuzidigital.com</p>
          </div>
        </motion.div>

        {/* Social Media & Request a Quote */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h3 className="text-lg font-semibold text-yellow-400">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="#" className="text-blue-600 hover:scale-110 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-sky-400 hover:scale-110 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-pink-500 hover:scale-110 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-blue-700 hover:scale-110 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
          <motion.button
            className={`mt-6 px-6 py-3 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-lg ${buttonColor}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Request a Quote
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        className={`mt-10 border-t pt-4 text-center text-sm ${borderColor} ${textColor}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        &copy; {new Date().getFullYear()} Ujuzi Digital Creations. All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
