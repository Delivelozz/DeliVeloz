import {
  SET_DISHES,
  SET_PROMOS,
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
  GET_SHOPPING_CART,
  SET_BLOG_DATA,
  SET_BLOG_ID,
  TOGGLE_SIDEBAR,
  EDIT_DISHES,
  DISABLED_DISHES,
  DISABLED_USER,
  EDIT_USER,
  POST_BLOG,
  EDIT_NEWS,
  SET_MY_ORDERS,
  POST_ORDER,
  GET_ORDER,
  SET_ORDER_ID,
  SET_ALL_DISHES,
  GET_ADMIN_USERS,
} from "./types";
import axios from "axios";
import { API_URL } from "../../utils/constants";

// ! ----------------------------------------------- Dishes

export function disabledUsers(payload) {
  const invertedAvailability = !payload.active;

  return async function (dispatch) {
    try {
      const response = await axios.put(
        `https://deliveloz-ryfh.onrender.com/users/${payload.id}/${invertedAvailability}`,
        payload
      );
      dispatch({
        type: DISABLED_USER,
        payload: { ...response.data, active: invertedAvailability }, // Actualizar availability con el valor invertido
      });
    } catch (error) {
      console.error("Error al desactivar el producto: ", error);
    }
  };
}

// ? ----------------------------- Set All Dishes

export function setAllDishes() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      dispatch({
        type: SET_ALL_DISHES,
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching all dishes: ", error);
    }
  };
}

// ? ----------------------------- Set Dishes

export function setDishes() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/products/active`);
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

// ? ----------------------------- Edit Dishes

export function editDishes(payload) {
  // console.log("esto es un payload:", payload.id)
  return async function (dispatch) {
    try {
      const response = await axios.patch(
        `https://deliveloz-ryfh.onrender.com/products/${payload.id}`,
        payload
      );
      dispatch({
        type: EDIT_DISHES,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al editar el producto: ", error);
    }
  };
}

// ? ----------------------------- Disabled Dishes

export function disabledDishes(payload) {
  const invertedAvailability = !payload.availability;

  return async function (dispatch) {
    try {
      const response = await axios.put(
        `https://deliveloz-ryfh.onrender.com/products/${payload.id}/${invertedAvailability}`,
        payload
      );
      dispatch({
        type: DISABLED_DISHES,
        payload: { ...response.data, availability: invertedAvailability }, // Actualizar availability con el valor invertido
      });
    } catch (error) {
      console.error("Error al desactivar el producto: ", error);
    }
  };
}



// ! ----------------------------------------------- Promos

// ? ----------------------------- Set Promos

export const setPromos = (payload) => ({
  type: SET_PROMOS,
  payload,
});

// ! ----------------------------------------------- Filters

// ? ----------------------------- Set filtering

export const setFiltering = (payload) => ({
  type: SET_FILTERING,
  payload,
});

export const setFilteringSubCategory = (payload) => ({
  type: SET_SUBCATEGORIES,
  payload,
});

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
      const response = await fetch(`${API_URL}/products/active?name=${name}`);
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

// ? ---------------------------------------------- Reset

export const resetDishes = () => {
  return {
    type: RESET,
  };
};

// ! ----------------------------------------------- Users

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

// ? ----------------------------- Edit user

export function editUser(payload) {
  // console.log("esto es un payload:", payload.id)
  return async function (dispatch) {
    try {
      const response = await axios.patch(
        `https://deliveloz-ryfh.onrender.com/users/${payload.id}`,
        payload
      );
      dispatch({
        type: EDIT_USER,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al editar el perfil: ", error);
    }
  };
}

// ? ----------------------------- Login

export function loginUser(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${API_URL}/login`, payload);
      dispatch({
        type: LOGIN_USER,
        payload: response.data,
      });
      //console.log("Respuesta de la API:", response.data);
      return response;
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

// ? ----------------------------- Set User Data

export function setUserData(userData) {
  //console.log(userData);
  localStorage.setItem("userData", JSON.stringify(userData));
  return {
    type: "SET_USER_DATA",
    payload: userData,
  };
}

// ! ----------------------------------------------- Cart

// ? ----------------------------- Set Shopping Cart

export function setShoppingCart(shoppingCart) {
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  return {
    type: "SET_SHOPPING_CART",
    payload: shoppingCart,
  };
}

// ? ----------------------------- Set Blog
export function setBlogData() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://deliveloz-ryfh.onrender.com/banners"
      );
      const data = await response.json();
      dispatch({
        type: SET_BLOG_DATA,
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };
}

// ? ----------------------------- Set Blog ID

export function setBlogId(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://deliveloz-ryfh.onrender.com/banners/${id}`
      );
      const data = await response.json();
      dispatch({
        type: SET_BLOG_ID,
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };
}
// ? ----------------------------- Post Blog
export function postBlog(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `https://deliveloz-ryfh.onrender.com/banners`,
        payload
      );
      dispatch({
        type: POST_BLOG,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al postear el plato: ", error);
    }
  };
}
// ? ----------------------------- Edit news
export function editNews(payload) {
  // console.log("esto es un payload:", payload.id)
  return async function (dispatch) {
    try {
      const response = await axios.patch(
        `https://deliveloz-ryfh.onrender.com/banners/${payload.id}`,
        payload
      );
      dispatch({
        type: EDIT_NEWS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al editar la novedad: ", error);
    }
  };
}

// ! ----------------------------------------------- Set Errors

export function setErrors(errors) {
  return {
    type: SET_ERRORS,
    payload: errors,
  };
}

// ? ----------------------------- Get Shopping Cart
export function getShoppingCart(userId) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_URL}/cart/user/${userId}`);
      const data = await response.json();
      dispatch({
        type: GET_SHOPPING_CART,
        payload: data,
      });
    } catch (error) {
      console.error("Error fetching shopping cart: ", error);
    }
  };
}

// ! ------------------------------------------------ Toggle

export const toggleSidebar = (left) => {
  return {
    type: TOGGLE_SIDEBAR,
    payload: left,
  };
};

// ! ----------------------------------------------- Orders

export const setMyOrders = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://deliveloz-ryfh.onrender.com/order/${id}`
      );
      dispatch({
        type: SET_MY_ORDERS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching your orders: ", error);
    }
  };
};
// ? ----------------------------- Post order
export function postOrder(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `https://deliveloz-ryfh.onrender.com/order/`,
        payload
      );
      dispatch({
        type: POST_ORDER,
        payload: response.data,
      });
      console.log("Respuesta de la API:", response.data);
      return response; // Devuelve la respuesta
    } catch (error) {
      console.error("Error al obetener su pedido: ", error);
      throw error; // Lanza el error para que pueda ser capturado en el componente
    }
  };
}

// ? ----------------------------- Get order
export function getOrder(idUser, idOrder) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://deliveloz-ryfh.onrender.com/order/${idUser}/${idOrder}`
      );
      dispatch({
        type: GET_ORDER,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching order: ", error);
    }
  };
}

// ? ----------------------------- Set order ID
export const setOrderIdAppi = (payload) => {
  return {
    type: SET_ORDER_ID,
    payload,
  };
};

// ! ------------------------------------------------ Admin
export const getAdminUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/administrator`);
      dispatch({
        type: GET_ADMIN_USERS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching admin users: ", error);
    }
  };
};
