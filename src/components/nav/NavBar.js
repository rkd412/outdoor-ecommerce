import React, { useState } from "react";

import { Link as RouterLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

import Campfire from "../../assests/icon-campfire.png";

const useStyles = makeStyles({
  paper: {
    background: "#8f9779",
  },
});

const NavBar = ({ cartItems }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const styles = useStyles();

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
        {isMobile ? (
          <>
            <Drawer
              anchor="right"
              classes={{ paper: styles.paper }}
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              marginRight="auto"
            >
              <List >
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <RouterLink to="/products">
                      <Link color="#696969">Products</Link>
                    </RouterLink>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <RouterLink to="/contact">
                      <Link color="#696969">Contact</Link>
                    </RouterLink>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <RouterLink to="/about">
                      <Link color="#696969">About</Link>
                    </RouterLink>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <RouterLink to="/cart">
                      <Link color="#696969">Cart</Link>
                    </RouterLink>
                  </ListItemText>
                </ListItem>
                <Divider />
                <Divider />
                <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                    <RouterLink to="/signin">
                      <Link color="#696969">Signin</Link>
                    </RouterLink>
                  </ListItemText>
                </ListItem>
                <Divider />
              </List>
            </Drawer>

            <RouterLink to="/">
              <Link color="#ecebbd">
                <img
                  src={Campfire}
                  alt="Logo"
                  style={{ height: 40, width: 40 }}
                />
              </Link>
            </RouterLink>

            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
              <MenuIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Box sx={{ display: "flex", flexDirection: "row", gap: 12 }}>
              <RouterLink to="/">
                <Link color="#ecebbd">
                  <img
                    src={Campfire}
                    alt="Logo"
                    style={{ height: 50, width: 50 }}
                  />
                </Link>
              </RouterLink>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", gap: 12 }}>
              <RouterLink color="#ecebbd" variant="h6" to="/products">
                <Link color="#ecebbd" variant="h6">
                  PRODUCTS
                </Link>
              </RouterLink>
              <RouterLink to="/contact">
                <Link color="#ecebbd" variant="h6">
                  CONTACT
                </Link>
              </RouterLink>
              <RouterLink to="/about">
                <Link color="#ecebbd" variant="h6">
                  ABOUT
                </Link>
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
                      <Badge
                        badgeContent={cartItems.length}
                        color="secondary"
                        showZero
                      >
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
