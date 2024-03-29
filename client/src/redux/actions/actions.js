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
  RESET,
} from "./types";
import axios from "axios";

// ? ----------------------------- Set Dishes

export function setDishes() {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/products");
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

export const setShoppingCart = (payload) => ({
  type: SET_SHOPPING_CART,
  payload,
});

// ? ----------------------------- Filter By

export const orderBy = (category, subCategory, orderType) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/filter/${category}/${subCategory}/${orderType}`
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
      const response = await fetch(
        `http://localhost:3001/products?name=${name}`
      );
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
      const response = await fetch("http://localhost:3001/categories");
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
      const response = await fetch("http://localhost:3001/subcategories");
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
