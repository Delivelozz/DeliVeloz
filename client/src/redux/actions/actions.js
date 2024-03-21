import { SET_DISHES, SET_PROMOS, SET_SHOPPING_CART } from "./types";
import axios from "axios";


export function setDishes() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      dispatch({
        type: SET_DISHES,
        payload: data,
      })
    } catch (error) {
      console.error("Error fetching dishes: ", error)
    }
  }
}

export const setPromos = (payload) => ({
  type: SET_PROMOS,
  payload,
});

export const setShoppingCart = (payload) => ({
  type: SET_SHOPPING_CART,
  payload,
});
