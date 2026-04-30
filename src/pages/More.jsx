import React, { useEffect } from 'react';
import { 
  FaBookOpen, FaCross, FaGlobeAmericas, FaPrayingHands, 
  FaUserTie, FaGraduationCap, FaBriefcase, FaHeart,
  FaQuoteRight, FaStar, FaMapMarkerAlt, FaCalendarAlt,
  FaUsers, FaChurch, FaGlobe, FaHandsHelping
} from 'react-icons/fa';
import { GiTeacher, GiWorld, GiFamilyTree, GiScrollQuill } from 'react-icons/gi';
import { MdMilitaryTech, MdFamilyRestroom, MdOutlineLocationCity } from 'react-icons/md';
import { useNavigate, useLocation } from 'react-router-dom';

function More() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-blue-200 px-6 py-2 rounded-full border border-white/20">
                <FaStar className="text-yellow-400" />
                <span className="text-sm font-medium tracking-wider">AUTHOR • EDUCATOR • VISIONARY</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
              David Michael
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                Ruiz
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              A Life of Service, Faith, and Cultural Discovery
            </p>
            
            <div className="mt-12 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-300 rounded-full"></div>
            </div>
          </div>
        </div>
        
       
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Early Life Section */}
        <div className="mb-24 md:mb-32 scroll-reveal">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 p-5 rounded-2xl text-white shadow-xl">
                <MdFamilyRestroom className="text-4xl" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
                Early Life & Family
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="flex items-start gap-4">
                  <FaQuoteRight className="text-4xl text-blue-600 opacity-20" />
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    Born to <span className="font-semibold text-blue-800 bg-blue-50 px-2 py-1 rounded">Jesse and Obdulia F. Ruiz</span> on 
                    <span className="font-semibold"> January 1, 1953</span>, in Austin, Texas.
                  </p>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl">
                    <FaUsers className="text-blue-600" />
                    <span>Brother: <span className="font-semibold">Henry Richard Ruiz</span> (b. April 9, 1954)</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-xl">
                    <FaUsers className="text-indigo-600" />
                    <span>Sister: <span className="font-semibold">Gerylin Martinez</span> (b. November 28, 1960)</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <FaGraduationCap className="text-3xl text-blue-600" />
                  <h3 className="text-2xl font-serif text-gray-800">Education</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-4 border-blue-600">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCalendarAlt className="text-blue-600 text-sm" />
                      <span className="text-sm font-semibold text-blue-800">1972</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800">Antonian High School</p>
                    <p className="text-gray-600">Graduated with honors</p>
                  </div>
                  
                  <div className="relative pl-6 border-l-4 border-indigo-600">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCalendarAlt className="text-indigo-600 text-sm" />
                      <span className="text-sm font-semibold text-indigo-800">1976</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-800">St. Edward's University</p>
                    <p className="text-gray-600">156 credit hours • Psychology & English (Writing Focus)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/david.png" 
                  alt="David Michael Ruiz" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Military & Career Section */}
        <div className="mb-24 md:mb-32 scroll-reveal">
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 p-8 md:p-16 rounded-4xl shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                  <MdMilitaryTech className="text-4xl text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                    Military Service & Career
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <FaStar className="text-yellow-400" />
                      Military Commission
                    </h3>
                    <p className="text-gray-200">Received Air Force commission in 1980 • Separated as Captain</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <FaBriefcase className="text-blue-300" />
                      Career Journey
                    </h3>
                    <div className="space-y-3">
                      {[
                        'Investment Counselor - Commodities Investments',
                        'Classroom Teacher & Substitute Teacher',
                        'Administrative Officer - United States Air Force',
                        'Special Agent - United States Customs Service'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-200">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-gray-300 italic border-t border-white/20 pt-4">
                      Began working at age 14 • Retired June 2016
                    </p>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-serif text-white mb-6">A Son's Tribute</h3>
                  <div className="space-y-4 text-gray-200 leading-relaxed">
                    <p>
                      <span className="text-blue-300 font-semibold">"I emphasize the significance of my father's experience over my own."</span>
                    </p>
                    <p>
                      He holds deep respect for WWII veterans who answered the call of duty with unparalleled patriotism.
                    </p>
                    <div className="bg-white/10 p-4 rounded-xl border-l-4 border-blue-400 mt-4">
                      <p className="text-white">
                        Proud of his father's role as a <span className="font-semibold">mechanic and parts man in the United States Army</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faith & Influence Section */}
        <div className="mb-24 md:mb-32 scroll-reveal">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 p-5 rounded-2xl text-white shadow-xl">
                <FaCross className="text-4xl" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
                Faith & Spiritual Journey
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 md:p-10 rounded-3xl shadow-xl border border-blue-100">
              <FaPrayingHands className="text-5xl text-blue-600 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                He identifies as a service-related disabled veteran and a <span className="font-semibold text-blue-800 bg-blue-100 px-2 py-1 rounded">devoted Catholic</span>.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                He knew Christ before fully understanding the Bible, thanks to a strong foundation in his Catholic faith 
                instilled by his family.
              </p>
              <div className="bg-white p-4 rounded-xl border border-blue-200 mb-4">
                <p className="text-blue-800 italic">
                  "Jesus is watching you" — a frequent reminder from his parents, aunts, uncles, and relatives.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                His journey continues through reading Scripture and studying sacred traditions.
              </p>
              <div className="mt-8 text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-800">
                Viva Christo Rey!
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <GiScrollQuill className="text-4xl text-blue-600" />
                <h3 className="text-2xl font-serif text-gray-800">Father Henry I. Moczygemba</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                He distinguishes his life by the gifts from God rather than accomplishments. Many have influenced him, 
                but one person stands out:
              </p>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl">
                <p className="text-lg font-semibold mb-2">Father Henry I. Moczygemba</p>
                <p className="text-blue-100">
                  Taught him about the Bible, scripture, history, and more. Though he passed in 1985, 
                  his influence continues to guide him.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Journey Section */}
        <div className="mb-24 md:mb-32 scroll-reveal">
          <div className="relative overflow-hidden rounded-4xl">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-16">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                  <FaGlobeAmericas className="text-4xl text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                    A Life Enriched by Global Cultures
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 mb-10 max-w-4xl">
                Throughout his life, he has been enriched by interactions with people from across the globe:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {[
                  { name: 'Mexico', flag: '🇲🇽' },
                  { name: 'Colombia', flag: '🇨🇴' },
                  { name: 'Nepal', flag: '🇳🇵' },
                  { name: 'Eritrea', flag: '🇪🇷' },
                  { name: 'Saudi Arabia', flag: '🇸🇦' },
                  { name: 'China', flag: '🇨🇳' }
                ].map((country) => (
                  <div key={country.name} 
                       className="group bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 
                                hover:bg-white/20 transition-all duration-500 hover:scale-105 cursor-default">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                      {country.flag}
                    </div>
                    <span className="text-white font-medium text-sm">{country.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200 leading-relaxed">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <p>
                    <span className="text-blue-300 font-semibold">🌎 Hispanic cultures</span> across the Americas
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <p>
                    <span className="text-blue-300 font-semibold">🕉️ Hindu philosophies</span> • 
                    <span className="text-blue-300 font-semibold"> ☪️ Muslim beliefs</span> • 
                    <span className="text-blue-300 font-semibold"> 🏮 Buddhist teachings</span>
                  </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 md:col-span-2">
                  <p>
                    His <span className="text-blue-300 font-semibold">Eritrean experiences</span> provided deeper understanding of the 
                    <span className="text-blue-300 font-semibold"> Orthodox Rites of Christ's Church</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Life Section */}
        <div className="scroll-reveal">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-pink-600 to-red-600 p-5 rounded-2xl text-white shadow-xl">
                <FaHeart className="text-4xl" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
                Personal Life
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-red-600 rounded-full"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 
                          hover:shadow-3xl transition-all duration-700 relative overflow-hidden group">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-200 to-red-200 
                            rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-br from-pink-600 to-red-600 rounded-xl text-white shadow-lg">
                    <FaUserTie className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl text-gray-800 font-serif">
                      Married <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">
                        Hua Zhang
                      </span>
                    </p>
                    <p className="text-gray-500 flex items-center gap-2 mt-1">
                      <FaMapMarkerAlt className="text-pink-600" />
                      September 23, 2016 • Chongqing, China
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-8">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    His life philosophy remains rooted in gratitude for God's gifts rather than personal accomplishments, 
                    carrying forward the lessons learned from family, mentors, and the diverse cultures he has encountered.
                  </p>
                </div>
                
                {/* Signature Quote */}
                <div className="mt-8 text-right">
                  <p className="text-gray-400 italic">— A life of service, faith, and discovery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Navigation Button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <button 
          onClick={() => navigate('/home')}
          className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
                   rounded-full px-4 md:px-6 py-3 md:py-4 shadow-2xl 
                   flex items-center gap-2 md:gap-3 
                   transition-all duration-500 hover:shadow-3xl hover:-translate-y-1
                   before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
                   before:from-blue-400 before:to-indigo-400 before:opacity-0 
                   before:hover:opacity-100 before:transition-opacity before:duration-500
                   before:-z-10 before:blur-md"
        >
          <FaBookOpen className="relative z-10 text-sm md:text-base group-hover:rotate-12 transition-transform duration-500" />
          <span className="relative z-10 font-medium text-sm md:text-base">Explore His Work</span>
          
          {/* Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 
                         transition-opacity duration-500 scale-0 group-hover:scale-100"></span>
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .scroll-reveal:nth-child(1) { animation-delay: 0.2s; }
        .scroll-reveal:nth-child(2) { animation-delay: 0.4s; }
        .scroll-reveal:nth-child(3) { animation-delay: 0.6s; }
        .scroll-reveal:nth-child(4) { animation-delay: 0.8s; }
        .scroll-reveal:nth-child(5) { animation-delay: 1s; }
      `}</style>
    </div>
  );
}

export default More;