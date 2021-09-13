import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import Homepage from "./components/homepage/Homepage";
import Contact from "./components/contact/Contact";
import ProductsPage from "./components/productspage/ProductsPage";
import Cart from "./components/cart/Cart";
import About from "./components/about/About";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cart">
            <Cart />
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
