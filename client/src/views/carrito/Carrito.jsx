//import { useEffect, useState } from "react";
//import { useSelector, useDispatch } from "react-redux";
//import { setDishes } from "../../redux/actions/actions.js";
//import { getDishes } from "../../data/index.js";
//import ShoppingCartCards from "../../components/shoppingCartCards/ShoppingCartCards.jsx";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import TotalAmount from "../../components/totalAmount/TotalAmount.jsx";

export default function Carrito() {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  //console.log(shoppingCart);
  useLocalStoreUserData();

  return (
    <div className="container">
      <h1 className="mb-6">Carrito de compras</h1>
      <ShoppingCartCards shoppingCart={shoppingCart} />
      <TotalAmount />
    </div>
  );
}
