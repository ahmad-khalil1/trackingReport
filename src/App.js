import Layout from "./Components/Layout/Layout";
import { CssBaseline, makeStyles } from "@material-ui/core";

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
    <div className={styleClasses.app}>
      <CssBaseline />
      <Layout />
    </div>
  );
}

export default App;
