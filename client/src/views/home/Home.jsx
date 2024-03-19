import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes } from "../../redux/actions/actions.js";
import { getDishes } from "../../data/index.js";
import Promos from "../../components/promos/Promos.jsx";

export default function Home() {
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

  //console.log(dishes);
  return (
    <section className="container">
      <Promos dishes={dishes} />
    </section>
  );
}
