import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// A custom theme for this app
const MainTheme = createMuiTheme({
  palette: {
    primary: { main: "#FFFFFF" },
    background: {
      default: "#E5E5E5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#778CA2",
      secondary: "#252631",
    },
    divider: "#E8ECEF",
    action: {
      active: "#F8FAFB",
    },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, iphone5: 320 },
  },
});

export default MainTheme;
