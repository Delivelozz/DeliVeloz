import { SET_DISHES, SET_SHOPPING_CART } from "../actions/types";

const initialState = {
  dishes: [],
  shoppingCart: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_DISHES:
      return {
        ...state,
        dishes: payload,
      };
    case SET_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
