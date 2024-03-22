import { SET_DISHES, SET_PROMOS, SET_SHOPPING_CART, SET_CATEGORIES, GET_NAME, FILTER_BY, RESET } from "../actions/types";

const initialState = {
  dishes: [],
  filteredDishes: [],
  promos:[],
  shoppingCart: [],
  categories:[],
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

    // case SET_CATEGORIES:
    //   return {
    //     ...state,
    //     categories: payload,
    //   };
      
// ? ----------------------------- Set filter
    case FILTER_BY:
      const filterPrice = [...state.filteredDishes]

      if(payload === "PriceAscendente") return {...state, filteredDishes: filterPrice.sort((a, b) => parseInt(a.price, 16 ) - parseInt(b.price, 16))}
      if(payload === "PriceDescendente") return {...state, filteredDishes: filterPrice.sort((a, b) => parseInt(b.price, 16 ) - parseInt(a.price, 16))}

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
			};

    // ? ----------------------------- Default

    default:
      return {
        ...state,
      };
  }
}



