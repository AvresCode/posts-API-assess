import { useEffect, useState } from 'react';
import { useGetArchievedPosts } from '../hooks/useGetArchievedPosts';
import { OnePost } from '../components/OnePost';
import './BlogPage.css';

export const BlogPage = () => {
  const [page, setPage] = useState(1);
  const { loading, error, archievedPosts, fetchLatestPosts, totalPages } =
    useGetArchievedPosts();

  useEffect(() => {
    fetchLatestPosts(page);
  }, [page]);

  console.log(archievedPosts);

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
  };

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
      <div className="pagination">
        <div>{page > 1 && <button onClick={handlePrevPage}> Prev</button>}</div>
        <div> {page}</div>
        <div>
          {' '}
          {page < totalPages && <button onClick={handleNextPage}> next</button>}
        </div>
      </div>
    </div>
  );
};
