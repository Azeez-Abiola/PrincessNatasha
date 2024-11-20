import { ThemeProvider } from '../components/ThemeContext';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/Testimonials';
import ProcessSection from '../components/Process';
import Footer from '../components/Footer';

function MainLayout(){
  return(
    <>
    <ThemeProvider>
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
    </ThemeProvider>
    </>
    )
}
 
export default MainLayout