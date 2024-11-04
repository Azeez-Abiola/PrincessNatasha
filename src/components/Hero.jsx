import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [text, setText] = useState('Content Writer');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Content Writer', 'Strategist'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className="w-full px-6 md:px-12 py-2 bg-white mt-[-40px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="w-full md:w-1/2 space-y-4 text-center animate-[slideInLeft_1s_ease-out]">
          <h1 className="text-3xl md:text-4xl font-serif">
            <div className="flex flex-col md:flex-row items-center justify-center gap-1 whitespace-nowrap mb-16 ml-0 md:ml-32" style={{ minWidth: 'auto', md: { minWidth: '500px' } }}>
              <span className="italic text-4xl md:text-5xl">B2B </span>{" "}
              <span className="italic text-4xl md:text-5xl">
                {text}
                <span className="blinking-cursor">|</span>
              </span>{" "}
              <span className="text-[#b83330] text-4xl md:text-5xl">
                For Hire!
              </span>
            </div>
          </h1>
          
          <p className="text-2xl text-left md:text-2xl text-black font-['Carlito'] md:max-w-[510px] mx-auto">
            I welcome you with a picture of me enthusiastically laughing because that's how 99% of my clients react when I deliver the stellar articles they pay for...
          </p>
          
          <p className="text-2xl text-left md:text-2xl text-black font-['Carlito'] md:max-w-[499px] pt-8 mx-auto pb-24">
            Don't believe me? A trial will convince you!
          </p>
          <button className="bg-[#b83330] text-white px-8 py-2 rounded-md mx-auto block relative overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#b83330] before:to-[#a12d2a] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 mt-[-20rem] md:mt-0">
            <span className="relative z-10">I Want Stellar Articles Too 😊</span>
          </button>
        </div>
        
        <div className="w-full md:w-1/2 animate-[slideInRight_1s_ease-out]">
          <div className="relative w-full max-w-sm mx-auto">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-[300px] md:h-[500px] rounded-2xl object-cover mt-12"
              style={{
                borderRadius: '20px',
                backgroundColor: '#8B4513',
                boxShadow: '0 30px 20px -15px rgba(139, 69, 19, 0.3)'
              }}
            >
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}





