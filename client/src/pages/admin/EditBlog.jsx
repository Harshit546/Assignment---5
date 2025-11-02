import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, updateBlog } from "../../services/blog";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    imageFeatured: "",
    category: "",
    publishDate: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log("Fetching blog with ID:", id);
        const data = await getBlogById(id);
        console.log("Fetched blog data:", data);
        setBlog(data);
      } catch (err) {
        console.error("Fetch failed:", err.response?.data || err.message);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Category fetch failed:", err.message);
      }
    };

    fetchBlog();
    fetchCategories();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (
      !blog.title?.trim() ||
      !blog.description?.trim() ||
      !blog.category?.trim() ||
      !blog.imageFeatured?.trim() ||
      !blog.publishDate?.trim()
    ) {
      alert("Please fill all required fields !");
      return;
    }

    try {
      const payload = {
        title: blog.title.trim(),
        description: blog.description.trim(),
        category: blog.category,
        imageFeatured: blog.imageFeatured || "",
        publishDate: blog.publishDate || new Date().toISOString(),
      };

      console.log("Sending update:", payload);
      await updateBlog(id, payload);
      navigate("/admin");
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      alert("Update failed: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Edit Blog</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          placeholder="Enter blog title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          className="w-full rounded border border-gray-300 p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={blog.description}
          onChange={(e) => setBlog({ ...blog, description: e.target.value })}
          placeholder="Write your blog content..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={blog.category}
          onChange={(e) => setBlog({ ...blog, category: e.target.value })}
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Featured Image URL
        </label>
        <input
          className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={blog.imageFeatured}
          onChange={(e) => setBlog({ ...blog, imageFeatured: e.target.value })}
          placeholder="https://example.com/image.jpg"
        />
        {blog.imageFeatured && (
          <img
            src={blog.imageFeatured}
            alt="Featured Preview"
            className="mt-2 h-40 w-full object-cover rounded border"
          />
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Publish Date
        </label>
        <input
          className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="date"
          value={blog.publishDate?.slice(0, 10)}
          onChange={(e) => setBlog({ ...blog, publishDate: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Update Blog
      </button>
    </form>
  );
};

export default EditBlog;
