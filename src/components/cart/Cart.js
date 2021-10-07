import * as React from "react";

import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import RemoveIcon from "@mui/icons-material/Remove";
import Tooltip from "@mui/material/Tooltip";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Backpack from "../../assests/product-backpack.jpg";
import Boots from "../../assests/product-boots.jpg";
import Flashlight from "../../assests/product-flashlight.jpg";
import Pan from "../../assests/product-pan.jpg";
import SleepingBag from "../../assests/product-sleeping-bag.jpg";
import Tent from "../../assests/product-tent.jpg";

const PRODUCTS = [
  {
    key: 0,
    pic: Boots,
    name: "Boots",
    description: "Reliable hiking boots to get you there and back again.",
    price: 180,
  },
  {
    key: 1,
    pic: Tent,
    name: "Tent",
    description: "All season tent to provide you with shelter and safety",
    price: 325,
  },
  {
    key: 2,
    pic: Backpack,
    name: "Backpack",
    description: "Backpack to carry all your outdoor goods on the trail.",
    price: 240,
  },
  {
    key: 3,
    pic: SleepingBag,
    name: "Sleeping Bag",
    description: "Warm sleeping bag to keep you well rested.",
    price: 220,
  },
  {
    key: 4,
    pic: Pan,
    name: "Frying Pan",
    description: "Perfect pan to fry your morning breakfast.",
    price: 45,
  },
  {
    key: 5,
    pic: Flashlight,
    name: "Flashlight",
    description: "Reliable flashlight to help you always find your way home.",
    price: 30,
  },
];

const onlyUnique = (value, index, self) => self.indexOf(value) === index;

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/robert-davis-b72893217/"
        target="_blank"
      >
        RKD412
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Cart({ cartItems, setCartItems }) {
  const increaseItemHandler = (e) => {
    setCartItems((oldArray) => [...oldArray, e.currentTarget.value].sort());
  };

  const decreaseItemHandler = (e) => {
    console.log(cartItems);
  };

  /*
  
  Why the fuck won't this work???

  const decreaseItemHandler = (e) => {
    console.log(
      cartItems.splice(
        cartItems.findIndex((a) => a === e.currentTarget.value),
        1
      )
    );
  };
  
  */

  const deleteFromCartHandler = (e) => {
    setCartItems(
      cartItems.filter((element) => ![e.currentTarget.value].includes(element))
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8, mt: "100px" }} maxWidth="md">
          <Grid container spacing={8} flexDirection="column">
            {cartItems.filter(onlyUnique).map((x) => (
              <Grid item xs={12} sm={6} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: "10%",
                    }}
                    image={PRODUCTS[x].pic}
                    alt={x.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {PRODUCTS[x].name}
                    </Typography>
                    <Typography>{PRODUCTS[x].description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Tooltip title="More" arrow>
                      <Button
                        value={x}
                        size="small"
                        onClick={increaseItemHandler}
                      >
                        <AddIcon />
                      </Button>
                    </Tooltip>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "1em",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {cartItems.filter((i) => i === x).length}
                      </Typography>
                    </Box>
                    <Tooltip title="Less" arrow>
                      <Button
                        value={x}
                        size="small"
                        onClick={decreaseItemHandler}
                      >
                        <RemoveIcon />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Delete" arrow>
                      <Button
                        value={x}
                        size="small"
                        onClick={deleteFromCartHandler}
                      >
                        <DeleteIcon />
                      </Button>
                    </Tooltip>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Built with MUI. Thanks for Looking!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
