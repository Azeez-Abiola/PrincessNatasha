import { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

export default function Navbar({ onScrollToServices }) {
=======
export default function Navbar() {
>>>>>>> b705f772b892ca4e08fb496770ac79ca4f6cb1e5
  const [isOpen, setIsOpen] = useState(false);
 
  return (
<<<<<<< HEAD
    <nav className="w-full max-w-[1440px] mx-auto py-2 px-4 md:px-8 flex items-center justify-between bg-[#fff] shadow-lg mb-8 font-['Inter'] fixed top-0 left-0 right-0 z-50">
      <Link to="/" className="flex items-center justify-center">
        <img src="./logo.png" alt="Logo" className="w-20 h-20 md:w-24 md:h-24 rounded-full" />
      </Link>
      
=======
    <nav className="w-full py-2 px-4 md:px-8 flex items-center justify-between bg-[#fff] shadow-lg mb-8 font-['Inter']">
      <a href="/" className="flex items-center justify-center">
        <img src="./logo.png" alt="Logo" className="w-24 h-24 rounded-full" />
      </a>

>>>>>>> b705f772b892ca4e08fb496770ac79ca4f6cb1e5
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4 lg:space-x-8 text-[#44BBA4] font-semibold text-lg lg:text-xl">
        {['Home', 'Portfolio', 'Services', 'About Me', 'Blog'].map((item, index) => (
<<<<<<< HEAD
          <Link
            key={index}
            to={item === 'About Me' ? '/about' : `#${item.toLowerCase().replace(" ", "")}`}
            className="relative group"
            onClick={item === 'Services' ? onScrollToServices : null} // Use prop for Services
          >
=======
          <a key={index} href={item === 'Blog' ? '/blog' : '/'} className="relative group">
>>>>>>> b705f772b892ca4e08fb496770ac79ca4f6cb1e5
            <span>{item}</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#44BBA4] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </Link>
        ))}
      </div>

      {/* Let's Work Button */}
      <div className="hidden md:flex">
<<<<<<< HEAD
        <Link to="/letswork" className="relative group">
          <button className="bg-[#44BBA4] text-[#fff] px-8 md:px-12 py-2 rounded-md transition-transform duration-300 transform hover:scale-105 hover:bg-[#2e8b7a] hover:text-[#fff] hover:border-[#44BBA4] hover:border text-base md:text-lg">
=======
        <a href="/letswork" className="relative group">
          <button className="bg-[#44BBA4] text-[#fff] px-12 py-2 rounded-md transition-transform duration-300 transform hover:scale-105 hover:bg-[#F6F7EB] hover:text-[#44BBA4] hover:border-[#44BBA4] hover:border text-lg md:mr-32">
>>>>>>> b705f772b892ca4e08fb496770ac79ca4f6cb1e5
            Work with me!
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
<<<<<<< HEAD
      <button 
        className="md:hidden ml-auto flex flex-col justify-center items-center w-8 h-8 relative z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`w-5 h-0.5 bg-[#44BBA4] rounded-full transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-[#44BBA4] rounded-full transition-all duration-300 mt-1.5 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-[#44BBA4] rounded-full transition-all duration-300 mt-1.5 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-full bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40 flex items-center justify-center overflow-hidden`}>
        <div className="flex flex-col space-y-6 text-center text-[#44BBA4] font-semibold text-base md:text-lg">
          {['Home', 'Portfolio', 'Services', 'About Me', 'Blog'].map((item, index) => (
            <Link
              key={index}
              to={item === 'About Me' ? '/about' : `#${item.toLowerCase().replace(" ", "")}`}
              className="relative group"
              onClick={item === 'Services' ? onScrollToServices : null} // Use prop for Services
            >
=======
      <button
        className="md:hidden ml-auto flex flex-col justify-center items-center w-10 h-10 relative z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`w-6 h-0.5 bg-[#44BBA4] rounded-full transition-all duration-300 ${
            isOpen ? 'transform rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-[#44BBA4] rounded-full transition-all duration-300 mt-1.5 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-[#44BBA4] rounded-full transition-all duration-300 mt-1.5 ${
            isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-full bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40 flex items-center justify-center overflow-hidden`}
      >
        <div className="flex flex-col space-y-8 text-center text-[#44BBA4] font-semibold text-lg">
          {['Home', 'Portfolio', 'Services', 'About Me', 'Blog'].map((item, index) => (
            <a key={index} href={item === 'Blog' ? '/blog' : '/'} className="relative group">
>>>>>>> b705f772b892ca4e08fb496770ac79ca4f6cb1e5
              <span className="group-hover:text-[#9b4819]">{item}</span>
            </Link>
          ))}
          {/* Let's Work Button in Mobile Menu */}
<<<<<<< HEAD
          <Link to="/letswork" className="relative group">
            <button className="bg-[#44BBA4] text-white px-8 md:px-12 py-2 rounded-md transition-transform duration-300 transform hover:scale-105 hover:bg-[#2e8b7a] text-base md:text-lg">
                Work with me!
=======
          <a href="/letswork" className="relative group">
            <button className="bg-[#44BBA4] text-white px-12 py-2 rounded-md transition-transform duration-300 transform hover:scale-105 hover:bg-[#9b4819] text-lg">
              Work with me!
>>>>>>> b705f772b892ca4e08fb496770ac79ca4f6cb1e5
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}
