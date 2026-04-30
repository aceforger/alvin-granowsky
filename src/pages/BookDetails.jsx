import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen, FaQuoteLeft, FaShoppingCart, FaBook, FaInfoCircle, FaCalendarAlt, FaFileAlt, FaHashtag } from 'react-icons/fa';

// Updated book data for Alvin Granowsky with full details
const mockBooks = [
  { 
    id: '1', 
    title: 'Our Lives Together: Two Men in Love', 
    author: 'ALVIN GRANOWSKY', 
    image: '/images/live-together.jpg', 
    description: `Glen McLean and Keith Chamberlain have lived together for four years. Their love for each other is solid, or so it seems until Katie Collins returns to their small town outside of Dallas. Her marriage is ending and she is pregnant — possibly by Glen through a procedure at a fertility clinic, she says.

Keith doesn't buy it. He believes that her pregnancy is the result of a sexual encounter with Glen, and he is consumed with jealousy and the fear that Katie has returned to take Glen from him.

Gentry Phillips, the handsome 18-year-old son of a Southern Baptist minister, is in love with his best friend. He is wracked by fear that he is gay — an abomination that will bring God's judgment. He turns to Glen, a respected teacher, for guidance, and by so doing makes Glen a target for his father's wrath.

Katie's aunt is an ardent supporter of Reverend Phillips in his unrelenting condemnation of homosexuals. She is outraged that Katie is naming Glen as her baby's father. "You'd have to be dumb as dirt to put a pervert on your baby's birth certificate. What if something happened to you and that homosexual tried to lay claim to your baby?"`, 
    postDate: 'March 18, 2014',
    quote: '"A deeply moving and courageous exploration of love, jealousy, and acceptance in a conservative Texas town." — Literary Review',
    relatedTopics: [
      { title: 'ALVIN GRANOWSKY', link: 'More Information >' },
      { title: 'The Teacher Accused Trilogy', link: 'Learn More >' },
    ],
    purchaseLinks: {
      amazon: 'https://www.amazon.ca/Our-Lives-Together-Two-Love/dp/149172806X',
      desertcart:'https://www.desertcart.in/products/8581476-our-lives-together-two-men-in-love-paperback-march-18',
    },
    details: {
      publisher: 'Alvin Granowsky',
      language: 'English',
      printLength: '220 pages',
      isbn10: '149172806X',
      isbn13: '978-1491728062'
    }
  },
  { 
    id: '2', 
    title: 'Two Men in Love: The Crisis Year', 
    author: 'ALVIN GRANOWSKY', 
    image: '/images/two-men.jpg', 
    description: `Two Men in Love: The Crisis Year is the third novel in a trilogy depicting the lives of two men in love in a conservative town outside of Dallas, TX. Supreme Court decisions supportive of homosexual men and women, along with increasing public acceptance of LGBT people, collide with conservative traditions and religious beliefs, giving rise to a backlash against the "homosexual agenda" and the "limiting of religious freedom."

It is 2015, the year the Supreme Court rules for gay marriage equality. Because they have lived together for eleven years and have two young sons, family and friends anticipate that Glen and Keith will marry. But Keith has been secretly having sexual contact with another man, and when confronted insists he wants an open relationship. All that they have built — family, home and love for each other — is at risk as Glen, stunned by his partner's infidelity, finds comfort — and love — in the arms of another.

In a secondary theme, Ellen Thatcher, a school board member and mother of a gay son, pushes for the establishment of a Gay-Straight Alliance club at the high school. Glen is enlisted as the faculty advisor, making him the target for a homophobic minister and members of his church who are outraged that an openly gay man is not only teaching at the high school, but is actively encouraging acceptance of homosexuality among impressionable youngsters.`, 
    postDate: 'April 6, 2026',
    quote: '"A powerful and timely exploration of marriage equality, infidelity, and the courage to love authentically." — BookTrib',
    relatedTopics: [
      { title: 'ALVIN GRANOWSKY', link: 'More Information >' },
      { title: 'The Teacher Accused Trilogy', link: 'Learn More >' },
    ],
    purchaseLinks: {
      amazon: 'https://www.amazon.ca/Two-Men-Love-Alvin-Granowsky/dp/B0GVQMJTB4/ref=sr_1_1?crid=3H7Z9GTPVWROQ&dib=eyJ2IjoiMSJ9.uvmpPHNTRMl4LaWjkzol_J_nTh6Oo-D4cAVInX0w62xburR4_hHnxtr6SrNjWd88HKeIX0_lP8qVUpXoy3Wpe-AP6F8yfJGh-XGjBQPyg7g.pmBL5PYTV5-l63VOZSgLz8s6muFEdVrQLglThAKL_7k&dib_tag=se&keywords=two+men+in+love+by+alvin&qid=1777574331&sprefix=two+men+in+love+by+alvi%2Caps%2C373&sr=8-1',
      barnesAndNoble: 'https://www.barnesandnoble.com/w/two-men-in-love-alvin-granowsky/1149817983',
      walmart: 'https://www.walmart.com/ip/Our-Lives-Together-Two-Men-in-Love-Paperback-Alvin-Granowsky-9781491728062/39965278',

      
    },
    details: {
      asin: 'B0G4M7VRQ9',
      publisher: 'Alvin Granowsky',
      publicationDate: 'April 6, 2026',
      language: 'English',
      printLength: '263 pages',
      isbn13: '979-8295785399'
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
      barnesAndNoble: 'Barnes & Noble',
      kobo: 'Kobo',
      desertcart: 'Desert Cart',
      walmart: 'Walmart'
    };
    return storeNames[key] || key.charAt(0).toUpperCase() + key.slice(1);
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
      <div className="max-w-7xl mx-auto">
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

                {/* Book Specifications / Details */}
                {book.details && (
                  <div className="bg-gray-50 rounded-lg p-3 mb-3 border border-gray-200">
                    <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-1">
                      <FaInfoCircle className="text-blue-600 text-xs" /> Book Details
                    </h3>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs">
                      {book.details.asin && (
                        <>
                          <span className="text-gray-500 flex items-center gap-1"><FaHashtag className="text-[10px]" /> ASIN:</span>
                          <span className="text-gray-700 font-mono">{book.details.asin}</span>
                        </>
                      )}
                      {book.details.isbn10 && (
                        <>
                          <span className="text-gray-500">ISBN-10:</span>
                          <span className="text-gray-700 font-mono">{book.details.isbn10}</span>
                        </>
                      )}
                      {book.details.isbn13 && (
                        <>
                          <span className="text-gray-500">ISBN-13:</span>
                          <span className="text-gray-700 font-mono">{book.details.isbn13}</span>
                        </>
                      )}
                      {book.details.publisher && (
                        <>
                          <span className="text-gray-500 flex items-center gap-1"><FaBook className="text-[10px]" /> Publisher:</span>
                          <span className="text-gray-700">{book.details.publisher}</span>
                        </>
                      )}
                      {book.details.publicationDate && (
                        <>
                          <span className="text-gray-500 flex items-center gap-1"><FaCalendarAlt className="text-[10px]" /> Publication Date:</span>
                          <span className="text-gray-700">{book.details.publicationDate}</span>
                        </>
                      )}
                      {book.details.language && (
                        <>
                          <span className="text-gray-500">Language:</span>
                          <span className="text-gray-700">{book.details.language}</span>
                        </>
                      )}
                      {book.details.printLength && (
                        <>
                          <span className="text-gray-500 flex items-center gap-1"><FaFileAlt className="text-[10px]" /> Print Length:</span>
                          <span className="text-gray-700">{book.details.printLength}</span>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Review Quote */}
                <div className="relative bg-amber-50 p-3 rounded-lg border-l-3 border-amber-500 mb-3">
                  <FaQuoteLeft className="text-blue-300 text-lg absolute top-2 left-2" />
                  <p className="text-gray-700 italic text-xs pl-6 pr-2">{book.quote}</p>
                </div>

                {/* Purchase Links - Unified Shop Icon */}
                {book.purchaseLinks && Object.keys(book.purchaseLinks).length > 0 && (
                  <div className="mb-3">
                    <h3 className="text-sm font-bold text-gray-800 mb-2 font-serif">Buy Now</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                      {Object.entries(book.purchaseLinks).map(([key, url]) => (
                        <a 
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-2 rounded text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
                        >
                          <FaShoppingCart className="text-xs" />
                          <span>{getStoreName(key)}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNewsDetails;