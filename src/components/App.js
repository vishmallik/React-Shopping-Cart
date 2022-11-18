import React from "react";
import Cart from "./Cart";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { products } from "../data.json";
import { Provider } from "react-redux";
import store from "../store";

function App() {
  return (
    <div className="wrapper flex space-between">
      <Provider store={store}>
        <Sidebar products={products} />
        <Main products={products} />
        <Cart />
      </Provider>
    </div>
  );
}

export default App;
