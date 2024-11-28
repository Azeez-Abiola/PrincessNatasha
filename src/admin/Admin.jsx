import { useState } from "react";
import { Plus, Trash, Sun, Moon } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(false)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  return (
    <section className={`${theme ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen font-['Poppins',sans-serif] p-4`}>
      <h2 className="flex justify-between font-['Poppins',sans-serif] font-bold text-2xl mb-10">
        Welcome Natasha <button onClick={() => setTheme((prev) => !prev)}>
          {theme ? (<Moon />) : (<Sun />)}
        </button>
      </h2>

      <form
        className="block space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          setLoading(true);
          setTimeout(() => {
            const NewPost = {
              id: Date.now(),
              title,
              description,
            };
            setPosts((prevPost) => [...prevPost, NewPost]);
            setTitle("");
            setDescription("");
            setLoading(false);
          }, 2000);
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Post title"
          className={`${theme ? 'text-black' : ' bg-black text-white'} rounded py-2 px-3 border-2 w-full`}
          required
        />

        <div className="relative">
          <ReactQuill
            value={description}
            onChange={(content) => setDescription(content)}
            placeholder="Post description"
            className={`${theme ? 'text-white' : ' bg-black text-white'} rounded border-2 w-full`}
          />
        </div>

        <button
          type="submit"
          className={`${theme ? 'bg-black text-white' : ' bg-gray-100  text-black'} mt-10 rounded py-2 px-4 block`}
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
                {post.title}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: post.description }} />
            </div>
            <button
              onClick={() =>
                setPosts((prevPosts) => prevPosts.filter((p) => p.id !== post.id))
              }
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
          <img src="/spinner.svg" className="w-80" alt="Loading..." />
          <p className="text-3xl text-white">Uploading post...</p>
        </div>
      )}
    </section>
  );
}
