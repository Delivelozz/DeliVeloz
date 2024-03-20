import { SET_DISHES, SET_SHOPPING_CART } from "./types";
import axios from "axios";

export const setDishes = (payload) => ({
  type: SET_DISHES,
  payload,
});

export const setShoppingCart = (payload) => ({
  type: SET_SHOPPING_CART,
  payload,
});
