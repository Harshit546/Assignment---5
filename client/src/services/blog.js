import API from './api';

// Fetch all blogs from the server
export const fetchBlogs = async () => {
  const res = await API.get('/blogs');
  return res.data;
};

// Fetch a specific blog using its unique slug
export const fetchBlogBySlug = async (slug) => {
  const res = await API.get(`/blogs/${slug}`);
  return res.data;
};

// Create a new blog
export const createBlog = async (data) => {
  const token = localStorage.getItem('token');
  const res = await API.post('/blogs', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Fetch a blog post by its MongoDB ObjectId
export const getBlogById = async (id) => {
  try {
    console.log("Calling GET /blogs/" + id);
    const res = await API.get(`/blogs/${id}`);
    console.log("Response:", res.data);
    return res.data;
  } catch (err) {
    console.error("getBlogById failed:", err.response?.data || err.message);
    throw err;
  }
};

// Update an existing blog post
export const updateBlog = async (id, data) => {
  const token = localStorage.getItem('token');
  const res = await API.put(`/blogs/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Delete a blog post
export const deleteBlog = async (id) => {
  const token = localStorage.getItem('token');
  const res = await API.delete(`/blogs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

