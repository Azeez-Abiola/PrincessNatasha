import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/Testimonials';
import ProcessSection from './components/Process';
import ServicesTwoSection from './components/ServicesTwoSection';
import ServicesThreeSection from './components/ServicesThreeSection.jsx';
import WritingProcess from './components/WritingProcess.jsx';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <ProcessSection />
        <ServicesTwoSection/>
        <ServicesThreeSection/>
        <WritingProcess/>
      </main>
      <Footer />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}