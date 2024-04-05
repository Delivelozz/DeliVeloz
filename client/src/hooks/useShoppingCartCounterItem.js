import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const useShoppingCartCounterItem = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const [counter, setCounter] = React.useState(0);
  useEffect(() => {
    const count = shoppingCart.reduce((acc, item) => acc + item.qty, 0);
    setCounter(count);
  }, [shoppingCart]);
  return counter;
};
