import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import "../App.css";

const links = ['home', 'projects', 'contact'];
const sections = {
  home: 0,
  projects: window.innerHeight, // 100vh
  contact: window.innerHeight * 5, // 400vh
};

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 900);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const navRef = useRef(null);

  const handleNavScroll = () => {
    setIsScrolled(window.scrollY > window.innerHeight * 0.1);
  };

  const handleResize = () => {
    setIsPhone(window.innerWidth <= 900);
  };

  const scrollToSection = (link) => {
    const scrollPosition = sections[link] || 0;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  const handleLinkClick = (link, index) => {
    setActiveLink(link);
    scrollToSection(link);
    updateIndicatorPosition(index);
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  const updateIndicatorPosition = (index) => {
    if (navRef.current) {
      const navLinks = navRef.current.children;
      const selectedLink = navLinks[index];
      if (selectedLink) {
        setIndicatorStyle({
          width: selectedLink.offsetWidth,
          left: selectedLink.offsetLeft,
        });
      }
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    let newActiveLink = 'home';

    if (scrollPosition >= sections.contact - 100) {
      newActiveLink = 'contact';
    } else if (scrollPosition >= sections.projects - 100) {
      newActiveLink = 'projects';
    }

    if (newActiveLink !== activeLink) {
      setActiveLink(newActiveLink);
      const newIndex = links.indexOf(newActiveLink);
      updateIndicatorPosition(newIndex);
    }
  };

  useEffect(() => {
    handleResize(); // Set initial isPhone state
    window.addEventListener('scroll', handleNavScroll);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleNavScroll);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeLink]);

  return (
    <div className="h-100 flex flex-row z-10">
      {/* Logo - Centered on Mobile */}
      <div className={`p-2.5 mt-1 text-4xl text-white ${isPhone ? 'mx-auto' : 'ml-10'}`}>
        <p className="Sef">Sef</p>
        <p className="UnderSef">Production</p>
      </div>

      {/* Navigation Links */}
      <div className="flex fixed flex-row p-4 justify-center align-middle w-screen">
        {isPhone ? (
          <>
            {/* Download CV Button - Top Left on Mobile */}
            <div className="absolute right-0 p-4">
              <button className="bg-blue-500 text-white px-2 py-[5%] rounded-4xl hover:bg-blue-600 text-[15px]">
                Download CV
              </button>
            </div>

            {/* Hamburger Menu - Top Right on Mobile */}
            <div className="absolute left-0 text-white">
            <div className='absolute text-4xl pl-5 pt-2'>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
              </button>
            </div>

              {/* Mobile Menu */}
              {isMenuOpen && (
                <ul className="flex flex-col space-y-4 mt-4 bg-gray-800 p-4 rounded-lg text-center w-screen">
            {links.map((link, index) => (
              <li
                key={link}
                className={`cursor-pointer px-4 py-2 text-white ${
                  activeLink === link ? 'font-bold' : ''
                }`}
                onClick={() => {
                  setActiveLink(link);
                  setIsMenuOpen(false);
                  window.scrollTo({ top: sections[link] || 0, behavior: 'smooth' });
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </li>
            ))}
          </ul>
              )}
            </div>
          </>
        ) : (
          <div
            className={`h-10.5 align-middle w-120 rounded-2xl transition duration-500 ${
              isScrolled ? 'glass-effect' : 'bg-transparent'
            }`}
          >
            <ul
              ref={navRef}
              className="flex space-x-10 justify-center items-center text-white ml-10 text-lg mt-2 relative family-poppins"
            >
              {links.map((link, index) => (
                <li
                  key={link}
                  className={`relative cursor-pointer px-4 z-10 ${
                    activeLink === link ? 'font-bold' : ''
                  }`}
                  onClick={() => handleLinkClick(link, index)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </li>
              ))}

              <motion.div
                className="absolute bottom-0 h-8 bg-gray-900 rounded-full"
                animate={indicatorStyle}
                transition={{ duration: 0.5, type: 'spring' }}
              />
            </ul>
          </div>
        )}
      </div>

      {/* Download CV Button - Top Right on Desktop */}
      {!isPhone && (
        <div className="absolute right-8 p-4 mt-1">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-4xl hover:bg-blue-600">
            Download CV
          </button>
        </div>
      )}
    </div>
  );
}