import React, { useEffect, useRef } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

// Import components
import NavigationBar from './NavigationBar';
import BookTrailer from './BookTrailer';
import ImageGallery from './ImageGallery';
import Events from './Events';
import PressRelease from './PressRelease';

function AboutMe() {
  const navigate = useNavigate();
  const location = useLocation();
  const aboutRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="bg-white">
      <NavigationBar />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center pt-16">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Background image */}
        <div className="absolute inset-0 bg-black mt-10">
          <img 
            src="/images/alvin.png" 
            alt="David Michael Ruiz" 
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Centered content */}
        <div className="relative z-20 text-center text-white px-5 max-w-4xl">
          {/* Optional button */}
        </div>
      </section>

      
      {/* About Section */}
      <div id="about" ref={aboutRef} className="max-w-7xl mx-auto px-5 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6 relative inline-block">
            <span className="relative">
              About The Author
              <span className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Teacher, Author, and Advocate — Telling Stories That Matter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-28">
          <div className="relative mt-20">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/images/profile.png" 
                alt="Alvin Granowsky" 
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-3/4 h-3/4 border-4 border-orange-400 rounded-xl"></div>
          </div>

          <div className="pt-0">
            <h2 className="text-3xl font-serif text-gray-800 mb-8">
              The Story Behind the Words
            </h2>

            <div className="space-y-3">
              <p className="text-lg leading-relaxed text-gray-600">
                <strong className="text-gray-800">A Late Start, A Lasting Voice</strong><br />
                Alvin Granowsky spent his twenties teaching and writing novels that never found their audience. His first published novel, <em>The Schoolteachers</em>, arrived as he approached thirty — only to fade quickly from view.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                That disappointment led him to give up fiction and pursue a doctorate in education at the University of Pennsylvania. There, he connected with a mentor who invited him to co-write a new reading series. <em>The Bookshops</em> — sixty paperback books for primary grades — became his first major success and launched a long career writing readers and textbooks for the school market.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                <strong className="text-gray-800">A Career in Education</strong><br />
                Granowsky went on to serve as Director of Reading/Language Arts for the public schools of Greensboro, NC, and Dallas, TX, and later as Vice President of Education for World Book Encyclopedia. Yet his greatest joy — aside from raising his three children — came from the many children’s books he authored.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                <strong className="text-gray-800">Returning to the Heart of Storytelling</strong><br />
                In 2009, largely retired, Granowsky returned to where he began: writing novels. <em>Teacher Accused: When Homophobia Explodes in a Texas Town</em> was published, bringing back all the excitement he first felt decades ago.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                <strong className="text-gray-800">A Story That Demanded More</strong><br />
                Four years later (2014), the sequel — <em>Our Lives Together: Two Men in Love</em> — was published, written in direct response to readers who wanted to know what happened to Glen and Keith, the two men at the heart of the story.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                <strong className="text-gray-800">Beyond the Page</strong><br />
                Alvin Granowsky has been a teacher and consultant to schools across the nation, as well as a consultant to the National PTA. He is deeply concerned with the homophobia plaguing our nation and the bullying that often targets young people perceived to be gay. A father of three, Alvin lives in Dallas, Texas, where he continues to write stories that speak to the heart of justice, love, and resilience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Press Release Section */}
      {/* <PressRelease /> */}

      {/* Book Trailer Section */}
      {/* <BookTrailer /> */}

      {/* Events Section */}
      {/* <Events /> */}

      {/* Gallery Section */}
      {/* <ImageGallery /> */}

      {/* Floating CTA Button */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {/* <button 
        onClick={() => navigate('/more-about-david')}
        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
      >
        <FaBookOpen size={18} />
        <span>Explore More</span>
      </button> */}

      <button 
        onClick={() => navigate('/home')}
        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full px-6 py-3 shadow-xl flex items-center gap-3 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
      >
        <FaBookOpen size={18} />
        <span>Explore His Work</span>
      </button>
    </div>
    </div>
  );
}

export default AboutMe;