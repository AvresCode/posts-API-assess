import { useEffect, useState } from 'react';
import { useGetArchievedPosts } from '../hooks/useGetArchievedPosts';
import { OnePost } from '../components/OnePost';
import './BlogPage.css';

export const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, archievedPosts, fetchLatestPosts, totalPages } =
    useGetArchievedPosts();

  useEffect(() => {
    fetchLatestPosts(currentPage);
  }, [currentPage]);

  console.log(archievedPosts);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];

    // 7 numbers appears on pagination

    let startPage = currentPage - 3;
    let endPage = currentPage + 3;

    if (startPage < 1) {
      startPage = 1;
      endPage = startPage + 6;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - 6;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
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
        <div>
          {currentPage > 1 && (
            <button onClick={handlePrevPage} className="switch-page-button">
              Prev
            </button>
          )}
        </div>
        <div className="pagination-buttons-container">
          {getPageNumbers().map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`pagination-button ${
                pageNumber === currentPage ? 'active' : ''
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <div>
          {currentPage < totalPages && (
            <button onClick={handleNextPage} className="switch-page-button">
              next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
