import axios from 'axios';
import { useState } from 'react';

export const useGetArchievedPosts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [archievedPosts, setArchievedPosts] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  const fetchLatestPosts = async (currentPage) => {
    const URL = 'https://frontend-case-api.sbdev.nl/api/posts';
    const API_KEY = 'pj11daaQRz7zUIH56B9Z';
    setLoading(true);
    try {
      const response = await axios.get(URL, {
        params: {
          perPage: 8,
          sortBy: 'created_at',
          sortDirection: 'asc',
          page: currentPage,
        },
        headers: {
          token: `${API_KEY}`,
        },
      });

      setArchievedPosts(response.data.data);
      setTotalPages(response.data.last_page);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
    setLoading(false);
  };

  return { loading, error, archievedPosts, fetchLatestPosts, totalPages };
};
