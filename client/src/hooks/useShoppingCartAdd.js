import { useSelector, useDispatch } from "react-redux";
import { setShoppingCart } from "../redux/actions/actions.js";

export const useShoppingCartAdd = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const addToCart = (id, name, price, priceTotal) => {
    const addRes = [...shoppingCart];
    console.log(addRes);
    const existingItem = addRes.find((item) => item.id === id);
    if (existingItem) {
      existingItem.qty += 1;
      existingItem.priceTotal = parseFloat(
        (existingItem.priceTotal + parseFloat(price)).toFixed(2)
      );
    }
    dispatch(setShoppingCart(addRes));
  };

  return addToCart;
};
