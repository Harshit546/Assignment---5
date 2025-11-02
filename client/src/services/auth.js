import API from './api';

export const loginAdmin = async (credentials) => {
  const res = await API.post('/admin/login', credentials);
  localStorage.setItem('token', res.data.token);
  return res.data;
};
