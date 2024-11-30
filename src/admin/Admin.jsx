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
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("Freelance Resources");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const navigate= useNavigate();
  
   const themeStyles = theme ? 'bg-white shadow-2xl text-black' : 'bg-stone-950 shadow-2xl text-white';
   
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await fetch('https://princess-natasha-g1y8.vercel.app/fetch_posts');
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

    if (!response.ok) {
      throw new Error("Failed to create a post");
    }

    const data = await response.json();
    setPosts((prevPosts) => [...prevPosts, data]);
    toast.success("Post added successfully!");
  } catch (error) {
    console.error(error);
    toast.error("Failed to add post");
    setLoading(false)
  } finally {
    setTitle("");
    setDescription("");
    setCategory("");
    setThumbnail("");
    setLoading(false);
  }
};

  //Delete post from the  database 
  const handleDeletePost = async (id) => {
   setLoadingText("Deleting post...");
  setLoading(true);
  try {
    const response = await fetch(`https://princess-natasha-g1y8.vercel.app/fetch_posts/${id}`, {
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
      
         <div>
          <label className="font-semibold">Thumbnail</label><input
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/*"
          onChange={(event) => setThumbnail(event.target.files[0])}
         className="rounded py-2 px-3 border-2 border-[#44BBA4] w-full"
        required
    />

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
        <article key={post.id} className={`flex justify-between items-center rounded-lg overflow-hidden transform transition duration-300 mb-7 hover:scale-105 ${themeStyles}`}>
            <img 
              src={`https://princess-natasha-g1y8.vercel.app/${post.thumbnail}`} 
              alt={post.category} 
              className="w-48 h-48 object-cover"
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="p-6">
              <p className="italic">{post.createdAt}</p>
              <p className="mb-4">{post.title}</p>
              <h3 className="text-xl font-bold text-[#44BBA4] mb-2">{post.category}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.description }} />
            </div>
            <button
              onClick={() => handleDeletePost(post.id)}
              className="text-red-500 hover:text-red-700"
              title="Delete Post"
            >
              <Trash className="w-6 h-6" />
            </button>
          </article>
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
