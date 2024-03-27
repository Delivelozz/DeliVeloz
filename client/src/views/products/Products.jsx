import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes, setCategories } from "../../redux/actions/actions.js";
import Cards from "../../components/cards/Cards.jsx";
import Filters from "../../components/filters/Filters.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
import useCategories from "../../data/useCategories";

export default function Products() {
  const dishes = useSelector((state) => state.dishes);
  const filteredDishes = useSelector((state) => state.filteredDishes);
  const dispatch = useDispatch();
  const filtering = useSelector((state) => state.filtering);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(setDishes());
    dispatch(setCategories());
  }, [dispatch]);
  console.log(categories);
  const categoryArray = useCategories();
  console.log(useCategories());

  //console.log("Estos son los filtros:", dishes);
  // console.log("Estos son los filtros:", filteredDishes);
  //console.log("Estos son los filtros:", filteredDishes);

  // ? -------------------------------- Paginate

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  //console.log(filtering);
  const currentPosts = () => {
    if (filteredDishes.length >= 1) {
      return filteredDishes.slice(firstPostIndex, lastPostIndex);
    } else if (filtering.length >= 1) {
      return filtering.slice(firstPostIndex, lastPostIndex);
    } else {
      return dishes.slice(firstPostIndex, lastPostIndex);
    }
  };

  //console.log(dishes);
  return (
    <section className="container">
      <Filters setCurrentPage={setCurrentPage} categoryArray={categoryArray} />
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
