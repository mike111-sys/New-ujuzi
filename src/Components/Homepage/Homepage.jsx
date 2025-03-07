// Homepage.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar'; // Import the Navbar component

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col relative"> {/* Added relative positioning to the parent div */}
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex-grow flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-purple-700 p-6 md:p-8 text-center text-white mt-16 z-10"> {/* Ensure z-10 on Hero Section */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
          Transforming Ideas into <span className="text-yellow-300">Digital Masterpieces</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl">
          At Ujuzi Digital Creations, we specialize in crafting innovative digital solutions that drive growth and elevate brands. From stunning websites to captivating visuals and strategic marketing, we bring your vision to life.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-white text-blue-600 px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-gray-100 font-semibold">
            Explore Our Services
          </button>
          <button className="bg-transparent border-2 border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-white hover:text-blue-600 font-semibold">
            Get Started
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 py-8 md:py-12 mt-16 z-0"> {/* z-index set to 0 for services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Our Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Web Development</h3>
              <p className="text-sm md:text-base text-gray-600">
                We build responsive, user-friendly websites that deliver seamless experiences across all devices.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Graphic Design</h3>
              <p className="text-sm md:text-base text-gray-600">
                Our creative designs captivate audiences and communicate your brand’s story effectively.
              </p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Digital Marketing</h3>
              <p className="text-sm md:text-base text-gray-600">
                We craft data-driven strategies to boost your online presence and drive measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
