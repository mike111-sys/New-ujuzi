import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, FaEnvelope, FaClipboardList, FaComment, FaPaperPlane 
} from 'react-icons/fa';
import contactImage from '/src/assets/contact-image.jpg';
import patternDark from '/src/assets/dark-pattern.jpg';
import patternLight from '/src/assets/light-pattern.jpg';

const ContactPage = ({ isDarkMode: propDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    typeof propDarkMode !== 'undefined' 
      ? propDarkMode 
      : document.documentElement.classList.contains('dark-mode')
  );

  // Sync with prop changes
  useEffect(() => {
    if (typeof propDarkMode !== 'undefined') {
      setIsDarkMode(propDarkMode);
    }
  }, [propDarkMode]);

  // Fallback observer
  useEffect(() => {
    if (typeof propDarkMode !== 'undefined') return;
    
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark-mode'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, [propDarkMode]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900' 
          : 'bg-gradient-to-r from-blue-50 to-purple-50'
      }`}
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10 transition-all duration-300"
        style={{
          backgroundImage: `url(${isDarkMode ? patternDark : patternLight})`,
          backgroundSize: 'cover',
          mixBlendMode: isDarkMode ? 'overlay' : 'multiply'
        }}
      />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
        {/* Left Column - Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:block rounded-xl overflow-hidden shadow-2xl transition-all duration-300"
        >
          <img 
            src={contactImage} 
            alt="Digital creative team"
            className={`w-full h-full object-cover transition-all duration-300 ${
              isDarkMode ? 'filter brightness-75' : ''
            }`}
          />
        </motion.div>

        {/* Right Column - Complete Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`rounded-xl shadow-2xl p-8 transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h1 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get Your Free Quote
          </h1>
          <p className={`mb-8 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Fill out the form and our team will get back to you within 24 hours
          </p>

          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label className={`flex items-center mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <FaUser className={`mr-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                Full Name
              </label>
              <input
                type="text"
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className={`flex items-center mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <FaEnvelope className={`mr-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                Email Address
              </label>
              <input
                type="email"
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className={`flex items-center mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <FaClipboardList className={`mr-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                Service Needed
              </label>
              <select
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
                required
              >
                <option value="">Select a service</option>
                <option value="web">Website Development</option>
                <option value="design">Graphic Design</option>
                <option value="video">Video Editing</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>

            {/* Project Details */}
            <div>
              <label className={`flex items-center mb-2 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <FaComment className={`mr-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                Project Details
              </label>
              <textarea
                className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
                rows={5}
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className={`w-full flex items-center justify-center py-4 px-6 rounded-lg font-bold transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-blue-600 hover:bg-blue-500'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className="mr-2" />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;