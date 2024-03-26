import {
  SET_DISHES,
  SET_PROMOS,
  SET_SHOPPING_CART,
  SET_CATEGORIES,
  SET_FILTERING,
  GET_NAME,
  FILTER_BY,
  RESET,
} from "../actions/types";

const initialState = {
  dishes: [],
  filteredDishes: [],
  orderPrice: [],
  promos: [],
  shoppingCart: [],
  categories: [],
  filtering: [],
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

    // ? ----------------------------- Set categories

    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    // ? ----------------------------- Set filtering
    case SET_FILTERING:
      return {
        ...state,
        filtering: payload,
      };

    // ? ----------------------------- Set filter
    case FILTER_BY:
      // eslint-disable-next-line no-case-declarations
      const filterPrice = [...state.filteredDishes];

      if(payload === "NombreAscendente")  return {...state,filteredDishes: filterPrice.sort((a, b) => a.name.localeCompare(b.name))}
      if(payload === "NombreDescendente")  return {...state,filteredDishes: filterPrice.sort((a, b) => b.name.localeCompare(a.name))}
      if(payload === "asc")  return {...state,filteredDishes: filterPrice.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))}
      if(payload === "desc")  return {...state,filteredDishes: filterPrice.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))}
      break;
      

    // ? ----------------------------- Get by Name

    case GET_NAME:
      return {
        ...state,
        filteredDishes: payload,
      };

    // ? ----------------------------- Reset

    case RESET:
      return {
        ...state,
        filteredDishes: [],
        filtering: [],
      };

    // ? ----------------------------- Default

    default:
      return {
        ...state,
      };
  }
}
