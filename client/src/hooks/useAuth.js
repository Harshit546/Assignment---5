import { useEffect, useState } from 'react';

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const stored = localStorage.getItem('token');
    if (stored) setToken(stored);
  }, []);

  const isAuthenticated = !!token;

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return { token, isAuthenticated, logout };
};

export default useAuth;
