import React, { Fragment } from "react";

import { Link as RouterLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <div>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <RouterLink to="/">
                <Link underline="hover" color="secondary">
                  Home
                </Link>
              </RouterLink>
              <RouterLink to="/about">
                <Link underline="hover" color="secondary">
                  About
                </Link>
              </RouterLink>
              <RouterLink to="/products">
                <Link underline="hover" color="secondary">
                  Products
                </Link>
              </RouterLink>
              <RouterLink to="/contact">
                <Link underline="hover" color="secondary">
                  Contact
                </Link>
              </RouterLink>
            </Stack>
          </div>
          <div>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <RouterLink to="/cart">
                <Button
                  color="secondary"
                  variant="contained"
                  endIcon={
                    <IconButton aria-label="cart">
                      <Badge badgeContent={0} color="secondary" showZero>
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  }
                >
                  Cart
                </Button>
              </RouterLink>
              <RouterLink to="/signin">
                <Avatar src="/broken-image.jpg" />
              </RouterLink>
            </Stack>
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;
