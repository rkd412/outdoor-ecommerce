import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Mountains from "../../assests/mountains.jpg";

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

export default function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundImage: "url(" + Mountains + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          align: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Typography
            variant="h3"
            align="center"
            color="white"
            margin="0vh 5vw 5vh 5vw"
          >
            A place to find all your wilderness needs so you can get
            back outside and explore.
          </Typography>
        </Box>
      </Box>

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
