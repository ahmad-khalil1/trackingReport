import { Avatar, Grid, Typography } from "@material-ui/core";

const VehiclePresention = props => {
  const { image, name, status } = props;
  return (
    <>
      <Grid container spacing={2} justify='flex-start'>
        <Grid item>
          <Avatar src={image} />
        </Grid>
        <Grid item>
          <Typography color='textSecondary'>[001]{name}</Typography>
          <Typography>{status}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default VehiclePresention;
