import {
  SET_DISHES,
  SET_PROMOS,
  SET_SHOPPING_CART,
  SET_CATEGORIES,
  SET_FILTERING,
  SET_SUBCATEGORIES,
  GET_SUBCATEGORIES,
  ORDER_BY,
  GET_NAME,
  POST_USER,
  POST_DISHES,
  RESET,
  LOGIN_USER,
  LOGOUT_USER,
  SET_USER_DATA,
  SET_ERRORS,
  GET_USERS,
  SET_BLOG_DATA,
  SET_BLOG_ID,

 
} from "./types";
import axios from "axios";
import { API_URL } from "../../utils/constants";

// ? ----------------------------- Set Dishes

export function setDishes() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      dispatch({
        type: SET_DISHES,
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching dishes: ", error);
    }
  };
}

// ? ----------------------------- Set Promos

export const setPromos = (payload) => ({
  type: SET_PROMOS,
  payload,
});

// ? ----------------------------- Set Shopping Cart

export function setShoppingCart(shoppingCart) {
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  return {
    type: "SET_SHOPPING_CART",
    payload: shoppingCart,
  };
}

// ? ----------------------------- Filter By

export const orderBy = (category, subCategory, orderType) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${API_URL}/filter/${category}/${subCategory}/${orderType}`
      );
      dispatch({ type: ORDER_BY, payload: response.data });
    } catch (error) {
      console.error("Error ordering dishes:", error);
    }
  };
};

// ? ----------------------------- Filter By name

export function getByName(name) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/products?name=${name}`);
      if (!response.ok) {
        throw new Error("No hay ningún plato en el menu con ese nombre");
      }
      const data = await response.json();
      dispatch({
        type: GET_NAME,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

// ? ---------------------------------------------- Reset

export const resetDishes = () => {
  return {
    type: RESET,
  };
};

// ? ----------------------------- Set Categories

export function setCategories() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/categories`);
      const data = await response.json();
      dispatch({
        type: SET_CATEGORIES,
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };
}

// ? ----------------------------- Set subcategories

export function getSubCategories() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/subcategories`);
      const data = await response.json();
      dispatch({
        type: GET_SUBCATEGORIES,
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };
}

// ? ----------------------------- Set filtering

export const setFiltering = (payload) => ({
  type: SET_FILTERING,
  payload,
});

export const setFilteringSubCategory = (payload) => ({
  type: SET_SUBCATEGORIES,
  payload,
});

// ? ----------------------------- Post Users

export function postUsers(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${API_URL}/users`, payload);
      dispatch({
        type: POST_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error("Tienes un error en: ", error);
    }
  };
}

// ? ----------------------------- Post Dishes

export function postDishes(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${API_URL}/products`, payload);
      dispatch({
        type: POST_DISHES,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al postear el plato: ", error);
    }
  };
}

// ? ----------------------------- Login

export function loginUser(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${API_URL}/users/login`, payload);
      dispatch({
        type: LOGIN_USER,
        payload: response.data,
      });
    } catch (error) {
      if (error.response && error.response.status === 500) {
        console.error("Usuario no encontrado");
      } else {
        console.error("Error al intentar iniciar sesión: ", error);
      }
      throw error;
    }
  };
}

// ? ----------------------------- logout

export function logoutUser(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${API_URL}/users/close`, payload);
      dispatch({
        type: LOGOUT_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error("Ocurrió un error al cerrar sesión: ", error);
    }
  };
}

// ? ----------------------------- Set User Data
export function setUserData(userData) {
  console.log(userData);
  localStorage.setItem("userData", JSON.stringify(userData));
  return {
    type: "SET_USER_DATA",
    payload: userData,
  };
}

// ? ----------------------------- Get Users

export function getUsers() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/users`);
      const data = await response.json();
      dispatch({
        type: GET_USERS,
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };
}

// ? ----------------------------- Set Blog
export function setBlogData() {
  return async (dispatch) => {
    try {
      const response = await fetch("https://deliveloz-ryfh.onrender.com/banners")
      const data = await response.json()
      dispatch ({
        type: SET_BLOG_DATA,
        payload: data,
      })
    } catch (error){
      console.error("Error fetching posts: ", error)
    }
  }
}

// ? ----------------------------- Set Blog ID

export function setBlogId(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://deliveloz-ryfh.onrender.com/banners/${id}`)
      const data = await response.json()
      dispatch ({
        type: SET_BLOG_ID,
        payload: data,
      })
    } catch (error){
      console.error("Error fetching posts: ", error)
    }
  }
}


// ? ----------------------------- Set Errors
export function setErrors(errors) {
  return {
    type: SET_ERRORS,
    payload: errors,
  };
}

