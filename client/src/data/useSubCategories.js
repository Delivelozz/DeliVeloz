import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

const useSubCategories = (category) => {
  const subcategories = useSelector((state) => state.subcategories);
  const [subCategoryList, setSupCategoryList] = useState([]);
  useEffect(() => {
    const fetchSubCategories = async () => {
      const subCategoriesArray = [
        ...new Set(
          subcategories?.flatMap((element) => {
            if (category === "Bebidas" && element.categoryProductId === 4) {
              return element?.name;
            } else if (
              category === "Acompanamientos" &&
              element.categoryProductId === 3
            ) {
              return element?.name;
            } else if (
              category === "Comidas Elaboradas" &&
              element.categoryProductId === 2
            ) {
              return element?.name;
            } else if (
              category === "Comidas Rapidas" &&
              element.categoryProductId === 1
            ) {
              return element?.name;
            } else {
              return;
            }
            return [];
          })
        ),
      ];

      setSupCategoryList(
        subCategoriesArray?.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
      );
    };

    fetchSubCategories();
  }, [subcategories, category]);

  // Utilizamos useMemo para memoizar la lista de Categories
  const memoizedSubCategories = useMemo(
    () => subCategoryList,
    [subCategoryList]
  );
  return memoizedSubCategories;
};

export default useSubCategories;
