import React, { useState, useEffect } from 'react';

export default function HeroSection() {
  const [text, setText] = useState('Content Writer');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Content Writer', 'Content Strategist'];
  
  // Calculate the maximum width needed
  const maxWord = words.reduce((a, b) => a.length > b.length ? a : b);

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
    <section className="w-full overflow-x-hidden px-6 md:px-12 py-8 mt-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 xl:gap-32">
        <div className="w-full md:w-1/2 space-y-6 text-center animate-[slideInLeft_1s_ease-out]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Inter']">
            <div className="flex flex-col items-center justify-center gap-4 mb-16">
              <span className="italic text-5xl md:text-6xl text-[#44BBA4] font-['Inter']">B2B</span>
              <div className="inline-block" style={{ minWidth: `${maxWord.length}ch` }}>
                <span className="italic text-5xl md:text-6xl text-gray-800 font-['Inter']">
                  {text.split(' ').map((word, index) => (
                    <span key={index} className={word === 'Hire!' ? 'circle' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                  <span className="blinking-cursor">|</span>
                </span>
              </div>
              <span className="italic text-5xl md:text-6xl text-[#44BBA4] font-['Inter']">
                For Hire!
              </span>
            </div>
          </h1>
          
          <p className="text-black-400 mb-6 text-[18px] md:text-[32px] font-['Inter']">
            I welcome you with a picture of me enthusiastically laughing because that's how 99% of my clients react when I deliver the stellar articles they pay for...
          </p>
          
          <p className="text-black-400 mb-6 text-[18px] md:text-[21px] font-['Inter']">
            Don't believe me? A trial will convince you!
          </p>
          <button className="bg-[#44BBA4] text-white px-4 py-4 rounded-md mx-auto block relative overflow-hidden transform hover:scale-110 transition-all duration-300 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-[#b83330] before:to-[#a12d2a] before:opacity-0 hover:bg-[#2e8b7a] hover:text-white hover:border-[#44BBA4] hover:border">
            <span className="relative z-10 font-['Inter']">I Want Stellar Articles Too 😊</span>
          </button>
        </div>
        
        <div className="w-full md:w-1/2 animate-[slideInRight_1s_ease-out]">
          <div className="relative w-full max-w-md mx-auto">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-[400px] md:h-[600px] lg:w-[700px] lg:h-[550px] rounded-3xl object-cover mt-12 shadow-lg"
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
      </div>
    </section>
  );
}