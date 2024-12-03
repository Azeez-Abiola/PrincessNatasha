import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import { ArrowUpRight } from 'lucide-react';
import { FaSun, FaMoon, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Blog() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://princess-natasha-g1y8.vercel.app/fetch_posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch blog posts');
      }
    };
    fetchPosts();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://princess-natasha-g1y8.vercel.app/send_mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
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
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#44BBA4] mb-4">
            Welcome to <span className="italic">Stella Articles</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Here, creativity meets expertise to deliver engaging and insightful articles tailored to captivate you!
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Latest Blog Posts</h2>
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <img src="/no_data.svg" alt="No posts" className="w-48 h-48 mx-auto mb-4 opacity-50" />
              <p className="text-gray-500">No posts available to display</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className={`rounded-xl overflow-hidden transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl ${
                    isDark ? 'bg-gray-800/50 ring-1 ring-gray-700/50' : 'bg-white shadow-xl'
                  }`}
                >
                  <img
                    src={post.thumbnail.startsWith('http') ? post.thumbnail : `https://princess-natasha-g1y8.vercel.app/${post.thumbnail}`}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDark ? 'bg-gray-700 text-[#44BBA4]' : 'bg-teal-50 text-[#44BBA4]'
                      }`}>
                        {post.category}
                      </span>
                      <time className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </time>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <div className={`prose prose-sm mb-4 line-clamp-3 ${
                      isDark ? 'prose-invert' : ''
                    }`} dangerouslySetInnerHTML={{ __html: post.description }} />
                    <Link
                      to={`/blog/${post._id}`}
                      className="inline-flex items-center text-[#44BBA4] hover:text-teal-700 font-medium"
                    >
                      Read More
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Contact Form */}
        <section className={`rounded-lg shadow-lg p-8 ${
          isDark ? 'bg-gray-800/50 ring-1 ring-gray-700/50' : 'bg-white'
        }`}>
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
                className={`w-full p-3 rounded border ${
                  isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                }`}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 rounded border ${
                  isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                }`}
                required
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full p-3 rounded border ${
                  isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                } h-32`}
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

      <ToastContainer theme={isDark ? 'dark' : 'light'} />

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

export default Blog;