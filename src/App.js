import React from "react";

import NavBar from "./components/nav/NavBar";
import HomePage from "./components/homepage/Homepage";
import ProductsPage from "./components/productspage/ProductsPage";
import Cart from "./components/cart/Cart";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <ProductsPage />
      <Cart />
    </div>
  );
}

export default App;
