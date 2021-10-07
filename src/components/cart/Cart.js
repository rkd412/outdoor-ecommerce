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
    id: 1,
    image: { Boots },
    name: "Boots",
    description: "Reliable hiking boots to get you there and back again.",
    price: 180,
  },
  {
    id: 2,
    image: { Tent },
    name: "Tent",
    description: "All season tent to provide you with shelter and safety",
    price: 325,
  },
  {
    id: 3,
    image: { Backpack },
    name: "Backpack",
    description: "Backpack to carry all your outdoor goods on the trail.",
    price: 240,
  },
  {
    id: 4,
    image: { SleepingBag },
    name: "Sleping Bag",
    description: "Warm sleeping bag to keep you well rested.",
    price: 220,
  },
  {
    id: 5,
    image: { Pan },
    name: "Frying Pan",
    description: "Perfect pan to fry your morning breakfast.",
    price: 45,
  },
  {
    id: 6,
    image: { Flashlight },
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

export default function Cart({ cartItems, setCartItems }) {
  const increaseItemHandler = () => {
    console.log("Increased Item!");
    setCartItems(cartItems + 1);
    console.log({ cartItems });
  };

  const decreaseItemHandler = () => {
    console.log("Decreased item!");
    setCartItems(cartItems - 1);
    console.log({ cartItems });
  };

  const deleteFromCartHandler = () => {
    console.log("Deleted!");
    setCartItems(cartItems - 1);
    console.log({ cartItems });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8, mt: "100px" }} maxWidth="md">
          <Grid container spacing={4} flexDirection="column">





            <Grid item key={1} xs={12} sm={6} md={4}>
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
                  image={Boots}
                  alt="Boots"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Tooltip title="More" arrow>
                    <Button size="small" onClick={increaseItemHandler}>
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
                      {1}
                    </Typography>
                  </Box>
                  <Tooltip title="Less" arrow>
                    <Button size="small" onClick={decreaseItemHandler}>
                      <RemoveIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete" arrow>
                    <Button size="small" onClick={deleteFromCartHandler}>
                      <DeleteIcon />
                    </Button>
                  </Tooltip>
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
