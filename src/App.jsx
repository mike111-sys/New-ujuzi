import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Homepage from './Components/Homepage/Homepage';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import Clients from './Components/Clients/Clients';
import Reviews from './Components/Reviews/Reviews';
import Loader from './Components/Loader/Loader';

// Wrap the main App content in a separate component to use `useLocation`
const AppContent = ({ isDarkMode, setIsDarkMode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 1-second loading time

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading ? (
        <Loader isDarkMode={isDarkMode} />
      ) : (
        <>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero isDarkMode={isDarkMode} />
                  <Homepage isDarkMode={isDarkMode} />
                </>
              }
            />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route path="/services" element={<Services isDarkMode={isDarkMode} />} />
            <Route path="/why-choose-us" element={<WhyChooseUs isDarkMode={isDarkMode} />} />
            <Route path="/clients" element={<Clients isDarkMode={isDarkMode} />} />
            <Route path="/reviews" element={<Reviews isDarkMode={isDarkMode} />} />
          </Routes>
          <Footer isDarkMode={isDarkMode} />
        </>
      )}
    </>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <Router>
        <AppContent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </Router>
    </div>
  );
};

export default App;
