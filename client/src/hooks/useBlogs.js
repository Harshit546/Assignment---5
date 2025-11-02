import { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/blog';

// Fetches blogs from the backend using the 'fetchBlogs' service.
const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Calls 'fetchBlogs' to get blog data then updates 'blogs' state and stops loading when data is fetched.
  useEffect(() => {
    fetchBlogs().then(data => {
      setBlogs(data);
      setLoading(false);
    });
  }, []);

  // Return both the blog data and loading status to the component
  return { blogs, loading };
};

export default useBlogs;
