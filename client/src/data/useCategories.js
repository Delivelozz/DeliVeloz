import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

const useCategories = () => {
  const categories = useSelector((state) => state.categories);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesArray = [
        ...new Set(categories?.flatMap((element) => element?.category)),
      ];

      setCategoryList(
        categoriesArray?.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
      );
    };

    fetchCategories();
  }, [categories]);

  // Utilizamos useMemo para memoizar la lista de Categories
  const memoizedCategories = useMemo(() => categoryList, [categoryList]);
  return memoizedCategories;
};

export default useCategories;
