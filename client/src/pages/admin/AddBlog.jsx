import React from 'react';
import Sidebar from '../../components/admin/Sidebar';
import Header from '../../components/admin/Header';
import BlogForm from '../../components/admin/BlogForm';

const AddBlog = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Add New Blog" />
        <div className="p-4 overflow-auto">
          <BlogForm />
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
