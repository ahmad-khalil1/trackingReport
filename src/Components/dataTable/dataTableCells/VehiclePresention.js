import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import { vehicleAvailablity } from "../FuelHistoryDataTable";
const useStyle = makeStyles(theme => ({
  activeColor: { color: "#21A11E" },
  inShopColor: { color: "#C1931B" },
  outOfServiceColor: { color: "#C11B1B" },
}));

const VehiclePresention = props => {
  const { image, name, status } = props;
  const classes = useStyle();
  let statusTypography;
  switch (status) {
    case vehicleAvailablity.active:
      statusTypography = (
        <Typography className={classes.activeColor}>Active</Typography>
      );
      break;
    case vehicleAvailablity.inShop:
      statusTypography = (
        <Typography className={classes.inShopColor}>In shop</Typography>
      );
      break;
    case vehicleAvailablity.outOfService:
      statusTypography = (
        <Typography className={classes.outOfServiceColor}>
          Out of service
        </Typography>
      );
      break;
    default:
      statusTypography = <Typography>Not Defined</Typography>;
      break;
  }
  return (
    <>
      <Grid container spacing={2} justify='flex-start'>
        <Grid item>
          <Avatar src={image} />
        </Grid>
        <Grid item>
          <Typography color='textSecondary'>[001]{name}</Typography>
          {statusTypography}
        </Grid>
      </Grid>
    </>
  );
};
export default VehiclePresention;
