import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import Header from '../../components/admin/Header';
import BlogTable from '../../components/admin/BlogTable';
import { fetchBlogs } from '../../services/blog';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);

  const refreshBlogs = async () => {
    try {
      const data = await fetchBlogs();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to refresh blogs:", err.message);
    }
  };

  useEffect(() => {
    fetchBlogs().then(setBlogs);
    refreshBlogs();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="All Blogs" />
        <div className="p-4 overflow-auto">
          <BlogTable blogs={blogs} refreshBlogs={refreshBlogs}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
