import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
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

export default function ProductsPage({ cartItems, setCartItems }) {
  const addToCartHandler = (e) => {
    setCartItems((oldArray) => [...oldArray, e.currentTarget.value].sort());
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              mt="100px"
              gutterBottom
            >
              Please check out our outdoor products below! We have a wide
              variety to meet all of your outdoor needs.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={8}>
            {PRODUCTS.map((x) => (
              <Grid item xs={12} sm={6} md={4}>
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
                      maxHeight: 640,
                    }}
                    image={x.pic}
                    alt={x.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {x.name}
                    </Typography>
                    <Typography gutterBottom>{x.description}</Typography>
                    <Typography variant="h6">${x.price}</Typography>
                  </CardContent>
                  <CardActions>
                    <Rating
                      name="half-rating"
                      defaultValue={5}
                      precision={0.5}
                    />
                    <Button
                      value={x.key}
                      size="small"
                      onClick={addToCartHandler}
                    >
                      Add to cart
                    </Button>
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
