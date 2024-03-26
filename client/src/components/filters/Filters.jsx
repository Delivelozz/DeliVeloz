import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getByName,
  filterBy,
  resetDishes,
  setFiltering,
} from "../../redux/actions/actions";
import useCategories from "../../data/useCategories";

 function Filters({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const categoryArray = useCategories();
  const order = useSelector(state => state.orderPrice);
  const filtering = useSelector((state) => state.filtering);

  //estado de filtro
  const [filter, setFilter] = useState("");

  //por precio
  const handleFilterBy = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value;
    setFilter(selectedValue);
    dispatch(filterBy(selectedValue));
    setCurrentPage(1)
    
  };
  console.log(order);

  // ?--------------------------------------- Filtrar por categoría

  const handleFilterCategory = (e) => {
    //e.preventDefault();
    const selectedValue = e.target.value;
    console.log(selectedValue);
    dispatch(setFiltering(selectedValue));
    setCurrentPage(1);
  };

  console.log(filtering);

  // ?--------------------------------------- Filtrar por Nombre

  const search = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit = () => {
    dispatch(getByName(name));
    console.log(name);
    setCurrentPage(1);
  };

  // ? --------------------------------------- Reset

  const handleClick = () => {
    dispatch(resetDishes());
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
          onChange={handleFilterBy}
          value={filter}
          name=""
          defaultValue="placeholder"
          placeholder="Precio"
          className="py-2 px-4 border border-sundown-500 rounded-lg text-sm focus:outline-sundown-500 font-semibold"
        >
          <option value="placeholder" disabled={true}>
            Por Precio
          </option>
          <option value="NombreAscendente">Nombre A - Z</option>
          <option value="NombreDescendente">Nombre Z - A</option>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendentemente</option>
        </select>
        <button onClick={handleClick} className="btn-bg">
          Reset
        </button>
      </div>

      <div className="font-semibold flex gap-3">
        <input
          type="search"
          placeholder="Buscar..."
          onChange={search}
          className="w-48 bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
        />
        <button onClick={handleSubmit} className="btn-bg">
          Buscar
        </button>
      </div>
    </div>
  );
}

export default Filters;