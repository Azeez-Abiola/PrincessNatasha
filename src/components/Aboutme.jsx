import React from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8 md:mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
              Hi, I'm <span className="text-[#44BBA4]">Princess Natasha Balogun</span>
            </h1>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg">
                I'm a B2B content writer and strategist with a knack for crafting stories that resonate. Over the years, I've honed my skills in creating articles and strategies that don't just inform but inspire action.
              </p>
              <p className="text-lg">
                Whether it's building authority, driving engagement, or simplifying complex ideas, I take pride in helping businesses communicate effectively and connect meaningfully with their audience.
              </p>
              <p className="text-lg">
                I believe that every piece of content has the potential to make an impact, and I'm passionate about ensuring it does. My approach combines creativity, research, and a deep understanding of the target audience to deliver results-driven content.
              </p>
              <p className="text-lg">
                When I'm not writing or brainstorming, you'll probably find me exploring new ideas, diving into a good book, or finding inspiration in everyday moments. Let's tell your brand's story together!
              </p>
            </div>
            <motion.button 
              className="mt-8 bg-[#44BBA4] text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 hover:bg-[#2e8b7a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#44BBA4]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Work with me!
            </motion.button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#44BBA4] rounded-3xl transform rotate-3 scale-105 z-0"></div>
              <img 
                src="/aboutme.jpg" 
                alt="Content Writer" 
                className="relative z-10 w-full h-[400px] lg:h-[550px] rounded-3xl object-cover shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

