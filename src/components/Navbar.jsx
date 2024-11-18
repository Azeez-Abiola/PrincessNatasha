import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-2 px-4 md:px-8 flex items-center justify-between bg-[#fff] shadow-lg mb-8 font-['Inter']">
      <a href="/" className="flex items-center justify-center">
        <img src="./logo.png" alt="Logo" className="w-24 h-24 rounded-full" />
      </a>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 mx-auto text-[#44BBA4] font-semibold text-xl">
        {['Home', 'Portfolio', 'Services', 'About Me', 'Blog'].map((item, index) => (
          <a key={index} href={`/${item.toLowerCase().replace(" ", "")}`} className="relative group">
            <span>{item}</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#44BBA4] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
          </a>
        ))}
      </div>

      {/* Let's Work Button */}
      <div className="hidden md:flex">
        <a href="/letswork" className="relative group">
          <button className="bg-[#44BBA4] text-[#fff]  px-12 py-2 rounded-md transition-transform duration-300 transform hover:scale-105 hover:bg-[#F6F7EB] hover:text-[#44BBA4] hover:border-[#44BBA4] hover:border text-lg md:mr-32">
            Work with me!
          </button>
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden ml-auto flex flex-col justify-center items-center w-10 h-10 relative z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`w-6 h-0.5 bg-[#44BBA4] rounded-full transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#44BBA4] rounded-full transition-all duration-300 mt-1.5 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#44BBA4] rounded-full transition-all duration-300 mt-1.5 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-full bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40 flex items-center justify-center overflow-hidden`}>
        <div className="flex flex-col space-y-8 text-center text-[#44BBA4] font-semibold text-lg">
          {['Home', 'Portfolio', 'Services', 'About Me', 'Blog'].map((item, index) => (
            <a key={index} href={`/${item.toLowerCase().replace(" ", "")}`} className="relative group">
              <span className="group-hover:text-[#9b4819]">{item}</span>
            </a>
          ))}
          {/* Let's Work Button in Mobile Menu */}
          <a href="/letswork" className="relative group">
            <button className="bg-[#44BBA4] text-white px-12 py-2 rounded-md transition-transform duration-300 transform hover:scale-105 hover:bg-[#9b4819] text-lg">
                Work with me!
            </button>
          </a>
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