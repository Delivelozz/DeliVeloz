import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes } from "../../redux/actions/actions.js";
import Cards from "../../components/cards/Cards.jsx";
import Filters from "../../components/filters/Filters.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";

export default function Products() {
  const dishes = useSelector((state) => state.dishes);
  const filteredDishes = useSelector((state) => state.filteredDishes);
  const searcher = useSelector((state) => state.searcher);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDishes());
  }, [dispatch]);

  // ? -------------------------------- Paginate

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = () => {
    /* console.log(
      searcher.length >= 1
        ? `Renderizando searcher: ${searcher.length}`
        : filteredDishes.length >= 1
        ? "Renderizando filteredDishes"
        : "Renderizando dishes"
    ); */

    return searcher.length >= 1
      ? searcher.slice(firstPostIndex, lastPostIndex)
      : filteredDishes.length >= 1
      ? filteredDishes.slice(firstPostIndex, lastPostIndex)
      : dishes.slice(firstPostIndex, lastPostIndex);
  };

  return (
    <section className="container">
      <Filters setCurrentPage={setCurrentPage} />
      <Cards dishes={currentPosts()} />
      <Pagination
        totalPosts={currentPosts().length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
}
