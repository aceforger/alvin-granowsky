import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white">
      <ul className="flex list-none m-0 px-4 gap-2 md:justify-center md:gap-0 md:px-0">
        <NavItem 
          iconSrc="./images/book.gif" 
          text="Book" 
          active
          path="/bookshop"
        />
        {/* <NavItem 
          iconSrc="./images/ebook.gif" 
          text="eBook" 
          path="/ebooks"
        /> */}
        {/* <NavItem 
          iconSrc="./images/audio-book.gif" 
          text="Audio Book" 
          path="/audiobooks"
        /> */}
        {/* <NavItem 
          iconSrc="./softcopy.gif" 
          text="Soft Copy" 
          path="/softcopies"
        />
        <NavItem 
          iconSrc="./hardcopy.gif" 
          text="Hard Copy" 
          path="/hardcopies"
        /> */}
      </ul>
    </nav>
  );
}

const NavItem = ({ iconSrc, text, active = false, path }) => (
        <li className="flex flex-col items-center ml-0 px-2 md:ml-16 lg:ml-50 first:md:ml-0">
          <Link 
            to={path}
            className={`flex flex-col items-center gap-1 p-2 rounded text-[10px] font-serif
              ${active ? 'text-black font-semibold' : 'text-gray-700'}
              hover:text-gray-700 transition-colors duration-300
            `}
          >
            <div className="mb-1">
              <img 
                src={iconSrc} 
                alt={text} 
                className="w-8 h-8 object-contain rounded shadow-md md:w-8 md:h-8"
              />
            </div>
            {text}
          </Link>
    </li>
        );

export default Navbar;