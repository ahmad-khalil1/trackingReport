import { Grid, Typography } from "@material-ui/core";

const CostPresentation = props => {
  const { cost } = props;
  return (
    <>
      <Grid container direction='column'>
        <Typography>Rp{625000}</Typography>
        <Typography variant='subtitle2'>Rp{625.0 / 10}/itr</Typography>
      </Grid>
    </>
  );
};
export default CostPresentation;
