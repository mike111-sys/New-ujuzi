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

  const backgroundColor = isDarkMode
    ? 'bg-gradient-to-r from-gray-900 to-gray-800'
    : 'bg-gradient-to-r from-blue-50 to-purple-50';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const cardBackgroundColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const cardTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-600';

  const testimonials = [
    // Pure English reviews
    {
      name: 'Elizabeth Wambui',
      role: 'Tech Startup CEO',
      review: 'Ujuzi Digital built our entire tech stack from scratch. Their developers are incredibly skilled - worth every shilling! ⚡',
      icon: <FaUserTie className="text-4xl text-purple-500 mx-auto mb-4" />,
      stars: 5
    },
    {
      name: 'Dr. James Mwangi',
      role: 'Healthcare Consultant',
      review: 'Professional medical animation that made complex procedures easy to understand. Exceeded our expectations.',
      icon: <FaUserGraduate className="text-4xl text-blue-500 mx-auto mb-4" />,
      stars: 4.5
    },
    {
      name: 'Sarah Johnson',
      role: 'International School Principal',
      review: 'The e-learning platform they developed has transformed our teaching methods. Highly recommend their services!',
      icon: <FaUserSecret className="text-4xl text-pink-500 mx-auto mb-4" />,
      stars: 5
    },
  
    // Swahili-English blended reviews
    {
      name: 'Mama Nia',
      role: 'Mama Fua Business',
      review: 'Nilikuwa sina social media presence... Sasa customers wananiita kila siku! Asante Ujuzi! 🙌',
      icon: <FaUser className="text-4xl text-green-500 mx-auto mb-4" />,
      stars: 4.5
    },
    {
      name: 'Babu Omollo',
      role: 'Retired Teacher',
      review: 'At 68 years, I needed simple website for my memoirs. These young people were very patient with me 👍',
      icon: <FaUserAstronaut className="text-4xl text-orange-500 mx-auto mb-4" />,
      stars: 4
    },
  
    // Pure English
    {
      name: 'David Peterson',
      role: 'Tour Company Owner',
      review: 'Our new booking system works flawlessly. The team delivered ahead of schedule with excellent documentation.',
      icon: <FaUserNinja className="text-4xl text-red-500 mx-auto mb-4" />,
      stars: 5
    },
    {
      name: 'Grace Atieno',
      role: 'Fashion Boutique Owner',
      review: 'The product photography elevated my brand instantly. My Instagram engagement tripled in a month! 📸',
      icon: <FaUserGraduate className="text-4xl text-yellow-500 mx-auto mb-4" />,
      stars: 4.5
    },
  
    // Swahili-English
    {
      name: 'Juma wa Mitumba',
      role: 'Clothing Vendor',
      review: 'Hii system ya inventory walonifanyia inasaidia sana! Sasa najua exactly nini niko nayo dukani. 👕👖',
      icon: <FaUserTie className="text-4xl text-teal-500 mx-auto mb-4" />,
      stars: 4
    },
    {
      name: 'Njeri wa Salon',
      role: 'Hair Stylist',
      review: 'My booking app is life-changing! No more missed appointments. Clients love the convenience too 💇‍♀️',
      icon: <FaUser className="text-4xl text-indigo-500 mx-auto mb-4" />,
      stars: 5
    },
  
    // Pure English
    {
      name: 'Professor Wangari',
      role: 'University Lecturer',
      review: 'The research data visualization tools they created have been invaluable for my academic publications.',
      icon: <FaUserSecret className="text-4xl text-purple-500 mx-auto mb-4" />,
      stars: 4.5
    },
    {
      name: 'Mike Otieno',
      role: 'Music Producer',
      review: 'My artist website gets me serious gigs! The portfolio presentation is sleek and professional.',
      icon: <FaUserNinja className="text-4xl text-blue-500 mx-auto mb-4" />,
      stars: 5
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative inline-block">
          <FaStar className="text-gray-300" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <FaStar className="text-yellow-500" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }
    
    return stars;
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
        <motion.h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 ${textColor}`}
          variants={itemVariants}
        >
          What Our Clients Say
        </motion.h1>

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
                <div className="flex justify-center mt-4 space-x-1">
                  {renderStars(testimonial.stars)}
                  <span className="ml-2 text-sm text-gray-500">({testimonial.stars})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          variants={itemVariants}
        >
          <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>Ready to Transform Your Business?</h2>
          <p className={`text-lg mb-8 ${cardTextColor}`}>
            Let's work together to create something extraordinary. Contact us today!
          </p>
          <button
            className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Reviews;