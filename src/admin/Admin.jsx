import { useState, useEffect } from "react";
import { Plus, Trash, Sun, Moon } from "lucide-react";
import ReactQuill from "react-quill";
import {useNavigate} from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState(""); 
  const [theme, setTheme] = useState(false)
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Freelance Resources");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const navigate= useNavigate();
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await fetch('http://localhost:5000/fetch_posts');
        const data = await response.json();
        console.log(data);
        setPosts(data);
      }
      catch(error){
        console.error(error)
      }
    }
    fetchPosts();
  }, []);
  
  //Add Posts to the database 
  const handleUploadPost = async (event) => {
    event.preventDefault();
    setLoadingText("Uploading post...");
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/new_post', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, category }),
      });
      if (!response.ok) {
        throw new Error("Failed to create a post");
      }
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, data]); 
      toast.success("Post added successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add post");
    } finally {
      setTitle("");
      setDescription("");
      setCategory("");
      setLoading(false);
    }
  };
  //Delete post from the  database 
  const handleDeletePost = async (id) => {
    setLoadingText("Deleting post...");
  setLoading(true);
  try {
    const response = await fetch(`http://localhost:5000/fetch_posts/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete the post");
    }
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  } catch (error) {
    console.error("Failed to delete post:", error);
  } finally {
    setLoading(false);
    toast.info('Post Deleted Successfully');
  }
};

  return (
      <section className={`${theme ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen font-['Poppins',sans-serif] p-4`}>
     <ToastContainer />
      <div className="flex items-center justify-between font-['Poppins',sans-serif] font-bold text-2xl mb-10">
        <h2 className="font-['Poppins',sans-serif] text-[#44BBA4]">Welcome Natasha</h2> 
        <button onClick={() => setTheme((prev) => !prev)}>
          {theme ? (<Moon />) : (<Sun />)}
        </button>
     
        <button 
        className="rounded px-3 py-2 border-2 border-[#44BBA4] bg-transparent"
        onClick={() => {
         localStorage.removeItem('isAdmin');
         location.href = '/login';
        }}>Logout</button>
      </div>

   <form className="block space-y-6" onSubmit={handleUploadPost}>
     <div>
       <label htmlFor="select" className="font-['Poppins',sans-serif] font-semibold">Post Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Post title"
          className={`${theme ? 'text-black' : ' bg-black text-white'} rounded py-2 px-3 border-2 border-[#44BBA4] w-full`}
          required
        />
        </div>
        
        <div>
        <label htmlFor="select" className="font-['Poppins',sans-serif] font-semibold">Select Category</label>
         <select
         name="select" 
         value={category}
         onChange={(event) => setCategory(event.target.value)}
         className={`${theme ? 'bg-white' : 'bg-black'} rounded py-2 px-3 border-2 border-[#44BBA4] w-full`}>
          <option>Freelance Resources</option>
          <option>Small Business Growth Tips</option>
          <option>General Contents</option>
          </select>
        </div>
        
        <div className={`${theme ? 'text-black' : 'bg-black text-white'} relative rounded border-2 border-[#44BBA4] w-full`}>
       <label htmlFor="select" className="font-['Poppins',sans-serif] font-semibold">Post Description/Contents</label>
          <ReactQuill
            value={description}
            onChange={(content) => setDescription(content)}
            placeholder="Post description"
           />
        </div>

        <button
          type="submit"
          className="bg-[#44BBA4] text-white mt-10 rounded py-2 px-4 block"
        >
          <Plus className="inline mr-2" /> Add New Post
        </button>
      </form>

      {/* Map new posts */}
      <div className="font-['Poppins',sans-serif] mt-20">
        <h2 className="font-['Poppins',sans-serif] text-2xl font-semibold mb-2">
          Existing Blog Posts
        </h2>

        {posts.length === 0 && (
          <div className="mx-auto">
            <img src="/no_data.svg" className="mx-auto w-80" />
            <p className="text-center mt-5 text-2xl">
              No posts available to display
            </p>
          </div>
        )}
       
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex items-center justify-between p-2 mb-10 border-2 rounded"
          >
            <div>
              <h2 className="font-['Poppins',sans-serif] font-bold">
                {post.title} <span className="italic">{post.createdAt}</span>
              </h2>
              <p><span className="font-bold">Category:</span> {post.category}</p>
              <div dangerouslySetInnerHTML={{ __html: post.description }} />
            </div>
            <button
              onClick={() => handleDeletePost(post.id)}
              className="text-red-500 hover:text-red-700"
              title="Delete Post"
            >
              <Trash className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>

      {loading && (
        <div className="flex-col h-full fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-10">
          <img src="/tube-spinner (1).svg" className="w-80" alt="Loading..." />
          <p className="text-3xl text-white">{loadingText}</p>
        </div>
      )}
    </section>
  );
}
