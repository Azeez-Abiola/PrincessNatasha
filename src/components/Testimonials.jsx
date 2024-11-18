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
      },
      {
        text: "Natasha's creativity and dedication have been a game-changer for our marketing efforts. Her ability to craft compelling narratives is unmatched.",
        author: "Michael Lee, Marketing Head InnovateX"
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
      <section className="w-full md:w-3/4 mx-auto px-6 md:px-12 py-20">
        <h2 className="text-[32px] md:text-[41px] font-['Radley'] italic mb-12 text-center text-[#44BBA4]">
          The People Said it, Not Me!
        </h2>
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-[-40px] top-1/2 transform -translate-y-1/2 bg-[#44BBA4] text-white p-3 rounded-full z-20 hover:bg-[#a12d2a] shadow-lg transition-transform duration-300 hover:scale-110"
          >
            ←
          </button>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full md:w-1/3 px-4"
                >
                  <div 
                    className="bg-white text-[#44BBA4] p-8 rounded-lg h-[400px] transform transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl flex flex-col justify-between border border-gray-300"
                  >
                    <p className="mb-4 italic">{testimonial.text}</p>
                    <p className="font-semibold text-right">{testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#44BBA4] text-white p-3 rounded-full z-20 hover:bg-[#a12d2a] shadow-lg transition-transform duration-300 hover:scale-110"
          >
            →
          </button>
        </div>
      </section>
    );
  }