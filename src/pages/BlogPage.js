import { useEffect } from 'react';
import { useGetArchievedPosts } from '../hooks/useGetArchievedPosts';
import { OnePost } from '../components/OnePost';
import './BlogPage.css';

export const BlogPage = () => {
  const { loading, error, archievedPosts, fetchLatestPosts } =
    useGetArchievedPosts();

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  console.log(archievedPosts);

  if (error) {
    return <p>Something went wrong ...</p>;
  } else if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="blogpage-container">
      <div className="archieved-posts">
        {archievedPosts && archievedPosts.map((post) => <OnePost {...post} />)}
      </div>
      <div> Pagination</div>
    </div>
  );
};
