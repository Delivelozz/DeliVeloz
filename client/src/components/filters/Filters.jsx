import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getByName, orderBy, resetDishes } from "../../redux/actions/actions";

export default function Filters({
  setCurrentPage,
  categoryArray,
  subCategoryArray,
}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("default");
  const [subCategory, setSubCategory] = useState("default");
  const [price, setPrice] = useState("default");

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
    console.log(selectedValue);
    return selectedValue;
  };

  // ?--------------------------------------- Filtrar por categoría && precio

  const handleFilterCategoryPrice = () => {
    dispatch(orderBy(category, subCategory, price));
  };

  useEffect(() => {
    handleFilterCategoryPrice();
    console.log(category, subCategory, price);
  }, [category, subCategory, price]);

  // ?--------------------------------------- Filtrar por Nombre

  const search = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByName(name));
    console.log(name);
    setCurrentPage(1);
  };

  // ? --------------------------------------- Reset

  const handleClick = () => {
    dispatch(resetDishes());
    setCategory("default");
    setSubCategory("default");
    setPrice("default");
    setCurrentPage(1);
  };

  return (
    <div className="flex w-full justify-between mb-10">
      <div className="flex gap-2">
        <select
          name=""
          defaultValue="placeholder"
          placeholder="Categorías"
          className="py-2 px-4 border border-sundown-500 rounded-lg text-sm focus:outline-sundown-500 font-semibold"
          onChange={handleFilterCategory}
        >
          <option value="placeholder" disabled={true}>
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
          defaultValue="placeholder"
          placeholder="Subcategorías"
          className="py-2 px-4 border border-sundown-500 rounded-lg text-sm focus:outline-sundown-500 font-semibold"
          onChange={handleFilterSubCategory}
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
          // value={order}
          name=""
          defaultValue="placeholder"
          placeholder="Precio"
          className="py-2 px-4 border border-sundown-500 rounded-lg text-sm focus:outline-sundown-500 font-semibold"
        >
          <option value="default">Por Precio</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendentemente</option>
        </select>
        <button onClick={handleClick} className="btn-bg">
          Reset
        </button>
      </div>

      <div className="font-semibold">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="search"
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
