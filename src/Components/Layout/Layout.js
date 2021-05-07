import { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import SideNavBar from "./Navigation/sideNavBar/SideNavBar";
import TopNavBar from "./Navigation/TopNavBar";

// custom styling
const useStyle = makeStyles({
  root: {
    display: "flex",
  },
  main: { flexGrow: 1 },
});

const Layout = props => {
  const classes = useStyle();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = _ => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box className={classes.root}>
      <TopNavBar handleDrawerToggle={toggleDrawer} />
      <SideNavBar handleDrawerToggle={toggleDrawer} isMobileOpen={mobileOpen} />
      <main className={`${classes.main} ${props.className}`}>
        {props.children}
      </main>
    </Box>
  );
};

export default Layout;
