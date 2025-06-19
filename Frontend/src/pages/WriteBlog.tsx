import axios from "axios";
import AppBar from "../components/AppBar";
import { useState } from "react";
import { BACKEND_URL } from "../config/configg";
import { useNavigate } from "react-router-dom";
import { toast } from"react-toastify";

export function WriteBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const naviagte = useNavigate();

  async function postBlog() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog/writeBlog`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Blog Published");
      naviagte(`/blog/getBlog/${response.data.id}`);
    } catch (err) {
      console.error("Error posting blog:", err);
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <AppBar />

      <div className="max-w-3xl mx-auto mt-12 px-6">
        {/* Title Input */}
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full text-3xl font-semibold outline-none bg-transparent placeholder-gray-400 mb-6"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Start writing your story..."
          className="w-full min-h-[400px] text-lg leading-relaxed outline-none bg-transparent resize-none placeholder-gray-500 focus:outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* Publish Button */}
        <div className="mt-6">
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition cursor-pointer p"
            onClick={postBlog}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
