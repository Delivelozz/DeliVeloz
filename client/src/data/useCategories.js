import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { setCategories } from "../redux/actions/actions";

const useCategories = () => {
  const dishes = useSelector((state) => state.dishes);
  const [categoryList, setCategoryList] = useState([]);
  
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setCategories());
//   }, [dispatch]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesArray = [
        ...new Set(
          dishes?.flatMap((element) =>
            element.category
          )
        ),
      ];

      setCategoryList(
        categoriesArray.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
      );
    };

    fetchCategories();
  }, []);

  // Utilizamos useMemo para memoizar la lista de Categories
  const memoizedCategories = useMemo(() => categoryList, [categoryList]);
  return memoizedCategories;
};

export default useCategories;