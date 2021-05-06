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
});

export default MainTheme;
