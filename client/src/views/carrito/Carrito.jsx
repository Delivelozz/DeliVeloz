import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes } from "../../redux/actions/actions.js";
import { getDishes } from "../../data/index.js";
import ShoppingCartCards from "../../components/shoppingCartCards/ShoppingCartCards.jsx";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";

export default function Carrito() {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  console.log(shoppingCart);
  useLocalStoreUserData();

  return (
    <div className="container">
      <h1>Carrito</h1>
      <ShoppingCartCards shoppingCart={shoppingCart} />
    </div>
  );
}
