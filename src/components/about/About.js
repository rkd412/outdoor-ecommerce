import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Dusk from "../../assests/dusk.jpg";
import Headquarters from "../../assests/headquarters.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/robert-davis-b72893217/"
        rel="noopener"
        target="_blank"
      >
        RKD412
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  components: {
    Typography: {
      styleOverrides: {
        root: {
          color: "red",
        },
      },
    },
  },
});

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundImage: "url(" + Dusk + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",

          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            pt: "10vh",
            height: "100vh",
            
          },
        }}
      >
     
          <Paper   sx={{
            width: "100%",
            height: "40%",
            margin: "5vw",
            [theme.breakpoints.down("sm")]: {
              width: "90%",
              height: "30%",
              margin: "5vw",
            
            },
          }}>
            <img
              src={Headquarters}
              alt="Headquarters"
              height="100%"
              width="100%"
            />
          </Paper>
      

        <Box
          sx={{
            display: "flex",
            margin: "5vw",
            fontSize: "2",
          }}
        >
          <Typography variant="h6" align="justify" color="white" paragraph>
            Founded circa 1988 and headquartered in Kiefern, WA - Our love of
            the wilderness and planet earth is key to our success. We hope you
            enjoy the top quality products you find here and put them to good
            use. See you outside!
          </Typography>
        </Box>
      </Box>

      {/* Footer */}
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
      {/* End footer */}
    </ThemeProvider>
  );
}
