import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaQuoteLeft, 
  FaShoppingCart, 
  FaBook, 
  FaInfoCircle, 
  FaCalendarAlt, 
  FaFileAlt, 
  FaHashtag,
  FaLink,
  FaRegClock,
  FaUser,
  FaStore,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaImage,
  FaSpinner,
  FaHardHat,
  FaMobileAlt,
  FaRainbow,
  FaHeart,
  FaStar,
  FaRegHeart,
  FaFeatherAlt,
  FaHandHoldingHeart,
  FaGlasses,
  FaUsers
} from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

// ============================================
// Mock Data with separate format-specific purchase links
// ============================================

const mockBooks = [
  { 
    id: '1', 
    title: 'Our Lives Together: Two Men in Love', 
    author: 'ALVIN GRANOWSKY', 
    image: '/images/live-together.png', 
    description: `Glen McLean and Keith Chamberlain have lived together for four years. Their love for each other is solid, or so it seems until Katie Collins returns to their small town outside of Dallas. Her marriage is ending and she is pregnant — possibly by Glen through a procedure at a fertility clinic, she says.

Keith doesn't buy it. He believes that her pregnancy is the result of a sexual encounter with Glen, and he is consumed with jealousy and the fear that Katie has returned to take Glen from him.

Gentry Phillips, the handsome 18-year-old son of a Southern Baptist minister, is in love with his best friend. He is wracked by fear that he is gay — an abomination that will bring God's judgment. He turns to Glen, a respected teacher, for guidance, and by so doing makes Glen a target for his father's wrath.

Katie's aunt is an ardent supporter of Reverend Phillips in his unrelenting condemnation of homosexuals. She is outraged that Katie is naming Glen as her baby's father. "You'd have to be dumb as dirt to put a pervert on your baby's birth certificate. What if something happened to you and that homosexual tried to lay claim to your baby?"`, 
    postDate: 'March 18, 2014',
    quote: '"A deeply moving and courageous exploration of love, jealousy, and acceptance in a conservative Texas town." — Literary Review',
    relatedTopics: [
      { title: 'ALVIN GRANOWSKY', link: '/author/alvin-granowsky' },
      { title: 'The Teacher Accused Trilogy', link: '/series/teacher-accused' },
    ],
    paperbackPurchaseLinks: {},
    hardcoverPurchaseLinks: {},
    ebookPurchaseLinks: {},
    details: {
      publisher: 'Alvin Granowsky',
      language: 'English',
      printLength: '220 pages',
      isbn10: '149172806X',
      isbn13: '978-1491728062',
      formats: {
        paperback: '978-1491728062',
        hardcover: '978-1491728079',
        ebook: '978-1491728086'
      }
    }
  },
  { 
    id: '2', 
    title: 'Two Men in Love: The Crisis Year', 
    author: 'ALVIN GRANOWSKY', 
    image: '/images/two-men.png', 
    description: `Two Men in Love: The Crisis Year is the third novel in a trilogy depicting the lives of two men in love in a conservative town outside of Dallas, TX. Supreme Court decisions supportive of homosexual men and women, along with increasing public acceptance of LGBT people, collide with conservative traditions and religious beliefs, giving rise to a backlash against the "homosexual agenda" and the "limiting of religious freedom."

It is 2015, the year the Supreme Court rules for gay marriage equality. Because they have lived together for eleven years and have two young sons, family and friends anticipate that Glen and Keith will marry. But Keith has been secretly having sexual contact with another man, and when confronted insists he wants an open relationship. All that they have built — family, home and love for each other — is at risk as Glen, stunned by his partner's infidelity, finds comfort — and love — in the arms of another.

In a secondary theme, Ellen Thatcher, a school board member and mother of a gay son, pushes for the establishment of a Gay-Straight Alliance club at the high school. Glen is enlisted as the faculty advisor, making him the target for a homophobic minister and members of his church who are outraged that an openly gay man is not only teaching at the high school, but is actively encouraging acceptance of homosexuality among impressionable youngsters.`, 
    postDate: 'April 6, 2026',
    quote: '"A powerful and timely exploration of marriage equality, infidelity, and the courage to love authentically." — BookTrib',
    relatedTopics: [
      { title: 'ALVIN GRANOWSKY', link: '/author/alvin-granowsky' },
      { title: 'The Teacher Accused Trilogy', link: '/series/teacher-accused' },
    ],
    paperbackPurchaseLinks: {
      fishpond: 'https://www.fishpond.com.au/Books/Two-Men-Love-Alvin-Granowsky/9798295758225?srsltid=AfmBOoqeFgZPeItgKCQ4L0Ogp6IrSU33Hpe58tlstg0qTXPduGiteZPb',
      barnesAndNoble: 'https://www.barnesandnoble.com/w/two-men-in-love-alvin-granowsky/1149817983',
      exlibris: 'https://www.exlibris.ch/de/buecher-buch/english-books/alvin-granowsky/two-men-in-love/id/9798295758225/?srsltid=AfmBOop_K8echR0YGDRuJ7belN6SSkn4K4F7IrZuOoDPB3HTEsX4iKxJ',
      ibs: 'https://www.ibs.it/two-men-in-love-libro-inglese-alvin-granowsky/e/9798295758225?srsltid=AfmBOoqa8GsXkLeGP5-WT0AOaN7rAE7uCGawxhFCiWg139O-9h-H_Idu',
      saxo: 'https://www.saxo.com/dk/two-men-in-love_bog_9798295758225?srsltid=AfmBOorULYJEqWbGBjs3Bf0kssKQ1n0TZFBQnSvfBrvREAmkEm6MO0YQ',
      booksamillion: 'https://www.booksamillion.com/p/Two-Men-Love/Alvin-Granowsky/9798295758225',
      thriftbooks: 'https://www.thriftbooks.com/w/two-men-in-love_alvin-granowsky/58692032/?msockid=0500b6dd78d46f3331f6a20e79c06e9e#edition=75468725&idiq=88758049'
    },
    hardcoverPurchaseLinks: {
      amazon: 'https://www.amazon.co.uk/Two-Men-Love-Alvin-Granowsky-ebook/dp/B0G4M7VRQ9/ref=sr_1_2?crid=2IUHPWMKKABCT&dib=eyJ2IjoiMSJ9.6JYzemGcx_ahkx94DPstWrWJbBEqrGOvmSRYHjtin0YqkJLRBkJFz0MVBAL_0Wz5aRd1H3Iu16CL5nUpyYz-yfprBDDLfLRm622f5SamjQkqQBuPv7C5c4UwcIRMrOWLl_iNKYrhHksetA2ZuMN3kgv6OlD_3Y_Kb-pMrhqplcDXSRl8OeDkOxgv8g-1Fp9_eTenOjr6vQPWo64FioWxCbmDRl9LFPdtVjTVKVkefLs.wNHhkiOYQgAOXjvpMtnbvWaYwMQG5d2bkot2H1NHfh0&dib_tag=se&keywords=two+men+in+love&qid=1777681271&sprefix=two+men+in+lo%2Caps%2C419&sr=8-2',
      fishpond: 'https://www.fishpond.com.au/Books/Two-Men-Love-Alvin-Granowsky/9798295758676?srsltid=AfmBOopwydfvJ509h9JJE1Ksfj97QZTaYoG2Aw8bUO20-wlQ3k4xD2B0',
      exlibris: 'https://www.exlibris.ch/de/buecher-buch/english-books/alvin-granowsky/two-men-in-love/id/9798295758676/?srsltid=AfmBOooYyicgYTq-8gZOZQs0tZ1yB6U9kdtI50Ug9HJ1mQxc6rSsTlpj',
      bookscape: 'https://bookscape.com/product-details/two-men-in-love-9798295758676?srsltid=AfmBOoqJQunbpo6WiI3BAIqWt0X9yFBPHBrQN5PfR6ujSs5dks1PeXei',
      bol: 'https://www.bol.com/be/fr/p/two-men-in-love/9300000272315844/',
      ibs: 'https://www.ibs.it/two-men-in-love-libro-inglese-alvin-granowsky/e/9798295758676?srsltid=AfmBOoqKgH70yUIhbDc60j6sWcPTI1F4hCLDxsy2gJp8XDtB5SQ0EcWY',
      buchfreund: 'https://www.buchfreund.de/de/neuware/kategorien/graphic-novel-comic-erwachsene?srsltid=AfmBOorSosZKduTPqvqquIjXnvA90Oqb1tNPQRQsIGcJg5U_fXNDiMcw',
    },
    ebookPurchaseLinks: {
      exlibris: 'https://www.exlibris.ch/de/buecher-buch/englische-ebooks/alvin-granowsky/two-men-in-love/id/9798295785399/?srsltid=AfmBOoq4kcwehf7Gfn_lKuSLJZPzoGh9vSQjyQ8vXRLUM4goOb7nN9dS',
      kobo: 'https://www.kobo.com/ph/en/ebook/two-men-in-love-2?srsltid=AfmBOoro0AMHhxVDqW1q1ktTn-Q2aqmFGvezL4pI0ed77jlSYlYNzXI-',
    },
    details: {
      asin: 'B0G4M7VRQ9',
      publisher: 'Alvin Granowsky',
      publicationDate: 'April 6, 2026',
      language: 'English',
      printLength: '263 pages',
      isbn13: '979-8295785399',
      formats: {
        paperback: '979-8295785399',
        ebook: 'B0G4M7VRQ9'
      }
    }
  }
];

// ============================================
// Helper Functions
// ============================================

const STORE_NAMES = {
  amazon: 'Amazon',
  thenile: 'The Nile',
  foyles: 'Foyles',
  readings: 'Readings',
  appleBooks: 'Apple Books',
  googlePlay: 'Google Play',
  barnesAndNoble: 'Barnes & Noble',
  kobo: 'Kobo',
  desertcart: 'Desert Cart',
  walmart: 'Walmart',
  target: 'Target',
  booksamillion: 'Books-A-Million',
  fishpond: 'Fishpond',
  exlibris: 'Ex Libris',
  ibs: 'IBS',
  buchfreund: 'Buchfreund',
  bookscape: 'Bookscape',
  eurobooks: 'Eurobooks',
  saxo: 'Saxo',
  thriftbooks: 'ThriftBooks'
};

const getStoreName = (key) => {
  return STORE_NAMES[key] || key.charAt(0).toUpperCase() + key.slice(1);
};

const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  } catch {
    return dateString;
  }
};

// ============================================
// Sub-Components with Rainbow Pride Theme
// ============================================

const LoadingState = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <FaSpinner className="w-16 h-16 text-pink-500 animate-spin" />
        <FaHeart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-300 text-sm animate-pulse" />
      </div>
      <p className="text-purple-200 text-lg font-medium">Loading your next read...</p>
      <div className="flex gap-1">
        {['pink', 'purple', 'indigo', 'blue'].map((color, i) => (
          <div key={i} className={`w-2 h-2 rounded-full bg-${color}-400 animate-bounce`} style={{ animationDelay: `${i * 0.15}s` }}></div>
        ))}
      </div>
    </div>
  </div>
);

const ErrorState = ({ message, onRetry }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 flex items-center justify-center px-4">
    <div className="text-center max-w-md">
      <div className="w-24 h-24 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-pink-500/30">
        <FaHeart className="w-10 h-10 text-pink-400 animate-pulse" />
      </div>
      <h2 className="text-2xl font-semibold text-white mb-2">Oops! Something went wrong</h2>
      <p className="text-gray-400 mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full transition-all duration-300 shadow-lg shadow-pink-500/20"
        >
          Try Again
        </button>
      )}
    </div>
  </div>
);

const BookSpecs = ({ details }) => {
  const specs = [
    { key: 'asin', label: 'ASIN', icon: FaHashtag, value: details.asin },
    { key: 'isbn10', label: 'ISBN-10', icon: FaHashtag, value: details.isbn10 },
    { key: 'isbn13', label: 'ISBN-13', icon: FaHashtag, value: details.isbn13 },
    { key: 'publisher', label: 'Publisher', icon: FaBook, value: details.publisher },
    { key: 'publicationDate', label: 'Publication Date', icon: FaCalendarAlt, value: details.publicationDate },
    { key: 'language', label: 'Language', icon: FaBook, value: details.language },
    { key: 'printLength', label: 'Print Length', icon: FaFileAlt, value: details.printLength },
  ];

  const visibleSpecs = specs.filter(spec => spec.value);

  if (visibleSpecs.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-5 border border-purple-500/20 backdrop-blur-sm">
      <h3 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4 flex items-center gap-2">
        <FaInfoCircle className="text-pink-400 text-sm" />
        Book Details
      </h3>
      <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
        {visibleSpecs.map(({ label, icon: Icon, value }) => (
          <React.Fragment key={label}>
            <span className="text-gray-400 flex items-center gap-1.5">
              <Icon className="text-purple-400 text-xs" />
              {label}:
            </span>
            <span className="text-gray-200 font-mono text-sm break-all">{value}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// Format-specific purchase buttons component with Pride theme
const FormatPurchaseSection = ({ title, icon: Icon, links, colorScheme }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleLinks = expanded ? links : links.slice(0, 4);
  
  if (!links || links.length === 0) return null;

  const colorClasses = {
    pink: {
      bg: 'bg-pink-500/10',
      border: 'border-pink-500/30',
      title: 'text-pink-300',
      button: 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
      icon: 'text-pink-400'
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      title: 'text-purple-300',
      button: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      icon: 'text-purple-400'
    },
    indigo: {
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/30',
      title: 'text-indigo-300',
      button: 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      icon: 'text-indigo-400'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <div className={`${colors.bg} rounded-xl p-4 border ${colors.border} transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10`}>
      <h4 className={`text-sm font-semibold ${colors.title} mb-3 flex items-center gap-2`}>
        <Icon className={colors.icon} />
        {title} ({links.length})
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {visibleLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${colors.button} text-white py-2 px-3 rounded-lg text-xs font-medium transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group flex items-center justify-center gap-1.5`}
          >
            <FaStore className="text-xs" />
            <span>{link.store}</span>
            <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
      {links.length > 4 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-xs font-medium text-gray-400 hover:text-pink-400 flex items-center gap-1 transition-colors"
        >
          {expanded ? (
            <>Show less <FaChevronUp className="text-xs" /></>
          ) : (
            <>Show {links.length - 4} more options <FaChevronDown className="text-xs" /></>
          )}
        </button>
      )}
    </div>
  );
};

const PurchaseOptions = ({ paperbackLinks, hardcoverLinks, ebookLinks }) => {
  const paperbackArray = paperbackLinks ? Object.entries(paperbackLinks).map(([store, url]) => ({ store: getStoreName(store), url })) : [];
  const hardcoverArray = hardcoverLinks ? Object.entries(hardcoverLinks).map(([store, url]) => ({ store: getStoreName(store), url })) : [];
  const ebookArray = ebookLinks ? Object.entries(ebookLinks).map(([store, url]) => ({ store: getStoreName(store), url })) : [];

  const hasAnyLinks = paperbackArray.length > 0 || hardcoverArray.length > 0 || ebookArray.length > 0;

  if (!hasAnyLinks) return null;

  return (
    <div className="mb-6">
      <h3 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4 flex items-center gap-2">
        <FaShoppingCart className="text-pink-400" />
        Where to Buy
      </h3>
      <div className="space-y-3">
        <FormatPurchaseSection 
          title="Paperback"
          icon={FaBook}
          links={paperbackArray}
          colorScheme="pink"
        />
        <FormatPurchaseSection 
          title="Hardcover"
          icon={FaHardHat}
          links={hardcoverArray}
          colorScheme="purple"
        />
        <FormatPurchaseSection 
          title="eBook"
          icon={FaMobileAlt}
          links={ebookArray}
          colorScheme="indigo"
        />
      </div>
    </div>
  );
};

const RelatedTopics = ({ topics }) => {
  if (!topics?.length) return null;

  return (
    <div className="border-t border-purple-500/20 pt-5 mt-4">
      <div className="flex flex-wrap gap-3">
        {topics.map((topic, index) => (
          <a
            key={index}
            href={topic.link}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-purple-500/20 rounded-full text-sm text-gray-300 hover:text-pink-400 transition-all duration-300 border border-purple-500/20"
          >
            <FaLink className="text-purple-400 text-xs" />
            {topic.title}
          </a>
        ))}
      </div>
    </div>
  );
};

// Pride Badge Component
const PrideBadge = () => (
  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-full">
    <FaRainbow className="text-pink-400 text-xs" />
    <span className="text-[10px] text-purple-200">LGBTQ+ Literature</span>
    <FaHeart className="text-pink-400 text-[8px]" />
  </div>
);

// ============================================
// Main Component
// ============================================

const BookNewsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedDescription, setExpandedDescription] = useState(false);

  const fetchBook = useCallback(async () => {
    if (!id) {
      setError('No book ID provided');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const foundBook = mockBooks.find(b => b.id === id);
      
      if (foundBook) {
        setBook(foundBook);
      } else {
        setError('The requested book could not be found');
      }
    } catch (err) {
      console.error('Error fetching book:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleRetry = useCallback(() => {
    fetchBook();
  }, [fetchBook]);

  const toggleDescription = useCallback(() => {
    setExpandedDescription(prev => !prev);
  }, []);

  const truncateDescription = useMemo(() => {
    if (!book) return '';
    const text = book.description;
    const limit = 500;
    if (text.length <= limit || expandedDescription) return text;
    return text.substring(0, limit) + '...';
  }, [book, expandedDescription]);

  const needsTruncation = useMemo(() => {
    return book ? book.description.length > 500 : false;
  }, [book]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState message={error} onRetry={handleRetry} />;
  if (!book) return <ErrorState message="Book not found" onRetry={handleRetry} />;

  return (
    <>
      <Helmet>
        <title>{`${book.title} by ${book.author} | LGBTQ+ Book Details`}</title>
        <meta name="description" content={book.description.substring(0, 160)} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950">
        {/* Animated Rainbow Background */}
        <div className="fixed inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 via-indigo-600/20 via-blue-600/20 via-green-600/20 via-yellow-600/20 to-red-600/20 animate-gradient-xy"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent"></div>
        </div>

        {/* Floating Pride Particles */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 15}s`,
                background: `hsl(${Math.random() * 360}, 100%, 60%)`,
                boxShadow: `0 0 8px hsl(${Math.random() * 360}, 100%, 60%)`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Navigation */}
            <nav className="mb-8">
              <button
                onClick={handleGoBack}
                className="group inline-flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-all duration-300 text-sm font-medium"
                aria-label="Go back to previous page"
              >
                <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
                <span>Back to Books</span>
              </button>
            </nav>

            {/* Main Content Card */}
            <article className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-purple-500/30">
              {/* Header with Rainbow Gradient */}
              <header className="relative bg-gradient-to-r from-pink-900/40 via-purple-900/40 to-indigo-900/40 px-6 py-6 md:px-8 overflow-hidden">
                {/* Rainbow line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 via-blue-500 to-green-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <PrideBadge />
                    <div className="flex items-center gap-1 text-amber-400">
                      <FaStar className="text-xs" />
                      <FaStar className="text-xs" />
                      <FaStar className="text-xs" />
                      <FaStar className="text-xs" />
                      <FaStar className="text-xs" />
                      <span className="text-gray-400 text-xs ml-1">(4.9)</span>
                    </div>
                  </div>
                  
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-serif">
                    <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                      {book.title}
                    </span>
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-3 text-purple-200/80 text-sm">
                    <span className="flex items-center gap-1.5">
                      <FaUser className="text-pink-400" />
                      by {book.author}
                    </span>
                    <span className="w-1 h-1 bg-purple-400/50 rounded-full" />
                    <span className="flex items-center gap-1.5">
                      <FaRegClock className="text-pink-400" />
                      Published {formatDate(book.postDate)}
                    </span>
                  </div>
                </div>
              </header>

              {/* Content Body */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Book Cover with Pride Glow */}
                  <div className="lg:w-2/5 xl:w-1/3">
                    <div className="sticky top-8">
                      <div className="relative group rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-pink-500/30">
                        {/* Rainbow glow on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-indigo-500/30 rounded-xl blur-xl"></div>
                        </div>
                        
                        {book.image ? (
                          <img
                            src={book.image}
                            alt={`Cover of ${book.title}`}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
                            loading="lazy"
                          />
                        ) : (
                          <div className="aspect-[2/3] flex items-center justify-center bg-gray-800">
                            <FaImage className="w-12 h-12 text-purple-500" />
                          </div>
                        )}
                        
                        {/* Pride heart overlay */}
                        <div className="absolute bottom-3 right-3 bg-black/50 rounded-full p-1.5 backdrop-blur-sm z-20">
                          <FaHeart className="text-pink-400 text-xs" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Details Panel */}
                  <div className="lg:w-3/5 xl:w-2/3">
                    {/* Synopsis */}
                    <section className="mb-6">
                      <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-3 font-serif flex items-center gap-2">
                        <FaFeatherAlt className="text-pink-400 text-sm" />
                        Synopsis
                      </h2>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
                          {truncateDescription}
                        </p>
                      </div>
                      {needsTruncation && (
                        <button
                          onClick={toggleDescription}
                          className="mt-3 text-pink-400 hover:text-pink-300 text-sm font-medium flex items-center gap-1 transition-colors"
                        >
                          {expandedDescription ? (
                            <>Show less <FaChevronUp className="text-xs" /></>
                          ) : (
                            <>Read more <FaChevronDown className="text-xs" /></>
                          )}
                        </button>
                      )}
                    </section>

                    {/* Quote with Pride styling */}
                    {book.quote && (
                      <aside className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-xl p-5 mb-6 border-l-4 border-pink-400">
                        <FaQuoteLeft className="text-pink-400 text-xl mb-2" />
                        <p className="text-gray-200 italic text-sm md:text-base leading-relaxed">
                          {book.quote}
                        </p>
                      </aside>
                    )}

                    {/* Book Specifications */}
                    <BookSpecs details={book.details} />

                    {/* Purchase Options */}
                    <PurchaseOptions 
                      paperbackLinks={book.paperbackPurchaseLinks}
                      hardcoverLinks={book.hardcoverPurchaseLinks}
                      ebookLinks={book.ebookPurchaseLinks}
                    />

                    {/* Related Topics */}
                    <RelatedTopics topics={book.relatedTopics} />

                    {/* Pride Message */}
                    <div className="mt-6 pt-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                        <FaRainbow className="text-pink-400" />
                        <span>Celebrating LGBTQ+ Voices in Literature</span>
                        <FaHeart className="text-red-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(8px); }
          75% { transform: translateY(15px) translateX(-8px); }
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
      `}</style>
    </>
  );
};

export default BookNewsDetails;