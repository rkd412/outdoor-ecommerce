import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Toolbar from "@mui/material/Toolbar";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Fragment>
      <Toolbar className={styles["nav-bar"]}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
        <Button variant="contained" endIcon={<ShoppingCartIcon />}>
  Cart
</Button>
      </Toolbar>
    </Fragment>
  );
};

export default NavBar;
