import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaVideo,
  FaPaintBrush,
  FaChartLine,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaAward,
  FaUser,
  FaUserTie,
  FaUserGraduate,
  FaUserNinja,
  FaUserAstronaut,
  FaUserSecret,
  FaSearch,
  FaPenAlt,
  FaLaptopCode,
  FaCheck,
  FaTimes
} from "react-icons/fa";
import web from "/src/assets/web.png";
import video from "/src/assets/video.png";
import graphic from "/src/assets/graphic.jpg";
import marketing from "/src/assets/marketing.jpg";

const slides = [
  {
    text: "🚀 Build a Powerful Online Presence",
    description:
      "We design high-performing websites that captivate visitors, boost engagement, and drive sales.",
    image: web,
  },
  {
    text: "📈 Smart Digital Marketing Strategies",
    description:
      "SEO, social media, and paid ads – we help you dominate the digital space and grow your brand.",
    image: marketing,
  },
  {
    text: "🎬 Create Stunning Video Content",
    description:
      "We craft engaging videos that bring your brand story to life and connect with your audience.",
    image: video,
  },
  {
    text: "🎨 Graphic Designs That Speak",
    description:
      "From logos to marketing materials, our creative designs make your brand unforgettable.",
    image: graphic,
  },
];

const buttonColor = "bg-yellow-500 hover:bg-yellow-400 text-gray-900";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark-mode")
  );

  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  // Dynamic styles based on dark mode
  const backgroundColor = isDarkMode
    ? "bg-gradient-to-r from-gray-900 to-gray-800"
    : "bg-gradient-to-r from-blue-50 to-purple-50";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const cardBackgroundColor = isDarkMode ? "bg-gray-800" : "bg-white";
  const cardTextColor = isDarkMode ? "text-gray-200" : "text-gray-600";

  // Slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Observe dark mode changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark-mode"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col font-poppins">
      {/* Hero Section */}
      <div
        className={`hidden md:flex flex-col items-center justify-center mt-16 py-8 max-h-[220px] text-center transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white"
            : "bg-gradient-to-r from-blue-50 to-white text-gray-900"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={`desktop-title-${currentSlide}`}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-3xl font-extrabold tracking-wide"
          >
            {slides[currentSlide].text}
          </motion.h1>
        </AnimatePresence>

        <motion.p
          key={`desktop-desc-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="mt-1 text-lg font-light max-w-2xl"
        >
          {slides[currentSlide].description}
        </motion.p>
      </div>

      {/* Mobile Hero Section */}
      <div
        className={`md:hidden flex flex-col items-center justify-center mt-16 py-8 max-h-[220px] text-center transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white"
            : "bg-gradient-to-r from-blue-50 to-white text-gray-900"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={`mobile-title-${currentSlide}`}
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 1.1 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className="text-xl font-extrabold tracking-wide"
          >
            {slides[currentSlide].text}
          </motion.h1>
        </AnimatePresence>

        <motion.p
          key={`mobile-desc-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="mt-1 text-sm font-light max-w-2xl"
        >
          {slides[currentSlide].description}
        </motion.p>
      </div>

      {/* Desktop Image Section */}
      <div className="hidden md:flex w-full justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={`desktop-image-${currentSlide}`}
            src={slides[currentSlide].image}
            alt="Slide"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Mobile Image Section */}
      <div className="md:hidden flex w-full justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={`mobile-image-${currentSlide}`}
            src={slides[currentSlide].image}
            alt="Slide"
            className="w-full h-[350px] object-cover rounded-lg shadow-lg"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Call to Action */}
      <div className="hidden md:flex flex-col items-center justify-center py-12">
        <p className="text-xl font-semibold">
          Experience seamless digital growth with our expert services!
        </p>
      </div>

      {/* Mobile Call to Action */}
      <div className="md:hidden flex flex-col items-center justify-center py-6 px-4">
        <motion.button
          className={`mt-1 px-6 py-3 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 shadow-lg ${buttonColor}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Request a Quote
        </motion.button>
      </div>

      {/* Homepage Content */}
      <div className={`${backgroundColor} min-h-screen`}>
        {/* Welcome Section */}
        <motion.div
          className={`py-16 px-4 sm:px-6 lg:px-8`}
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
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  Web Design & Development
                </h3>
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
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  Video Editing
                </h3>
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
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  Graphic Design
                </h3>
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
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  Digital Marketing
                </h3>
                <p className={cardTextColor}>
                  Strategies to grow your online presence and reach your audience.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Process / How It Works Section */}
        <motion.div
          className={`py-16 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
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
              Our Process
            </motion.h2>
            <motion.p
              className={`text-lg mb-12 ${textColor}`}
              variants={itemVariants}
            >
              We follow a proven 4-step process to deliver exceptional results
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Consultation */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-blue-100"}`}>
                    <FaSearch className="text-3xl text-blue-500" />
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-2 text-center ${textColor}`}>
                  1. Consultation
                </h3>
                <p className={`text-center ${cardTextColor}`}>
                  We discuss your goals, requirements, and vision for the project.
                </p>
              </motion.div>

              {/* Design */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-purple-100"}`}>
                    <FaPenAlt className="text-3xl text-purple-500" />
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-2 text-center ${textColor}`}>
                  2. Design
                </h3>
                <p className={`text-center ${cardTextColor}`}>
                  Our designers create mockups and prototypes for your approval.
                </p>
              </motion.div>

              {/* Development */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-green-100"}`}>
                    <FaLaptopCode className="text-3xl text-green-500" />
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-2 text-center ${textColor}`}>
                  3. Development
                </h3>
                <p className={`text-center ${cardTextColor}`}>
                  Our developers bring the design to life with clean, efficient code.
                </p>
              </motion.div>

              {/* Launch */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full ${isDarkMode ? "bg-gray-700" : "bg-yellow-100"}`}>
                    <FaRocket className="text-3xl text-yellow-500" />
                  </div>
                </div>
                <h3 className={`text-xl font-semibold mb-2 text-center ${textColor}`}>
                  4. Launch
                </h3>
                <p className={`text-center ${cardTextColor}`}>
                  We deploy your project and provide ongoing support as needed.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Compare Website Plans Section */}
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
              Compare Website Plans
            </motion.h2>
            <motion.p
              className={`text-lg mb-12 ${textColor}`}
              variants={itemVariants}
            >
              Choose the perfect package for your business needs
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <motion.div
                className={`rounded-xl overflow-hidden shadow-lg ${cardBackgroundColor}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`py-6 px-4 ${isDarkMode ? "bg-gray-700" : "bg-blue-100"}`}>
                  <h3 className={`text-2xl font-bold ${textColor}`}>Starter</h3>
                  <p className={`text-4xl font-bold my-4 ${textColor}`}>$499</p>
                  <p className={cardTextColor}>Perfect for small businesses</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className={cardTextColor}>5 Pages Website</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className={cardTextColor}>Mobile Responsive</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className={cardTextColor}>Basic SEO</span>
                    </li>
                    <li className="flex items-center">
                      <FaTimes className="text-red-500 mr-2" />
                      <span className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>E-commerce</span>
                    </li>
                    <li className="flex items-center">
                      <FaTimes className="text-red-500 mr-2" />
                      <span className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>CMS Integration</span>
                    </li>
                  </ul>
                  <motion.button
                    className={`w-full mt-8 py-3 rounded-lg font-semibold ${
                      isDarkMode
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>

              {/* Pro Plan */}
              <motion.div
                className={`rounded-xl overflow-hidden shadow-lg ${cardBackgroundColor}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`py-6 px-4 ${isDarkMode ? "bg-gray-700" : "bg-purple-100"}`}>
                  <h3 className={`text-2xl font-bold ${textColor}`}>Pro</h3>
                  <p className={`text-4xl font-bold my-4 ${textColor}`}>$999</p>
                  <p className={cardTextColor}>Ideal for growing businesses</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className={cardTextColor}>10 Pages Website</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className={cardTextColor}>Mobile Responsive</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className={cardTextColor}>Advanced SEO</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className={cardTextColor}>Basic E-commerce</span>
                    </li>
                    <li className="flex items-center">
                      <FaTimes className="text-red-500 mr-2" />
                      <span className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Custom CMS</span>
                    </li>
                  </ul>
                  <motion.button
                    className={`w-full mt-8 py-3 rounded-lg font-semibold ${
                      isDarkMode
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-purple-500 hover:bg-purple-600 text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>

              {/* Enterprise Plan */}
              <motion.div
                className={`rounded-xl overflow-hidden shadow-lg ${cardBackgroundColor}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`py-6 px-4 ${isDarkMode ? "bg-gray-700" : "bg-green-100"}`}>
                  <h3 className={`text-2xl font-bold ${textColor}`}>Enterprise</h3>
                  <p className={`text-4xl font-bold my-4 ${textColor}`}>$1999+</p>
                  <p className={cardTextColor}>For large scale businesses</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className={cardTextColor}>Unlimited Pages</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className={cardTextColor}>Mobile Responsive</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className={cardTextColor}>Premium SEO</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className={cardTextColor}>Advanced E-commerce</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className={cardTextColor}>Custom CMS</span>
                    </li>
                  </ul>
                  <motion.button
                    className={`w-full mt-8 py-3 rounded-lg font-semibold ${
                      isDarkMode
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-green-500 hover:bg-green-600 text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call To Action Section */}
        <motion.div
          className={`py-16 px-4 sm:px-6 lg:px-8 ${
            isDarkMode ? "bg-gray-900" : "bg-blue-600"
          }`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-8 text-white"
              variants={itemVariants}
            >
              Ready to Transform Your Digital Presence?
            </motion.h2>
            <motion.p
              className="text-xl mb-12 text-blue-100"
              variants={itemVariants}
            >
              Contact us today to discuss your project and get a free consultation.
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.button
                className="px-8 py-4 rounded-full font-bold text-lg text-blue-900 bg-white hover:bg-blue-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Quote Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;