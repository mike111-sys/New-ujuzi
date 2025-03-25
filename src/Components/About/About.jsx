import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaTimes, FaUsers, FaGlobeAfrica, FaHeart } from 'react-icons/fa';

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark-mode')
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your order! We will contact you shortly.');
    setIsModalOpen(false); // Close the modal after submission
  };


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
      className={`${backgroundColor} min-h-screen mt-7 py-16 px-4 sm:px-6 lg:px-8`}
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
          About Ujuzi Digital Creations
        </motion.h1>

        {/* Mission Section */}
        <motion.div
          className="mb-16 text-center"
          variants={itemVariants}
        >
          <motion.h2
            className={`text-3xl font-bold mb-6 ${textColor}`}
            variants={itemVariants}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto ${cardTextColor}`}
            variants={itemVariants}
          >
            At Ujuzi Digital Creations, our mission is to empower businesses and individuals with innovative digital solutions that drive growth, creativity, and success. We believe in the transformative power of technology and design to make a meaningful impact.
          </motion.p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
        >
          {/* Innovation */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaLightbulb className="text-6xl text-yellow-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Innovation</h3>
            <p className={cardTextColor}>
              We constantly push boundaries to deliver cutting-edge solutions that set you apart.
            </p>
          </motion.div>

          {/* Integrity */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaHandshake className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Integrity</h3>
            <p className={cardTextColor}>
              We build trust through transparency, honesty, and ethical practices.
            </p>
          </motion.div>

          {/* Collaboration */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaUsers className="text-6xl text-purple-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Collaboration</h3>
            <p className={cardTextColor}>
              We work closely with you to ensure your vision becomes a reality.
            </p>
          </motion.div>

          {/* Community Impact */}
          <motion.div
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
            variants={itemVariants}
          >
            <FaGlobeAfrica className="text-6xl text-green-500 mx-auto mb-4" />
            <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Community Impact</h3>
            <p className={cardTextColor}>
              We are committed to making a positive difference in our local and global communities.
            </p>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-16 text-center"
          variants={itemVariants}
        >
          <motion.h2
            className={`text-3xl font-bold mb-6 ${textColor}`}
            variants={itemVariants}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto mb-8 ${cardTextColor}`}
            variants={itemVariants}
          >
            Our team is a diverse group of passionate professionals dedicated to delivering excellence in every project.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>John Doe</h3>
              <p className={`text-sm text-gray-500 mb-2`}>Lead Developer</p>
              <p className={cardTextColor}>
                John is a tech enthusiast with a passion for building scalable web applications.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <div className="w-24 h-24 bg-purple-500 rounded-full mx-auto mb-4"></div>
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Jane Smith</h3>
              <p className={`text-sm text-gray-500 mb-2`}>Creative Director</p>
              <p className={cardTextColor}>
                Jane brings creativity and innovation to every design project she leads.
              </p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-4"></div>
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>Alex Johnson</h3>
              <p className={`text-sm text-gray-500 mb-2`}>Digital Marketing Specialist</p>
              <p className={cardTextColor}>
                Alex is a results-driven marketer with a knack for growing online audiences.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <motion.h2
            className={`text-3xl font-bold mb-6 ${textColor}`}
            variants={itemVariants}
          >
            Join Us on Our Journey
          </motion.h2>
          <motion.p
            className={`text-lg max-w-2xl mx-auto mb-8 ${cardTextColor}`}
            variants={itemVariants}
          >
            Whether you're a startup or an established business, we’re here to help you achieve your digital goals. Let’s create something amazing together!
          </motion.p>
          <button
            className={`bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300`}
            onClick={() => setIsModalOpen(true)}
          >
            Get in Touch
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
                className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FaTimes className="text-2xl" />
              </button>
              <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>Get In Touch</h2>
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
                  className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
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

export default About;