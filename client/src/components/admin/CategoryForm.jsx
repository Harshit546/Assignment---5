import React, { useState } from 'react';
import { createCategory } from '../../services/category';
import { useNavigate } from 'react-router-dom';

const CategoryForm = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCategory({ name });
    navigate('/admin');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Category Name" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 border rounded" />
      <div className="space-x-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        <button type="button" onClick={() => navigate('/admin')} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
      </div>
    </form>
  );
};

export default CategoryForm;
