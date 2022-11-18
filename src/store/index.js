import { legacy_createStore as createStore } from "redux";
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state = { selectedOrder: "", isOpen: false }, action) {
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
      return {
        ...state,
        selectedOrder: action.payload,
      };
    default:
      return state;
  }
}

export default store;
