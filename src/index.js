import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import MainTheme from "./Themes/MainTheme";

ReactDOM.render(
  <Router>
    <ThemeProvider theme={MainTheme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
