import React from 'react';

export default function AboutMe() {
  return (
    <div className="about-page p-8 flex flex-col md:flex-row items-center justify-center gap-8 mt-20 max-w-[1440px] mx-auto font-['Inter']">
      <div className="text-section w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Hi, I’m Princess Natasha Balogun</h1>
        <p className="text-xl mb-4">
          I’m a B2B content writer and strategist with a knack for crafting stories that resonate. Over the years, I’ve honed my skills in creating articles and strategies that don’t just inform but inspire action. Whether it’s building authority, driving engagement, or simplifying complex ideas, I take pride in helping businesses communicate effectively and connect meaningfully with their audience.
        </p>
        <p className="text-xl mb-4">
          I believe that every piece of content has the potential to make an impact, and I’m passionate about ensuring it does. My approach combines creativity, research, and a deep understanding of the target audience to deliver results-driven content. When I’m not writing or brainstorming, you’ll probably find me exploring new ideas, diving into a good book, or finding inspiration in everyday moments. Let’s tell your brand’s story together!
        </p>
        <button className="bg-[#44BBA4] text-white px-8 md:px-12 py-2 rounded-md transition-transform duration-300 transform hover:scale-105 hover:bg-[#2e8b7a] text-base md:text-lg">
          Work with me!
        </button>
      </div>
      <div className="image-section w-full md:w-1/2">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-[300px] md:h-[400px] lg:w-[500px] lg:h-[550px] rounded-3xl object-cover ml-0 md:ml-12 mt-12 shadow-lg"
          style={{
            borderRadius: '24px',
            backgroundColor: '#8B4513',
            boxShadow: '0 30px 20px -15px rgba(139, 69, 19, 0.3)'
          }}
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}