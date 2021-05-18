import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/index";

import App from "./App";
import MainTheme from "./Themes/MainTheme";

ReactDOM.render(
  <Router>
    <Provider store={Store}>
      <ThemeProvider theme={MainTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
