import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProcessSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Animation will happen every time the element comes into view
    });
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2
        className="text-[32px] md:text-[41px] font-['Radley'] italic mb-8 text-center text-[#9b4819]"
        data-aos="fade-right"
      >
        Decision Time
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2" data-aos="fade-up">
          <p className="text-black font-['Carlito'] mb-6 text-xl md:text-2xl text-center italic font-medium bg-gradient-to-r from-[#9b4819] to-[#b83330] bg-clip-text text-transparent transform hover:scale-105 transition-all duration-300">
            Okay, here's how it works...
          </p>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-full h-auto"
          >
            <source src="/chart.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-black font-['Carlito'] text-lg md:text-[24.5px] mt-4 md:mt-[-3rem] w-full md:w-[480px] mx-auto md:ml-12">
            This is where you decide whether you want results or you want your content to keep wallowing away on the 5th page of the SERPs.
          </p>
          <button className="mt-6 bg-[#b83330] text-white px-8 md:px-14 py-3 rounded-md hover:bg-red-70 mx-auto md:float-right md:mr-[-24px]">
            I Want Results!
          </button>
        </div>
        
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg w-full md:w-3/4 h-[300px] md:h-[500px] mx-auto object-cover mb-12 md:mb-24"
          >
            <source src="/Decision.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
