import { useEffect } from 'react';
import { useGetArchievedPosts } from '../hooks/useGetArchievedPosts';

export const BlogPage = () => {
  const { loading, error, archievedPosts, fetchLatestPosts } =
    useGetArchievedPosts();

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  console.log(archievedPosts);

  const imagePath = 'https://frontend-case-api.sbdev.nl/storage/';

  if (error) {
    return <p>Something went wrong ...</p>;
  } else if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      {archievedPosts &&
        archievedPosts.map((post) => (
          <div key={post.id}>
            <img src={imagePath + post.img_url} alt={post.title} width={300} />
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        ))}
    </>
  );
};
