import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
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
        <Link to="/cart">
          <Button variant="contained" endIcon={  <IconButton aria-label="cart">
      <Badge badgeContent={0} color="secondary" showZero>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>}>
            Cart
          </Button>
        </Link>
      </Toolbar>
    </Fragment>
  );
};

export default NavBar;
