import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes } from "../../redux/actions/actions.js";
import { getDishes } from "../../data/index.js";
import Cards from "../../components/cards/Cards.jsx";
import Filters from "../../components/filters/Filters.jsx";

export default function Products() {
  const dishes = useSelector((state) => state.dishes);
  const dispatch = useDispatch();

  //Function that calls data
  useEffect(() => {
    const fetchDishes = async () => {
      const dishesRes = await getDishes();
      dispatch(setDishes(dishesRes));
    };

    fetchDishes();
  }, [dispatch]);

  return (
    <section className="container">
      <Filters />

      <Cards dishes={dishes} />
    </section>
  );
}
