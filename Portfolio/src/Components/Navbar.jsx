import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contactme', label: 'Contact Me' },
  ];

  return (
    <nav className="fixed top-0 w-full z-20 bg-gradient-to-r from-purple-600 via-indigo-800 to-blue-700 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold text-white tracking-wide hover:text-indigo-400 transition duration-300"
        >
          Aditya
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg text-white font-medium hover:text-indigo-400 relative group"
              >
                {link.label}
                {/* Underline Animation */}
                <span className="absolute left-0 bottom-0 h-1 w-0 bg-indigo-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden absolute top-full right-0 w-64 bg-gray-800 rounded-lg shadow-lg transform transition-all duration-500 ease-out"
          >
            <ul className="flex flex-col items-start p-6 space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={toggleMenu}
                    className="text-white font-medium text-lg hover:text-indigo-400 transition duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
