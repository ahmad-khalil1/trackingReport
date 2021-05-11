import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// A custom theme for this app
const MainTheme = createMuiTheme({
  palette: {
    primary: { main: "#FFFFFF" },
    secondary: { main: "#252631" },
    background: {
      default: "#F8FAFB",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#778CA2",
      secondary: "#252631",
      hint: "#98A9BC",
    },
    divider: "#E8ECEF",
    action: {
      active: "#F8FAFB",
    },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, iphone5: 320 },
  },
  overrides: {
    MuiTableCell: {
      root: {
        borderBottom: "1px solid #F2F4F6",
        // borderColor: "#F2F4F6",
      },
    },
  },
});

export default MainTheme;
