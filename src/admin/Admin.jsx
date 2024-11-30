import { useState, useEffect } from "react";
import { Plus, Trash, Sun, Moon } from "lucide-react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
      <p className="text-center text-gray-800 mb-4">{message}</p>
      <div className="flex justify-between">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
        >
          No
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
);

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [theme, setTheme] = useState(false);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("Freelance Resources");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState(null);
  const navigate = useNavigate();

  const themeStyles = theme ? "bg-white text-black" : "bg-stone-950 text-white";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://princess-natasha-g1y8.vercel.app/fetch_posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
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
      setThumbnail("");
      setLoading(false);
    }
  };

  const handleDeletePost = async (id) => {
    setLoadingText("Deleting post...");
    setLoading(true);
    try {
      const response = await fetch(
        `https://princess-natasha-g1y8.vercel.app/fetch_posts/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the post");
      }
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      toast.info("Post Deleted Successfully");
    } catch (error) {
      console.error("Failed to delete post:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    location.href = "/login";
  };

  const handleConfirmAction = () => {
    if (action === "logout") handleLogout();
    if (action && action.startsWith("delete")) {
      const postId = action.split(":")[1];
      handleDeletePost(postId);
    }
    setShowModal(false);
    setAction(null);
  };

  return (
    <section className={`${themeStyles} min-h-screen font-['Poppins',sans-serif] p-4`}>
      <ToastContainer />
      {showModal && (
        <ConfirmationModal
          message={
            action === "logout"
              ? "Are you sure you want to logout?"
              : "Are you sure you want to delete this post?"
          }
          onConfirm={handleConfirmAction}
          onCancel={() => setShowModal(false)}
        />
      )}
      <div className="flex font-['Poppins',sans-serif] items-center justify-between font-bold text-2xl mb-10">
        <h2 className="text-[#44BBA4] font-['Poppins',sans-serif]">Welcome Natasha</h2>
        <button onClick={() => setTheme((prev) => !prev)}>
          {theme ? <Moon /> : <Sun />}
        </button>
        <button
          className="rounded px-3 py-2 border-2 border-[#44BBA4] bg-transparent"
          onClick={() => {
            setShowModal(true);
            setAction("logout");
          }}
        >
          Logout
        </button>
      </div>
    
      <div className="w-full mb-10">
        <div className="italic text-3xl text-[#44BBA4]"><strong className={theme ? 'text-black text-2xl' : 'text-white text-2xl'}>Total Posts</strong> {posts.length}</div>
      </div>
      
      <form className="font-['Poppins',sans-serif] block space-y-6" onSubmit={handleUploadPost}>
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
      
      {/*map Posts*/}
      <div className="mt-20">
      <h2 className="text-2xl font-['Poppins',sans-serif] font-semibold mb-2">Existing Blog Posts</h2>

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
          <div className="md:block flex justify-between items-center">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-500 italic">{post.createdAt}</p>
            <p className="font-bold text-[#44BBA4]">{post.category}</p>
            <div
              className="text-sm mt-2"
              dangerouslySetInnerHTML={{ __html: post.description }}
            />
          </div>
          <button
            onClick={() => {
              setShowModal(true);
              setAction(`delete:${post.id}`);
            }}
            className="text-red-500 hover:text-red-700 p-2"
          >
            <Trash className="w-6 h-6" />
          </button>
          </div>
        </article>
      ))}
    </div>
  )}
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
