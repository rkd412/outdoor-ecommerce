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

const PRODUCTS = [
  {
    id: 0,
    image: { Boots },
    name: "Boots",
    description: "Reliable hiking boots to get you there and back again.",
    price: 180,
  },
  {
    id: 1,
    image: { Tent },
    name: "Tent",
    description: "All season tent to provide you with shelter and safety",
    price: 325,
  },
  {
    id: 2,
    image: { Backpack },
    name: "Backpack",
    description: "Backpack to carry all your outdoor goods on the trail.",
    price: 240,
  },
  {
    id: 3,
    image: { SleepingBag },
    name: "Sleping Bag",
    description: "Warm sleeping bag to keep you well rested.",
    price: 220,
  },
  {
    id: 4,
    image: { Pan },
    name: "Frying Pan",
    description: "Perfect pan to fry your morning breakfast.",
    price: 45,
  },
  {
    id: 5,
    image: { Flashlight },
    name: "Flashlight",
    description: "Reliable flashlight to help you always find your way home.",
    price: 30,
  },
];

const theme = createTheme();

export default function ProductsPage({ cartItems, setCartItems }) {
  const addToCartHandler = (e) => {
    setCartItems(PRODUCTS[e.target.id]);
    console.log({ cartItems });
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
                  image={Boots}
                  alt="Boots"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Boots
                  </Typography>
                  <Typography gutterBottom>
                    Reliable hiking boots to get you there and back again.
                  </Typography>
                  <Typography variant="h6">$180</Typography>
                </CardContent>
                <CardActions>
                  <Rating name="half-rating" defaultValue={5} precision={0.5} />
                  <Button id="0" size="small" onClick={addToCartHandler}>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>

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
                  }}
                  image={Tent}
                  alt="Tent"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Tent
                  </Typography>
                  <Typography gutterBottom>
                    All season tent to provide you with shelter and safety.
                  </Typography>
                  <Typography variant="h6">$325</Typography>
                </CardContent>
                <CardActions>
                  <Rating name="half-rating" defaultValue={5} precision={0.5} />
                  <Button id="1" size="small" onClick={addToCartHandler}>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>

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
                    maxHeight: 426,
                  }}
                  image={Backpack}
                  alt="Backpack"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Backpack
                  </Typography>
                  <Typography gutterBottom>
                    Backpack to carry all your outdoor goods on the trail.
                  </Typography>
                  <Typography variant="h6">$240</Typography>
                </CardContent>
                <CardActions>
                  <Rating name="half-rating" defaultValue={5} precision={0.5} />
                  <Button id="2" size="small" onClick={addToCartHandler}>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>

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
                  }}
                  image={SleepingBag}
                  alt="Sleeping Bag"
                  height="185"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Sleeping Bag
                  </Typography>
                  <Typography gutterBottom>
                    Warm sleeping bag to keep you well rested.
                  </Typography>
                  <Typography variant="h6">$220</Typography>
                </CardContent>
                <CardActions>
                  <Rating name="half-rating" defaultValue={5} precision={0.5} />
                  <Button id="3" size="small" onClick={addToCartHandler}>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>

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
                  }}
                  image={Pan}
                  alt="Pan"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Frying Pan
                  </Typography>
                  <Typography gutterBottom>
                    Perfect pan to fry your morning breakfast.
                  </Typography>
                  <Typography variant="h6">$45</Typography>
                </CardContent>
                <CardActions>
                  <Rating name="half-rating" defaultValue={5} precision={0.5} />
                  <Button id="4" size="small" onClick={addToCartHandler}>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>

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
                  }}
                  image={Flashlight}
                  alt="Flashlight"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Flashlight
                  </Typography>
                  <Typography gutterBottom>
                    Reliable flashlight to help you always find your way home.
                  </Typography>
                  <Typography variant="h6">$30</Typography>
                </CardContent>
                <CardActions>
                  <Rating name="half-rating" defaultValue={5} precision={0.5} />
                  <Button id="5" size="small" onClick={addToCartHandler}>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
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
