import { useState } from "react";
import {
  AppBar,
  withStyles,
  Avatar,
  Grid,
  Toolbar,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";
import PropTypes from "prop-types";
import profileImage from "../../../assets/Navigation/profileImage.png";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const sideNavBarWidth = 242;

// custom Styles
const styles = theme => {
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
};

class TopNavBar extends React.Component {
  render() {
    const { classes: styleClasses } = this.props;
    return (
      <AppBar className={styleClasses.appBar} elevation={0}>
        <Toolbar>
          <Grid
            container
            alignItems='center'
            spacing={0}
            justify='space-between'
          >
            <Grid container alignItems='center' justify='flex-start' xs={11}>
              {" "}
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={this.props.handleDrawerToggle}
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
  }
}
// export default TopNavBar;

TopNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNavBar);
