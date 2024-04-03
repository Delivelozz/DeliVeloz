import PaginationPrev from "../icons/PaginationPrev";
import PaginationNext from "../icons/PaginationNext";
import { smoothScrollToTop } from "../../functions/SmoothScroll";

export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  // ? -------------------------------- Logica

  let totalPages = Math.ceil(totalPosts / postsPerPage);
  let pages = [];
  console.log(currentPage);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  // ? -------------------------------- Handles de anterior y siguiente

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      smoothScrollToTop();
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      smoothScrollToTop();
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    smoothScrollToTop();
  };

  return (
    <div className="flex justify-center items-center gap-3 mt-6">
      <button
        onClick={handlePrevPage}
        disabled={currentPage == 1}
        className={currentPage == 1 ? "disabled text-xl" : "active text-xl"}
      >
        &lt;
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={currentPage == page ? "current" : "active"}
          >
            {page}
          </button>
        );
      })}
      <button
        className={
          currentPage == totalPages ? "disabled text-xl" : "active text-xl"
        }
        disabled={currentPage == totalPages}
        onClick={handleNextPage}
      >
        &gt;
      </button>
    </div>
  );
}
