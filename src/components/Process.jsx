import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProcessSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="w-full bg-[#44BBA4] py-16 px-4 rounded-t-[50px]">
      <div className="container mx-auto max-w-3xl">
        <h2
          className="text-[32px] md:text-[41px] font-['Radley'] italic mb-8 text-center text-white"
          data-aos="fade-down"
        >
          Decision Time
        </h2>
        
        <div 
          className="bg-white rounded-xl p-8 shadow-lg"
          data-aos="fade-up"
        >
          <div className="space-y-4">
            {[
              "You want quality SEO content on autopilot while you manage other business facets",
              'You want your audience to scream "aha!" when they read your content',
              "You want to build authority with memorable content across your channels",
              "You want to maximize your content marketing budget",
              "You want content that ranks AND converts",
              "You're tired of hiring freelance content marketers who just don't get it"
            ].map((text, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md hover:translate-x-2 cursor-pointer group"
              >
                <div className="bg-[#44BBA4] text-white w-6 h-6 rounded flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <p className="text-gray-800 font-['Carlito'] text-lg transition-colors duration-300 group-hover:text-[#44BBA4]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}