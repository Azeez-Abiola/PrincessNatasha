import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ onScrollToServices }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' }, // Updated path to navigate to Portfolio page
    { 
      name: 'Services', 
      path: '#services', 
      onClick: onScrollToServices,
      subItems: [
        { name: 'Content Strategy', path: '/blog' },
        { name: 'Brand Strategy', path: '/blog' },
        { name: 'Content Writing', path: '/blog' },
      ],
    },
    { name: 'About Me', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex-shrink-0 mr-auto">
            <img src="./logo.png" alt="Logo" className="w-28 h-28 md:w-20 md:h-20 rounded-full transition-transform duration-300 hover:scale-110" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-[#44BBA4] font-medium text-sm lg:text-base transition-colors duration-300 border-b-2 border-transparent hover:border-[#44BBA4] flex items-center"
                  onClick={item.onClick}
                >
                  {item.name}
                  {item.subItems && <ChevronRight className="ml-1 transform group-hover:rotate-90 transition-transform duration-300" />}
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#44BBA4] hover:text-white transition-colors duration-300"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              to="#"
              className="bg-[#44BBA4] text-white px-6 py-2 rounded-full font-medium text-sm lg:text-base transition-all duration-300 hover:bg-[#2e8b7a] hover:shadow-lg transform hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Work with me!
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#44BBA4] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#44BBA4]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:bg-[#44BBA4] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-[#44BBA4]"
                  onClick={() => {
                    setIsOpen(false);
                    item.onClick && item.onClick();
                  }}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    <ChevronRight className="h-5 w-5" />
                  </span>
                </Link>
              ))}
              <Link
                to="#"
                className="bg-[#44BBA4] text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-[#2e8b7a] transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  setIsOpen(false);
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Work with me!
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}