import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes } from "../../redux/actions/actions.js";
import { getDishes } from "../../data/index.js";

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
      <h1>Home</h1>
    </section>
  );
}
