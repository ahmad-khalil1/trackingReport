import { Drawer, Box, Hidden, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import logoImage from "../../../../assets/Navigation/logoImage.png";
import SideNavList from "./SideNavList";
const sideNavBarWidth = 242;

// custom Styles
// const useStyles = makeStyles(theme => ({}));

const styles = theme => {
  return {
    drawer: {
      [theme.breakpoints.up("sm")]: { width: sideNavBarWidth, flexShrink: 0 },
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
  };
};

class SideNavBar extends React.Component {
  render() {
    const { classes: styleClasses } = this.props;
    // drawer content
    const drawer = (
      <>
        <Box className={styleClasses.toolbar}>
          <img className={styleClasses.logoImageStyle} src={logoImage} />
        </Box>
        <SideNavList />
      </>
    );

    return (
      <>
        {/* mobile Drawer hide above sm breakpoint */}
        <Hidden smUp implementation='js'>
          <Drawer
            // custom styles
            className={styleClasses.drawer}
            classes={{
              paper: styleClasses.drawerPaper,
              paperAnchorDockedLeft: styleClasses.dividerRight,
            }}
            // drawer open n' close handling
            open={this.props.isMobileOpen}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            // drawer type
            variant='temporary'
            anchor='left'
          >
            {drawer}
          </Drawer>
        </Hidden>
        {/* desktop Drawer hide below xs breakpoint */}
        <Hidden xsDown implementation='js'>
          <Drawer
            // custom styles
            className={styleClasses.drawer}
            classes={{
              paper: styleClasses.drawerPaper,
              paperAnchorDockedLeft: styleClasses.dividerRight,
            }}
            // drawer type
            variant='permanent'
            // variant='temporary'

            anchor='left'
          >
            {drawer}
          </Drawer>
        </Hidden>
      </>
    );
  }
}

// export default SideNavBar;

SideNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideNavBar);
