import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaVideo,
  FaPaintBrush,
  FaChartLine,
  FaMobileAlt,
  FaDatabase,
  FaCogs,
  FaFilm,
  FaPhotoVideo,
  FaShoppingCart,
  FaSearch,
  FaUsers,
  FaEnvelope,
  FaTools,
  FaPalette,
  FaAd,
  FaBullhorn,
  FaCamera,
  FaLaptopCode,
  FaServer,
  FaShieldAlt,
  FaRegSmile,
  FaRegLightbulb,
  FaTimes,
} from 'react-icons/fa';

const Services = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark-mode')
  );
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

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

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your order! We will contact you shortly.');
    setIsModalOpen(false); // Close the modal after submission
  };

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
          Our Services
        </motion.h1>

        {/* Web Development Section */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <motion.h2
            className={`text-3xl font-bold mb-6 ${textColor}`}
            variants={itemVariants}
          >
            <FaCode className="inline-block mr-4 text-blue-500" />
            Web Development
          </motion.h2>
          <motion.p
            className={`text-lg mb-8 ${cardTextColor}`}
            variants={itemVariants}
          >
            We create stunning, responsive, and high-performance websites tailored to your business needs. From simple blogs to complex e-commerce platforms, we’ve got you covered.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Web Development */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaLaptopCode className="text-6xl text-blue-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Custom Web Development</h3>
              <p className={cardTextColor}>
                Tailored solutions to meet your unique business requirements, ensuring scalability and performance.
              </p>
            </motion.div>

            {/* M-Pesa Integration */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaMobileAlt className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>M-Pesa Integration</h3>
              <p className={cardTextColor}>
                Seamless integration of M-Pesa payment systems for secure and convenient transactions.
              </p>
            </motion.div>

            {/* CMS Development */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaDatabase className="text-6xl text-purple-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>CMS Development</h3>
              <p className={cardTextColor}>
                User-friendly content management systems to help you easily manage and update your website.
              </p>
            </motion.div>

            {/* Website Maintenance */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaTools className="text-6xl text-yellow-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Website Maintenance</h3>
              <p className={cardTextColor}>
                Regular updates, backups, and security checks to keep your website running smoothly.
              </p>
            </motion.div>

            {/* E-Commerce Solutions */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaShoppingCart className="text-6xl text-red-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>E-Commerce Solutions</h3>
              <p className={cardTextColor}>
                Build and optimize online stores with secure payment gateways and user-friendly interfaces.
              </p>
            </motion.div>

            {/* API Development */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaServer className="text-6xl text-indigo-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>API Development</h3>
              <p className={cardTextColor}>
                Custom APIs to integrate your website with third-party services and applications.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Editing Section */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <motion.h2
            className={`text-3xl font-bold mb-6 ${textColor}`}
            variants={itemVariants}
          >
            <FaVideo className="inline-block mr-4 text-purple-500" />
            Video Editing
          </motion.h2>
          <motion.p
            className={`text-lg mb-8 ${cardTextColor}`}
            variants={itemVariants}
          >
            We transform raw footage into captivating stories. Whether it’s a wedding, corporate event, or promotional video, we bring your vision to life.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wedding Videos */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaFilm className="text-6xl text-pink-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Wedding Videos</h3>
              <p className={cardTextColor}>
                Turn your special day into a cinematic masterpiece with our professional editing services.
              </p>
            </motion.div>

            {/* Corporate Videos */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaPhotoVideo className="text-6xl text-blue-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Corporate Videos</h3>
              <p className={cardTextColor}>
                Create impactful videos for presentations, training, or marketing campaigns.
              </p>
            </motion.div>

            {/* Promotional Videos */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaShoppingCart className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Promotional Videos</h3>
              <p className={cardTextColor}>
                Boost your brand with high-quality promotional videos that engage and convert.
              </p>
            </motion.div>

            {/* Event Coverage */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaCamera className="text-6xl text-yellow-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Event Coverage</h3>
              <p className={cardTextColor}>
                Professional video coverage for concerts, conferences, and special events.
              </p>
            </motion.div>

            {/* Animation & Motion Graphics */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaRegSmile className="text-6xl text-red-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Animation & Motion Graphics</h3>
              <p className={cardTextColor}>
                Add life to your videos with custom animations and motion graphics.
              </p>
            </motion.div>

            {/* Video SEO Optimization */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaSearch className="text-6xl text-indigo-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Video SEO Optimization</h3>
              <p className={cardTextColor}>
                Optimize your videos for search engines to increase visibility and reach.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Graphics Design Section */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <motion.h2
            className={`text-3xl font-bold mb-6 ${textColor}`}
            variants={itemVariants}
          >
            <FaPaintBrush className="inline-block mr-4 text-green-500" />
            Graphics Design
          </motion.h2>
          <motion.p
            className={`text-lg mb-8 ${cardTextColor}`}
            variants={itemVariants}
          >
            We create visually stunning designs that leave a lasting impression. From logos to branding, we’ve got you covered.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo Design */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaPalette className="text-6xl text-yellow-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Logo Design</h3>
              <p className={cardTextColor}>
                Unique and memorable logos that represent your brand’s identity.
              </p>
            </motion.div>

            {/* Branding */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaUsers className="text-6xl text-purple-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Branding</h3>
              <p className={cardTextColor}>
                Comprehensive branding solutions to establish a strong market presence.
              </p>
            </motion.div>

            {/* Print Design */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaPhotoVideo className="text-6xl text-blue-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Print Design</h3>
              <p className={cardTextColor}>
                Eye-catching designs for brochures, flyers, posters, and more.
              </p>
            </motion.div>

            {/* Social Media Graphics */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaAd className="text-6xl text-red-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Social Media Graphics</h3>
              <p className={cardTextColor}>
                Engaging visuals for your social media campaigns to boost engagement.
              </p>
            </motion.div>

            {/* Packaging Design */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaShoppingCart className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Packaging Design</h3>
              <p className={cardTextColor}>
                Attractive and functional packaging designs for your products.
              </p>
            </motion.div>

            {/* Illustration */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaRegLightbulb className="text-6xl text-indigo-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Illustration</h3>
              <p className={cardTextColor}>
                Custom illustrations to bring your ideas and stories to life.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Digital Marketing Section */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <motion.h2
            className={`text-3xl font-bold mb-6 ${textColor}`}
            variants={itemVariants}
          >
            <FaChartLine className="inline-block mr-4 text-red-500" />
            Digital Marketing
          </motion.h2>
          <motion.p
            className={`text-lg mb-8 ${cardTextColor}`}
            variants={itemVariants}
          >
            We help you reach your target audience and grow your business with effective digital marketing strategies.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaSearch className="text-6xl text-blue-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>SEO</h3>
              <p className={cardTextColor}>
                Improve your website’s visibility and rank higher on search engines.
              </p>
            </motion.div>

            {/* Social Media Marketing */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaUsers className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Social Media Marketing</h3>
              <p className={cardTextColor}>
                Engage your audience and grow your brand on social media platforms.
              </p>
            </motion.div>

            {/* Email Marketing */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaEnvelope className="text-6xl text-purple-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Email Marketing</h3>
              <p className={cardTextColor}>
                Reach your customers directly with personalized email campaigns.
              </p>
            </motion.div>

            {/* PPC Advertising */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaBullhorn className="text-6xl text-yellow-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>PPC Advertising</h3>
              <p className={cardTextColor}>
                Drive targeted traffic to your website with pay-per-click advertising.
              </p>
            </motion.div>

            {/* Content Marketing */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaRegLightbulb className="text-6xl text-red-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Content Marketing</h3>
              <p className={cardTextColor}>
                Create valuable content to attract and engage your target audience.
              </p>
            </motion.div>

            {/* Analytics & Reporting */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <FaChartLine className="text-6xl text-indigo-500 mx-auto mb-4" />
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Analytics & Reporting</h3>
              <p className={cardTextColor}>
                Track and analyze your marketing performance with detailed reports.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Order Services Button at the Bottom */}
        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Order Services
          </button>
        </motion.div>

        {/* Modal for Ordering Services */}
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`${cardBackgroundColor} rounded-lg p-8 w-full max-w-md relative`}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-2xl" />
              </button>
              <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>Order Services</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-2 ${textColor}`}>Name</label>
                  <input
                    type="text"
                    required
                    className={`w-full p-2 rounded-lg ${cardBackgroundColor} border ${cardTextColor}`}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-2 ${textColor}`}>Email</label>
                  <input
                    type="email"
                    required
                    className={`w-full p-2 rounded-lg ${cardBackgroundColor} border ${cardTextColor}`}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label className={`block text-sm font-medium mb-2 ${textColor}`}>Service</label>
                  <select
                    required
                    className={`w-full p-2 rounded-lg ${cardBackgroundColor} border ${cardTextColor}`}
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="video-editing">Video Editing</option>
                    <option value="graphics-design">Graphics Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className={`block text-sm font-medium mb-2 ${textColor}`}>Message</label>
                  <textarea
                    className={`w-full p-2 rounded-lg ${cardBackgroundColor} border ${cardTextColor}`}
                    rows="4"
                    placeholder="Describe your requirements"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Services;