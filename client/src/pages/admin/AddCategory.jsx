import React from 'react';
import Sidebar from '../../components/admin/Sidebar';
import Header from '../../components/admin/Header';
import CategoryForm from '../../components/admin/CategoryForm';

const AddCategory = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Add New Category" />
        <div className="p-4 overflow-auto">
          <CategoryForm />
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
