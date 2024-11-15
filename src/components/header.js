import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import img1 from '../imgs/Img1.png';
import AOS from 'aos';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init(); // Reinitialize AOS if the component is mounted
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-3 flex flex-col md:flex-row justify-between items-start md:items-center" data-aos="fade-up">
      {/* Logo and Hamburger Button Container */}
      <div className="flex justify-between items-center w-full md:w-auto">
        {/* Logo on the left with adjustment for desktop */}
        <img
          src={img1}
          alt="Logo"
          className="h-10 pl-1 md:h-[60px] md:ml-4 object-contain"
          data-aos="zoom-in"
        />

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden flex items-center ml-4" data-aos="fade-up">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={`flex-col w-full ${isMenuOpen ? 'flex' : 'hidden'} md:flex md:flex-row md:items-center md:justify-center`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 text-[#002a4c] font-semibold">
          <li>
            <Link to="/" className="mb-2 md:mb-0 relative group">
              Home
              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#69ad40] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/company" className="mb-2 md:mb-0 relative group">
              Company
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#69ad40] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <a href="#industrial-solar" className="mb-2 md:mb-0 relative group">
              Industrial Solar
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#69ad40] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#commercial-solar" className="mb-2 md:mb-0 relative group">
              Commercial Solar
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#69ad40] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#residential-solar" className="mb-2 md:mb-0 relative group">
              Residential Solar
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#69ad40] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#agricultural-solar" className="mb-2 md:mb-0 relative group">
              Agricultural Solar
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#69ad40] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="mb-2 md:mb-0 relative group">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#69ad40] transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Social Links */}
      <div className={`flex items-center space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex md:justify-center`}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="text-xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-xl" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
        </a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogle} className="text-xl" />
        </a>
      </div>
    </header>
  );
};

export default Header;
