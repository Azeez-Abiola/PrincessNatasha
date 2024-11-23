import { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import { FaSun, FaMoon, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Blog() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [theme, setTheme] = useState(false);
  const posts = [
    { id: 1, thumbnail: 'https://securityintelligence.com/wp-content/uploads/2020/06/si-categoryImages-artificialIntelligence@2x.jpg', category: 'ARTIFICIAL INTELLIGENCE', description: 'Explore articles about how AI impacts the cybersecurity workforce, ethics, and machine learning.', link: '#' },
    { id: 2, thumbnail: 'https://securityintelligence.com/wp-content/uploads/2020/06/si-categoryImages-networking@2x.jpg', category: 'Network', description: 'Network security is critical both at home and in the enterprise. Learn more about network vulnerability.', link: '#' },
    // Add more posts as needed
  ];

  const themeStyles = theme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://princess-natasha-g1y8.vercel.app/send_mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      await response.json();
      toast.success('Message was sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message');
    }
  };

  return (
    <div className={`${themeStyles} min-h-screen transition-colors duration-300`}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#44BBA4] mb-4">
            Welcome to <span className="italic">Stella Articles</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Here, creativity meets expertise to deliver engaging and insightful articles tailored to captivate you 🫵.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 italic">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <img 
                  src={post.thumbnail} 
                  alt={post.category} 
                  className="w-full h-48 object-cover"
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#44BBA4] mb-2">{post.category}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
                  <a href={post.link} className="inline-flex items-center text-[#44BBA4] hover:text-[#2e8b7a] transition-colors duration-300">
                    Read More <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="mb-8 lg:mb-0 lg:mr-8">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="max-w-md mb-6">
                I'd love to hear from you! Be it a question or just want to say hi, feel free to drop a message.
              </p>
              <div className="space-y-2">
                <p className="flex items-center"><FaEnvelope className="mr-2 text-[#44BBA4]" /> hello@reallygreatsite.com</p>
                <p className="flex items-center"><FaPhone className="mr-2 text-[#44BBA4]" /> (123) 456 7890</p>
                <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-[#44BBA4]" /> Lagos State, Nigeria</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="w-full lg:w-1/2 space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 rounded bg-[#44BBA4] text-white font-semibold hover:bg-[#2e8b7a] transition-colors duration-300 flex items-center justify-center"
              >
                Send Message <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <ToastContainer />

      <button
        onClick={() => setTheme((prev) => !prev)}
        className={`fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-colors duration-300 ${
          theme ? 'bg-yellow-400' : 'bg-gray-800'
        }`}
        aria-label="Toggle theme"
      >
        {theme ? (
          <FaSun className="text-gray-900 text-xl" />
        ) : (
          <FaMoon className="text-white text-xl" />
        )}
      </button>
    </div>
  );
}

export default Blog;

