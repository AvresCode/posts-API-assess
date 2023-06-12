import './LatestPosts.css';
export const LatestPosts = ({
  loading,
  error,
  latestPosts,
  fetchLatestPosts,
}) => {
  const imagePath = 'https://frontend-case-api.sbdev.nl/storage/';

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
            <div key={post.id} className="onePost-container">
              <img
                src={imagePath + post.img_url}
                alt={post.title}
                width={300}
              />
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
      </div>
      <button onClick={() => fetchLatestPosts()} className="load-button">
        load more
      </button>
    </div>
  );
};
