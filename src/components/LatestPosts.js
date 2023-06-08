import { useEffect } from 'react';
import { useGetLatestPosts } from '../hooks/useGetLatestPosts';

export const LatestPosts = () => {
  const { loading, error, latestPosts, fetchLatestPosts } = useGetLatestPosts();

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  console.log(latestPosts);

  const imagePath = 'https://frontend-case-api.sbdev.nl/storage/';

  if (error) {
    <p>Something went wrong ...</p>;
  } else if (loading) {
    <p>Loading ...</p>;
  }

  return (
    <>
      {latestPosts &&
        latestPosts.map((post) => (
          <div key={post.id}>
            <img src={imagePath + post.img_url} alt={post.title} width={300} />
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      <button onClick={() => fetchLatestPosts()}>load more</button>
    </>
  );
};
