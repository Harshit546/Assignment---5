import API from './api';

// Handles admin authentication by sending login credentials to the backend.
export const loginAdmin = async (credentials) => {
  // Send a POST request to the backend for login
  const res = await API.post('/admin/login', credentials);

  // Save the JWT token locally for authentication persistence
  localStorage.setItem('token', res.data.token);
  return res.data;
};
