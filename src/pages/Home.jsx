import { useState, useEffect } from "react";
import { FaSearch, FaArrowUp, FaBook, FaBookOpen, FaStar, FaHeart, FaUsers, FaTrophy, FaHome, FaRainbow, FaHandHoldingHeart, FaFeatherAlt, FaGlasses, FaQuoteLeft, FaRegHeart, FaBell } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

// Simple reusable popup with rainbow theme
function Popup({ onClose, bookTitle }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-4 rounded-2xl shadow-2xl w-[260px] text-center border border-purple-500/30">
        <div className="text-4xl mb-2 animate-pulse">🌈</div>
        <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-2">Coming Soon 🚀</h2>
        <p className="text-gray-300 mb-3 text-sm leading-snug">
          "{bookTitle}" is not available yet. Stay tuned!
        </p>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 text-sm shadow-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Scroll to top button component with rainbow theme
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 group-hover:animate-pulse" />
        </button>
      )}
    </>
  );
}

// Helper function to scroll to element with offset
const scrollToElementWithOffset = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showPopup, setShowPopup] = useState(false);
  const [popupBookTitle, setPopupBookTitle] = useState("");
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Updated book data with LGBTQ+ themes - Both books are now available
  const allBooks = [
    { id: '1', title: "Our Lives Together: Two Men in Love", type: "book", image: "/images/live-together.png", path: "/bookdetails/1", status: "available" },
    { id: '2', title: "Two Men in Love: The Crisis Year", type: "book", image: "/images/two-men.png", path: "/bookdetails/2", status: "available" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setHeroLoaded(true), 300);
  }, [location.pathname]);

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setSearchResults([]);
      setShowSearchResults(false);
    } else {
      const results = allBooks.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
    }
  };

  const handleSearchItemClick = (item) => {
    setShowSearchResults(false);
    setSearchQuery("");
    
    if (item.status === "coming-soon" || item.path === "") {
      setPopupBookTitle(item.title);
      setShowPopup(true);
    } else {
      navigate(item.path);
    }
  };

  const handleBookClick = (book) => {
    if (book.status === "coming-soon") {
      setPopupBookTitle(book.title);
      setShowPopup(true);
    } else {
      navigate(book.path);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 text-gray-100 font-sans overflow-x-hidden min-h-screen">
      {/* Animated Rainbow Background Gradient */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 via-indigo-600/20 via-blue-600/20 via-green-600/20 via-yellow-600/20 to-red-600/20 animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Header with Glassmorphism and Rainbow Border */}
      <header className="fixed top-0 left-0 right-0 bg-gray-950/80 backdrop-blur-xl shadow-2xl z-[100] py-3 px-4 md:px-8 border-b border-pink-500/30">
        {/* Rainbow line under header */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 via-blue-500 via-green-500 via-yellow-500 to-red-500"></div>
        
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          {/* Logo with rainbow glow */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => navigate('/')}>
            <div className="relative">
              <img 
                src="/images/alvinlogo.png" 
                alt="David Michael Ruiz" 
                className="h-10 w-10 rounded-full object-cover border-2 border-pink-400 shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-all duration-300"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold font-serif">
                <span className="text-white">Alvin</span>
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"> Granowsky</span>
              </h2>
              <p className="text-[10px] text-gray-400 -mt-1">LGBTQ+ Author • Storyteller</p>
            </div>
          </div>
          
          {/* Rainbow Pride Icons Decorative */}
          <div className="hidden md:flex items-center gap-1 opacity-60">
            <FaRainbow className="text-pink-400 text-xs" />
            <FaRainbow className="text-purple-400 text-xs" />
            <FaRainbow className="text-indigo-400 text-xs" />
            <FaHeart className="text-red-400 text-xs" />
          </div>

          {/* Search Bar with rainbow focus */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search LGBTQ+ stories..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full bg-gray-900/80 border border-purple-500/30 rounded-full py-1.5 md:py-2 px-3 md:px-4 pr-8 md:pr-10 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-xs md:text-sm text-white placeholder-gray-400"
            />
            <FaSearch className="absolute right-2.5 md:right-3 top-2 md:top-3 text-purple-400 text-xs md:text-sm" />
            
            {/* Search Results Dropdown with dark theme */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-900 rounded-xl shadow-2xl border border-purple-500/30 max-h-80 overflow-y-auto z-[101]">
                {searchResults.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleSearchItemClick(item)}
                    className="flex items-center gap-2 p-2 hover:bg-purple-900/30 cursor-pointer border-b border-purple-500/20 last:border-b-0 transition-colors"
                  >
                    <img src={item.image} alt={item.title} className="w-6 h-6 object-contain rounded" />
                    <div className="flex-1">
                      <p className="text-xs font-medium text-gray-200">{item.title}</p>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${item.status === 'coming-soon' ? 'bg-amber-500/20 text-amber-300' : 'bg-pink-500/20 text-pink-300'}`}>
                          {item.status === 'coming-soon' ? '🔜 Coming Soon' : '📖 Available Now'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {showSearchResults && searchQuery && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-900 rounded-xl shadow-2xl border border-purple-500/30 p-3 text-center text-gray-400 text-xs z-[101]">
                No results for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Add padding to body content */}
      <div className="pt-[60px] md:pt-[72px]">
        {/* Hero Section with Rainbow Overlay */}
        <div
          className={`relative h-screen max-h-[704px] overflow-hidden transition-all duration-1000 ${
            heroLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-105 transform transition-transform duration-[20s] hover:scale-110"
            >
              <source src="/images/particles.mp4" type="video/mp4" />
            </video>
            
            {/* Rainbow Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 via-purple-900/50 via-indigo-900/50 to-blue-900/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
            
            {/* Floating Pride Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`,
                    background: `hsl(${Math.random() * 360}, 100%, 60%)`,
                    boxShadow: `0 0 10px hsl(${Math.random() * 360}, 100%, 60%)`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hero Content with Rainbow Text */}
          <div className="absolute inset-0 flex items-center z-20 px-8 md:px-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <FaRainbow className="text-3xl text-pink-400 animate-pulse" />
                <span className="text-sm uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 font-semibold">LGBTQ+ Voices</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold mb-4 font-serif leading-tight">
                <span className="text-white">Discover Your Next</span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 via-indigo-400 via-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                  LGBTQ+ Literary Adventure
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                Explore powerful stories of love, resilience, and justice from{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold">Alvin Granowsky</span>
              </p>
              
              {/* CTA Buttons with Rainbow Themes */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate(`/`)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaRegHeart className="group-hover:animate-pulse" /> Home
                  </span>
                </button>
                <button
                  onClick={() => scrollToElementWithOffset('featured-books', 70)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaBookOpen /> Browse Books
                  </span>
                </button>
              </div>
              
              {/* Stats Bar with Rainbow Highlights */}
              <div className="mt-12 flex gap-8">
                <div className="group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition">2</div>
                  <div className="text-sm text-gray-300">Book Titles</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent group-hover:scale-105 transition">500+</div>
                  <div className="text-sm text-gray-300">Happy Readers</div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition">4.9</div>
                  <div className="text-sm text-gray-300">Avg Rating</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Gradient with Rainbow */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 via-purple-950/50 to-transparent"></div>
        </div>

        {/* Featured Books Section - Dark Rainbow LGBTQ+ Theme */}
        <section id="featured-books" className="py-16 px-4 scroll-mt-18 relative">
          {/* Rainbow decorative background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-3xl"></div>
          </div>

          <div className="text-center mb-12 relative">
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaRainbow className="text-pink-500 text-3xl animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold font-serif">
                <span className="text-white">Pride</span>
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"> Collection</span>
              </h2>
              <FaRainbow className="text-purple-500 text-3xl animate-pulse" />
            </div>
            <p className="text-purple-200 text-base max-w-2xl mx-auto">
              Discover the complete two-book LGBTQ+ series celebrating love in all its forms
            </p>
            <div className="w-32 h-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Dual Book Showcase - Enhanced Dark Theme */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Book 1 - Now Available! */}
              <div className="group relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-gray-900 to-gray-800 border border-pink-500/30">
                  {/* Rainbow Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 via-blue-500 via-green-500 to-yellow-500 opacity-30 blur-sm"></div>
                  </div>
                  
                  {/* Book Type Badge - Now Available */}
                  <div className="absolute top-3 left-3 z-30 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] px-2 py-1 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm">
                    <FaBook className="text-[8px]" /> Available Now
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 z-30 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 text-[10px] px-1.5 py-1 rounded-full shadow-lg flex items-center gap-0.5 font-semibold backdrop-blur-sm">
                    <FaStar className="text-[8px]" /> 4.9 ★
                  </div>
                  
                  {/* LGBTQ+ Badge */}
                  {/* <div className="absolute bottom-3 left-3 z-30 bg-pink-500/80 text-white text-[10px] px-1.5 py-1 rounded-full shadow-lg flex items-center gap-0.5 font-semibold backdrop-blur-sm">
                    <FaHeart className="text-[8px]" /> LGBTQ+
                  </div> */}
                  
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-amber-900/20 to-yellow-900/10">
                    <img
                      src="/images/live-together.png"
                      alt="Our Lives Together"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-3"
                    />
                    {/* Glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Book Details */}
                  <div className="p-5 bg-gradient-to-br from-gray-900 to-gray-800">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent mb-1 font-serif">Our Lives Together</h3>
                    <p className="text-pink-400 text-sm font-medium mb-3 flex items-center gap-1">
                      <FaHandHoldingHeart className="text-xs" /> Two Men in Love
                    </p>
                    
                    <p className="text-gray-300 text-xs mb-4 line-clamp-2 leading-relaxed">
                      A heartfelt journey of two men navigating love, commitment, and the beautiful complexities of building a life together in a world that doesn't always understand.
                    </p>
                    
                    {/* Key Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[10px] bg-purple-900/50 text-purple-200 px-2 py-0.5 rounded-full border border-purple-500/30">📖 284 Pages</span>
                      <span className="text-[10px] bg-pink-900/50 text-pink-200 px-2 py-0.5 rounded-full border border-pink-500/30">❤️ Romance</span>
                      <span className="text-[10px] bg-indigo-900/50 text-indigo-200 px-2 py-0.5 rounded-full border border-indigo-500/30">🏳️‍🌈 LGBTQ+</span>
                    </div>
                    
                    {/* Action Button - Now navigates to book details */}
                    <button
                      onClick={() => handleBookClick(allBooks[0])}
                      className="w-full py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold text-sm hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30"
                    >
                      <FaBookOpen className="text-xs" /> Read Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Book 2 - Available with Pride Theme */}
              <div className="group relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-gray-900 to-gray-800 border border-pink-500/30">
                  {/* Rainbow Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 via-blue-500 via-green-500 to-yellow-500 opacity-30 blur-sm"></div>
                  </div>
                  
                  {/* Book Type Badge */}
                  <div className="absolute top-3 left-3 z-30 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] px-2 py-1 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm">
                    <FaBook className="text-[8px]" /> Available Now
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 z-30 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 text-[10px] px-1.5 py-1 rounded-full shadow-lg flex items-center gap-0.5 font-semibold backdrop-blur-sm">
                    <FaStar className="text-[8px]" /> 4.9 ★
                  </div>
                  
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-pink-900/20 to-blue-900/10">
                    <img
                      src="/images/two-men.png"
                      alt="Two Men in Love: The Crisis Year"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-3"
                    />
                    {/* Glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Book Details */}
                  <div className="p-5 bg-gradient-to-br from-gray-900 to-gray-800">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent mb-1 font-serif">Two Men in Love</h3>
                    <p className="text-purple-400 text-sm font-medium mb-3 flex items-center gap-1">
                      <FaFeatherAlt className="text-xs" /> The Crisis Year
                    </p>
                    
                    <p className="text-gray-300 text-xs mb-4 line-clamp-2 leading-relaxed">
                      The gripping sequel that follows our protagonists through their most challenging year yet, testing the bonds of their love and resilience.
                    </p>
                    
                    {/* Key Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[10px] bg-purple-900/50 text-purple-200 px-2 py-0.5 rounded-full border border-purple-500/30">📖 302 Pages</span>
                      <span className="text-[10px] bg-pink-900/50 text-pink-200 px-2 py-0.5 rounded-full border border-pink-500/30">💔 Drama</span>
                      <span className="text-[10px] bg-indigo-900/50 text-indigo-200 px-2 py-0.5 rounded-full border border-indigo-500/30">🏳️‍🌈 LGBTQ+</span>
                    </div>
                    
                    {/* Action Button */}
                    <button
                      onClick={() => handleBookClick(allBooks[1])}
                      className="w-full py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold text-sm hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-pink-500/30"
                    >
                      <FaBookOpen className="text-xs" /> Read Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Series Description Banner - Pride Theme */}
            <div className="mt-10 bg-gradient-to-r from-pink-900/30 via-purple-900/30 to-indigo-900/30 rounded-2xl p-5 text-center shadow-xl border border-pink-500/20 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaHeart className="text-pink-500 text-sm animate-pulse" />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 text-sm">Series Complete</span>
                <FaHeart className="text-purple-500 text-sm animate-pulse" />
              </div>
              <p className="text-gray-200 text-sm max-w-2xl mx-auto">
                Both books in the series are now available! Start with <span className="text-pink-300">"Our Lives Together: Two Men in Love"</span> and continue with the sequel <span className="text-purple-300">"The Crisis Year"</span>. Experience the complete journey of love and resilience.
              </p>
              <div className="flex items-center justify-center gap-6 mt-3 text-xs text-gray-300">
                <span className="flex items-center gap-1"><FaUsers className="text-pink-400 text-xs" /> 500+ Readers</span>
                <span className="flex items-center gap-1"><FaTrophy className="text-amber-400 text-xs" /> LGBTQ+ Bestseller</span>
                <span className="flex items-center gap-1"><FaQuoteLeft className="text-purple-400 text-xs" /> Critically Acclaimed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Dark Rainbow Pride Theme */}
        <footer className="bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 text-gray-100 py-8 px-4 md:px-8 border-t border-pink-500/30 relative">
          {/* Rainbow top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 via-blue-500 via-green-500 via-yellow-500 to-red-500"></div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3 cursor-pointer" onClick={() => navigate('/')}>
                <img src="/images/alvinlogo.png" alt="Alvin Granowsky" className="h-10 w-10 rounded-full object-cover border border-pink-400" />
                <div>
                  <h3 className="font-bold text-lg">Alvin Granowsky</h3>
                  <p className="text-[10px] text-purple-300">LGBTQ+ Author</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Stories of love, justice, and resilience from Alvin Granowsky — teacher, author, and advocate for LGBTQ+ voices.
              </p>
            </div>
            
            {/* Explore */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Explore</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToElementWithOffset('featured-books', 80)} className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2"><FaRainbow className="text-xs" /> Books</button></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Company</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/contactus')} className="text-gray-400 hover:text-purple-400 transition-colors">Contact</button></li>
              </ul>
            </div>
            
            {/* Connect & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Connect</h4>
              <div className="flex gap-3 mb-3">
                <a href="#" className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-pink-500 transition-colors border border-pink-500/30"><FaHeart className="text-pink-400 text-sm" /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-pink-500 transition-colors border border-purple-500/30"><FaRainbow className="text-purple-400 text-sm" /></a>
              </div>
              <p className="text-gray-400 text-sm">algranowsky@hotmail.com</p>
              <p className="text-gray-500 text-xs mt-2">🏳️‍🌈 Love is Love</p>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-purple-800/50 mt-8 pt-5 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Alvin Granowsky. All rights reserved. 🏳️‍🌈</p>
          </div>
        </footer>
      </div>
      
      {showPopup && <Popup onClose={() => setShowPopup(false)} bookTitle={popupBookTitle} />}

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(5px); }
          75% { transform: translateY(10px) translateX(-5px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;