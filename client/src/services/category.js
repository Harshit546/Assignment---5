import API from './api';

// Fetch all categories from the server
export const fetchCategories = async () => {
  const res = await API.get('/categories');
  return res.data;
};

// Create a new category
export const createCategory = async (data) => {
  const token = localStorage.getItem('token');
  const res = await API.post('/categories', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
