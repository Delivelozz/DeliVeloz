import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDishes, getShoppingCart } from "../../redux/actions/actions.js";
import { getDishes } from "../../data/index.js";
import ShoppingCartCards from "../../components/shoppingCartCards/ShoppingCartCards.jsx";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../hooks/useGetShoppingDB.js";
import TotalAmount from "../../components/totalAmount/TotalAmount.jsx";

export default function Carrito() {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const shoppingCartDB = useSelector((state) => state.shoppingCartDB);
  const dispatch = useDispatch();

  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  //console.log(shoppingCartDB);

  return (
    <section className="">
      <ShoppingCartCards shoppingCart={shoppingCartDB.products} />
      <TotalAmount />
    </section>
  );
}
