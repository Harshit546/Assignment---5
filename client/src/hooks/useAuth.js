import { useEffect, useState } from 'react';

const useAuth = () => {
  // Initialize token from localStorage which persists across refreshes
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Sync token state with localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem('token');
    if (stored) setToken(stored);
  }, []);

  // Boolean flag indicating whether user is logged in
  const isAuthenticated = !!token;

  // Logs out the user by removing the token from localStorage and resetting token state to null
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  // Expose authentication data and helpers to components
  return { token, isAuthenticated, logout };
};

export default useAuth;
