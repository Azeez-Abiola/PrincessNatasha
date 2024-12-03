import React, { useState, useEffect } from "react";
import { Plus, Trash, Sun, Moon, LogOut, ImageIcon, Pencil} from 'lucide-react';
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [category, setCategory] = useState("Freelance Resources");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://princess-natasha-g1y8.vercel.app/fetch_posts');
        const data = await response.json();
        const updatedPosts = data.map(post => ({
          ...post,
          thumbnail: post.thumbnail.startsWith('http') 
            ? post.thumbnail 
            : `https://princess-natasha-g1y8.vercel.app/${post.thumbnail}`
        }));
        setPosts(updatedPosts);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch posts");
      }
    };
    fetchPosts();
  }, []);

  const handleUploadPost = async (event) => {
    event.preventDefault();
    setLoadingText("Uploading post...");
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("thumbnail", thumbnail);

    try {
      const response = await fetch("https://princess-natasha-g1y8.vercel.app/new_post", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to create a post");

      const data = await response.json();
      const newPost = {
        ...data,
        thumbnail: data.thumbnail.startsWith('http') 
          ? data.thumbnail 
          : `https://princess-natasha-g1y8.vercel.app/${data.thumbnail}`
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
      toast.success("Post added successfully!");
      
      // Reset form
      setTitle("");
      setDescription("");
      setCategory("Freelance Resources");
      setThumbnail(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add post");
    } finally {
      setLoading(false);
    }
  };
  
  const handleEditPost = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/update_posts/${id}`, {
        method: "PUT",
      });

      if (!response.ok) throw new Error("Failed to update the post");
      
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      toast.success('Post Updated successfully');
    } catch (error) {
      console.error(error);
      toast.error("Failed to update post post");
    } finally {
      setLoading(false);
    }
  };
  
  const handleDeletePost = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    
    setLoadingText("Deleting post...");
    setLoading(true);
    
    try {
      const response = await fetch(`https://princess-natasha-g1y8.vercel.app/delete_posts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete the post");
      
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      toast.success('Post deleted successfully');
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-b from-gray-50 to-white text-gray-900'
    }`}>
      <ToastContainer theme={isDark ? 'dark' : 'light'} />
      
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-lg border-b ${
        isDark ? 'border-gray-700/50 bg-gray-900/50' : 'border-gray-200/50 bg-white/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 flex-wrap">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              <span style={{ color: '#44BBA4' }}>Welcome to Your Dashboard Natasha</span>
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDark(prev => !prev)}
                className={`p-2 rounded-full transition-colors ${
                  isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem('isAdmin');
                  navigate('/login');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#44BBA4] text-white hover:bg-[#3A9A8A] transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* New Post Form */}
        <div className={`rounded-xl p-6 mb-8 ${
          isDark ? 'bg-gray-800/50 ring-1 ring-gray-700/50' : 'bg-white shadow-xl'
        }`}>
          <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            <span className="text-[#44BBA4]">Create New Post</span>
          </h2>
          <form onSubmit={handleUploadPost} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Post Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title"
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDark ? 'bg-gray-700/50 border-gray-600 placeholder-gray-400' : 'bg-white border-gray-200'
                }`}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-200'
                }`}
              >
                <option>Freelance Resources</option>
                <option>Small Business Growth Tips</option>
                <option>General Contents</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Thumbnail</label>
              <div className={`flex items-center gap-4 p-4 rounded-lg border-2 border-dashed ${
                isDark ? 'border-gray-600' : 'border-gray-200'
              }`}>
                <ImageIcon className="w-6 h-6 text-gray-400" />
                <input
                  type="file"
                  onChange={(e) => setThumbnail(e.target.files[0])}
                  accept="image/*"
                  className="text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Content</label>
              <div className={`rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-white'}`}>
                <ReactQuill
                  value={description}
                  onChange={setDescription}
                  theme="snow"
                  className={isDark ? 'text-white' : 'text-gray-900'}
                  modules={{toolbar: [
                 [{ font: [] }], 
                 [{ size: ['small', false, 'large', 'huge'] }], 
                 [{ header: [1, 2, 3, 4, 5, 6, false] }],
                 ['bold', 'italic', 'underline', 'strike'], 
                 [{ color: [] }, { background: [] }],
                 [{ script: 'sub' }, { script: 'super' }], 
                 [{ list: 'ordered' }, { list: 'bullet' }], 
                 [{ indent: '-1' }, { indent: '+1' }],
                 [{ align: [] }], 
                 ['link', 'image', 'video'], 
                 ['blockquote', 'code-block'], 
                 ['clean'] 
                 ]}}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 rounded-lg bg-[#44BBA4] text-white font-medium hover:bg-[#3A9A8A] transition-opacity disabled:opacity-50"
            >
              <Plus className="inline-block w-5 h-5 mr-2" />
              Add New Post
            </button>
          </form>
        </div>

        {/* Existing Posts */}
        <div>
          <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            <span className="text-[#44BBA4]">Existing Blog Posts</span>
          </h2>

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <img src="/no_data.svg" alt="No posts" className="w-48 h-48 mx-auto mb-4 opacity-50" />
              <p className="text-gray-500">No posts available to display</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className={`rounded-xl overflow-hidden transition-all hover:-translate-y-1 ${
                    isDark ? 'bg-gray-800/50 ring-1 ring-gray-700/50' : 'bg-white shadow-xl'
                  }`}
                >
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        isDark ? 'bg-gray-700' : 'bg-gray-100'
                      }`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <div
                      className={`prose prose-sm mb-4 ${isDark ? 'prose-invert' : ''}`}
                      dangerouslySetInnerHTML={{
                        __html: post.description.substring(0, 150) + '...'
                      }}
                    />
                  
                    <div className="w-full flex justify-between items-end">
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                      title="Delete Post"
                    >
                    <Trash className="w-5 h-5" />
                    </button>
                    
                    {/*edit post icon*/}
                     <button
                      onClick={() => handleEditPost(post.id)}
                      className="text-blue-500 hover:text-blue-600 transition-colors"
                      title="Edit Post"
                    >
                      <Pencil className="w-5 h-5" />
                    </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <img src="/tube-spinner (1).svg" alt="Loading" className="w-16 h-16 mb-4" />
            <p className="text-center">{loadingText}</p>
          </div>
        </div>
      )}
    </div>
  );
}