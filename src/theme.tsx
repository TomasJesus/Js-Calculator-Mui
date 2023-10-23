import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#4B33CC" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
  },
});

export default theme;
