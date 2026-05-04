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
  FaMobileAlt
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
    // Separate purchase links by format
    paperbackPurchaseLinks: {
      
    },
    hardcoverPurchaseLinks: {
     
    },
    ebookPurchaseLinks: {
      
    },
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
    // Separate purchase links by format
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
  saxo: 'Saxo'
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

// Convert format-specific purchase links to array format
const formatPurchaseLinks = (links) => {
  if (!links) return [];
  return Object.entries(links).map(([storeKey, url]) => ({
    url,
    store: getStoreName(storeKey),
    format: 'paperback' // This will be set by the parent component
  }));
};

// ============================================
// Sub-Components
// ============================================

const LoadingState = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <FaSpinner className="w-12 h-12 text-blue-600 animate-spin" />
      <p className="text-slate-600 text-lg font-medium">Loading book details...</p>
    </div>
  </div>
);

const ErrorState = ({ message, onRetry }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
    <div className="text-center max-w-md">
      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-slate-800 mb-2">Unable to Load Book</h2>
      <p className="text-slate-600 mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
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
    <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
      <h3 className="text-base font-semibold text-slate-800 mb-4 flex items-center gap-2">
        <FaInfoCircle className="text-blue-600 text-sm" />
        Book Details
      </h3>
      <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
        {visibleSpecs.map(({ label, icon: Icon, value }) => (
          <React.Fragment key={label}>
            <span className="text-slate-500 flex items-center gap-1.5">
              <Icon className="text-slate-400 text-xs" />
              {label}:
            </span>
            <span className="text-slate-700 font-mono text-sm break-all">{value}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// Format-specific purchase buttons component
const FormatPurchaseSection = ({ title, icon: Icon, links, colorScheme }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleLinks = expanded ? links : links.slice(0, 4);
  
  if (!links || links.length === 0) return null;

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      title: 'text-blue-800',
      button: 'bg-blue-600 hover:bg-blue-700',
      icon: 'text-blue-600'
    },
    green: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      title: 'text-emerald-800',
      button: 'bg-emerald-600 hover:bg-emerald-700',
      icon: 'text-emerald-600'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      title: 'text-purple-800',
      button: 'bg-purple-600 hover:bg-purple-700',
      icon: 'text-purple-600'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <div className={`${colors.bg} rounded-xl p-4 border ${colors.border} transition-all duration-200 hover:shadow-md`}>
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
          className="mt-3 text-xs font-medium text-slate-600 hover:text-slate-800 flex items-center gap-1 transition-colors"
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

const PurchaseOptions = ({ 
  paperbackLinks, 
  hardcoverLinks, 
  ebookLinks 
}) => {
  // Convert links objects to arrays
  const paperbackArray = paperbackLinks ? Object.entries(paperbackLinks).map(([store, url]) => ({ store: getStoreName(store), url })) : [];
  const hardcoverArray = hardcoverLinks ? Object.entries(hardcoverLinks).map(([store, url]) => ({ store: getStoreName(store), url })) : [];
  const ebookArray = ebookLinks ? Object.entries(ebookLinks).map(([store, url]) => ({ store: getStoreName(store), url })) : [];

  const hasAnyLinks = paperbackArray.length > 0 || hardcoverArray.length > 0 || ebookArray.length > 0;

  if (!hasAnyLinks) return null;

  return (
    <div className="mb-6">
      <h3 className="text-base font-semibold text-slate-800 mb-4 flex items-center gap-2">
        <FaShoppingCart className="text-blue-600" />
        Purchase Options
      </h3>
      <div className="space-y-3">
        <FormatPurchaseSection 
          title="Paperback"
          icon={FaBook}
          links={paperbackArray}
          colorScheme="blue"
        />
        <FormatPurchaseSection 
          title="Hardcover"
          icon={FaHardHat}
          links={hardcoverArray}
          colorScheme="green"
        />
        <FormatPurchaseSection 
          title="eBook"
          icon={FaMobileAlt}
          links={ebookArray}
          colorScheme="purple"
        />
      </div>
    </div>
  );
};

const RelatedTopics = ({ topics }) => {
  if (!topics?.length) return null;

  return (
    <div className="border-t border-slate-200 pt-5 mt-4">
      <div className="flex flex-wrap gap-3">
        {topics.map((topic, index) => (
          <a
            key={index}
            href={topic.link}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm text-slate-700 transition-colors"
          >
            <FaLink className="text-slate-400 text-xs" />
            {topic.title}
          </a>
        ))}
      </div>
    </div>
  );
};

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
        <title>{`${book.title} by ${book.author} | Book Details`}</title>
        <meta name="description" content={book.description.substring(0, 160)} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <nav className="mb-8">
            <button
              onClick={handleGoBack}
              className="group inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
              aria-label="Go back to previous page"
            >
              <FaArrowLeft className="text-xs group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Books</span>
            </button>
          </nav>

          {/* Main Content Card */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            {/* Header */}
            <header className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-6 md:px-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 font-serif tracking-tight">
                {book.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-amber-200/90 text-sm">
                <span className="flex items-center gap-1.5">
                  <FaUser className="text-amber-300" />
                  by {book.author}
                </span>
                <span className="w-1 h-1 bg-amber-200/50 rounded-full" />
                <span className="flex items-center gap-1.5">
                  <FaRegClock className="text-amber-300" />
                  Published {formatDate(book.postDate)}
                </span>
              </div>
            </header>

            {/* Content Body */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Book Cover */}
                <div className="lg:w-2/5 xl:w-1/3">
                  <div className="sticky top-8">
                    <div className="relative group rounded-xl overflow-hidden shadow-lg bg-slate-100">
                      {book.image ? (
                        <img
                          src={book.image}
                          alt={`Cover of ${book.title}`}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="aspect-[2/3] flex items-center justify-center bg-slate-200">
                          <FaImage className="w-12 h-12 text-slate-400" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Book Details Panel */}
                <div className="lg:w-3/5 xl:w-2/3">
                  {/* Synopsis */}
                  <section className="mb-6">
                    <h2 className="text-xl font-semibold text-slate-800 mb-3 font-serif">Synopsis</h2>
                    <div className="prose prose-slate max-w-none">
                      <p className="text-slate-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
                        {truncateDescription}
                      </p>
                    </div>
                    {needsTruncation && (
                      <button
                        onClick={toggleDescription}
                        className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        {expandedDescription ? (
                          <>Show less <FaChevronUp className="text-xs" /></>
                        ) : (
                          <>Read more <FaChevronDown className="text-xs" /></>
                        )}
                      </button>
                    )}
                  </section>

                  {/* Quote */}
                  {book.quote && (
                    <aside className="bg-amber-50/80 rounded-xl p-5 mb-6 border-l-4 border-amber-400">
                      <FaQuoteLeft className="text-amber-300 text-xl mb-2" />
                      <p className="text-slate-700 italic text-sm md:text-base leading-relaxed">
                        {book.quote}
                      </p>
                    </aside>
                  )}

                  {/* Book Specifications */}
                  <BookSpecs details={book.details} />

                  {/* Purchase Options - Using separate format-specific props */}
                  <PurchaseOptions 
                    paperbackLinks={book.paperbackPurchaseLinks}
                    hardcoverLinks={book.hardcoverPurchaseLinks}
                    ebookLinks={book.ebookPurchaseLinks}
                  />

                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BookNewsDetails;