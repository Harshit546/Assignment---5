import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogBySlug } from '../../services/blog';

const Blog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlogBySlug(slug).then(setBlog);
  }, [slug]);

  if (!blog) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(blog.publishDate).toLocaleDateString()} • {blog.category?.name}
      </p>
      {blog.imageFeatured && (
        <img src={blog.imageFeatured} alt="Featured" className="w-full mb-4 rounded" />
      )}
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
};

export default Blog;
