import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Working with Natasha has transformed our content strategy. Her insights and writing style have helped us reach new audiences effectively.",
      author: "Sarah Johnson",
      position: "CEO TechStart"
    },
    {
      text: "I am beyond impressed with Natasha's writing skills and professionalism. She consistently exceeds my expectations, her attention to detail, and ability to understand my needs and requirements are truly remarkable. I highly recommend her to anyone seeking.",
      author: "Tyron",
      position: "Director Co-live Films"
    },
    {
      text: "Natasha's creativity and dedication have been a game-changer for our marketing efforts. Her ability to craft compelling narratives is unmatched.",
      author: "Michael Lee",
      position: "Marketing Head InnovateX"
    },
    {
      text: "Working with Natasha has transformed our content strategy. Her insights and writing style have helped us reach new audiences effectively.",
      author: "Sarah Johnson",
      position: "CEO TechStart"
    },
    {
      text: "Natasha's creativity and dedication have been a game-changer for our marketing efforts. Her ability to craft compelling narratives is unmatched.",
      author: "Michael Lee",
      position: "Marketing Head InnovateX"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        position: 'absolute'
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      position: 'relative'
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        position: 'absolute'
      };
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#F6F7EB] to-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Radley'] italic mb-12 text-center text-[#44BBA4]">
          The People Said it, Not Me!
        </h2>
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#44BBA4] text-white p-2 rounded-full z-20 hover:bg-[#2e8b7a] shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 100, damping: 20 },
                  opacity: { duration: 0.5 }
                }}
                className="w-full"
              >
                <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
                  <Quote className="text-[#44BBA4] w-12 h-12 mb-6" />
                  <p className="text-lg md:text-xl lg:text-2xl mb-6 text-gray-700 italic">
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="flex items-center justify-end">
                    <div className="text-right">
                      <p className="font-semibold text-[#44BBA4]">{testimonials[currentIndex].author}</p>
                      <p className="text-sm text-gray-500">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#44BBA4] text-white p-2 rounded-full z-20 hover:bg-[#2e8b7a] shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none transition-all duration-300 ${
                index === currentIndex ? 'bg-[#44BBA4] scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}