import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes, setCategories } from "../../redux/actions/actions.js";
import Cards from "../../components/cards/Cards.jsx";
import Filters from "../../components/filters/Filters.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
import useCategories from "../../data/useCategories";
import useSubCategories from "../../data/useSubCategories.js";

export default function Products() {
  const dishes = useSelector((state) => state.dishes);
  const filteredDishes = useSelector((state) => state.filteredDishes);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(setDishes());
    dispatch(setCategories());
  }, [dispatch]);
  const categoryArray = useCategories();
  const subCategoryArray = useSubCategories();

  // ? -------------------------------- Paginate

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = () => {
    return filteredDishes.length >= 1
      ? filteredDishes.slice(firstPostIndex, lastPostIndex)
      : dishes.slice(firstPostIndex, lastPostIndex);
  };

  return (
    <section className="container">
      <Filters
        setCurrentPage={setCurrentPage}
        categoryArray={categoryArray}
        subCategoryArray={subCategoryArray}
      />
      <Cards dishes={currentPosts()} />
      <Pagination
        totalPosts={
          filteredDishes.length >= 1 ? filteredDishes.length : dishes.length
        }
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
}
