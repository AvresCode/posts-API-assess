import axios from 'axios';
import { useState } from 'react';

export const useGetArchievedPosts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [archievedPosts, setArchievedPosts] = useState(null);

  const fetchLatestPosts = async () => {
    const URL = 'https://frontend-case-api.sbdev.nl/api/posts';
    const API_KEY = 'pj11daaQRz7zUIH56B9Z';
    setLoading(true);
    try {
      const response = await axios.get(URL, {
        params: {
          perPage: 8,
          sortBy: 'created_at',
          sortDirection: 'desc',
        },
        headers: {
          token: `${API_KEY}`,
        },
      });

      setArchievedPosts(response.data.data);
      console.log(response.data.data.length);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    setLoading(false);
  };

  return { loading, error, archievedPosts, fetchLatestPosts };
};
