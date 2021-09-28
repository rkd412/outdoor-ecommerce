import React from "react";

import { Link as RouterLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Toolbar from "@mui/material/Toolbar";

const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar
        variant="regular"
        sx={{
          backgroundColor: "#8f9779",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: 12 }}>
          <RouterLink to="/">
            <Link color="#ecebbd">HOME</Link>
          </RouterLink>
          <RouterLink to="/about">
            <Link color="#ecebbd">ABOUT</Link>
          </RouterLink>
          <RouterLink to="/products">
            <Link color="#ecebbd">PRODUCTS</Link>
          </RouterLink>
          <RouterLink to="/contact">
            <Link color="#ecebbd">CONTACT</Link>
          </RouterLink>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <RouterLink to="/cart">
            <Button
              size="small"
              color="primary"
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
