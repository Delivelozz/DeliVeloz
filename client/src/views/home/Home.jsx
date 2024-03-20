import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes } from "../../redux/actions/actions.js";
import { getDishes } from "../../data/index.js";
import SliderHome from "../../components/sliderHome/Slider";

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
    <section>
      <SliderHome />
      <div className="container">
        <h1 className="text-center text-xl">
          Nuestras <span className="text-sundown-500">Novedades</span>
        </h1>
      </div>
    </section>
  );
}
