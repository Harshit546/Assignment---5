import API from './api';

export const fetchBlogs = async () => {
  const res = await API.get('/blogs');
  return res.data;
};

export const fetchBlogBySlug = async (slug) => {
  const res = await API.get(`/blogs/${slug}`);
  return res.data;
};

export const createBlog = async (data) => {
  const token = localStorage.getItem('token');
  const res = await API.post('/blogs', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

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

export const updateBlog = async (id, data) => {
  const token = localStorage.getItem('token');
  const res = await API.put(`/blogs/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const deleteBlog = async (id) => {
  const token = localStorage.getItem('token');
  const res = await API.delete(`/blogs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

