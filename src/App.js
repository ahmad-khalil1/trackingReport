import Layout from "./Components/Layout/Layout";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { Route, Switch, Redirect } from "react-router";
import FuelHistory from "./pages/reportPages/FuelHistory";
import NotFound from "./pages/NotFound";
const useStyles = makeStyles(theme => ({
  app: {
    // boxSizing: "border-box",
  },
  layout: {
    backgroundColor: theme.palette.background.default,
  },
}));
function App() {
  const styleClasses = useStyles();

  return (
    <>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route path={"/report/fuelHistory"}>
            <FuelHistory />
          </Route>
          <Route path={"/"} exact>
            <Redirect to='/report/fuelHistory' />
          </Route>
          <Route path={"*"} exact>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
