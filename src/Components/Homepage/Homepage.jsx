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

        {/* Why Choose Us Section */}
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
              Why Choose Ujuzi Digital Creations?
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Innovation */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
              >
                <FaLightbulb className="text-6xl text-yellow-500 mx-auto mb-4" />
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  Innovation
                </h3>
                <p className={cardTextColor}>
                  We leverage the latest technologies to deliver cutting-edge solutions.
                </p>
              </motion.div>

              {/* Expertise */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
              >
                <FaUsers className="text-6xl text-blue-500 mx-auto mb-4" />
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  Expertise
                </h3>
                <p className={cardTextColor}>
                  Our team of professionals has years of experience in the digital space.
                </p>
              </motion.div>

              {/* Results-Driven */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
              >
                <FaRocket className="text-6xl text-red-500 mx-auto mb-4" />
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  Results-Driven
                </h3>
                <p className={cardTextColor}>
                  We focus on delivering measurable results that grow your business.
                </p>
              </motion.div>

              {/* Award-Winning */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
              >
                <FaAward className="text-6xl text-green-500 mx-auto mb-4" />
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  Award-Winning
                </h3>
                <p className={cardTextColor}>
                  Recognized for excellence in digital innovation and customer satisfaction.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
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
              What Our Clients Say
            </motion.h2>
            <motion.p
              className={`text-lg mb-12 ${textColor}`}
              variants={itemVariants}
            >
              Hear from some of our satisfied clients who have experienced the Ujuzi difference.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
              >
                <FaUser className="text-6xl text-blue-500 mx-auto mb-4" />
                <p className={`italic mb-4 ${cardTextColor}`}>
                  "Ujuzi Digital Creations transformed our online presence. Their team is professional, creative, and results-driven!"
                </p>
                <p className={`font-semibold ${textColor}`}>
                  - Jane Doe, CEO of XYZ Company
                </p>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
              >
                <FaUserTie className="text-6xl text-purple-500 mx-auto mb-4" />
                <p className={`italic mb-4 ${cardTextColor}`}>
                  "The video editing services were top-notch. Our brand story has never been more compelling!"
                </p>
                <p className={`font-semibold ${textColor}`}>
                  - John Smith, Marketing Director
                </p>
              </motion.div>

              {/* Testimonial 3 */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
              >
                <FaUserGraduate className="text-6xl text-pink-500 mx-auto mb-4" />
                <p className={`italic mb-4 ${cardTextColor}`}>
                  "Their digital marketing strategies have significantly increased our online engagement. Highly recommend!"
                </p>
                <p className={`font-semibold ${textColor}`}>
                  - Mary Johnson, Founder of ABC Startup
                </p>
              </motion.div>

              {/* Testimonial 4 */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
              >
                <FaUserNinja className="text-6xl text-green-500 mx-auto mb-4" />
                <p className={`italic mb-4 ${cardTextColor}`}>
                  "Ujuzi's web design team is phenomenal! They delivered a website that exceeded our expectations."
                </p>
                <p className={`font-semibold ${textColor}`}>
                  - Alex Kim, Entrepreneur
                </p>
              </motion.div>

              {/* Testimonial 5 */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
              >
                <FaUserAstronaut className="text-6xl text-red-500 mx-auto mb-4" />
                <p className={`italic mb-4 ${cardTextColor}`}>
                  "The graphic designs created by Ujuzi are simply stunning. They perfectly captured our brand identity."
                </p>
                <p className={`font-semibold ${textColor}`}>
                  - Sarah Lee, Creative Director
                </p>
              </motion.div>

              {/* Testimonial 6 */}
              <motion.div
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                variants={itemVariants}
              >
                <FaUserSecret className="text-6xl text-yellow-500 mx-auto mb-4" />
                <p className={`italic mb-4 ${cardTextColor}`}>
                  "Ujuzi's team is incredibly talented and easy to work with. They truly understand our needs."
                </p>
                <p className={`font-semibold ${textColor}`}>
                  - Michael Brown, Business Owner
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;