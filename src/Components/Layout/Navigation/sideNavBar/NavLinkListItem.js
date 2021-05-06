// import { List } from "@material-ui/core"
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles(theme => {
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
});

const NavLinkListItem = props => {
  const classes = useStyle();
  const { icon, title, to, activeClassName, className } = props;
  const renderNavLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <NavLink
          activeClassName={classes.navLinkActiveClass}
          to={to}
          ref={ref}
          {...itemProps}
        />
      )),
    [to]
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
};
export default NavLinkListItem;
