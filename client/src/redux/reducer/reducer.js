import {
  SET_DISHES,
  SET_PROMOS,
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
  GET_SHOPPING_CART,
  SET_BLOG_DATA,
  SET_BLOG_ID,
  TOGGLE_SIDEBAR,
  EDIT_DISHES,
  DISABLED_DISHES,
  EDIT_USER,
  POST_BLOG,
  EDIT_NEWS,
  SET_MY_ORDERS,
  POST_ORDER,
  GET_ORDER,
  SET_ORDER_ID,
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
  shoppingCartDB: [], // Para obtener el carrito de compras desde el back
  blog: [],
  news: [],
  sidebar: {
    isVisible: false,
  },
  dishEdited: [],
  dishDisabled: [],
  myOrders: [],
  order: [],
  orderDetail: [],
  idOrder: "",
};

export default function reducer(state = initialState, { type, payload }) {
  // ! ----------------------------------------------- Dishes

  switch (type) {
    // ? ----------------------------- Set Dishes

    case SET_DISHES:
      return {
        ...state,
        dishes: payload, // Actualiza el arreglo de platos original
      };

    // ? ----------------------------- Post Dishes

    case POST_DISHES:
      return {
        ...state,
        dish: [...state.dish, payload],
      };

    // ? ----------------------------- Edit Dishes

    case EDIT_DISHES:
      return {
        ...state,
        dishes: state.dishes.map((dish) => {
          if (dish.id === payload.id) {
            return {
              ...dish,
              ...payload,
            };
          }
          return dish;
        }),
        dishEdited: [...state.dishEdited, payload],
      };

    // ? ----------------------------- Disabled Dishes

    case DISABLED_DISHES:
      return {
        ...state,
        dishDisabled: [...state.dishDisabled, payload],
      };

    // ! ----------------------------------------------- Promos

    case SET_PROMOS:
      return {
        ...state,
        promos: payload, // Actualiza el arreglo de promociones
      };

    // ! ----------------------------------------------- Filters

    // ? ----------------------------- SET_FILTERING

    case SET_FILTERING:
      return {
        ...state,
        filteredDishes: payload, // Actualiza el arreglo de platos filtrados
      };

    // ? ----------------------------- SET_CATEGORIES

    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload, // Actualiza el arreglo de categorías
      };

    // ? ----------------------------- GET_SUBCATEGORIES

    case GET_SUBCATEGORIES:
      return {
        ...state,
        subcategories: payload,
      };

    // ? ----------------------------- SET_SUBCATEGORIES

    case SET_SUBCATEGORIES:
      return {
        ...state,
        filteredDishes: payload, // Actualiza el arreglo de platos filtrados
      };

    // ? ----------------------------- ORDER_BY

    case ORDER_BY:
      return {
        ...state,
        filteredDishes: payload, // Actualiza el arreglo de platos filtrados
      };

    // ? ----------------------------- GET_NAME

    case GET_NAME:
      return {
        ...state,
        searcher: payload, // Actualiza el arreglo de platos filtrados
      };

    // ? ----------------------------- RESET

    case RESET:
      return {
        ...state,
        filteredDishes: [], // Limpiamos solo los resultados filtrados
        searcher: [], // Limpiamos solo los resultados filtrados
      };

    // ! ----------------------------------------------- Users

    // ? ----------------------------- GET_USERS

    case GET_USERS:
      return {
        ...state,
        allUsers: payload,
      };

    // ? ----------------------------- EDIT USER
    case EDIT_USER:
      return {
        ...state,
        user: payload,
      };

    // ? ----------------------------- SET_USER_DATA

    case SET_USER_DATA:
      return {
        ...state,
        userData: payload,
      };

    // ? ----------------------------- POST_USER

    case POST_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };

    // ? ----------------------------- LOGIN_USER

    case LOGIN_USER:
      return {
        ...state,
        login: true,
        user: payload,
      };

    // ? ----------------------------- LOGOUT_USER

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

    // ? ----------------------------- Set Blog
    case SET_BLOG_DATA:
      return {
        ...state,
        blog: payload,
      };
    // ? ----------------------------- Set Blog ID
    case SET_BLOG_ID:
      return {
        ...state,
        blog: payload,
      };
    // ? ----------------------------- Post Blog

    case POST_BLOG:
      return {
        ...state,
        order: [...state.order, payload],
      };

    // ? ----------------------------- Edit news

    case EDIT_NEWS:
      return {
        ...state,
        blog: payload,
      };

    // ? ----------------------------- Set errors

    case SET_ERRORS:
      return {
        ...state,
        errors: payload,
      };

    // ! ----------------------------------------------- Cart

    case GET_SHOPPING_CART:
      return {
        ...state,
        shoppingCartDB: payload,
      };

    // ! ------------------------------------------------ Toggle

    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          isVisible: !state.sidebar.isVisible,
        },
      };

    // ! ------------------------------------------------ Orders

    case SET_MY_ORDERS:
      return {
        ...state,
        myOrders: payload,
      };

    // ? ----------------------------- Post order

    case POST_ORDER:
      return {
        ...state,
        order: payload,
      };

    // ? ----------------------------- Get order
    case GET_ORDER:
      return {
        ...state,
        orderDetail: payload,
      };

    // ? ----------------------------- Set order ID
    case SET_ORDER_ID:
      return {
        ...state,
        idOrder: payload,
      };

    // ! ------------------------------------------------ Default

    default:
      return state;
  }
}
