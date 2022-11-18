import { legacy_createStore as createStore } from "redux";
import data from "../data.json";

const productsData = data.products;
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(
  state = { products: [...productsData], selectedOrder: "", isOpen: false },
  action
) {
  switch (action.type) {
    case "closeCart":
      return {
        ...state,
        isOpen: false,
      };
    case "openCart":
      return {
        ...state,
        isOpen: true,
      };

    case "orderBy":
      if (action.payload === "highest") {
        return {
          ...state,
          selectedOrder: action.payload,
          products: [...productsData].sort((a, b) => b.price - a.price),
        };
      }
      if (action.payload === "lowest") {
        return {
          ...state,
          selectedOrder: action.payload,
          products: [...productsData].sort((a, b) => a.price - b.price),
        };
      }
      break;
    default:
      return state;
  }
}

export default store;
