import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen, FaQuoteLeft, FaAmazon, FaApple, FaGooglePlay, FaBook } from 'react-icons/fa';

// Updated book data for Alvin Granowsky
const mockBooks = [
  { 
    id: '1', 
    title: 'Our Lives Together: Two Men in Love', 
    author: 'ALVIN GRANOWSKY', 
    image: '/images/live-together', 
    description: `Glen McLean and Keith Chamberlain have lived together for four years. Their love for each other is solid, or so it seems until Katie Collins returns to their small town outside of Dallas. Her marriage is ending and she is pregnant — possibly by Glen through a procedure at a fertility clinic, she says.

Keith doesn't buy it. He believes that her pregnancy is the result of a sexual encounter with Glen, and he is consumed with jealousy and the fear that Katie has returned to take Glen from him.

Gentry Phillips, the handsome 18-year-old son of a Southern Baptist minister, is in love with his best friend. He is wracked by fear that he is gay — an abomination that will bring God's judgment. He turns to Glen, a respected teacher, for guidance, and by so doing makes Glen a target for his father's wrath.

Katie's aunt is an ardent supporter of Reverend Phillips in his unrelenting condemnation of homosexuals. She is outraged that Katie is naming Glen as her baby's father. "You'd have to be dumb as dirt to put a pervert on your baby's birth certificate. What if something happened to you and that homosexual tried to lay claim to your baby?"`, 
    postDate: '2014',
    quote: '"A deeply moving and courageous exploration of love, jealousy, and acceptance in a conservative Texas town." — Literary Review',
    relatedTopics: [
      { title: 'ALVIN GRANOWSKY', link: 'More Information >' },
      { title: 'The Teacher Accused Trilogy', link: 'Learn More >' },
    ],
    purchaseLinks: {
      amazon: 'https://www.amazon.com/Our-Lives-Together-Two-Love/dp/placeholder',
    }
  },
  { 
    id: '2', 
    title: 'Two Men in Love: The Crisis Year', 
    author: 'ALVIN GRANOWSKY', 
    image: '/images/two-mean', 
    description: `Two Men in Love: The Crisis Year is the third novel in a trilogy depicting the lives of two men in love in a conservative town outside of Dallas, TX. Supreme Court decisions supportive of homosexual men and women, along with increasing public acceptance of LGBT people, collide with conservative traditions and religious beliefs, giving rise to a backlash against the "homosexual agenda" and the "limiting of religious freedom."

It is 2015, the year the Supreme Court rules for gay marriage equality. Because they have lived together for eleven years and have two young sons, family and friends anticipate that Glen and Keith will marry. But Keith has been secretly having sexual contact with another man, and when confronted insists he wants an open relationship. All that they have built — family, home and love for each other — is at risk as Glen, stunned by his partner's infidelity, finds comfort — and love — in the arms of another.

In a secondary theme, Ellen Thatcher, a school board member and mother of a gay son, pushes for the establishment of a Gay-Straight Alliance club at the high school. Glen is enlisted as the faculty advisor, making him the target for a homophobic minister and members of his church who are outraged that an openly gay man is not only teaching at the high school, but is actively encouraging acceptance of homosexuality among impressionable youngsters.`, 
    postDate: '2015',
    quote: '"A powerful and timely exploration of marriage equality, infidelity, and the courage to love authentically." — BookTrib',
    relatedTopics: [
      { title: 'ALVIN GRANOWSKY', link: 'More Information >' },
      { title: 'The Teacher Accused Trilogy', link: 'Learn More >' },
    ],
    purchaseLinks: {
      amazon: 'https://www.amazon.com/Two-Men-Love-Crisis-Year/dp/placeholder',
    }
  },
  { 
    id: '3', 
    title: 'Teacher Accused: When Homophobia Explodes in a Texas Town', 
    author: 'ALVIN GRANOWSKY', 
    image: '/images/teacher-accused.png', 
    description: `In 2009, largely retired from a long career in education, Alvin Granowsky returned to where he began: writing novels. Teacher Accused: When Homophobia Explodes in a Texas Town was published, bringing back all the excitement he first felt decades ago.

The novel explores the devastating impact of homophobia on a beloved teacher in a small Texas town. When rumors surface about his personal life, the community becomes divided, and the teacher finds himself at the center of a firestorm that threatens his career, his relationships, and his safety.

This powerful story draws on Granowsky's decades of experience as a Director of Reading/Language Arts for the public schools of Greensboro, NC and Dallas, TX, and his deep concern with the homophobia plaguing our nation and the bullying that often targets young people perceived to be gay.`, 
    postDate: '2009',
    quote: '"A heart-wrenching and necessary novel that gives voice to the real struggles faced by LGBTQ educators." — School Library Journal',
    relatedTopics: [
      { title: 'ALVIN GRANOWSKY', link: 'More Information >' },
      { title: 'The Teacher Accused Trilogy', link: 'Learn More >' },
    ],
    purchaseLinks: {
      amazon: 'https://www.amazon.com/Teacher-Accused-When-Homophobia-Explodes/dp/placeholder',
    }
  }
];

function BookNewsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 700));
        const foundBook = mockBooks.find(b => b.id === id);
        
        if (foundBook) {
          setBook(foundBook);
        } else {
          setError('Book not found');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch book details');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Truncate description for preview
  const getPreviewDescription = (text) => {
    if (text.length > 400) {
      return text.substring(0, 400) + '...';
    }
    return text;
  };

  // Get store name from link type
  const getStoreName = (key) => {
    const storeNames = {
      amazon: 'Amazon',
      thenile: 'The Nile',
      foyles: 'Foyles',
      readings: 'Readings',
      appleBooks: 'Apple Books',
      googlePlay: 'Google Play',
      barnesAndNoble: 'B&N',
      kobo: 'Kobo'
    };
    return storeNames[key] || key;
  };

  // Get store icon
  const getStoreIcon = (key) => {
    switch(key) {
      case 'amazon':
        return <FaAmazon className="text-xs" />;
      case 'appleBooks':
        return <FaApple className="text-xs" />;
      case 'googlePlay':
        return <FaGooglePlay className="text-xs" />;
      case 'barnesAndNoble':
        return <FaBook className="text-xs" />;
      case 'kobo':
        return <FaBookOpen className="text-xs" />;
      default:
        return <FaBook className="text-xs" />;
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-white text-xl">Loading book details...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-white text-xl">{error}</div>
    </div>
  );
  
  if (!book) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-white text-xl">Book not found</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-teal-300 py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-black-300 hover:text-gray-600 mb-4 transition-colors duration-300 text-sm mt-5 mb-15"
        >
          <FaArrowLeft className="mr-2 text-xs" />
          <span>Back to Books</span>
        </button>

        {/* Book Card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Book Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-1 font-serif">{book.title}</h1>
            <p className="text-amber-200 text-sm mb-0.5">by {book.author}</p>
            <p className="text-amber-300 text-xs">Published: {book.postDate}</p>
          </div>

          {/* Book Content */}
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Book Cover */}
              <div className="md:w-1/3">
                <div className="relative group">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-auto rounded-lg shadow-md border-2 border-blue-100"
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="md:w-2/3">
                <h2 className="text-lg font-bold text-gray-800 mb-2 font-serif">Synopsis</h2>
                
                {/* Description with toggle */}
                <div className="text-gray-700 text-sm leading-relaxed mb-3 whitespace-pre-line">
                  {showFullDescription ? book.description : getPreviewDescription(book.description)}
                </div>
                
                {book.description.length > 400 && (
                  <button 
                    onClick={toggleDescription}
                    className="text-blue-600 hover:text-blue-800 text-xs font-medium mb-3"
                  >
                    {showFullDescription ? 'Show less' : 'Read more'}
                  </button>
                )}

                {/* Review Quote */}
                <div className="relative bg-amber-50 p-3 rounded-lg border-l-3 border-amber-500 mb-3">
                  <FaQuoteLeft className="text-blue-300 text-lg absolute top-2 left-2" />
                  <p className="text-gray-700 italic text-xs pl-6 pr-2">{book.quote}</p>
                </div>

                {/* Purchase Links */}
                {book.purchaseLinks && Object.keys(book.purchaseLinks).length > 0 && (
                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-gray-800 mb-2 font-serif">Buy Now</h3>
                    <div className="grid grid-cols-2 gap-1.5">
                      {Object.entries(book.purchaseLinks).map(([key, url]) => (
                        <a 
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-2 rounded text-xs font-medium transition-colors"
                        >
                          {getStoreIcon(key)}
                          <span className="hidden sm:inline">{getStoreName(key)}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* About Author Section */}
            <div className="mt-4 bg-gray-50 p-3 rounded-lg">
              <h3 className="text-sm font-bold text-gray-800 mb-2 font-serif border-b border-blue-200 pb-1">About the Author</h3>
              <div className="grid grid-cols-1 gap-2">
                {book.relatedTopics.map((topic, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex items-center justify-between p-2 hover:bg-blue-50 rounded transition-colors">
                      <h4 className="font-medium text-gray-800 text-sm">{topic.title}</h4>
                      <span className="text-blue-600 text-xs group-hover:translate-x-1 transition">{topic.link}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNewsDetails;