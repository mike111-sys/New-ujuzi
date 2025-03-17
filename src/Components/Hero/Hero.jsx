import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import web from "/src/assets/web.png";
import video from "/src/assets/video.png";
import graphic from "/src/assets/graphic.jpg";
import marketing from "/src/assets/marketing.jpg";

const slides = [
  { 
    text: "🚀 Build a Powerful Online Presence", 
    description: "We design high-performing websites that captivate visitors, boost engagement, and drive sales.", 
    image: web 
  },
  { 
    text: "🎬 Create Stunning Video Content", 
    description: "We craft engaging videos that bring your brand story to life and connect with your audience.", 
    image: video 
  },
  { 
    text: "🎨 Graphic Designs That Speak", 
    description: "From logos to marketing materials, our creative designs make your brand unforgettable.", 
    image: graphic 
  },
  { 
    text: "📈 Smart Digital Marketing Strategies", 
    description: "SEO, social media, and paid ads – we help you dominate the digital space and grow your brand.", 
    image: marketing 
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark-mode")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Desktop View */}
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
            transition={{ duration: 0.8, ease: "easeInOut"}}
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

      {/* Mobile View */}
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
      ease: [0.6, -0.05, 0.01, 0.99], // Smooth easing curve
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

      <div className="hidden md:flex flex-col items-center justify-center py-12">
<p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
  Experience seamless digital growth with our expert services!
</p>
</div>

{/* Mobile Screen View (Only visible on small screens) */}
<div className="md:hidden flex flex-col items-center justify-center py-6 px-4">
<p className="text-lg mt-3 text-gray-600 dark:text-gray-400 text-center">
  Let’s take your brand to the next level. 
</p>
</div>

    </div>
  );
};

export default Hero;
