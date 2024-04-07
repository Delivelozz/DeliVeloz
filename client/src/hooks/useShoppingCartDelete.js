import { useSelector, useDispatch } from "react-redux";
import { setShoppingCart } from "../redux/actions/actions.js";

export const useShoppingCartDelete = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  //console.log(shoppingCart);
  const dispatch = useDispatch();

  const deleteFromCart = (id, price) => {
    const addRes = [...shoppingCart];
    const existingItem = addRes.find((item) => item.id == id);
    if (existingItem) {
      if (existingItem.qty > 1) {
        existingItem.qty -= 1;
        existingItem.priceTotal = parseFloat(
          (existingItem.priceTotal - parseFloat(price)).toFixed(2)
        );
      } else {
        const index = addRes.findIndex((item) => item.id == id);
        addRes.splice(index, 1);
      }
      dispatch(setShoppingCart(addRes));
    }
  };

  return deleteFromCart;
};
