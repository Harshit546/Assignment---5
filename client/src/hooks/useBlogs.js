import { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/blog';

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs().then(data => {
      setBlogs(data);
      setLoading(false);
    });
  }, []);

  return { blogs, loading };
};

export default useBlogs;
