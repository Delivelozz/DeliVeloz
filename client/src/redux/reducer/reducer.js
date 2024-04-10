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
  POST_USER,
  POST_DISHES,
  RESET,
  LOGIN_USER,
  LOGOUT_USER,
  SET_USER_DATA,
  SET_ERRORS,
  GET_USERS,
} from "../actions/types";

const initialState = {
  dishes: [],
  filteredDishes: [],
  promos: [],
  shoppingCart: JSON.parse(localStorage.getItem("shoppingCart")) || [],
  categories: [],
  subcategories: [], // Arreglo de categorías
  searcher: [], // Arreglo de platos filtrados por nombre
  users: [],
  allUsers: [],
  login: false,
  user: {},
  userData: JSON.parse(localStorage.getItem("userData")) || {
    email: "",
    password: "",
  },
  errors: {
    email: "",
    password: "",
  },
  loading: {},
  dish: [], // Para publicar un plato nuevo
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
        searcher: payload, // Actualiza el arreglo de platos filtrados
      };

    case RESET:
      return {
        ...state,
        filteredDishes: [], // Limpiamos solo los resultados filtrados
        searcher: [], // Limpiamos solo los resultados filtrados
      };

    // ? ----------------------------- Post

    case POST_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };

    case POST_DISHES:
      return {
        ...state,
        dish: [...state.dish, payload],
      };

    // ? ----------------------------- Login

    case LOGIN_USER:
      return {
        ...state,
        login: true,
        user: payload,
      };

    // ? ----------------------------- Logout

    case LOGOUT_USER:
      return {
        ...state,
        login: false,
        user: {},
      };

    // ? ----------------------------- Set user data
    case SET_USER_DATA:
      return {
        ...state,
        userData: payload,
      };

    // ? ----------------------------- Set errors
    case SET_ERRORS:
      return {
        ...state,
        errors: payload,
      };

    case GET_USERS:
      return {
        ...state,
        allUsers: payload,
      };

    default:
      return state;
  }
}
