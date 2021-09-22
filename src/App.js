import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Contact from "./components/contact/Contact";
import Homepage from "./components/homepage/Homepage";
import NavBar from "./components/nav/NavBar";
import ProductsPage from "./components/productspage/ProductsPage";
import SignIn from "./components/signin/SignIn";

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
          <Route path="/signin">
            <SignIn />
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
