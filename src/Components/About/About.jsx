import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaHandshake,
  FaTimes,
  FaUsers,
  FaGlobeAfrica,
} from "react-icons/fa";
import michaelChege from "../../assets/Michael-Chege.jpg";
import georgeOchieng from "../../assets/George-Ochieng.jpg";
import levisRabah from "../../assets/Levis-Rabah.jpg";
import johnMuchuku from "../../assets/John-Muchuku.jpg";
import michaelJuma from "../../assets/Michael-Juma.jpg";
import vincentKoech from "../../assets/Vincent-Koech.jpg";

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark-mode")
  );


  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "6d349fce-d9fd-4aa2-a71c-7bf254b3cad0");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message submitted successfully! We'll contact you soon.");
        event.target.reset();
      } else {
        console.error("Submission error:", data);
        setResult(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("Network error. Please check your connection.");
    }
  };




  const [isModalOpen, setIsModalOpen] = useState(false);
 

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const teamMemberVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalContentVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  };

  // Theme colors
  const backgroundColor = isDarkMode
    ? "bg-gradient-to-r from-gray-900 to-gray-800"
    : "bg-gradient-to-r from-blue-50 to-purple-50";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const cardBackgroundColor = isDarkMode ? "bg-gray-800" : "bg-white";
  const cardTextColor = isDarkMode ? "text-gray-200" : "text-gray-600";
  const dividerColor = isDarkMode ? "bg-blue-400" : "bg-blue-600";

  const teamMembers = [
    {
      id: 1,
      name: "Michael Chege",
      role: "Digital Marketer",
      bio: "Results-driven digital marketer with expertise in SEO, social media, and content marketing. Helps brands grow their online presence through data-driven strategies, paid ads, and conversion optimization.",
      skills: ["SEO", "Social Media Marketing", "Google Ads", "Content Strategy", "Analytics"],
      image: michaelChege,
      accentColor: "orange",
    },
    {
      id: 2,
      name: "Vincent Koech",
      role: "Graphic Designer & Video Editor",
      bio: "Creative professional specializing in graphic design and video editing with 4+ years of experience. Expert in visual storytelling, branding, and motion graphics, delivering high-quality designs for digital and print media.",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Premiere Pro", "After Effects", "Branding"],
      image: vincentKoech,
      accentColor: "purple",
    },
    {
      id: 3,
      name: "Levis Rabah",
      role: "Python & JS Wizard",
      bio: "Full Stack web developer using Python and JavaScript. Builds AI-powered applications and loves solving complex problems with clean, maintainable code.",
      skills: ["Python", "Django", "JavaScript", "AI/ML", "Flask"],
      image: levisRabah,
      accentColor: "yellow",
    },
    {
      id: 4,
      name: "John Muchuku",
      role: "Frontend Architect",
      bio: "Dedicated Frontend web developer specializing in React, Next.js and Vite. Creates pixel-perfect UIs with 3+ years experience building responsive web applications.",
      skills: ["React", "Next.js", "Vite", "TypeScript", "Tailwind"],
      image: johnMuchuku,
      accentColor: "blue",
    },
    {
      id: 5,
      name: "George Ochieng",
      role: "Full Stack Engineer",
      bio: "Full stack web developer proficient in full software development lifecycle. Strong knowledge in agile methodologies and SDLC principles with 5+ years experience.",
      skills: ["Node.js", "Agile", "SDLC", "MongoDB", "AWS"],
      image: georgeOchieng,
      accentColor: "green",
    },
    {
      id: 6,
      name: "Michael Juma",
      role: "Laravel Specialist",
      bio: "Full Stack web developer specializing in Laravel with 4 years experience building robust backend systems. Loves creating efficient APIs and scalable database architectures.",
      skills: ["Laravel", "PHP", "MySQL", "REST APIs", "Docker"],
      image: michaelJuma,
      accentColor: "purple",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        text: isDarkMode ? "text-blue-300" : "text-blue-600",
        bg: isDarkMode ? "bg-blue-900/30" : "bg-blue-100",
        border: "border-blue-500",
      },
      green: {
        text: isDarkMode ? "text-green-300" : "text-green-600",
        bg: isDarkMode ? "bg-green-900/30" : "bg-green-100",
        border: "border-green-500",
      },
      purple: {
        text: isDarkMode ? "text-purple-300" : "text-purple-600",
        bg: isDarkMode ? "bg-purple-900/30" : "bg-purple-100",
        border: "border-purple-500",
      },
      yellow: {
        text: isDarkMode ? "text-yellow-300" : "text-yellow-600",
        bg: isDarkMode ? "bg-yellow-900/30" : "bg-yellow-100",
        border: "border-yellow-500",
      },
      orange: {
        text: isDarkMode ? "text-orange-300" : "text-orange-600",
        bg: isDarkMode ? "bg-orange-900/30" : "bg-orange-100",
        border: "border-orange-500",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className={`${backgroundColor} min-h-screen mt-7 py-16 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 ${textColor}`}
            variants={itemVariants}
          >
            About Ujuzi Digital Creations
          </motion.h1>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.div className="text-center" variants={itemVariants}>
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
              At Ujuzi Digital Creations, our mission is to empower businesses and
              individuals with innovative digital solutions that drive growth,
              creativity, and success. We believe in the transformative power of
              technology and design to make a meaningful impact.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h2
            className={`text-3xl font-bold mb-12 text-center ${textColor}`}
            variants={itemVariants}
          >
            Our Values
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {/* Innovation */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex justify-center"
              >
                <FaLightbulb className="text-6xl text-yellow-500 mb-4" />
              </motion.div>
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                Innovation
              </h3>
              <p className={cardTextColor}>
                We constantly push boundaries to deliver cutting-edge solutions
                that set you apart.
              </p>
            </motion.div>

            {/* Integrity */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex justify-center"
              >
                <FaHandshake className="text-6xl text-blue-500 mb-4" />
              </motion.div>
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                Integrity
              </h3>
              <p className={cardTextColor}>
                We build trust through transparency, honesty, and ethical
                practices.
              </p>
            </motion.div>

            {/* Collaboration */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex justify-center"
              >
                <FaUsers className="text-6xl text-purple-500 mb-4" />
              </motion.div>
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                Collaboration
              </h3>
              <p className={cardTextColor}>
                We work closely with you to ensure your vision becomes a reality.
              </p>
            </motion.div>

            {/* Community Impact */}
            <motion.div
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex justify-center"
              >
                <FaGlobeAfrica className="text-6xl text-green-500 mb-4" />
              </motion.div>
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                Community Impact
              </h3>
              <p className={cardTextColor}>
                We are committed to making a positive difference in our local and
                global communities.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
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
              Our team is a diverse group of passionate professionals dedicated
              to delivering excellence in every project.
            </motion.p>
            <motion.div
              className="flex justify-center mt-6"
              variants={itemVariants}
            >
              <div className={`h-1 w-20 rounded-full ${dividerColor}`}></div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {teamMembers.map((member) => {
              const colors = getColorClasses(member.accentColor);
              return (
                <motion.div
                  key={member.id}
                  className={`flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${cardBackgroundColor}`}
                  variants={teamMemberVariants}
                  whileHover="hover"
                >
                  <div className="relative pt-[100%] overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className={`text-xl font-semibold mb-1 ${textColor}`}>
                        {member.name}
                      </h3>
                      <p className={`text-sm ${colors.text} mb-3`}>
                        {member.role}
                      </p>
                      <p className={`text-sm ${cardTextColor}`}>{member.bio}</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4
                        className={`text-xs uppercase font-semibold mb-2 ${colors.text}`}
                      >
                        Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text}`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
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
            Whether you're a startup or an established business, we're here to
            help you achieve your digital goals. Let's create something amazing
            together!
          </motion.p>
          <motion.button
            className={`bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300`}
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Get in Touch
          </motion.button>
        </motion.section>

        {/* Modal */}
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <motion.div
              className={`${cardBackgroundColor} rounded-lg p-8 w-full max-w-md relative`}
              variants={modalContentVariants}
            >
              <motion.button
                onClick={() => setIsModalOpen(false)}
                className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="text-2xl" />
              </motion.button>
              <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>
                Get In Touch
              </h2>
              <form onSubmit={onSubmit}>
  <motion.div className="mb-4" variants={itemVariants}>
    <label className={`block text-sm font-medium mb-2 ${textColor}`}>
      Name
    </label>
    <input
      type="text"
      name="name"
      required
      className={`w-full p-2 rounded-lg ${cardBackgroundColor} border ${cardTextColor}`}
      placeholder="Enter your name"
    />
  </motion.div>
  
  <motion.div className="mb-4" variants={itemVariants}>
    <label className={`block text-sm font-medium mb-2 ${textColor}`}>
      Email
    </label>
    <input
      type="email"
      name="email"
      required
      className={`w-full p-2 rounded-lg ${cardBackgroundColor} border ${cardTextColor}`}
      placeholder="Enter your email"
    />
  </motion.div>
  
  <motion.div className="mb-6" variants={itemVariants}>
    <label className={`block text-sm font-medium mb-2 ${textColor}`}>
      Message
    </label>
    <textarea
      name="message"
      className={`w-full p-2 rounded-lg ${cardBackgroundColor} border ${cardTextColor}`}
      rows="4"
      placeholder="Describe your requirements"
      required
    ></textarea>
  </motion.div>

  {result && (
    <p className={`mb-4 text-center ${
      isDarkMode ? "text-blue-300" : "text-blue-600"
    }`}>
      {result}
    </p>
  )}

  <motion.button
    type="submit"
    className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Submit
  </motion.button>
</form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default About;