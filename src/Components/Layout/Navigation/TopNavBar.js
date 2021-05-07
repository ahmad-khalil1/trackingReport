import { useState } from "react";
import {
  AppBar,
  makeStyles,
  Avatar,
  Grid,
  Toolbar,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";
import profileImage from "../../../assets/Navigation/profileImage.png";
import MenuIcon from "@material-ui/icons/Menu";

const sideNavBarWidth = 242;

// custom Styles
const useStyles = makeStyles(theme => {
  return {
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${sideNavBarWidth}px)`,
        marginLeft: sideNavBarWidth,
      },
    },
    avatarCircleOvarLay: {
      border: "4px solid #E8ECEF",
    },
    menuButton: {
      // marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    typography: {
      [theme.breakpoints.down("iphone5")]: {
        fontSize: "0.9rem",
      },
    },
  };
});

const TopNavBar = props => {
  const styleClasses = useStyles();

  return (
    <AppBar className={styleClasses.appBar} elevation={0}>
      <Toolbar>
        <Grid container alignItems='center' spacing={0} justify='space-between'>
          <Grid container alignItems='center' justify='flex-start' xs={11}>
            {" "}
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={props.handleDrawerToggle}
              className={styleClasses.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={styleClasses.typography}>
              PLN Asset Management System
            </Typography>
          </Grid>
          <Grid item xs={1} md='auto'>
            <Avatar
              classes={{ circle: styleClasses.avatarCircleOvarLay }}
              src={profileImage}
            />
          </Grid>
        </Grid>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};
export default TopNavBar;
