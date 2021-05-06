import { List, makeStyles, Paper } from "@material-ui/core";
import NavLinkListItem from "./NavLinkListItem";
import VehiclesIcon from "../../../../assets/Navigation/icons/VehiclesIcon";
import ReportIcon from "../../../../assets/Navigation/icons/ReportIcon";
import PeopleIcon from "../../../../assets/Navigation/icons/PeopleIcon";
const useStyles = makeStyles(theme => ({
  navListItem: {
    // marginLeft: "3px",
    // padding: "10px 10px 10px 30px ",
  },
}));

const SideNavList = props => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <List>
        <NavLinkListItem
          to='/vehicles'
          title='VEHICLES'
          icon={<VehiclesIcon />}
          className={classes.navListItem}
        />
        <NavLinkListItem
          to='/report'
          title='REPORT'
          icon={<ReportIcon />}
          className={classes.navListItem}
        />
        <NavLinkListItem
          to='/people'
          title='PEOPLE'
          icon={<PeopleIcon />}
          className={classes.navListItem}
        />
      </List>
    </Paper>
  );
};
export default SideNavList;
