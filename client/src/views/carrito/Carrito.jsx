import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes } from "../../redux/actions/actions.js";
import { getDishes } from "../../data/index.js";
import ShoppingCartCards from "../../components/shoppingCartCards/ShoppingCartCards.jsx";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";
import TotalAmount from "../../components/totalAmount/TotalAmount.jsx";

export default function Carrito() {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  //console.log(shoppingCart);
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();

  return (
    <section className="">
      <ShoppingCartCards shoppingCart={shoppingCart} />
      <TotalAmount />
    </section>
  );
}
