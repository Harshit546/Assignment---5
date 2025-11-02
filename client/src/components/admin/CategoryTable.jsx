import React from 'react';

const CategoryTable = ({ categories }) => {
  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Name</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map(category => (
          <tr key={category._id}>
            <td className="border p-2">{category.name}</td>
            <td className="border p-2 space-x-2">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryTable;
