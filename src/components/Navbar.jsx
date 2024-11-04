import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-2 px-6 md:px-12 flex items-center -mt-4">
      <a href="/" className="flex items-center justify-center">
        <img src="./logo.png" alt="Logo" className="w-40 h-40 rounded-full" />
      </a>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 mx-auto">
        <a href="/" className="relative pl-4 group">
          <span>Home</span>
          <span className="absolute bottom-0 left-4 w-[calc(100%-1rem)] h-0.5 bg-[#b83330] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </a>
        <a href="/portfolio" className="relative pl-4 group">
          <span>Portfolio</span>
          <span className="absolute bottom-0 left-4 w-[calc(100%-1rem)] h-0.5 bg-[#b83330] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </a>
        <a href="/services" className="relative pl-4 group">
          <span>Services</span>
          <span className="absolute bottom-0 left-4 w-[calc(100%-1rem)] h-0.5 bg-[#b83330] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </a>
        <a href="/about" className="relative pl-4 group">
          <span>About Me</span>
          <span className="absolute bottom-0 left-4 w-[calc(100%-1rem)] h-0.5 bg-[#b83330] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </a>
        <a href="/contact" className="relative pl-4 group">
          <span>Let's Work</span>
          <span className="absolute bottom-0 left-4 w-[calc(100%-1rem)] h-0.5 bg-[#b83330] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </a>
        <a href="/blog" className="relative pl-4 group">
          <span>Blog</span>
          <span className="absolute bottom-0 left-4 w-[calc(100%-1rem)] h-0.5 bg-[#b83330] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden ml-auto flex flex-col justify-center items-center w-10 h-10 relative z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`w-6 h-0.5 bg-[#b83330] rounded-full transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#b83330] rounded-full transition-all duration-300 mt-1.5 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#b83330] rounded-full transition-all duration-300 mt-1.5 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-screen w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40 flex items-center justify-center`}>
        <div className="flex flex-col space-y-6 text-center">
          <a href="/" className="relative group">
            <span className="text-lg group-hover:text-[#b83330]">Home</span>
          </a>
          <a href="/portfolio" className="relative group">
            <span className="text-lg group-hover:text-[#b83330]">Portfolio</span>
          </a>
          <a href="/services" className="relative group">
            <span className="text-lg group-hover:text-[#b83330]">Services</span>
          </a>
          <a href="/about" className="relative group">
            <span className="text-lg group-hover:text-[#b83330]">About Me</span>
          </a>
          <a href="/contact" className="relative group">
            <span className="text-lg group-hover:text-[#b83330]">Let's Work</span>
          </a>
          <a href="/blog" className="relative group">
            <span className="text-lg group-hover:text-[#b83330]">Blog</span>
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
  )
}
