import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/${blog.slug}`} className="block border rounded-lg overflow-hidden shadow hover:shadow-md transition">
      {blog.imageThumbnail && (
        <img src={blog.imageThumbnail} alt="Thumbnail" className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{blog.title}</h2>
        <p className="text-sm text-gray-600">{blog.category?.name}</p>
        <p className="mt-2 text-gray-700 line-clamp-3">{blog.description.replace(/<[^>]+>/g, '')}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
