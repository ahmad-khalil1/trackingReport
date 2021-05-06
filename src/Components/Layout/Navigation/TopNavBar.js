import {
  AppBar,
  makeStyles,
  Avatar,
  Grid,
  Toolbar,
  Typography,
  Divider,
} from "@material-ui/core";
import profileImage from "../../../assets/Navigation/profileImage.png";

const sideNavBarWidth = 242;

// custom Styles
const useStyles = makeStyles({
  appBar: {
    width: `calc(100% - ${sideNavBarWidth}px)`,
    marginLeft: sideNavBarWidth,
  },
  avatarCircleOvarLay: {
    border: "4px solid #E8ECEF",
  },
});

const TopNavBar = () => {
  const styleClasses = useStyles();
  return (
    <AppBar className={styleClasses.appBar} elevation={0}>
      <Toolbar>
        <Grid container alignItems='center' justify='space-between'>
          <Typography> PLN Asset Management System</Typography>
          <Avatar
            classes={{ circle: styleClasses.avatarCircleOvarLay }}
            src={profileImage}
          />
        </Grid>
      </Toolbar>
      <Divider />
    </AppBar>
  );
};
export default TopNavBar;
