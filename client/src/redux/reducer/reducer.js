import { SET_DISHES, SET_PROMOS, SET_SHOPPING_CART } from "../actions/types";

const initialState = {
  dishes: [],
  promos:[],
  shoppingCart: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    // ? ----------------------------- Set Dishes

    case SET_DISHES:
      return {
        ...state,
        dishes: payload,
      };

    // ? ----------------------------- Set Promos

    case SET_PROMOS:
      return {
        ...state,
        promos: payload,
      };
    // ? ----------------------------- Set Shopping Cart

    case SET_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: payload,
      };

    // ? ----------------------------- Default

    default:
      return {
        ...state,
      };
  }
}
