import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import { Plus, Sun, Moon } from "lucide-react";
import { FaSun, FaMoon, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Blog() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [theme, setTheme] = useState(false);
  const [posts, setPosts] = useState([]);
  const themeStyles = theme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
 
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await fetch('https://princess-natasha-g1y8.vercel.app/fetch_posts');
        const data = await response.json();
        setPosts(data);
      }
      catch(error){
        console.error(error)
      }
    }
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
    <div className={`${themeStyles} min-h-screen transition-colors duration-300 mt-16`}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#44BBA4] mb-4">
            Welcome to <span className="italic">Stella Articles</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Here, creativity meets expertise to deliver engaging and insightful articles tailored to captivate you!
          </p>
        </section>

        {/* Map new posts */}
      <div className="font-['Poppins',sans-serif] mt-20">
        <h2 className="font-['Poppins',sans-serif] text-2xl font-semibold mb-2">
          Existing Blog Posts
        </h2>
       
   {posts.length === 0 ? (
    <div className="mx-auto">
      <img src="/no_data.svg" className="mx-auto w-80" alt="No Data" />
      <p className="text-center mt-5 text-2xl">No posts available to display</p>
    </div>
     ) : (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
      {posts.map((post) => (
        <article
          key={post.id}
          className={`font-['Poppins',sans-serif ]rounded-lg overflow-hidden mb-7 ${themeStyles}`}
        >
          <img
            src={post.thumbnail}
            alt={post.category}
            className="w-full h-48 object-cover"
            onContextMenu={(e) => e.preventDefault()}
          />
         <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 italic">{post.createdAt}</p>
            <p className="font-bold text-[#44BBA4]">{post.category}</p>
            <div
              className="text-sm mt-2"
              dangerouslySetInnerHTML={{ __html: post.description }}
            />
          </div>
        </article>
      ))}
    </div>
  )}
    </div>


        <section className={`rounded-lg shadow-lg p-8 ${themeStyles}`}>
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
                className={`w-full p-3 rounded border border-gray-300 ${themeStyles}`}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 rounded border border-gray-300 ${themeStyles}`}
                required
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full p-3 rounded border border-gray-300 ${themeStyles} h-32`}
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

