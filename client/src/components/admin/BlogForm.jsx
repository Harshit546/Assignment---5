import React, { useState, useEffect } from 'react';
import { createBlog } from '../../services/blog';
import { fetchCategories } from '../../services/category';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [imageThumbnail, setImageThumbnail] = useState('');
  const [imageFeatured, setImageFeatured] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBlog({ title, category, description, publishDate, imageThumbnail, imageFeatured });
    navigate('/admin');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded" />
      <select value={category} onChange={e => setCategory(e.target.value)} className="w-full p-2 border rounded">
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat._id} value={cat._id}>{cat.name}</option>
        ))}
      </select>
      <textarea placeholder="Description (HTML allowed)" value={description} onChange={e => setDescription(e.target.value)} className="w-full p-2 border rounded h-40" />
      <input type="date" value={publishDate} onChange={e => setPublishDate(e.target.value)} className="w-full p-2 border rounded" />
      <input type="text" placeholder="Image Thumbnail URL" value={imageThumbnail} onChange={e => setImageThumbnail(e.target.value)} className="w-full p-2 border rounded" />
      <input type="text" placeholder="Image Featured URL" value={imageFeatured} onChange={e => setImageFeatured(e.target.value)} className="w-full p-2 border rounded" />
      <div className="space-x-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        <button type="button" onClick={() => navigate('/admin')} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
      </div>
    </form>
  );
};

export default BlogForm;
