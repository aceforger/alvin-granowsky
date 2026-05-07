import React, { useState, useEffect } from 'react';
import { FaTimes, FaRainbow, FaHeart, FaNewspaper, FaEnvelope, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';

const PressRelease = ({ pressData }) => {
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pressReleases, setPressReleases] = useState([]);

  // Process and structure your provided data
  useEffect(() => {
    // If external data is provided, use it
    if (pressData && pressData.length > 0) {
      setPressReleases(pressData);
    } else {
      // Use the Alvin Granowsky press release
      const formattedReleases = [
        {
          id: 1,
          title: "Alvin Granowsky Introduces Two Men in Love: A Heartfelt Drama of Love, Loyalty, and Change",
          date: "2024",
          excerpt: "In his compelling novel Two Men in Love: The Crisis Year, Alvin Granowsky delivers a powerful story set during one of the most pivotal moments in modern American history. Taking place in 2015 — the year the Supreme Court of the United States ruled in favor of marriage equality — the novel follows Glen and Keith, a long-time couple raising two young sons in a conservative town outside Dallas.",
          fullContent: `
            <div class="press-content">
              <h2 style="color: #f472b6; font-size: 1.8rem; font-family: serif; margin-bottom: 1rem;">Love in Crisis: A Family Tested in the Year of Marriage Equality</h2>
              
              <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(168, 85, 247, 0.1)); padding: 1.5rem; border-radius: 1rem; margin: 1.5rem 0; border-left: 4px solid #ec4899;">
                <p style="color: #d8b4fe; font-style: italic; font-size: 1.1rem;">"As a historic ruling changes the nation, betrayal, new love, and small-town backlash threaten to tear apart the lives of two men who have built a family together."</p>
              </div>
              
              <h3 style="color: #c084fc; font-size: 1.3rem; font-family: serif; margin-top: 1.5rem; margin-bottom: 0.75rem;">Introduction</h3>
              <p style="color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;">In his compelling novel <strong style="color: #f472b6;">Two Men in Love: The Crisis Year</strong>, Alvin Granowsky delivers a powerful story set during one of the most pivotal moments in modern American history. Taking place in 2015 — the year the Supreme Court of the United States ruled in favor of marriage equality — the novel follows Glen and Keith, a long-time couple raising two young sons in a conservative town outside Dallas. As the nation celebrates a milestone for LGBTQ+ rights, the couple's relationship faces a devastating personal crisis that threatens the family and life they have built together. Through themes of love, betrayal, and resilience, Granowsky explores how social change, personal choices, and deeply rooted traditions collide in a community struggling to reconcile acceptance with belief.</p>
              
              <h3 style="color: #c084fc; font-size: 1.3rem; font-family: serif; margin-top: 1.5rem; margin-bottom: 0.75rem;">About the Author</h3>
              <p style="color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;">Alvin Granowsky is an author and educator who began his career teaching while writing novels. His first novel, The Schoolteachers, was published when he was nearing thirty, after which he pursued a doctorate in education at the University of Pennsylvania and went on to build a successful career writing educational reading series and school texts.</p>
              <p style="color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;">Granowsky later served as Director of Reading/Language Arts in the public schools of Greensboro and Dallas and eventually became Vice President of Education for World Book Encyclopedia. After largely retiring in 2009, he returned to writing novels, publishing Teacher Accused: When Homophobia Explodes in a Texas Town and its sequel Our Lives Together: Two Men in Love, continuing the story of Glen and Keith.</p>
              
              <h3 style="color: #c084fc; font-size: 1.3rem; font-family: serif; margin-top: 1.5rem; margin-bottom: 0.75rem;">About the Book</h3>
              <p style="color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;"><strong style="color: #f472b6;">Two Men in Love: The Crisis Year</strong> is the third novel in a trilogy depicting the lives of two men in love in a conservative town outside of Dallas, TX. Supreme Court decisions supportive of homosexual men and women, along with increasing public acceptance of LGBT people, collide with conservative traditions and religious beliefs, giving rise to a backlash against the "homosexual agenda" and the "limiting of religious freedom."</p>
              <p style="color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;">It is 2015, the year the Supreme Court rules for gay marriage equality. Because they have lived together for eleven years and have two young sons, family and friends anticipate that Glen and Keith will marry. But Keith has been secretly having sexual contact with another man, and when confronted insists he wants an open relationship. All that they have built — family, home and love for each other — is at risk as Glen, stunned by his partner's infidelity, finds comfort and love in the arms of another.</p>
              <p style="color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;">In a secondary theme, Ellen Thatcher, a school board member and mother of a gay son, pushes for the establishment of a Gay-Straight Alliance club at the high school. Glen is enlisted as the faculty adviser, making him the target for a homophobic minister and members of his church who are outraged that an openly gay man is not only teaching at the high school, but is actively encouraging acceptance of homosexuality among impressionable youngsters.</p>
              
              <h3 style="color: #c084fc; font-size: 1.3rem; font-family: serif; margin-top: 1.5rem; margin-bottom: 0.75rem;">Reception and Impact</h3>
              <p style="color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;"><strong style="color: #f472b6;">Two Men in Love: The Crisis Year</strong> by Alvin Granowsky has been recognized for its honest portrayal of love, conflict, and social change during a pivotal moment in American history. Set in 2015 — the year the Supreme Court of the United States legalized same-sex marriage nationwide — the novel captures the emotional and social tensions that arise when personal relationships collide with deeply rooted cultural and religious beliefs.</p>
              <p style="color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;">The book also contributes to discussions about LGBTQ+ acceptance, family dynamics, and equality in conservative communities. Through the struggles of Glen, Keith, and the people around them, the story highlights the challenges faced by many individuals during a time of major legal and social transformation, encouraging readers to reflect on issues of tolerance, identity, and the meaning of love and commitment.</p>
              
              <h3 style="color: #c084fc; font-size: 1.3rem; font-family: serif; margin-top: 1.5rem; margin-bottom: 0.75rem;">Conclusion</h3>
              <p style="color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;">In a time of profound change, <strong style="color: #f472b6;">Two Men in Love: The Crisis Year</strong> by Alvin Granowsky explores how love can be both fragile and resilient when tested by betrayal, social pressure, and shifting cultural norms. Set against the historic ruling by the Supreme Court of the United States recognizing same-sex marriage nationwide, the novel intertwines personal heartbreak with a larger national moment of transformation.</p>
              <p style="color: #d1d5db; line-height: 1.6; margin-bottom: 1rem;">Rather than offering simple answers, Granowsky presents a deeply human story about forgiveness, identity, and the courage it takes to rebuild trust. Through Glen, Keith, and those around them, the novel ultimately reminds readers that families are not only defined by tradition, but by the willingness to grow, confront painful truths, and continue choosing love even in the face of uncertainty.</p>
            </div>
          `,
          image: "/images/two-men.png",
          type: "book_release",
          bookTitle: "Two Men in Love: The Crisis Year"
        }
      ];
      setPressReleases(formattedReleases);
    }
  }, [pressData]);

  const openModal = (release) => {
    setSelectedRelease(release);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Function to safely render HTML content
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <section className="py-20 relative">
      {/* Background gradient matching AboutMe page */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* Section Header with Rainbow Theme */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaRainbow className="text-pink-500 text-3xl animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-serif">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Press & Media
              </span>
            </h2>
            <FaNewspaper className="text-purple-500 text-3xl animate-pulse" />
          </div>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Latest News and Announcements
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mt-4"></div>
        </div>
        
        {/* Press Release Cards - Centered for single item */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
            {pressReleases.map((release, index) => (
              <div 
                key={release.id}
                className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2 cursor-pointer border border-purple-500/20 hover:border-pink-500/40"
                onClick={() => openModal(release)}
                style={{ animationDelay: `${index * 0.1}s`, animation: 'fadeInUp 0.6s ease-out forwards' }}
              >
                <div className="h-80 overflow-hidden relative">
                  <img 
                    src={release.image} 
                    alt={release.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300/1a1a2e/ff6b9d?text=Two+Men+in+Love";
                    }}
                  />
                  {/* Rainbow overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg">
                      Press Release
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent p-5">
                    <div className="flex items-center gap-2 text-xs text-pink-300 mb-1">
                      <FaCalendarAlt />
                      <span>{release.date}</span>
                      <FaHeart className="ml-2 text-pink-400" />
                    </div>
                    <h3 className="text-xl font-serif text-white line-clamp-2 font-semibold">
                      {release.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaBookOpen className="text-pink-400 text-sm" />
                    <div className="text-xs text-purple-300 font-medium">
                      {release.bookTitle}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-3">{release.excerpt}</p>
                  <button className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-pink-500/25">
                    Read Full Press Release
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for full press release - Pride Theme with White Text */}
        {isModalOpen && selectedRelease && (
          <div className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center p-5 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-pink-500/30 shadow-2xl mt-10">
              <div className="relative">
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-pink-400 text-2xl z-10 bg-gray-800/50 hover:bg-gray-800/80 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
                
                {/* Modal Header with Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={selectedRelease.image} 
                    alt={selectedRelease.title}
                    className="w-full h-full object-contain opacity-40"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/800x400/1a1a2e/ff6b9d?text=Two+Men+in+Love";
                    }}
                  />
                  {/* Rainbow gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/30 via-purple-600/30 to-indigo-600/30"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <FaRainbow className="text-pink-400 text-xl" />
                      <span className="text-pink-300 text-sm font-medium px-3 py-1 bg-pink-500/20 rounded-full">
                        {selectedRelease.date}
                      </span>
                      <FaHeart className="text-red-400 text-xl" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{selectedRelease.title}</h3>
                    <div className="text-purple-300 font-medium mt-2 flex items-center justify-center gap-2">
                      <FaBookOpen className="text-pink-400" />
                      {selectedRelease.bookTitle}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modal Content - All text is white/light gray */}
              <div className="p-8">
                <div 
                  className="press-modal-content"
                  dangerouslySetInnerHTML={renderHTML(selectedRelease.fullContent)}
                />
                
                {/* Footer with Back Button */}
                <div className="mt-8 pt-6 border-t border-purple-500/20">
                  <button 
                    onClick={closeModal}
                    className="text-pink-400 hover:text-pink-300 font-medium transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Press Releases
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Media Inquiries Section - Pride Theme */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-pink-900/20 via-purple-900/20 to-indigo-900/20 rounded-2xl p-8 border border-pink-500/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaHeart className="text-pink-400 text-xl" />
              <h3 className="text-2xl font-serif bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Media Inquiries
              </h3>
              <FaRainbow className="text-purple-400 text-xl" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              For interview requests, review copies, or additional information about Alvin Granowsky's work, please contact our press department.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@fulfill1st.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
              >
                <FaEnvelope className="w-5 h-5 mr-2" />
                support@fulfill1st.com
              </a>
            </div>
            
            {/* Pride flag colors bar */}
            <div className="flex justify-center gap-1 mt-6">
              <div className="w-8 h-1 rounded-full bg-pink-500"></div>
              <div className="w-8 h-1 rounded-full bg-red-500"></div>
              <div className="w-8 h-1 rounded-full bg-orange-500"></div>
              <div className="w-8 h-1 rounded-full bg-yellow-500"></div>
              <div className="w-8 h-1 rounded-full bg-green-500"></div>
              <div className="w-8 h-1 rounded-full bg-blue-500"></div>
              <div className="w-8 h-1 rounded-full bg-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animation styles */}
      <style>{`
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .press-modal-content h2,
        .press-modal-content h3,
        .press-modal-content h4,
        .press-modal-content p,
        .press-modal-content li,
        .press-modal-content div {
          color: #e5e7eb !important;
        }
        
        .press-modal-content strong {
          color: #f472b6 !important;
        }
        
        .press-modal-content h2 {
          color: #f472b6 !important;
        }
        
        .press-modal-content h3 {
          color: #c084fc !important;
        }
      `}</style>
    </section>
  );
};

export default PressRelease;