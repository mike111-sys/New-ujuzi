import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Homepage from './Components/Homepage/Homepage';
import Footer from './Components/Footer/Footer';

const App = () => {
  // Get dark mode preference from localStorage or default to true
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || !localStorage.getItem('darkMode');
  });

  // Apply dark mode class to <html> on load and when toggled
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
    // Store preference in localStorage
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-5 right-5 px-4 py-2 rounded-md shadow-md transition-all duration-300 
        bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Page Components */}
      <Navbar />
      <Hero />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
