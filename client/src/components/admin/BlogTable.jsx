import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteBlog } from "../../services/blog";

const BlogTable = ({ blogs, refreshBlogs }) => {
  const navigate = useNavigate();

  // Navigate to the Edit Blog page
  const handleEdit = (id) => {
    navigate(`/admin/edit-blog/${id}`);
  };

  // Deletes the blog from the database
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      try {
        await deleteBlog(id);
        alert("Blog deleted successfully");
        refreshBlogs();
      } catch (err) {
        console.error("Delete failed:", err.response?.data || err.message);
        alert("Delete failed: " + (err.response?.data?.error || err.message));
      }
    }
  };

  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Title</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Description</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map(blog => (
          <tr key={blog._id}>
            <td className="border p-2">{blog.title}</td>
            <td className="border p-2">{blog.category?.name}</td>
            <td className="border p-2">{blog.description.replace(/<[^>]+>/g, '')}</td>
            <td className="border p-2 space-x-2">
              <button onClick={() => handleEdit(blog._id)} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BlogTable;
