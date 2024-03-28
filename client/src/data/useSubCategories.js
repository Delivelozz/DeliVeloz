import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

const useSubCategories = () => {
  const subcategories = useSelector((state) => state.subcategories);
  const [subCategoryList, setSupCategoryList] = useState([]);
  useEffect(() => {
    const fetchSubCategories = async () => {
      const subCategoriesArray = [
        ...new Set(subcategories?.flatMap((element) => element?.name)),
      ];

      setSupCategoryList(
        subCategoriesArray?.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
      );
    };

    fetchSubCategories();
  }, [subcategories]);

  // Utilizamos useMemo para memoizar la lista de Categories
  const memoizedSubCategories = useMemo(
    () => subCategoryList,
    [subCategoryList]
  );
  return memoizedSubCategories;
};

export default useSubCategories;
