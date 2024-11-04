import { useState } from 'react';
export default function TestimonialsSection() {
    const testimonials = [
      {
        text: "Content is always delivered on time. Working with Natasha is like a breath of fresh air. As a small business owner, she was just what we needed to connect with our niche customer base. She made our launch pretty smooth.",
        author: "Lyn Child, Founder Panacea Consulting"
      },
      {
        text: "I am beyond impressed with Natasha's writing skills and professionalism. She consistently exceeds my expectations, her attention to detail, and ability to understand my needs and requirements are truly remarkable. I highly recommend her to anyone seeking.",
        author: "Tyron, Director Co-live Films"
      },
      {
        text: "Content is always delivered on time. Working with Natasha is like a breath of fresh air. As a small business owner, she was just what we needed to connect with our niche customer base. She made our launch pretty smooth.",
        author: "Lyn Child, Founder Panacea Consulting"
      },
      {
        text: "Working with Natasha has transformed our content strategy. Her insights and writing style have helped us reach new audiences effectively.",
        author: "Sarah Johnson, CEO TechStart"
      }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <section className="w-full md:w-3/4 mx-auto px-6 md:px-12 py-16">
        <h2 className="text-[32px] md:text-[41px] font-['Radley'] italic mb-12 text-center text-[#9b4819]">
          The People Said it, Not Me!
        </h2>
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-[-40px] top-1/2 transform -translate-y-1/2 bg-[#b83330] text-white p-2 rounded-full z-20 hover:bg-[#a12d2a]"
          >
            ←
          </button>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 px-4"
                >
                  <div 
                    className="bg-[#b83330] text-white p-6 rounded-lg min-h-[300px] transform transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between"
                  >
                    <p className="mb-4">{testimonial.text}</p>
                    <p className="font-semibold">{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#b83330] text-white p-2 rounded-full z-20 hover:bg-[#a12d2a]"
          >
            →
          </button>
        </div>
      </section>
    );
  }