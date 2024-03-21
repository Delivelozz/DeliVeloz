import PaginationPrev from "../icons/PaginationPrev";
import PaginationNext from "../icons/PaginationNext";

export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  // ? -------------------------------- Logica

  let totalPages = Math.ceil(totalPosts / postsPerPage);
  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  // ? -------------------------------- Handles de anterior y siguiente

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-3 mt-6">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={currentPage === 1 ? "disabled" : "active"}
      >
        <PaginationPrev />
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "current" : "active"}
          >
            {page}
          </button>
        );
      })}
      <button
        className={currentPage === totalPages ? "disabled" : "active"}
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        <PaginationNext />
      </button>
    </div>
  );
}
