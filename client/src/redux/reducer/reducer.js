import {
  SET_DISHES,
  SET_PROMOS,
  SET_SHOPPING_CART,
  SET_CATEGORIES,
  SET_FILTERING,
  SET_SUBCATEGORIES,
  GET_SUBCATEGORIES,
  GET_NAME,
  ORDER_BY,
  RESET,
} from "../actions/types";

const initialState = {
  dishes: [], // Arreglo de platos original
  filteredDishes: [], // Arreglo de platos filtrados
  promos: [], // Arreglo de promociones
  shoppingCart: [], // Arreglo de carrito de compras
  categories: [], // Arreglo de categorías
  subcategories: [], // Arreglo de categorías
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_DISHES:
      return {
        ...state,
        dishes: payload, // Actualiza el arreglo de platos original
      };

    case SET_PROMOS:
      return {
        ...state,
        promos: payload, // Actualiza el arreglo de promociones
      };

    case SET_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: payload, // Actualiza el arreglo del carrito de compras
      };

    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload, // Actualiza el arreglo de categorías
      };

    case GET_SUBCATEGORIES:
      return {
        ...state,
        subcategories: payload,
      };

    case SET_FILTERING:
      return {
        ...state,
        filteredDishes: payload, // Actualiza el arreglo de platos filtrados
      };

    case SET_SUBCATEGORIES:
      return {
        ...state,
        filteredDishes: payload, // Actualiza el arreglo de platos filtrados
      };

    case ORDER_BY:
      return {
        ...state,
        filteredDishes: payload, // Actualiza el arreglo de platos filtrados
      };

    case GET_NAME:
      return {
        ...state,
        filteredDishes: payload, // Actualiza el arreglo de platos filtrados
      };

    case RESET:
      return {
        ...state,
        filteredDishes: [], // Limpiamos solo los resultados filtrados
      };

    default:
      return state;
  }
}
