import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes } from "../../redux/actions/actions.js";
import { getDishes } from "../../data/index.js";
import ShoppingCartCards from "../../components/shoppingCartCards/ShoppingCartCards.jsx";

export default function Carrito() {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  console.log(shoppingCart);
  return (
    <div className="container">
      <h1>Carrito</h1>
      <ShoppingCartCards shoppingCart={shoppingCart} />
    </div>
  );
}
