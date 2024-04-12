import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPromos, setCategories } from "../../redux/actions/actions.js";
import { getDishes } from "../../data/index.js";
import Promos from "../../components/promos/Promos.jsx";
import SliderHome from "../../components/sliderHome/Slider";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";


export default function Home() {
  const promos = useSelector((state) => state.promos);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setCategories());
  // }, [dispatch]);

  //Function that calls data
  useEffect(() => {
    const fetchDishes = async () => {
      const dishesRes = await getDishes();
      dispatch(setPromos(dishesRes));
    };

    fetchDishes();
  }, [dispatch]);

  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();

  return (
    <section>
      <SliderHome />
      <div className="container">
        <h1 className="text-center text-xl">
          Nuestras <span className="text-sundown-500">Novedades</span>
        </h1>
        <Promos dishes={promos} />
       
      
      </div>
    </section>
  );
}
