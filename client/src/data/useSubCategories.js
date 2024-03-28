import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

const useSubCategories = () => {
  const categories = useSelector((state) => state.categories);
  const [subCategoryList, setSupCategoryList] = useState([]);
  useEffect(() => {
    const fetchSubCategories = async () => {
      const subCategoriesArray = [
        ...new Set(categories?.flatMap((element) => element?.subCategory)),
      ];

      setSupCategoryList(
        subCategoriesArray?.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
      );
    };

    fetchSubCategories();
  }, [categories]);

  // Utilizamos useMemo para memoizar la lista de Categories
  const memoizedSubCategories = useMemo(
    () => subCategoryList,
    [subCategoryList]
  );
  return memoizedSubCategories;
};

export default useSubCategories;
