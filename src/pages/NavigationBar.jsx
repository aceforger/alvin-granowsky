import React, { useState } from 'react';
import { FaHome, FaUser, FaImages, FaPlay, FaBars, FaCalendarAlt, FaNewspaper } from 'react-icons/fa';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-center py-4">
            {/* Updated: Add image alongside text */}
            <div className="flex items-center space-x-3">
              <img 
                src="/images/alvinlogo.png" 
                alt="David Michael Ruiz" 
                className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
              />
              <h2 className="text-2xl font-bold text-gray-800 font-serif">
                Alvin <span className="text-red-500">Granowsky</span>
              </h2>
            </div>
            
            <div className="flex space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <FaHome className="inline mr-2" /> Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <FaUser className="inline mr-2" /> About
              </button>
              {/* <button 
                onClick={() => scrollToSection('press')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <FaNewspaper className="inline mr-2" /> Press
              </button> */}
              {/* <button 
                onClick={() => scrollToSection('trailer')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <FaPlay className="inline mr-2" /> Trailer
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <FaCalendarAlt className="inline mr-2" /> Events
              </button> */}
              {/* <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                <FaImages className="inline mr-2" /> Gallery
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white p-3 rounded-full shadow-lg"
        >
          <FaBars className="text-gray-800" />
        </button>
        
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <FaHome className="inline mr-2" /> Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <FaUser className="inline mr-2" /> About
            </button>
            {/* <button 
              onClick={() => scrollToSection('press')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <FaNewspaper className="inline mr-2" /> Press
            </button> */}
            <button 
              onClick={() => scrollToSection('trailer')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <FaPlay className="inline mr-2" /> Trailer
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <FaCalendarAlt className="inline mr-2" /> Events
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              <FaImages className="inline mr-2" /> Gallery
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NavigationBar;