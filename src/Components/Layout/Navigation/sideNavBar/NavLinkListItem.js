// import { List } from "@material-ui/core"
import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core";

const styles = theme => {
  return {
    iconStyle: {
      color: "inherit",
      marginRight: "-15px",
      textAlign: "center",
    },
    listItems: {
      padding: "10px 10px 10px 30px ",
    },
    navLinkActiveClass: {
      backgroundColor: theme.palette.action.active,
      borderLeft: "3px solid #4D7CFE",
      padding: "10px 10px 10px 27px ",
      "& svg": { color: "#4D7CFE" },
      "& span": { fontWeight: "bold" },
    },
  };
};

class NavLinkListItem extends React.Component {
  render() {
    const { icon, title, to, activeClassName, className, classes } = this.props;
    const renderNavLink = React.memo(
      React.forwardRef((itemProps, ref) => (
        <NavLink
          activeClassName={classes.navLinkActiveClass}
          to={to}
          ref={ref}
          {...itemProps}
        />
      ))
    );
    return (
      <li>
        <ListItem
          className={`${className} ${classes.listItems}`}
          alignItems='flex-start'
          button
          component={renderNavLink}
        >
          {icon ? (
            <ListItemIcon className={classes.iconStyle}>{icon}</ListItemIcon>
          ) : null}
          <ListItemText primary={title} />
        </ListItem>
      </li>
    );
  }
}

NavLinkListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavLinkListItem);
