import { useEffect } from 'react';
import { useGetLatestPosts } from '../hooks/useGetLatestPosts';
import { useCreatePost } from '../hooks/useCreatePost';
import { LatestPosts } from '../components/LatestPosts';
import { CreatePostForm } from '../components/CreatePostForm';
import './HomePage.css';

export const HomePage = () => {
  const { loading, error, latestPosts, fetchLatestPosts } = useGetLatestPosts();
  const { createPost } = useCreatePost(fetchLatestPosts);

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  return (
    <div className="home-container">
      <CreatePostForm createPost={createPost} />
      <LatestPosts
        loading={loading}
        error={error}
        latestPosts={latestPosts}
        fetchLatestPosts={fetchLatestPosts}
      />
    </div>
  );
};
