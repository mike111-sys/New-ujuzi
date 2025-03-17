import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaVideo, FaPaintBrush, FaChartLine } from 'react-icons/fa';

const Homepage = () => {
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

  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.3,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 },
    },
  };

  // Dynamic styles based on dark mode
  const backgroundColor = isDarkMode
    ? 'bg-gradient-to-r from-gray-900 to-gray-800'
    : 'bg-gradient-to-r from-blue-50 to-purple-50';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const cardBackgroundColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const cardTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-600';

  return (
    <motion.div
      className={`py-16 px-4 sm:px-6 lg:px-8 ${backgroundColor}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className={`text-4xl sm:text-5xl font-bold mb-8 ${textColor}`}
          variants={itemVariants}
        >
          Welcome to Ujuzi Digital Creations
        </motion.h2>
        <motion.p
          className={`text-lg mb-12 ${textColor}`}
          variants={itemVariants}
        >
          We specialize in delivering top-notch digital solutions tailored to your needs. Explore our services below.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Web Design & Development */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaCode className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Web Design & Development</h3>
            <p className={cardTextColor}>
              We create stunning, responsive websites that drive results.
            </p>
          </motion.div>

          {/* Video Editing */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaVideo className="text-6xl text-purple-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Video Editing</h3>
            <p className={cardTextColor}>
              Professional video editing services to bring your stories to life.
            </p>
          </motion.div>

          {/* Graphic Design */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaPaintBrush className="text-6xl text-pink-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Graphic Design</h3>
            <p className={cardTextColor}>
              Eye-catching designs that make your brand stand out.
            </p>
          </motion.div>

          {/* Digital Marketing */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaChartLine className="text-6xl text-green-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Digital Marketing</h3>
            <p className={cardTextColor}>
              Strategies to grow your online presence and reach your audience.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;