import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [text, setText] = useState('Content Writer');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Content Writer', 'Brand Strategist', 'Content Strategist'];
  
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
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden px-6 py-20 flex items-center justify-center mt-16">
      <div className="container mx-auto max-w-[1440px] flex flex-col lg:flex-row items-center justify-center gap-12">
        <motion.div 
          className="w-full lg:w-1/2 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            B2B
            <span className="block text-[#44BBA4]">
              {text}
              <span className="inline-block w-[3px] h-8 bg-[#44BBA4] ml-1 animate-blink"></span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text[black] font-light max-w-2xl">
          I welcome you with a picture of me enthusiastically laughing because that's how 99% of my clients react when I deliver the stellar articles they pay for...
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              className="bg-[#44BBA4] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#3a9e8a] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              I write Stellar Articles too 
            </motion.button>
            <motion.button 
              className="bg-white text-[#44BBA4] border-2 border-[#44BBA4] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-50 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-[#44BBA4] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#FF69B4] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <video 
                src="/hero.mp4" 
                alt="Content Writer" 
                className="rounded-lg shadow-2xl"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}