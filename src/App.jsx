import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/Testimonials';
import ProcessSection from './components/Process';
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