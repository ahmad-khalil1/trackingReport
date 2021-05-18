import { makeStyles, TableRow, TableCell, Typography } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  headRowStyleRoot: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
  },
  cellRoot: { color: theme.palette.text.hint },
}));

const DataRow = props => {
  const classes = useStyles();
  const { date } = props;

  return (
    <>
      <TableRow classes={{ root: classes.headRowStyleRoot }}>
        <TableCell>
          <Typography color='textSecondary' variant='subtitle1'>
            {date}
          </Typography>
        </TableCell>
        {/* plain filler cells */}
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    </>
  );
};
export default DataRow;
