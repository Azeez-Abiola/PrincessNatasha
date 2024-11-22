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

  const themeStyles = theme ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <div className={`${themeStyles} min-h-screen`}>
      <section className="select-none max-w-[1440px] mx-auto mt-10">
        <Navbar />
        <div className="h-[500px] pt-20 px-4">
          <h2 className="text-center mt-3 text-[#44BBA4] text-5xl"> Welcome to <br /> <span className="italic">Stella Articles</span></h2>
          <p className="text-center mt-6">Here, creativity meets expertise to deliver engaging and insightful articles tailored to captivate you 🫵.</p>
        </div>
        <div>
          <h2 className="font-bold text-3xl text-center italic">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {posts.map((post) => (
              <article key={post.id} className="p-6 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 hover:shadow-xl bg-gray-100">
                <img onContextMenu={(e) => e.preventDefault()} src={post.thumbnail} alt={post.category} className="w-full h-40 object-cover rounded mb-4 transition-transform duration-500 hover:scale-110" />
                <p className="uppercase text-lg font-bold italic text-[#44BBA4]">{post.category}</p>
                <p className="text-sm mt-2">{post.description}</p>
                <a href={post.link} className="inline-block mt-4 text-sm text-[#44BBA4] hover:underline">
                  <FaArrowRight className="text-2xl hover:text-[#2e8b7a]" />
                </a>
              </article>
            ))}
          </div>
        </div>
        <div className="p-6 max-w-[1440px] mx-auto mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl mb-4">Get in Touch</h2>
              <p className='w-80'>I'd love to hear from you! Be it a question or just want to say hi, feel free to drop a message.</p>
              <div className="mt-4">
                <p><FaEnvelope className="inline mr-2" />hello@reallygreatsite.com</p>
                <p><FaPhone className="inline mr-2" /> (123) 456 7890</p>
                <p><FaMapMarkerAlt className="inline mr-2" /> Lagos State, Nigeria</p>
              </div>
            </div>
            <form className="w-full md:w-1/2" onSubmit={async (e) => {
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

                const result = await response.json();
                toast.success('Message was sent successfully!');
              } catch (error) {
                console.error(error);
                toast.error('Failed to send message');
              }
            }}>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full p-3 mb-4 rounded bg-gray-200 text-black" required />
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-3 mb-4 rounded bg-gray-200 text-black" required />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="w-full p-3 mb-4 rounded bg-gray-200 text-black h-32" required></textarea>
              <button className="w-full p-3 rounded bg-[#44BBA4] text-white transform transition-transform duration-300 hover:scale-105 hover:bg-[#2e8b7a] hover:text-[#fff] hover:border-[#44BBA4] hover:border" type="submit">
                Send Message <FaPaperPlane className="ml-2" />
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
        {/* Toggle Button */}
        <div
          onClick={() => setTheme((prev) => !prev)}
          className={`fixed bottom-2 right-4 flex items-center justify-between w-14 h-7 px-1 rounded-full cursor-pointer transition-all ${theme ? 'bg-gray-600' : 'bg-yellow-400'}`}
        >
          <div
            className={`absolute w-6 h-6 rounded-full bg-white shadow-lg transition-transform ${theme ? 'translate-x-6' : ''}`}
          />
          <FaSun
            className={`text-yellow-300 text-lg absolute left-1 transition-opacity ${theme ? 'opacity-0' : 'opacity-100'}`}
          />
          <FaMoon
            className={`text-blue-400 text-lg absolute right-1 transition-opacity ${theme ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </section>
    </div>
  );
}

export default Blog;