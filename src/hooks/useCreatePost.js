import axios from 'axios';

export const useCreatePost = (fetchLatestPosts) => {
  const API_KEY = 'pj11daaQRz7zUIH56B9Z';
  const url = `https://frontend-case-api.sbdev.nl/api/posts`;

  const createPost = async (title, content, category_id, image) => {
    try {
      const response = await axios.post(
        url,
        { title, content, category_id, image },

        {
          headers: {
            token: `${API_KEY}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('response', response);

      fetchLatestPosts();
    } catch (error) {
      console.log(error.message);
    }
  };
  return { createPost };
};
