import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaUser,
  FaUserTie,
  FaUserGraduate,
  FaUserNinja,
  FaUserAstronaut,
  FaUserSecret,
  FaSmile,
  FaStar,
} from 'react-icons/fa';

const Reviews = () => {
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

  // Testimonials data
  const testimonials = [
    {
      name: 'Jane Doe',
      role: 'CEO, XYZ Company',
      review:
        'Ujuzi Digital Creations transformed our online presence. Their team is professional, creative, and results-driven!',
      icon: <FaUser className="text-4xl text-blue-500 mx-auto mb-4" />,
    },
    {
      name: 'John Smith',
      role: 'Marketing Director',
      review:
        'The video editing services were top-notch. Our brand story has never been more compelling!',
      icon: <FaUserTie className="text-4xl text-purple-500 mx-auto mb-4" />,
    },
    {
      name: 'Mary Johnson',
      role: 'Founder, ABC Startup',
      review:
        'Their digital marketing strategies have significantly increased our online engagement. Highly recommend!',
      icon: <FaUserGraduate className="text-4xl text-pink-500 mx-auto mb-4" />,
    },
    {
      name: 'Alex Kim',
      role: 'Entrepreneur',
      review:
        'Ujuzi’s web design team is phenomenal! They delivered a website that exceeded our expectations.',
      icon: <FaUserNinja className="text-4xl text-green-500 mx-auto mb-4" />,
    },
    {
      name: 'Sarah Lee',
      role: 'Creative Director',
      review:
        'The graphic designs created by Ujuzi are simply stunning. They perfectly captured our brand identity.',
      icon: <FaUserAstronaut className="text-4xl text-red-500 mx-auto mb-4" />,
    },
    {
      name: 'Michael Brown',
      role: 'Business Owner',
      review:
        'Ujuzi’s team is incredibly talented and easy to work with. They truly understand our needs.',
      icon: <FaUserSecret className="text-4xl text-yellow-500 mx-auto mb-4" />,
    },
    {
      name: 'Emily Davis',
      role: 'E-Commerce Manager',
      review:
        'Their e-commerce solutions are top-tier. Our online store has seen a significant boost in sales!',
      icon: <FaUser className="text-4xl text-indigo-500 mx-auto mb-4" />,
    },
    {
      name: 'David Wilson',
      role: 'IT Consultant',
      review:
        'Ujuzi’s API integration services are seamless and efficient. They made our systems work flawlessly.',
      icon: <FaUserTie className="text-4xl text-teal-500 mx-auto mb-4" />,
    },
    {
      name: 'Laura Martinez',
      role: 'Event Planner',
      review:
        'The event coverage videos were breathtaking. Ujuzi captured every moment perfectly!',
      icon: <FaUserGraduate className="text-4xl text-orange-500 mx-auto mb-4" />,
    },
    {
      name: 'Chris Evans',
      role: 'Fitness Trainer',
      review:
        'Ujuzi’s branding for our gym was outstanding. Our members love the new look!',
      icon: <FaUserNinja className="text-4xl text-blue-500 mx-auto mb-4" />,
    },
    {
      name: 'Sophia Garcia',
      role: 'Artist',
      review:
        'The illustrations created by Ujuzi brought my vision to life. I couldn’t be happier!',
      icon: <FaUserAstronaut className="text-4xl text-purple-500 mx-auto mb-4" />,
    },
    {
      name: 'Daniel White',
      role: 'Restaurant Owner',
      review:
        'Ujuzi’s social media campaigns have brought in so many new customers. Highly recommend their services!',
      icon: <FaUserSecret className="text-4xl text-pink-500 mx-auto mb-4" />,
    },
    {
      name: 'Olivia Harris',
      role: 'Author',
      review:
        'Ujuzi’s book cover designs are stunning. They perfectly captured the essence of my story.',
      icon: <FaUser className="text-4xl text-green-500 mx-auto mb-4" />,
    },
    {
      name: 'James Clark',
      role: 'Tech Startup Founder',
      review:
        'Ujuzi’s digital marketing strategies have helped us scale our business rapidly. Thank you!',
      icon: <FaUserTie className="text-4xl text-red-500 mx-auto mb-4" />,
    },
    {
      name: 'Emma Lewis',
      role: 'Fashion Designer',
      review:
        'Ujuzi’s branding for my fashion line is impeccable. They truly understand the industry.',
      icon: <FaUserGraduate className="text-4xl text-yellow-500 mx-auto mb-4" />,
    },
  ];

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
          What Our Clients Say
        </motion.h1>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
            >
              <div className="text-center">
                {testimonial.icon}
                <FaQuoteLeft className="text-2xl text-gray-400 mx-auto mb-4" />
                <p className={`italic mb-4 ${cardTextColor}`}>{testimonial.review}</p>
                <FaQuoteRight className="text-2xl text-gray-400 mx-auto mb-4" />
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>{testimonial.name}</h3>
                <p className={`text-sm text-gray-500`}>{testimonial.role}</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Reviews;
