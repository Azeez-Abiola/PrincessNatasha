import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServicesThreeSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="w-full px-6 md:px-12 py-16 bg-[#44BBA4] mt-16 mb-16 rounded-2xl">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold text-white mb-2" data-aos="fade-up">WHAT I DO</h3>
        <h2 className="text-3xl md:text-2xl font-serif mb-12 text-white" data-aos="fade-up" data-aos-delay="100">
          If it needs words, it needs me
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Service Card 1 */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 w-full md:w-1/3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]" data-aos="fade-up" data-aos-delay="200">
            <img src="/path/to/icon1.png" alt="Icon 1" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Content Writing</h3>
            <p className="text-sm text-gray-500 mb-4">from 499 USD</p>
            <p className="text-gray-700 mb-4">
              Drive customer acquisition and retention with fresh or repurposed long-form SEO content that makes your business and blog look good.
            </p>
            <button className="bg-[#44BBA4] text-white px-4 py-2 rounded-md transition-transform duration-300 transform hover:bg-[#2e8b7a]">
              Learn more
            </button>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 w-full md:w-1/3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]" data-aos="fade-up" data-aos-delay="300">
            <img src="/path/to/icon2.png" alt="Icon 2" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
            <p className="text-sm text-gray-500 mb-4">from 999 USD</p>
            <p className="text-gray-700 mb-4">
              You're unsure where to start with this SEO and content thing, and you need help building a strategic content engine that grows your pipeline.
            </p>
            <button className="bg-[#44BBA4] text-white px-4 py-2 rounded-md transition-transform duration-300 transform hover:bg-[#2e8b7a]">
              Learn more
            </button>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white border border-gray-300 rounded-lg p-6 w-full md:w-1/3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]" data-aos="fade-up" data-aos-delay="400">
            <img src="/path/to/icon3.png" alt="Icon 3" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Copywriting</h3>
            <p className="text-sm text-gray-500 mb-4">from 499 USD</p>
            <p className="text-gray-700 mb-4">
              If you're still reading, I must be doing something right, right? Let me tell your story and keep your readers glued to your website or social media.
            </p>
            <button className="bg-[#44BBA4] text-white px-4 py-2 rounded-md transition-transform duration-300 transform hover:bg-[#2e8b7a]">
              Learn more
            </button>
          </div>
        </div>
        
      </div>
    </section>
    
  );
}