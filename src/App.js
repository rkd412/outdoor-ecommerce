import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Contact from "./components/contact/Contact";
import Homepage from "./components/homepage/Homepage";
import NavBar from "./components/nav/NavBar";
import ProductsPage from "./components/productspage/ProductsPage";
import SignIn from "./components/signin/SignIn";

import ScrollToTop from "./ScrollToTop";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("CART_ITEMS") === null) {
      setCartItems([]);
    } else {
      setCartItems(JSON.parse(localStorage.getItem("CART_ITEMS")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <div className="App">
        <NavBar cartItems={cartItems} />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <ProductsPage cartItems={cartItems} setCartItems={setCartItems} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/cart">
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
