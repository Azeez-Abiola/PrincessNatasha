import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Navbar from '../components/Navbar';

function BlogPost() {
  const [isDark, setIsDark] = useState(false);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://princess-natasha-g1y8.vercel.app/fetch_posts/${id}`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Failed to fetch post:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#44BBA4] border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{error}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Post not found</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <Link
          to="/blog"
          className="inline-flex items-center text-[#44BBA4] hover:text-teal-700 font-medium mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>
        <article>
          <div className="rounded-2xl overflow-hidden mb-8">
            <img
              src={post.thumbnail.startsWith('http') ? post.thumbnail : `https://princess-natasha-g1y8.vercel.app/${post.thumbnail}`}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex items-center gap-4 mb-8">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              isDark ? 'bg-gray-800 text-[#44BBA4]' : 'bg-teal-50 text-[#44BBA4]'
            }`}>
              {post.category}
            </span>
            <time className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">{post.title}</h1>
          <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
            <div dangerouslySetInnerHTML={{ __html: post.description }} />
          </div>
        </article>
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

export default BlogPost;