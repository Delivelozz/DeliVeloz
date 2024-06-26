import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes } from "../../redux/actions/actions.js";
import Cards from "../../components/cards/Cards.jsx";
import Filters from "../../components/filters/Filters.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../hooks/useGetShoppingDB.js";

export default function Products() {
  const dishes = useSelector((state) => state.dishes);
  const filteredDishes = useSelector((state) => state.filteredDishes);
  const searcher = useSelector((state) => state.searcher);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDishes());
  }, [dispatch]);

  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  // ? -------------------------------- Paginate

  const [currentPage, setCurrentPage] = useState(
    () => localStorage.getItem("currentPage") || 1
  );
  const [postsPerPage, setPostsPerPage] = useState(16);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

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
        totalPosts={
          searcher.length >= 1
            ? searcher.length
            : filteredDishes.length >= 1
            ? filteredDishes.length
            : dishes.length
        }
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
}
