import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/Testimonials';
import ProcessSection from './components/Process';
import ServicesTwoSection from './components/ServicesTwoSection';
import ServicesThreeSection from './components/ServicesThreeSection';
import Footer from './components/Footer';
import AboutMe from './components/Aboutme';
import Blog from './pages/Blog';
import ContactForm from './components/ContactForm'; // Import the ContactForm component
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <Router>
      <div className={`${theme ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen overflow-x-hidden`}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <ServicesSection />
              <TestimonialsSection />
              <ProcessSection />
              <ServicesTwoSection />
              <ServicesThreeSection />
              <ContactForm /> {/* Add the ContactForm to the homepage */}
            </main>
          } />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />

        {/* Toggle Button */}
        <div
          onClick={() => setTheme((prev) => !prev)}
          className={`fixed bottom-2 right-4 flex items-center justify-between w-14 h-7 px-1 rounded-full cursor-pointer transition-all ${theme ? 'bg-gray-600' : 'bg-yellow-400'}`}
        >
          <div
            className={`absolute w-6 h-6 rounded-full bg-white shadow-lg transition-transform ${theme ? 'translate-x-6' : ''}`}
          />
          <FaSun
            className={`text-yellow-300 text-lg absolute left-1 transition-opacity ${theme ? 'opacity-0' : 'opacity-100'}`}
          />
          <FaMoon
            className={`text-blue-400 text-lg absolute right-1 transition-opacity ${theme ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;