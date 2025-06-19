import { useParams, useNavigate } from "react-router-dom";
import { useBlog } from "../hooks/blogHooks";
import { useUpdateBlog } from "../hooks/useUpdateBlog";
import { useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import { toast } from "react-toastify";

export default function EditBlog() {
  const { id } = useParams<{ id: string }>();
  const { loading, blog } = useBlog({ id: id! });
  const { updateBlog, loading: updating, error, success } = useUpdateBlog();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
    }
  }, [blog]);

  const handleUpdate = async () => {
    await updateBlog({ id: id!, title, content });
    if (success) {
      toast.success("Blog updated successfully");
      navigate(`/blog/getBlog/${id}`);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <AppBar />
      <div className="max-w-3xl mx-auto mt-12 px-6">
        <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>

        <input
          type="text"
          placeholder="Blog Title"
          className="w-full text-3xl font-semibold outline-none bg-transparent placeholder-gray-400 mb-6"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Start editing your story..."
          className="w-full min-h-[400px] text-lg leading-relaxed outline-none bg-transparent resize-none placeholder-gray-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition cursor-pointer"
            onClick={handleUpdate}
            disabled={updating}
          >
            {updating ? "Updating..." : "Update Blog"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
}
