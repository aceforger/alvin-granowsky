import React, { useState, useEffect } from 'react';
import { 
  FaHome, 
  FaUser, 
  FaImages, 
  FaPlay, 
  FaBars, 
  FaCalendarAlt, 
  FaNewspaper,
  FaRainbow,
  FaHeart,
  FaRegHeart,
  FaBookOpen,
  FaEnvelope
} from 'react-icons/fa';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Dark Rainbow Pride Theme */}
      <nav className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-950/95 backdrop-blur-xl shadow-2xl border-b border-pink-500/30' 
          : 'bg-gray-950/80 backdrop-blur-md border-b border-pink-500/20'
      }`}>
        {/* Rainbow line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 via-blue-500 via-green-500 via-yellow-500 to-red-500"></div>
        
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-center py-3">
            {/* Logo with rainbow glow */}
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="relative">
                <img 
                  src="/images/alvinlogo.png" 
                  alt="Alvin Granowsky" 
                  className="h-11 w-11 rounded-full object-cover border-2 border-pink-400 shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-all duration-300"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur opacity-0 group-hover:opacity-40 transition duration-300"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold font-serif">
                  <span className="text-white">Alvin</span>
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"> Granowsky</span>
                </h2>
                <p className="text-[10px] text-purple-300 -mt-1 flex items-center gap-1">
                  <FaRainbow className="text-[8px]" /> LGBTQ+ Author
                </p>
              </div>
            </div>
            
            {/* Navigation Links with Rainbow Hover Effects */}
            <div className="flex space-x-1 lg:space-x-2">
              <NavButton onClick={() => scrollToSection('hero')} icon={<FaHome />} label="Home" color="pink" />
              <NavButton onClick={() => scrollToSection('about')} icon={<FaUser />} label="About" color="purple" />
              <NavButton onClick={() => scrollToSection('press')} icon={<FaBookOpen />} label="Press" color="indigo" />
              {/* <NavButton onClick={() => scrollToSection('contact')} icon={<FaEnvelope />} label="Contact" color="blue" /> */}
            </div>

            {/* Pride heart decoration */}
            <div className="flex items-center gap-1 opacity-70">
              <FaHeart className="text-pink-400 text-xs animate-pulse" />
              <FaRainbow className="text-purple-400 text-xs" />
              <FaRegHeart className="text-indigo-400 text-xs" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Dark Rainbow Pride Theme */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-gradient-to-r from-gray-900 to-gray-800 p-3 rounded-full shadow-2xl border border-pink-500/30 hover:border-pink-400 transition-all duration-300"
        >
          <FaBars className="text-pink-400 text-lg" />
        </button>
        
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className="absolute right-0 mt-2 w-56 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl shadow-2xl py-3 border border-pink-500/30 overflow-hidden">
              {/* Rainbow header */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
              
              {/* Menu Header */}
              <div className="px-4 py-2 border-b border-purple-500/20 mb-2">
                <div className="flex items-center gap-2">
                  <img 
                    src="/images/alvinlogo.png" 
                    alt="Alvin Granowsky" 
                    className="h-8 w-8 rounded-full object-cover border border-pink-400"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">Alvin Granowsky</p>
                    <p className="text-[9px] text-purple-300 flex items-center gap-1">
                      <FaRainbow className="text-[7px]" /> LGBTQ+ Stories
                    </p>
                  </div>
                </div>
              </div>
              
              <MobileNavButton 
                onClick={() => scrollToSection('hero')} 
                icon={<FaHome />} 
                label="Home" 
                color="pink"
              />
              <MobileNavButton 
                onClick={() => scrollToSection('about')} 
                icon={<FaUser />} 
                label="About" 
                color="purple"
              />
              {/* <MobileNavButton 
                onClick={() => scrollToSection('featured-books')} 
                icon={<FaBookOpen />} 
                label="Books" 
                color="indigo"
              />
              <MobileNavButton 
                onClick={() => scrollToSection('contact')} 
                icon={<FaEnvelope />} 
                label="Contact" 
                color="blue"
              /> */}
              
              {/* Pride Footer */}
              <div className="mt-3 pt-2 border-t border-purple-500/20 px-4">
                <p className="text-[9px] text-gray-500 flex items-center justify-center gap-1">
                  <FaHeart className="text-pink-500 text-[8px]" /> Love is Love <FaRainbow className="text-purple-400 text-[8px]" />
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

// Desktop Navigation Button Component
const NavButton = ({ onClick, icon, label, color }) => {
  const colorClasses = {
    pink: 'hover:text-pink-400 group-hover:text-pink-400',
    purple: 'hover:text-purple-400 group-hover:text-purple-400',
    indigo: 'hover:text-indigo-400 group-hover:text-indigo-400',
    blue: 'hover:text-blue-400 group-hover:text-blue-400'
  };

  const borderColors = {
    pink: 'group-hover:border-pink-400',
    purple: 'group-hover:border-purple-400',
    indigo: 'group-hover:border-indigo-400',
    blue: 'group-hover:border-blue-400'
  };

  return (
    <button 
      onClick={onClick}
      className={`group relative px-3 lg:px-4 py-2 text-gray-300 ${colorClasses[color]} transition-all duration-300 rounded-lg overflow-hidden`}
    >
      <span className="relative z-10 flex items-center gap-2 text-sm lg:text-base">
        {icon} {label}
      </span>
      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent ${borderColors[color]} transition-all duration-300`}></span>
    </button>
  );
};

// Mobile Navigation Button Component
const MobileNavButton = ({ onClick, icon, label, color }) => {
  const colorClasses = {
    pink: 'hover:bg-pink-500/10 hover:text-pink-400',
    purple: 'hover:bg-purple-500/10 hover:text-purple-400',
    indigo: 'hover:bg-indigo-500/10 hover:text-indigo-400',
    blue: 'hover:bg-blue-500/10 hover:text-blue-400'
  };

  const iconColors = {
    pink: 'text-pink-400',
    purple: 'text-purple-400',
    indigo: 'text-indigo-400',
    blue: 'text-blue-400'
  };

  return (
    <button 
      onClick={onClick}
      className={`block w-full text-left px-4 py-2.5 text-gray-300 ${colorClasses[color]} transition-all duration-200 border-l-2 border-transparent hover:border-current`}
    >
      <span className={`inline-block mr-3 ${iconColors[color]}`}>
        {icon}
      </span>
      {label}
    </button>
  );
};

export default NavigationBar;