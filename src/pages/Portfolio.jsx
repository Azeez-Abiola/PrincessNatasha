import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const portfolioItems = [
  {
    id: 1,
    title: "B2B Content Strategy",
    category: "B2B",
    thumbnail: "/placeholder.svg?height=200&width=300",
    link: "https://docs.google.com/file/d/1mIqL2QRZPzvTXjrFjEbztqEqK7Nd8efg/edit?usp=docslist_api&filetype=msword"
  },
  {
    id: 2,
    title: "B2B Marketing Campaign",
    category: "B2B",
    thumbnail: "/placeholder.svg?height=200&width=300",
    link: "https://docs.google.com/document/d/1pB6PI9_Gb3QyndVkv0fdS1vse_JbQAXWxona6rsaUw8/edit"
  },
  {
    id: 3,
    title: "General Content Writing",
    category: "General Content",
    thumbnail: "/placeholder.svg?height=200&width=300",
    link: "https://docs.google.com/file/d/1wwkNIK2lMtm-4yNoJtvgRSV_8CkcDZyO/edit?usp=docslist_api&filetype=msword"
  },
  {
    id: 4,
    title: "Content Strategy Overview",
    category: "General Content",
    thumbnail: "/placeholder.svg?height=200&width=300",
    link: "https://docs.google.com/document/d/1KbOlR4wZYylFo_IE47Wtf3ZU3kWabbcAkKpNqkYnK4Y/edit"
  }
];

function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#44BBA4] mb-4">
            My Portfolio
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore my diverse range of projects showcasing expertise in B2B and general content creation.
          </p>
        </section>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-[#44BBA4] text-white'
                  : isDark
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className={`rounded-xl overflow-hidden transition-all hover:-translate-y-1 ${
                isDark ? 'bg-gray-800/50 ring-1 ring-gray-700/50' : 'bg-white shadow-xl'
              }`}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isDark ? 'bg-gray-700 text-[#44BBA4]' : 'bg-teal-50 text-[#44BBA4]'
                  }`}>
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#44BBA4] hover:text-teal-700 font-medium"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <button
        onClick={() => setIsDark((prev) => !prev)}
        className={`fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-colors duration-300 ${
          isDark ? 'bg-yellow-400' : 'bg-gray-800'
        }`}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <FaSun className="text-gray-900 text-xl" />
        ) : (
          <FaMoon className="text-white text-xl" />
        )}
      </button>
    </div>
  );
}

export default Portfolio;