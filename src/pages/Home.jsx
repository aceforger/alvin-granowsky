import { useState, useEffect } from "react";
import { FaSearch, FaArrowUp, FaBook, FaBookOpen, FaStar } from "react-icons/fa";
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
    { id: '3', title: "Teacher Accused: When Homophobia Explodes in a Texas Town", type: "book", image: "/images/teacher-accused.png", path: "/bookdetails/3", status: "available" },
    { id: '4', title: "The Schoolteachers", type: "book", image: "/images/schoolteachers.png", path: "", status: "coming-soon" },
    
    // eBook versions
    { id: '1', title: "Our Lives Together: Two Men in Love", type: "ebook", image: "/images/live-together", path: "/ebook/1", status: "available" },
    { id: '2', title: "Two Men in Love: The Crisis Year", type: "ebook", image: "/images/two-mean", path: "/ebook/2", status: "available" },
    { id: '3', title: "Teacher Accused: When Homophobia Explodes in a Texas Town", type: "ebook", image: "/images/teacher-accused.png", path: "/ebook/3", status: "available" },
    { id: '4', title: "The Schoolteachers", type: "ebook", image: "/images/schoolteachers.png", path: "", status: "coming-soon" },
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
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-[100] py-2 px-4 md:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <img
            onClick={() => navigate("/")}
            src="/images/davidlogo.png"
            alt="Alvin Granowsky"
            className="h-10 md:h-12 w-auto cursor-pointer hover:opacity-80 transition"
          />
          
          {/* Navigation */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => {
                const element = document.getElementById('featured-books');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 md:gap-2 text-gray-700 hover:text-sky-600 transition-colors group"
            >
              <img src="/images/book.gif" alt="Books" className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium text-xs md:text-sm">Books</span>
            </button>
            
            <button
              onClick={() => {
                const element = document.getElementById('ebooks-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 md:gap-2 text-gray-700 hover:text-sky-600 transition-colors group"
            >
              <img src="/images/ebook.gif" alt="EBooks" className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium text-xs md:text-sm">EBooks</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search books or ebooks..."
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
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          item.type === 'book' 
                            ? 'bg-sky-100 text-sky-800' 
                            : 'bg-sky-100 text-sky-800'
                        }`}>
                          {item.type === 'book' ? '📖 Book' : '📱 eBook'}
                        </span>
                        {item.status === "coming-soon" && (
                          <span className="text-[10px] bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full">
                            Soon
                          </span>
                        )}
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
          className={`relative h-screen max-h-[700px] overflow-hidden transition-all duration-1000 ${
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
                  onClick={() => {
                    const element = document.getElementById('featured-books');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaBook /> Browse Books
                  </span>
                </button>
                
                <button
                  onClick={() => {
                    const element = document.getElementById('ebooks-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaBookOpen /> Explore EBooks
                  </span>
                </button>
              </div>
              
              {/* Stats Bar */}
              <div className="mt-12 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-white">3+</div>
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

        {/* Featured Books Section - Warm Theme */}
        <section id="featured-books" className="py-12 px-4 bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaBook className="text-sky-600 text-3xl" />
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">
                Featured <span className="text-sky-600">Books</span>
              </h2>
            </div>
            <p className="text-sky-700 text-lg mb-3">📖 Physical copies for your collection</p>
            <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Book 1 - Our Lives Together */}
            <div
              onClick={() => navigate(`/bookdetails/1`)}
              className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-2 transition-all h-[400px] bg-sky-50 border-2 border-sky-200 hover:border-sky-400"
            >
              <div className="absolute top-2 right-2 z-30 bg-sky-600 text-white text-[10px] px-2 py-1 rounded-full shadow-lg">
                📖 Book
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                <h3 className="text-lg font-bold text-white mb-1 font-serif">Our Lives Together</h3>
                <p className="text-sm text-gray-200">Two Men in Love</p>
              </div>
              <img
                src="/images/live-together"
                alt="Our Lives Together"
                className="absolute inset-0 w-full h-full object-cover p-0 group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Book 2 - Two Men in Love: The Crisis Year */}
            <div
              onClick={() => navigate(`/bookdetails/2`)}
              className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-2 transition-all h-[400px] bg-sky-50 border-2 border-sky-200 hover:border-sky-400"
            >
              <div className="absolute top-2 right-2 z-30 bg-sky-600 text-white text-[10px] px-2 py-1 rounded-full shadow-lg">
                📖 Book
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                <h3 className="text-lg font-bold text-white mb-1 font-serif">Two Men in Love</h3>
                <p className="text-sm text-gray-200">The Crisis Year</p>
              </div>
              <img
                src="/images/two-mean"
                alt="Two Men in Love"
                className="absolute inset-0 w-full h-full object-cover p-0 group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Book 3 - Teacher Accused */}
            <div
              onClick={() => navigate(`/bookdetails/3`)}
              className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-2 transition-all h-[400px] bg-sky-50 border-2 border-sky-200 hover:border-sky-400"
            >
              <div className="absolute top-2 right-2 z-30 bg-sky-600 text-white text-[10px] px-2 py-1 rounded-full shadow-lg">
                📖 Book
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                <h3 className="text-lg font-bold text-white mb-1 font-serif">Teacher Accused</h3>
                <p className="text-sm text-gray-200">When Homophobia Explodes in a Texas Town</p>
              </div>
              <img
                src="/images/teacher-accused.png"
                alt="Teacher Accused"
                className="absolute inset-0 w-full h-full object-cover p-0 group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* eBooks Section - Cool Purple Theme */}
        <section id="ebooks-section" className="py-12 px-4 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaBookOpen className="text-sky-600 text-3xl" />
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">
                Digital <span className="text-sky-600">EBooks</span>
              </h2>
            </div>
            <p className="text-sky-700 text-lg mb-3">📱 Read anywhere, anytime</p>
            <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* eBook 1 - Our Lives Together */}
            <div
              onClick={() => navigate(`/ebook/1`)}
              className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-2 transition-all h-[400px] bg-sky-50 border-2 border-sky-200 hover:border-sky-400"
            >
              <div className="absolute top-2 right-2 z-30 bg-sky-600 text-white text-[10px] px-2 py-1 rounded-full shadow-lg">
                📱 eBook
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                <h3 className="text-lg font-bold text-white mb-1 font-serif">Our Lives Together</h3>
                <p className="text-sm text-gray-200">Two Men in Love</p>
              </div>
              <img
                src="/images/live-together"
                alt="Our Lives Together eBook"
                className="absolute inset-0 w-full h-full object-cover p-0 group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* eBook 2 - Two Men in Love: The Crisis Year */}
            <div
              onClick={() => navigate(`/ebook/2`)}
              className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-2 transition-all h-[400px] bg-sky-50 border-2 border-sky-200 hover:border-sky-400"
            >
              <div className="absolute top-2 right-2 z-30 bg-sky-600 text-white text-[10px] px-2 py-1 rounded-full shadow-lg">
                📱 eBook
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                <h3 className="text-lg font-bold text-white mb-1 font-serif">Two Men in Love</h3>
                <p className="text-sm text-gray-200">The Crisis Year</p>
              </div>
              <img
                src="/images/two-mean"
                alt="Two Men in Love eBook"
                className="absolute inset-0 w-full h-full object-cover p-0 group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* eBook 3 - Teacher Accused */}
            <div
              onClick={() => navigate(`/ebook/3`)}
              className="group relative rounded-xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-2 transition-all h-[400px] bg-sky-50 border-2 border-sky-200 hover:border-sky-400"
            >
              <div className="absolute top-2 right-2 z-30 bg-sky-600 text-white text-[10px] px-2 py-1 rounded-full shadow-lg">
                📱 eBook
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                <h3 className="text-lg font-bold text-white mb-1 font-serif">Teacher Accused</h3>
                <p className="text-sm text-gray-200">When Homophobia Explodes in a Texas Town</p>
              </div>
              <img
                src="/images/teacher-accused.png"
                alt="Teacher Accused eBook"
                className="absolute inset-0 w-full h-full object-cover p-0 group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-gray-100 py-5 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <img onClick={() => navigate('/')} src="/images/davidlogo.png" alt="Alvin Granowsky" className="h-12 mb-4 rounded-2xl cursor-pointer" />
              <p className="text-gray-300">
                Stories of love, justice, and resilience from Alvin Granowsky — teacher, author, and advocate.
              </p>
            </div>
            
            {/* Explore */}
            <div>
              <h4 className="text-lg border-b font-semibold mb-4 text-white">Explore</h4>
              <ul className="space-y-2">
                <li><button onClick={() => {
                  const element = document.getElementById('featured-books');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} className="text-gray-300 hover:text-amber-300 transition-colors">📖 Books</button></li>
                <li><button onClick={() => {
                  const element = document.getElementById('ebooks-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }} className="text-gray-300 hover:text-purple-300 transition-colors">📱 eBooks</button></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="border-b text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/')} className="text-gray-300 hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => navigate('/contactus')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            {/* Connect */}
            <div>
              <h4 className="border-b text-lg font-semibold mb-0 text-white">Connect</h4>
              <div className="flex gap-4 mb-4"></div>
              <p className="text-gray-300 text-sm">alvin.granowsky@example.com</p>
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