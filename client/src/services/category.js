import API from './api';

export const fetchCategories = async () => {
  const res = await API.get('/categories');
  return res.data;
};

export const createCategory = async (data) => {
  const token = localStorage.getItem('token');
  const res = await API.post('/categories', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
