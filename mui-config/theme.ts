import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#6E4EB1",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#323232",
    },
  },
});

export default theme;
