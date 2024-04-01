import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getByName,
  orderBy,
  resetDishes,
  setCategories,
  getSubCategories,
} from "../../redux/actions/actions";
import useCategories from "../../data/useCategories";
import useSubCategories from "../../data/useSubCategories.js";

export default function Filters({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(() => localStorage.getItem("name") || "");
  //console.log("Valor actual de name:", name);
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
    console.log(category, subCategory, price);
    dispatch(orderBy(category, subCategory, price));
  };

  useEffect(() => {
    handleFilterCategoryPrice();
  }, [category, subCategory, price]);

  // ?--------------------------------------- Filtrar por Nombre

  const search = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando por nombre:", name);
    dispatch(getByName(name));
    setCurrentPage(1);
  };

  useEffect(() => {
    if (name) {
      dispatch(getByName(name));
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
    <div className="flex w-full justify-between mb-10">
      <div className="flex gap-2">
        <select
          name=""
          value={category}
          placeholder="Categorías"
          className="py-2 px-4 border border-sundown-500 rounded-lg text-sm focus:outline-sundown-500 font-semibold"
          onChange={handleFilterCategory}
        >
          <option value="default" disabled={true}>
            Categoría
          </option>
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
          className={`py-2 px-4 border ${
            category === "default" ? "border-gray-500" : "border-sundown-500"
          } rounded-lg text-sm focus:outline-sundown-500 font-semibold`}
          onChange={handleFilterSubCategory}
          disabled={category === "default"}
        >
          <option value="default" disabled={true}>
            Subcategorías
          </option>
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
          className="py-2 px-4 border border-sundown-500 rounded-lg text-sm focus:outline-sundown-500 font-semibold"
        >
          <option value="default" disabled={true}>
            Por Precio
          </option>
          <option value="asc">$ ↓</option>
          <option value="desc">$ ↑</option>
        </select>
        <button onClick={handleClick} className="btn-bg">
          Limpiar
        </button>
      </div>

      <div className="font-semibold">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="search"
            value={name}
            placeholder="Buscar..."
            onChange={search}
            className="w-48 bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
          />
          <button type="submit" className="btn-bg">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}
