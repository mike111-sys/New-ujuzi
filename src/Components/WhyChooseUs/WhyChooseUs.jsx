import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaRocket,
  FaAward,
  FaCogs,
  FaHeart,
  FaGlobe,
  FaSmile,
} from 'react-icons/fa';

const ContactModal = ({ isOpen, onClose, isDarkMode }) => {
  if (!isOpen) return null;

  const modalBackgroundColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const modalTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-600';

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`${modalBackgroundColor} p-8 rounded-lg shadow-lg w-full max-w-md`}>
        <h2 className={`text-2xl font-bold mb-6 ${modalTextColor}`}>Get in Touch</h2>
        <form>
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 ${modalTextColor}`} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
              }`}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-2 ${modalTextColor}`} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
              }`}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 ${modalTextColor}`} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className={`w-full px-4 py-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
              }`}
              placeholder="Enter your message"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
            >
              Close
            </button>
            <a
              href="tel:0741238738"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark-mode')
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      className={`${backgroundColor} mt-7 min-h-screen py-16 px-4 sm:px-6 lg:px-8`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 ${textColor}`}
          variants={itemVariants}
        >
          Why Choose Ujuzi Digital Creations?
        </motion.h1>

        {/* Introduction */}
        <motion.p
          className={`text-lg text-center max-w-2xl mx-auto mb-16 ${cardTextColor}`}
          variants={itemVariants}
        >
          At Ujuzi Digital Creations, we are committed to delivering exceptional digital solutions that drive results. Here’s why we stand out from the rest:
        </motion.p>

        {/* Reasons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Innovation */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaLightbulb className="text-6xl text-yellow-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Innovation</h3>
            <p className={cardTextColor}>
              We leverage the latest technologies and creative approaches to deliver cutting-edge solutions tailored to your needs.
            </p>
          </motion.div>

          {/* Expertise */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaUsers className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Expertise</h3>
            <p className={cardTextColor}>
              Our team of professionals has years of experience in web development, video editing, graphics design, and digital marketing.
            </p>
          </motion.div>

          {/* Client-Centric Approach */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaHandshake className="text-6xl text-green-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Client-Centric Approach</h3>
            <p className={cardTextColor}>
              We prioritize your needs and work closely with you to ensure your vision is brought to life.
            </p>
          </motion.div>

          {/* Results-Driven */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaRocket className="text-6xl text-red-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Results-Driven</h3>
            <p className={cardTextColor}>
              We focus on delivering measurable results that grow your business and enhance your online presence.
            </p>
          </motion.div>

          {/* Award-Winning Quality */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaAward className="text-6xl text-purple-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Award-Winning Quality</h3>
            <p className={cardTextColor}>
              Recognized for excellence in digital innovation and customer satisfaction, we deliver top-notch quality in every project.
            </p>
          </motion.div>

          {/* Global Reach */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaGlobe className="text-6xl text-indigo-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Global Reach</h3>
            <p className={cardTextColor}>
              We serve clients worldwide, helping businesses of all sizes achieve their digital goals.
            </p>
          </motion.div>

          {/* Transparent Communication */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaCogs className="text-6xl text-yellow-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Transparent Communication</h3>
            <p className={cardTextColor}>
              We keep you informed at every step of the process, ensuring clarity and trust throughout the project.
            </p>
          </motion.div>

          {/* Passion for Excellence */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaHeart className="text-6xl text-pink-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Passion for Excellence</h3>
            <p className={cardTextColor}>
              We are passionate about what we do and strive to exceed your expectations in every project.
            </p>
          </motion.div>

          {/* Customer Satisfaction */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaSmile className="text-6xl text-green-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Customer Satisfaction</h3>
            <p className={cardTextColor}>
              Your satisfaction is our top priority. We go the extra mile to ensure you’re happy with the results.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>Ready to Transform Your Business?</h2>
          <p className={`text-lg mb-8 ${cardTextColor}`}>
            Let’s work together to create something extraordinary. Contact us today!
          </p>
          <button
            className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </motion.div>
  );
};

export default WhyChooseUs;