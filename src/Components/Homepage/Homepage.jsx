import React, { useState, useEffect } from 'react';
import web from '../../assets/web.png';
import video from '../../assets/video.png';
import graphic from '../../assets/graphic.jpg';
import marketing from '../../assets/marketing.jpg';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: web,
      text: 'Find your place on the web',
    },
    {
      image: video,
      text: 'Create stunning videos',
    },
    {
      image: graphic,
      text: 'Design that speaks volumes',
    },
    {
      image: marketing,
      text: 'Grow your business online',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Debugging: Log the current slide and image URL
  console.log('Current Slide:', currentSlide);
  console.log('Image URL:', slides[currentSlide].image);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `url(${slides[currentSlide].image})`,
          height: '100vh', // Ensure the div takes the full viewport height
          width: '100%',  // Ensure the div takes the full width
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            {slides[currentSlide].text}
          </h1>
        </div>
      </div>

      {/* Add the rest of your homepage content below the carousel */}
    </div>
  );
};

export default Homepage;