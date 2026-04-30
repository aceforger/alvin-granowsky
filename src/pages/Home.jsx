import { useState, useEffect } from "react";
import { FaSearch, FaArrowUp, FaBook, FaBookOpen, FaStar, FaHeart, FaUsers, FaTrophy, FaHome } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

// Simple reusable popup
function Popup({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg w-[240px] text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Coming Soon 🚀</h2>
        <p className="text-gray-600 mb-3 text-sm leading-snug">
          This book is not available yet. Stay tuned!
        </p>
        <button
          onClick={onClose}
          className="bg-sky-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-sky-600 transition text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Scroll to top button component
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
          className="fixed bottom-8 right-8 z-50 bg-sky-500 text-white p-3 rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 hover:scale-110 animate-bounce"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
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
  const [setPopupBook] = useState(null);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Updated book data for Alvin Granowsky
  const allBooks = [
    { id: '1', title: "Our Lives Together: Two Men in Love", type: "book", image: "/images/live-together.jpg", path: "/bookdetails/1", status: "available" },
    { id: '2', title: "Two Men in Love: The Crisis Year", type: "book", image: "/images/two-men.jpg", path: "/bookdetails/2", status: "available" },
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
      setPopupBook(item.title);
      setShowPopup(true);
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans overflow-x-hidden">
      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/100 backdrop-blur-sm shadow-lg z-[100] py-4 px-4 md:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
              <img 
                src="/images/alvinlogo.png" 
                alt="David Michael Ruiz" 
                className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
              />
              <h2 className="text-2xl font-bold text-gray-800 font-serif">
                Alvin <span className="text-red-500">Granowsky</span>
              </h2>
            </div>
          
          {/* Navigation */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Navigation items removed for cleaner look */}
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full border border-gray-300 rounded-full py-1.5 md:py-2 px-3 md:px-4 pr-8 md:pr-10 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-xs md:text-sm"
            />
            <FaSearch className="absolute right-2.5 md:right-3 top-2 md:top-3 text-gray-400 text-xs md:text-sm" />
            
            {/* Search Results Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 max-h-80 overflow-y-auto z-[101]">
                {searchResults.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleSearchItemClick(item)}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                  >
                    <img src={item.image} alt={item.title} className="w-6 h-6 object-contain" />
                    <div className="flex-1">
                      <p className="text-xs font-medium text-gray-800">{item.title}</p>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full bg-sky-100 text-sky-800`}>
                          📖 Book
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {showSearchResults && searchQuery && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 p-3 text-center text-gray-500 text-xs z-[101]">
                No results for "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Add padding to body content to prevent hiding under fixed header */}
      <div className="pt-[60px] md:pt-[72px]">
        {/* Hero Section */}
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
            
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${5 + Math.random() * 10}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center z-20 px-8 md:px-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 font-serif leading-tight">
                <span className="text-white">Discover Your Next</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Literary Adventure
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                Explore stories of love, resilience, and justice from{" "}
                <span className="text-amber-300 font-semibold">Alvin Granowsky</span>
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate(`/`)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaHome /> Home
                  </span>
                </button>
                <button
                  onClick={() => scrollToElementWithOffset('featured-books', 70)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaBook /> Browse Books
                  </span>
                </button>
              </div>
              
              {/* Stats Bar */}
              <div className="mt-12 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-white">2</div>
                  <div className="text-sm text-gray-300">Book Titles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-300">Happy Readers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">4.7</div>
                  <div className="text-sm text-gray-300">Avg Rating</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        </div>

        {/* Featured Books Section - Compact Dual Book Showcase with Smaller Images */}
        <section id="featured-books" className="py-12 px-4 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 scroll-mt-18">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <FaBookOpen className="text-sky-600 text-2xl" />
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-900">
                Featured <span className="text-sky-600">Collection</span>
              </h2>
              <FaBook className="text-sky-600 text-2xl" />
            </div>
            <p className="text-sky-700 text-base max-w-2xl mx-auto">
              Discover the complete two-book series from Alvin Granowsky
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-sky-400 to-sky-600 mx-auto rounded-full mt-3"></div>
          </div>

          {/* Dual Book Showcase - Compact Layout with Smaller Images */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Book 1 - Our Lives Together */}
              <div className="group relative">
                <div className="relative rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
                  {/* Book Type Badge */}
                  <div className="absolute top-3 left-3 z-30 bg-gradient-to-r from-sky-500 to-sky-600 text-white text-[10px] px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <FaBook className="text-[8px]" /> Physical
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 z-30 bg-amber-400 text-amber-900 text-[10px] px-1.5 py-1 rounded-full shadow-lg flex items-center gap-0.5 font-semibold">
                    <FaStar className="text-[8px]" /> 4.8
                  </div>
                  
                  {/* Image Container - Smaller height */}
                  <div className="relative h-70 overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100">
                    <img
                      src="/images/live-together.jpg"
                      alt="Our Lives Together"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Book Details - Compact */}
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold text-gray-800 mb-0.5 font-serif">Our Lives Together</h3>
                    <p className="text-sky-600 text-sm font-medium mb-2">Two Men in Love</p>
                    
                    {/* Short Description */}
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                      A heartfelt journey of two men navigating love, commitment, and the beautiful complexities of building a life together.
                    </p>
                    
                    {/* Key Features - Smaller */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded-full">📖 256 Pages</span>
                      <span className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded-full">❤️ Romance</span>
                      <span className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded-full">🏳️‍🌈 LGBTQ+</span>
                    </div>
                    
                    {/* Action Button - Smaller */}
                    <button
                      onClick={() => navigate(`/bookdetails/1`)}
                      className="w-full py-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg font-semibold text-sm hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
                    >
                      <FaBookOpen className="text-xs" /> Explore Book
                    </button>
                  </div>
                </div>
              </div>

              {/* Book 2 - Two Men in Love: The Crisis Year */}
              <div className="group relative">
                <div className="relative rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
                  {/* Book Type Badge */}
                  <div className="absolute top-3 left-3 z-30 bg-gradient-to-r from-sky-500 to-sky-600 text-white text-[10px] px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <FaBook className="text-[8px]" /> Physical
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 z-30 bg-amber-400 text-amber-900 text-[10px] px-1.5 py-1 rounded-full shadow-lg flex items-center gap-0.5 font-semibold">
                    <FaStar className="text-[8px]" /> 4.9
                  </div>
                  
                  {/* Image Container - Smaller height */}
                  <div className="relative h-70 overflow-hidden bg-gradient-to-br from-sky-100 to-blue-100">
                    <img
                      src="/images/two-men.jpg"
                      alt="Two Men in Love: The Crisis Year"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Book Details - Compact */}
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-bold text-gray-800 mb-0.5 font-serif">Two Men in Love</h3>
                    <p className="text-sky-600 text-sm font-medium mb-2">The Crisis Year</p>
                    
                    {/* Short Description */}
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                      The gripping sequel that follows our protagonists through their most challenging year yet, testing the bonds of their love.
                    </p>
                    
                    {/* Key Features - Smaller */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded-full">📖 302 Pages</span>
                      <span className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded-full">💔 Drama</span>
                      <span className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded-full">🏳️‍🌈 LGBTQ+</span>
                    </div>
                    
                    {/* Action Button - Smaller */}
                    <button
                      onClick={() => navigate(`/bookdetails/2`)}
                      className="w-full py-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg font-semibold text-sm hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
                    >
                      <FaBookOpen className="text-xs" /> Explore Book
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Series Description Banner - Compact */}
            <div className="mt-8 bg-gradient-to-r from-sky-100 to-blue-100 rounded-xl p-4 text-center shadow-sm">
              <div className="flex items-center justify-center gap-2 mb-1">
                <FaHeart className="text-rose-500 text-sm" />
                <span className="font-semibold text-gray-700 text-sm">Complete Series</span>
                <FaHeart className="text-rose-500 text-sm" />
              </div>
              <p className="text-gray-700 text-xs max-w-2xl mx-auto">
                Experience the full emotional journey of love, resilience, and growth with both books in this acclaimed series. 
                Perfect for readers who appreciate authentic LGBTQ+ romance.
              </p>
              <div className="flex items-center justify-center gap-4 mt-2 text-xs text-gray-600">
                <span className="flex items-center gap-1"><FaUsers className="text-sky-500 text-xs" /> 500+ Readers</span>
                <span className="flex items-center gap-1"><FaTrophy className="text-amber-500 text-xs" /> Bestseller</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-gray-100 py-5 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <img onClick={() => navigate('/')} src="/images/alvinlogo.png" alt="Alvin Granowsky" className="h-12 mb-4 rounded-2xl cursor-pointer" />
              <p className="text-gray-300">
                Stories of love, justice, and resilience from Alvin Granowsky — teacher, author, and advocate.
              </p>
            </div>
            
            {/* Explore */}
            <div>
              <h4 className="text-lg border-b font-semibold mb-4 text-white">Explore</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToElementWithOffset('featured-books', 80)} className="text-gray-300 hover:text-amber-300 transition-colors">📖 Books</button></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="border-b text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/contactus')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            {/* Connect */}
            <div>
              <h4 className="border-b text-lg font-semibold mb-0 text-white">Connect</h4>
              <div className="flex gap-4 mb-4"></div>
              <p className="text-gray-300 text-sm">algranowsky@hotmail.com</p>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-blue-700 mt-10 pt-5 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Alvin Granowsky. All rights reserved.</p>
          </div>
        </footer>
      </div>
      
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;