import './LatestPosts.css';
import { OnePost } from './OnePost';

export const LatestPosts = ({
  loading,
  error,
  latestPosts,
  fetchLatestPosts,
}) => {
  if (error) {
    return <p>Something went wrong ...</p>;
  } else if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="latestPosts-container">
      <div className="posts-section">
        {latestPosts &&
          latestPosts.map((post) => (
            <OnePost {...post} />

            // <div key={post.id} className="onePost-container">
            //   <img
            //     src={imagePath + post.img_url}
            //     alt={post.title}
            //     className="post-image"
            //   />
            //   <h3>{post.title}</h3>
            //   <p>{post.content}</p>
            // </div>
          ))}
      </div>
      <button onClick={() => fetchLatestPosts()} className="load-button">
        load more
      </button>
    </div>
  );
};
