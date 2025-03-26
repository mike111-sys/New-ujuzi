import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaTimes, FaUsers, FaGlobeAfrica } from 'react-icons/fa';
import georgeOchieng from "../../assets/George-Ochieng.jpg";
import johnMuchuku from "../../assets/John-Muchuku.jpg";
import levisRabah from "../../assets/Levis-Rabah.jpg";
import michaelJuma from "../../assets/Michael-Juma.jpg";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains('dark-mode')
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your order! We will contact you shortly.');
    setIsModalOpen(false);
  };

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

  const teamMemberVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const backgroundColor = isDarkMode
    ? 'bg-gradient-to-r from-gray-900 to-gray-800'
    : 'bg-gradient-to-r from-blue-50 to-purple-50';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const cardBackgroundColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const cardTextColor = isDarkMode ? 'text-gray-200' : 'text-gray-600';
  const dividerColor = isDarkMode ? 'bg-blue-400' : 'bg-blue-600';

  const teamMembers = [
    {
      id: 1,
      name: "John Muchuku",
      role: "Frontend Architect",
      bio: "Dedicated Frontend web developer specializing in React, Next.js and Vite. Creates pixel-perfect UIs with 3+ years experience building responsive web applications.",
      skills: ["React", "Next.js", "Vite", "TypeScript", "Tailwind"],
      image: johnMuchuku,
      accentColor: "blue",
    },
    {
      id: 2,
      name: "George Ochieng",
      role: "Full Stack Engineer",
      bio: "Full stack web developer proficient in full software development lifecycle. Strong knowledge in agile methodologies and SDLC principles with 5+ years experience.",
      skills: ["Node.js", "Agile", "SDLC", "MongoDB", "AWS"],
      image: georgeOchieng,
      accentColor: "green",
    },
    {
      id: 3,
      name: "Michael Juma",
      role: "Laravel Specialist",
      bio: "Full Stack web developer specializing in Laravel with 4 years experience building robust backend systems. Loves creating efficient APIs and scalable database architectures.",
      skills: ["Laravel", "PHP", "MySQL", "REST APIs", "Docker"],
      image: michaelJuma,
      accentColor: "purple",
    },
    {
      id: 4,
      name: "Levis Rabah",
      role: "Python & JS Wizard",
      bio: "Full Stack web developer using Python and JavaScript. Builds AI-powered applications and loves solving complex problems with clean, maintainable code.",
      skills: ["Python", "Django", "JavaScript", "AI/ML", "Flask"],
      image: levisRabah,
      accentColor: "yellow",
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        text: isDarkMode ? 'text-blue-300' : 'text-blue-600',
        bg: isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100',
        border: 'border-blue-500'
      },
      green: {
        text: isDarkMode ? 'text-green-300' : 'text-green-600',
        bg: isDarkMode ? 'bg-green-900/30' : 'bg-green-100',
        border: 'border-green-500'
      },
      purple: {
        text: isDarkMode ? 'text-purple-300' : 'text-purple-600',
        bg: isDarkMode ? 'bg-purple-900/30' : 'bg-purple-100',
        border: 'border-purple-500'
      },
      yellow: {
        text: isDarkMode ? 'text-yellow-300' : 'text-yellow-600',
        bg: isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-100',
        border: 'border-yellow-500'
      }
    };
    return colors[color] || colors.blue;
  };

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

        {/* Enhanced Team Section */}
        <motion.div
          className="mb-16"
          variants={itemVariants}
        >
          <motion.div className="text-center mb-12">
            <motion.h2
              className={`text-3xl font-bold mb-4 ${textColor}`}
              variants={itemVariants}
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              className={`text-lg max-w-3xl mx-auto ${cardTextColor}`}
              variants={itemVariants}
            >
              Our team is a diverse group of passionate professionals dedicated to delivering excellence in every project.
            </motion.p>
            <motion.div 
              className="flex justify-center mt-6"
              variants={itemVariants}
            >
              <div className={`h-1 w-20 rounded-full ${dividerColor}`}></div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const colors = getColorClasses(member.accentColor);
              return (
                <motion.div
                  key={member.id}
                  className={`flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                  variants={teamMemberVariants}
                >
                  <div className="relative pt-[100%] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className={`text-xl font-semibold mb-1 ${textColor}`}>{member.name}</h3>
                      <p className={`text-sm ${colors.text} mb-3`}>{member.role}</p>
                      <p className={`text-sm ${cardTextColor}`}>{member.bio}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className={`text-xs uppercase font-semibold mb-2 ${colors.text}`}>Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
            Whether you're a startup or an established business, we're here to help you achieve your digital goals. Let's create something amazing together!
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