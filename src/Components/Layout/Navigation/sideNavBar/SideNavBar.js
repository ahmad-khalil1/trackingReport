import { Drawer, makeStyles, Icon, Divider, Box } from "@material-ui/core";
import logoImage from "../../../../assets/Navigation/logoImage.png";
import SideNavList from "./SideNavList";
const sideNavBarWidth = 242;

// custom Styles
const useStyles = makeStyles(theme => ({
  drawer: {
    width: sideNavBarWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: sideNavBarWidth,
  },
  dividerRight: {
    borderRight: `2px solid ${theme.palette.divider}`,
  },
  toolbar: {
    // necessary for content to be below app bar
    minHeight: theme.mixins.toolbar.minHeight,
    textAlign: "center",
  },
  logoImageStyle: {
    height: 39,
    margin: " 13px auto ",
  },
}));

const SideNavBar = props => {
  const styleClasses = useStyles();

  return (
    <Drawer
      className={styleClasses.drawer}
      classes={{
        paper: styleClasses.drawerPaper,
        paperAnchorDockedLeft: styleClasses.dividerRight,
      }}
      variant='permanent'
      anchor='left'
    >
      <Box className={styleClasses.toolbar}>
        <img className={styleClasses.logoImageStyle} src={logoImage} />
      </Box>
      <SideNavList />
    </Drawer>
  );
};

export default SideNavBar;
