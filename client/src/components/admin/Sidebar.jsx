import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-4 space-y-4">
      <h2 className="text-xl font-bold">Admin Panel</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/admin" className="hover:text-gray-300">All Blogs</Link>
        <Link to="/admin/blogs/new" className="hover:text-gray-300">Add New Blog</Link>
        <Link to="/admin/categories/new" className="hover:text-gray-300">Add New Category</Link>
        <button
          onClick={handleLogout}
          className="text-left hover:text-gray-300"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
