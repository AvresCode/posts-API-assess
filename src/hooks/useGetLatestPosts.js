import axios from 'axios';
import { useState } from 'react';

export const useGetLatestPosts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const [addPost, setAddPost] = useState(0);

  const fetchLatestPosts = async () => {
    const URL = 'https://frontend-case-api.sbdev.nl/api/posts';
    const API_KEY = 'pj11daaQRz7zUIH56B9Z';
    setLoading(true);
    try {
      const response = await axios.get(URL, {
        params: {
          perPage: 4 + addPost,
          sortBy: 'created_at',
          sortDirection: 'desc',
        },
        headers: {
          token: `${API_KEY}`,
        },
      });

      setLatestPosts(response.data.data);
      setAddPost(addPost + 4);
      console.log(response.data.data.length);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    setLoading(false);
  };

  return { loading, error, latestPosts, fetchLatestPosts };
};
