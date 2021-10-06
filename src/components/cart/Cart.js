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
    console.log("Deleted from cart!");
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
