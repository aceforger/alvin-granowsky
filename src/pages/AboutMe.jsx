import React, { useEffect, useRef, useState } from 'react';
import { FaBookOpen, FaRainbow, FaHeart, FaStar, FaQuoteLeft, FaQuoteRight, FaUserFriends, FaChalkboardTeacher, FaGlobeAmericas, FaShieldAlt, FaRegHeart, FaFeatherAlt, FaHandHoldingHeart } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

// Import components
import NavigationBar from './NavigationBar';
import BookTrailer from './BookTrailer';
import ImageGallery from './ImageGallery';
import Events from './Events';
import PressRelease from './PressRelease';

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Book Reviewer, LGBTQ+ Literary Journal",
    quote: "Alvin Granowsky writes with such raw honesty and compassion. His portrayal of Glen and Keith's relationship is both heartbreaking and hopeful. A must-read for anyone who believes in the power of love to overcome prejudice.",
    rating: 5,
    avatar: "/images/reviewer1.jpg",
    location: "New York, NY"
  },
  {
    id: 2,
    name: "Michael Torres",
    role: "English Teacher & Advocate",
    quote: "As an educator, I appreciate how Granowsky tackles difficult subjects with sensitivity and grace. These books should be in every high school library. They save lives by showing young LGBTQ+ people that they are not alone.",
    rating: 5,
    avatar: "/images/reviewer2.jpg",
    location: "Los Angeles, CA"
  },
  {
    id: 3,
    name: "Dr. Patricia Chen",
    role: "Professor of LGBTQ+ Studies",
    quote: "Granowsky's work bridges an important gap in contemporary literature. He writes about older gay couples with authenticity and depth - a perspective too rarely seen. A powerful voice for representation.",
    rating: 5,
    avatar: "/images/reviewer3.jpg",
    location: "Chicago, IL"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Goodreads Top Reviewer",
    quote: "I couldn't put it down. The Crisis Year had me crying, laughing, and cheering. Finally, a story about two men in love that feels real, messy, and absolutely beautiful.",
    rating: 5,
    avatar: "/images/reviewer4.jpg",
    location: "Austin, TX"
  }
];

// Pride Stats
const prideStats = [
  { icon: <FaUserFriends />, value: "500+", label: "Readers Reached", color: "pink" },
  { icon: <FaStar />, value: "4.9", label: "Average Rating", color: "yellow" },
  { icon: <FaGlobeAmericas />, value: "15+", label: "Countries", color: "green" },
  { icon: <FaHeart />, value: "100%", label: "Authentic Voices", color: "red" }
];

function AboutMe() {
  const navigate = useNavigate();
  const location = useLocation();
  const aboutRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [location.pathname]);
  
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 min-h-screen">
      {/* Animated Rainbow Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 via-indigo-600/20 via-blue-600/20 via-green-600/20 via-yellow-600/20 to-red-600/20 animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
      </div>
      
      <NavigationBar />
      
      {/* Hero Section with Pride Theme */}
      <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center pt-16">
        {/* Dark rainbow gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-indigo-900/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>

        {/* Background image */}
        <div className="absolute inset-0 bg-gray-950 mt-10">
          <img 
            src="/images/alvin.png" 
            alt="Alvin Granowsky" 
            className="w-full h-full object-contain object-center opacity-70"
          />
        </div>

        {/* Floating Pride Particles */}
        <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
          {[...Array(20)].map((_, i) => (
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

        {/* Centered content */}
        <div className="relative z-20 text-center text-white px-5 max-w-4xl">
          <div className="flex justify-center gap-2 mb-4 animate-bounce">
            <FaRainbow className="text-3xl text-pink-400" />
            <FaHeart className="text-3xl text-red-400" />
            <FaRainbow className="text-3xl text-purple-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Alvin Granowsky
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Teacher. Author. Advocate. <span className="text-pink-400">🏳️‍🌈</span>
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
          </div>
        </div>
     
      </section>

      {/* About Section with Pride Theme */}
      <div id="about" ref={aboutRef} className="max-w-7xl mx-auto px-5 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaRainbow className="text-pink-500 text-3xl animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-serif">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                About The Author
              </span>
            </h1>
            <FaRainbow className="text-purple-500 text-3xl animate-pulse" />
          </div>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Teacher, Author, and Advocate — Telling LGBTQ+ Stories That Matter
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Pride Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {prideStats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-4 text-center border border-purple-500/20 hover:border-pink-500/40 transition-all duration-300 group">
              <div className={`text-3xl mb-2 text-${stat.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-28">
          <div className="relative mt-10 lg:mt-20">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-pink-500/30">
              <img 
                src="/images/profile.png" 
                alt="Alvin Granowsky" 
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Rainbow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            {/* Decorative rainbow borders */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-3/4 h-3/4 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl opacity-30"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-400 to-blue-500 rounded-2xl opacity-20"></div>
            
            {/* Pride flag badge */}
            <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full p-2 shadow-xl">
              <FaRainbow className="text-white text-xl" />
            </div>
          </div>

          <div className="pt-0">
            <div className="flex items-center gap-2 mb-4">
              <FaHandHoldingHeart className="text-pink-400 text-xl" />
              <h2 className="text-2xl md:text-3xl font-serif bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                The Story Behind the Words
              </h2>
              <FaFeatherAlt className="text-purple-400 text-xl" />
            </div>

            <div className="space-y-4">
              <StoryCard 
                title="A Late Start, A Lasting Voice"
                content="Alvin Granowsky spent his twenties teaching and writing novels that never found their audience. His first published novel, <em>The Schoolteachers</em>, arrived as he approached thirty — only to fade quickly from view."
                color="pink"
              />
              
              <StoryCard 
                title="Finding His Path"
                content="That disappointment led him to give up fiction and pursue a doctorate in education at the University of Pennsylvania. There, he connected with a mentor who invited him to co-write a new reading series. <em>The Bookshops</em> — sixty paperback books for primary grades — became his first major success and launched a long career writing readers and textbooks for the school market."
                color="purple"
              />
              
              <StoryCard 
                title="A Career in Education"
                content="Granowsky went on to serve as Director of Reading/Language Arts for the public schools of Greensboro, NC, and Dallas, TX, and later as Vice President of Education for World Book Encyclopedia. Yet his greatest joy — aside from raising his three children — came from the many children's books he authored."
                color="indigo"
              />
              
              <StoryCard 
                title="Returning to the Heart of Storytelling"
                content="In 2009, largely retired, Granowsky returned to where he began: writing novels. <em>Teacher Accused: When Homophobia Explodes in a Texas Town</em> was published, bringing back all the excitement he first felt decades ago."
                color="blue"
              />
              
              <StoryCard 
                title="A Story That Demanded More"
                content="Four years later (2014), the sequel — <em>Our Lives Together: Two Men in Love</em> — was published, written in direct response to readers who wanted to know what happened to Glen and Keith, the two men at the heart of the story."
                color="pink"
              />
              
              <StoryCard 
                title="Beyond the Page"
                content="Alvin Granowsky has been a teacher and consultant to schools across the nation, as well as a consultant to the National PTA. He is deeply concerned with the homophobia plaguing our nation and the bullying that often targets young people perceived to be gay. A father of three, Alvin lives in Dallas, Texas, where he continues to write stories that speak to the heart of justice, love, and resilience."
                color="purple"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Section - LGBTQ+ Voices */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <FaQuoteLeft className="text-pink-400 text-2xl" />
              <h2 className="text-3xl md:text-4xl font-serif bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Reader Love
              </h2>
              <FaQuoteRight className="text-purple-400 text-2xl" />
            </div>
            <p className="text-purple-200 text-lg">What readers are saying about Alvin's work</p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mt-3"></div>
          </div>

          {/* Featured Testimonial Card */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-pink-500/30 shadow-2xl transition-all duration-500">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{testimonials[activeTestimonial].name}</h3>
                    <p className="text-xs text-purple-300">{testimonials[activeTestimonial].role}</p>
                    <p className="text-[10px] text-gray-500">{testimonials[activeTestimonial].location}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="absolute -top-2 -left-2 text-pink-500/20 text-3xl" />
                <p className="text-gray-300 leading-relaxed pl-6">
                  "{testimonials[activeTestimonial].quote}"
                </p>
              </div>
              
              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`transition-all duration-300 rounded-full ${
                      activeTestimonial === index 
                        ? 'w-8 h-2 bg-gradient-to-r from-pink-400 to-purple-400' 
                        : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {testimonials.slice(1, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:border-pink-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-[9px] text-purple-300">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-0.5 ml-auto">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-[10px]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pride Message Banner */}
        <div className="mt-16 bg-gradient-to-r from-pink-900/30 via-purple-900/30 to-indigo-900/30 rounded-2xl p-6 text-center border border-pink-500/20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <FaShieldAlt className="text-pink-400 text-xl" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold text-lg">A Message from Alvin</span>
            <FaHeart className="text-red-400 text-xl animate-pulse" />
          </div>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm leading-relaxed">
            "I believe that every love story deserves to be told. Every voice deserves to be heard. 
            Through my writing, I hope to shine a light on the beauty of LGBTQ+ love and the resilience 
            of the human spirit. We are all worthy of love, acceptance, and the freedom to be our authentic selves."
          </p>
          <div className="flex justify-center gap-1 mt-4">
            {['pink', 'purple', 'indigo', 'blue', 'green', 'yellow', 'red'].map((color, i) => (
              <div key={i} className={`w-2 h-2 rounded-full bg-${color}-400`}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating CTA Button with Pride Theme */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button 
          onClick={() => navigate('/home')}
          className="group relative bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full px-6 py-3 shadow-2xl flex items-center gap-3 transition-all duration-500 hover:shadow-pink-500/40 hover:-translate-y-1 overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <FaBookOpen size={18} className="relative z-10 group-hover:animate-pulse" />
          <span className="relative z-10">Explore His Work</span>
          <FaRainbow size={14} className="relative z-10" />
        </button>
      </div>
    </div>
  );
}

// StoryCard Component
const StoryCard = ({ title, content, color }) => {
  const borderColors = {
    pink: 'border-l-pink-500',
    purple: 'border-l-purple-500',
    indigo: 'border-l-indigo-500',
    blue: 'border-l-blue-500'
  };
  
  return (
    <div className={`border-l-4 ${borderColors[color]} pl-4 py-1 bg-gray-800/20 rounded-r-lg hover:bg-gray-800/30 transition-all duration-300`}>
      <p className="text-gray-300 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

// Add custom CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    25% { transform: translateY(-15px) translateX(5px); }
    75% { transform: translateY(10px) translateX(-5px); }
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
  
  .animate-gradient-xy {
    background-size: 400% 400%;
    animation: gradient-xy 15s ease infinite;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
document.head.appendChild(style);

export default AboutMe;