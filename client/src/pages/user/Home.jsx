import React, { useEffect, useState } from 'react';
import BlogCard from '../../components/user/BlogCard';
import SearchBar from '../../components/user/SearchBar';
import { fetchBlogs } from '../../services/blog';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchBlogs().then(setBlogs);
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest Blogs</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {filteredBlogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
