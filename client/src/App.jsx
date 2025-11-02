import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/user/Home";
import Blog from "./pages/user/Blog";
import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/AddBlog";
import AddCategory from "./pages/admin/AddCategory";
import Login from "./pages/admin/Login";
import EditBlog from "./pages/admin/EditBlog";
import ProtectedRoute from "./components/admin/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Blog />} />

        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/blogs/new" element={<AddBlog />} />
        <Route path="/admin/categories/new" element={<AddCategory />} />
        <Route path="/admin/edit-blog/:id" element={<EditBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
