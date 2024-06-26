import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getByName,
  orderBy,
  resetDishes,
  setCategories,
  getSubCategories,
} from "../../redux/actions/actions";
import useCategories from "../../hooks/useCategories.js";
import useSubCategories from "../../hooks/useSubCategories.js";

export default function Filters({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  const [category, setCategory] = useState(
    () => localStorage.getItem("category") || "default"
  );
  const [subCategory, setSubCategory] = useState(
    () => localStorage.getItem("subCategory") || "default"
  );
  const [price, setPrice] = useState(
    () => localStorage.getItem("price") || "default"
  );

  useEffect(() => {
    dispatch(setCategories());
    dispatch(getSubCategories());
  }, [dispatch]);
  const categoryArray = useCategories();
  const subCategoryArray = useSubCategories(category);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("category", category);
    localStorage.setItem("subCategory", subCategory);
    localStorage.setItem("price", price);
  }, [name, category, subCategory, price]);

  //por precio
  const handleFilterBy = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    setPrice(selectedValue);
    setCurrentPage(1);
    return selectedValue;
  };

  // ?--------------------------------------- Filtrar por categoría

  const handleFilterCategory = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    setCategory(selectedValue);

    if (selectedValue === "Categoría") {
      setCategory("default");
    } else {
      setCategory(selectedValue);
    }
    if (subCategory !== "default") {
      setSubCategory("default");
    }
    setCurrentPage(1);
    return selectedValue;
  };

  // ?--------------------------------------- Filtrar por subcategoría

  const handleFilterSubCategory = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    setSubCategory(selectedValue);
    setCurrentPage(1);
    //console.log(selectedValue);
    return selectedValue;
  };

  // ?--------------------------------------- Filtrar por categoría && precio

  const handleFilterCategoryPrice = () => {
    //console.log(category, subCategory, price);
    dispatch(orderBy(category, subCategory, price));
  };

  useEffect(() => {
    if (
      category !== "default" ||
      category == "default" ||
      subCategory !== "default" ||
      price !== "default" ||
      price == "default"
    ) {
      handleFilterCategoryPrice();
    }
  }, [category, subCategory, price]);

  // ?--------------------------------------- Filtrar por Nombre

  const search = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Buscando por nombre:", name);
    dispatch(getByName(name));
    setCurrentPage(1);
  };

  useEffect(() => {
    if (name) {
      //console.log("Actualizacion por nombre :", name);
      dispatch(getByName(name));
      setCurrentPage(1);
    }
  }, []);

  // ? --------------------------------------- Reset

  const handleClick = () => {
    dispatch(resetDishes());
    setCategory("default");
    setSubCategory("default");
    setPrice("default");
    setName("");
    setCurrentPage(1);
  };

  return (
    <div className="flex w-full justify-center flex-wrap mb-10 gap-2 lg:justify-between">
      <div className="w-full font-semibold sm:w-auto md:w-auto">
        <form onSubmit={handleSubmit} className="flex justify-between gap-3">
          <input
            type="search"
            value={name}
            placeholder="Buscar..."
            onChange={search}
            className="w-3/4 bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
          />
          <button type="submit" className="btn-bg">
            Buscar
          </button>
        </form>
      </div>
      <div className="flex  gap-2">
        <select
          name=""
          value={category}
          placeholder="Categorías"
          className="w-1/4 py-2  border border-sundown-500 rounded-lg text-sm focus:outline-sundown-500 font-semibold"
          onChange={handleFilterCategory}
        >
          <option value="default">Categoría</option>
          {categoryArray.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          name=""
          value={subCategory}
          placeholder="Subcategorías"
          className={`w-1/4 py-2  border ${
            category === "default" ? "border-gray-500" : "border-sundown-500"
          } rounded-lg text-sm focus:outline-sundown-500 font-semibold`}
          onChange={handleFilterSubCategory}
          disabled={category === "default"}
        >
          <option value="default">Subcategorías</option>
          {subCategoryArray.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          onChange={handleFilterBy}
          name=""
          value={price}
          placeholder="Precio"
          className="w-1/4 py-2  border border-sundown-500 rounded-lg text-sm focus:outline-sundown-500 font-semibold"
        >
          <option value="default">Por Precio</option>
          <option value="asc">$ ↓</option>
          <option value="desc">$ ↑</option>
        </select>
        <button onClick={handleClick} className="btn-bg">
          Limpiar
        </button>
      </div>
    </div>
  );
}
