import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const useShoppingCartCounterItem = () => {
  const shoppingCartDB = useSelector((state) => state.shoppingCartDB);
  const [counter, setCounter] = React.useState(0);
  useEffect(() => {
    const count = shoppingCartDB?.products?.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCounter(count);
  }, [shoppingCartDB]);
  return counter;
};
