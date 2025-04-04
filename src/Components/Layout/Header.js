import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import logo from '../../assets/images/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='iconstop '>
      <div className="fixed top-0 left-0 w-full shadow-lg z-50" style={{ background: "#ECF1FF" }}>
        <div className="max-w-7xl mx-auto px-5 py-3 flex text-black justify-between items-center">
          <div className="text-xs sm:text-xsm">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" size="xl" />
            <Link href="tel:+91-9509494310" style={{ fontSize: "13px" }}> +91-9509494310</Link>
          </div>
          <div className="flex items-center space-x-4 ">
            <div className="text-xs sm:text-xsm text-gray-900 text-white">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-black text-base" size="sm" />
              <Link href="mailto:support@collectswift.com" className="email-text text-black text-sm">
                support@collectswift.com
              </Link>
            </div>

            <div className="flex space-x-4 socialicon">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black  hover:text-blue-500  text-xs sm:text-sm">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500  text-xs sm:text-sm">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500  text-xs sm:text-sm">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <header className="fixed top-10 left-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
          <div className="logotop py-2">
            <Image src={logo} alt="Logo" width={300} height={100} />
          </div>
          <div className="md:hidden ticon">
            <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
          <nav className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white md:static md:bg-transparent md:w-auto`}>
            <Link href="/" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
              <strong>Home</strong>
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
              <strong>About</strong>
            </Link>
            <Link href="/services" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
              <strong>Services</strong>
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
              <strong>Contact</strong>
            </Link>
            <div className="relative">
              <button onClick={toggleDropdown} className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
                <strong>Login</strong>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 w-40 bg-white shadow-lg z-10">
                  <Link href="https://merchant.collectswift.com/" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
                    User Login 
                  </Link>
                  <Link href="https://retailer.collectswift.com/login" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
                    Retailor Login
                  </Link>
                  <Link href="https://admin.collectswift.com" className="block px-4 py-2 text-gray-900 hover:text-blue-500 ">
                    Team Login
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
