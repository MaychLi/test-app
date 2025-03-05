import {createTheme} from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#000"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#fff",
          color: "#000"
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        adornedStart: {
          input: {
            paddingLeft: "5px"
          }
        },
        root: {
          height: "40px",
          background: "#fff"
        }
      }
    }
  }
});
